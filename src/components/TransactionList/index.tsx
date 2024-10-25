import Image from "next/image";
import deleteIcon from "../../assets/icon-trash.svg";
import styles from "./transaction-list.module.scss";
import { formatMoney } from "@/utils/mask";
import { toast } from "sonner";
import { Transaction } from "@/dtos/transaction";
interface ListProps {
  transactions: Transaction[];
  setTransactionsList: (transaction: Transaction[]) => void;
}

export function TransactionList({
  transactions,
  setTransactionsList,
}: ListProps) {
  const onDelete = (id: number) => {
    const newArray = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactionsList(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
    toast.success("Transação deletada com sucesso.");
  };

  return (
    <div className={styles.listContainer}>
      {transactions.length > 0 ? (
        <>
          <div className={styles.listHeader}>
            <span>Descrição</span>
            <span>Valor</span>
            <span>Categoria</span>
            <span>Data</span>
            <span></span>
          </div>

          <div className={styles.listItems}>
            {transactions.map((transaction, index) => (
              <div key={index} className={styles.listItem}>
                <span className={styles.itemContent}>{transaction.name}</span>
                <span
                  className={
                    transaction.type === "outcome"
                      ? styles.negative
                      : styles.positive
                  }
                >
                  R$ {formatMoney(transaction.price).toString()}
                </span>
                <span className={styles.itemContent}>
                  {transaction.category}
                </span>
                <span className={styles.itemContent}>{transaction.date}</span>
                <button
                  className={styles["delete-button"]}
                  onClick={() => onDelete(transaction.id)}
                >
                  <Image
                    src={deleteIcon}
                    alt="Deletar"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.containerNotFound}>
          <span className={styles.notFoundText}>
            Nenhum registro encontrado.
          </span>
        </div>
      )}
    </div>
  );
}
