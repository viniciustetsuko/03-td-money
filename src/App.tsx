import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Styles/Themes/default";
import { GlobalStyle } from "./Styles/global";
import { Transactions } from "./Pages/Transactions/Index";
import { TransactionsProvider } from "./Contexts/TransactionsContext";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
