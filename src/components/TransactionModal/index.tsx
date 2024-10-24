// components/TransactionModal.tsx
import { useState } from "react";
import styles from "./transaction-modal.module.scss";
import Image from "next/image";
import {} from "feather-icons";
import iconClose from "../../assets/icon-close.svg";
import incomeIcon from "../../assets/icon-circle-up.svg";
import outcomeIcon from "../../assets/icon-circle-down.svg";

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TransactionModal({ isOpen, onClose }: TransactionModalProps) {
  const [transactionType, setTransactionType] = useState<
    "income" | "outcome" | null
  >(null);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <Image src={iconClose} alt="close" width={25} height={25} />
        </button>
        <div className={styles.content}>
          <span className={styles.title}>Cadastrar Transação</span>
          <input className={styles.input} placeholder="Nome" />
          <input className={styles.input} placeholder="Preço" />
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
          <input className={styles.input} placeholder="Categoria" />

          <button className={styles.submitButton}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
}
