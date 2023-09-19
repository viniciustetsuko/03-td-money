import { useContextSelector } from "use-context-selector";
import { Header } from "../../Components/Header/Index";
import { Summary } from "../../Components/Header/Summary/Index";
import {
  PriceHigthLight,
  TransactionContainer,
  TransictionTable,
} from "./Styles";
import { SearchForm } from "./components/SearchForm/Index";
import { TransactionsContext } from "../../Contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransictionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width='50%'>{transaction.description}</td>
                  <td>
                    <PriceHigthLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHigthLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </TransictionTable>
      </TransactionContainer>
    </div>
  );
}
