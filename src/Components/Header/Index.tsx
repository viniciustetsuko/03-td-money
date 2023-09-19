import { HeaderContainer, HeaderContent, NewTransactionButton } from "./Styles";
import LogoImg from "../../Assets/Logo-Dt.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal/Index";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt='' />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Tranação</NewTransactionButton>
          </Dialog.Trigger>

         <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
