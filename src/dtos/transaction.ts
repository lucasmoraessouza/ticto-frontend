export interface Transaction {
  id: number;
  name: string;
  price: string;
  type: "income" | "outcome";
  category: string;
  date: string;
}