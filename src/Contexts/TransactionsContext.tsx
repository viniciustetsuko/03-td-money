import {  useEffect, useState, useCallback } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface Transactions {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface createTransactionsInputs {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionsContextPropsType {
  transactions: Transactions[];
  FetchTtansaction: (query?: string) => Promise<void>;
  createTransactions: (data: createTransactionsInputs) => Promise<void>;
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext(
  {} as TransactionsContextPropsType
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  const FetchTtansaction = useCallback(async (query?: string) => {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    setTransactions(response.data);
  }, []);

  const createTransactions = useCallback(
    async (data: createTransactionsInputs) => {
      const { description, price, category, type } = data;

      const response = await api.post("/transactions", {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      });

      setTransactions((state) => [response.data, ...state]);
    },
    []
  );

  useEffect(() => {
    FetchTtansaction();
  }, [FetchTtansaction]);

  return (
    <TransactionsContext.Provider
      value={{ transactions, FetchTtansaction, createTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
