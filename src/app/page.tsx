"use client";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { TransactionList } from "@/components/TransactionList";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { Transaction } from "@/dtos/transaction";

export default function Home() {
  const [transactionsList, setTransactionsList] = useState<Transaction[]>([]);
  const [income, setIncome] = useState<string>("0");
  const [expense, setExpense] = useState<string>("0");
  const [total, setTotal] = useState<string>("0");

  useEffect(() => {
    const data = localStorage.getItem("transactions");
    if (data) {
      setTransactionsList(JSON.parse(data));
    }
  }, []);

  const cardTypes = [
    { type: "input", value: income },
    { type: "output", value: expense },
    { type: "total", value: total },
  ] as const;

  useEffect(() => {
    const amountIncome = transactionsList
      .filter((item) => item.type === "income")
      .map((transaction) => Number(transaction.price));

    const amountExpense = transactionsList
      .filter((item) => item.type === "outcome")
      .map((transaction) => Number(transaction.price));

    const totalIncome = amountIncome
      .reduce((acc, cur) => acc + cur, 0)
      .toFixed(2);
    const totalExpense = amountExpense
      .reduce((acc, cur) => acc + cur, 0)
      .toFixed(2);

    const total = (Number(totalIncome) - Number(totalExpense)).toFixed(2);
    setIncome(totalIncome);
    setExpense(totalExpense);
    setTotal(total);
  }, [transactionsList]);

  const handleAdd = (transaction: Transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <div className={styles.container}>
      <Header handleAdd={handleAdd} />
      <div className={styles.content}>
        <div className={styles.containerCards}>
          {cardTypes?.map((card, index) => (
            <Card key={index} type={card.type} value={card.value} />
          ))}
        </div>
        <TransactionList
          transactions={transactionsList}
          setTransactionsList={setTransactionsList}
        />
      </div>
    </div>
  );
}
