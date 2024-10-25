import { useState } from "react";
import styles from "./transaction-modal.module.scss";
import Image from "next/image";
import {} from "feather-icons";
import iconClose from "../../assets/icon-close.svg";
import incomeIcon from "../../assets/icon-circle-up.svg";
import outcomeIcon from "../../assets/icon-circle-down.svg";
import { format } from "date-fns";
import { toast } from "sonner";

interface TransactionModalProps {
  isOpen: boolean;
  handleAdd: any;
  onClose: () => void;
}

export function TransactionModal({
  handleAdd,
  isOpen,
  onClose,
}: TransactionModalProps) {
  const generateID = () => Math.round(Math.random() * 1000);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const date = format(new Date(), "dd/MM/yyyy HH:mm:ss");
  const [transactionType, setTransactionType] = useState<
    "income" | "outcome" | null
  >("income");

  function handleCreate() {
    if (!name || !price || !category) {
      return toast.error(
        "Preencha todos os campos para cadastrar uma nova transação."
      );
    }
    const newTransaction = {
      id: generateID(),
      name,
      price,
      category,
      date,
      type: transactionType,
    };
    handleAdd(newTransaction);
    toast.success("Transação cadastrada com sucesso.");
    onClose();
    handleClear();
  }

  function handleClear() {
    setName("");
    setPrice(0);
    setCategory("");
    setTransactionType(null);
  }

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <Image src={iconClose} alt="close" width={25} height={25} />
        </button>
        <div className={styles.content}>
          <span className={styles.title}>Cadastrar Transação</span>
          <input
            className={styles.input}
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={styles.input}
            placeholder="Preço"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <div className={styles.transactionTypeContainer}>
            <button
              className={`${styles.typeButton} ${
                transactionType === "income" && styles.active
              }`}
              onClick={() => setTransactionType("income")}
            >
              <Image
                src={incomeIcon}
                alt="Icone de entrada"
                width={27}
                height={27}
              />
              Entrada
            </button>
            <button
              className={`${styles.typeButton} ${
                transactionType === "outcome" && styles.negative
              }`}
              onClick={() => setTransactionType("outcome")}
            >
              <Image
                src={outcomeIcon}
                alt="Icone de saída"
                width={27}
                height={27}
              />
              Saída
            </button>
          </div>
          <input
            className={styles.input}
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <button className={styles.submitButton} onClick={handleCreate}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}
