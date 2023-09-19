import { SammuryCard, SummaryContainer } from "./Styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { priceFormatter } from "../../../utils/formatter";
import { useSumarry } from "../../../hooks/useSummary";

export function Summary() {
 
  const summary = useSumarry();

  return (
    <SummaryContainer>
      <SammuryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00b37e' />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SammuryCard>
      <SammuryCard>
        <header>
          <span>Saída</span>
          <ArrowCircleDown size={32} color='#f75a68' />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SammuryCard>
      <SammuryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color='#fff' />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SammuryCard>
    </SummaryContainer>
  );
}
