import Image from "next/image";
import styles from "./transaction-list.module.scss"; // Import do SCSS
import deleteIcon from "../../assets/icon-trash.svg"; // Ícone de deletar

interface Transaction {
  description: string;
  value: string;
  type: "input" | "output";
  category: string;
  date: string;
}

interface ListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: ListProps) {
  return (
    <div className={styles.listContainer}>
      {/* Cabeçalhos */}
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
            <span>{transaction.description}</span>
            <span
              className={
                transaction.type === 'output'
                  ? styles.negative
                  : styles.positive
              }
            >
              {transaction.value}
            </span>
            <span>{transaction.category}</span>
            <span>{transaction.date}</span>
            <button className={styles["delete-button"]}>
              <Image src={deleteIcon} alt="Deletar" width={20} height={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
