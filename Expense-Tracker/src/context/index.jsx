import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

  const [formData, setFormData] = useState({
    type: "expense",
    amount: 0,
    desscription: ''
})

  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);




  return <GlobalContext.Provider value={{
    formData,
    setFormData,
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    value,
    setValue,
    allTransactions,
    setAllTransactions,
    handleFormSubmit,
  }}>{children}</GlobalContext.Provider>;
}
