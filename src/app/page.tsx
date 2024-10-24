import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import styles from "./page.module.scss";
import { TransactionList } from "@/components/TransactionList";

interface Transaction {
  description: string;
  value: string;
  type: "input" | "output";
  category: string;
  date: string;
}

export default function Home() {
  const cardTypes = [
    { type: "input", value: "1.529.289,52" },
    { type: "output", value: "1.529.289,52" },
    { type: "total", value: "50,00" },
  ] as const;
  const transactions: Transaction[] = [
    {
      description: "Curso de Next.js",
      value: "R$ 899,00",
      type: "output",
      category: "Educação",
      date: "12/02/2022 às 13h24",
    },
    {
      description: "Salário",
      value: "R$ 7.350,00",
      type: "input",
      category: "Receita Fixa",
      date: "12/02/2022 às 13h24",
    },
    {
      description: "Aluguel",
      value: "R$ 1.200,00",
      type: "output",
      category: "Moradia",
      date: "05/02/2022 às 10h15",
    },
    {
      description: "Consultoria",
      value: "R$ 2.500,00",
      type: "input",
      category: "Trabalho",
      date: "20/02/2022 às 11h00",
    },
  ] as const;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.containerCards}>
          {cardTypes?.map((card, index) => (
            <Card key={index} type={card.type} value={card.value} />
          ))}
        </div>
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}
