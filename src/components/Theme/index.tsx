import { ReactNode } from "react";
import { useForm } from "../../contexts/FormContext";
import { Header } from "../Header";
import { SidebarItem } from "../SidebarItem";
import { Area, Container, Page, Sidebar, Steps } from "./styles";


type Props = {
  children: ReactNode;
}

export const Theme = ({ children } : Props) => {

  const { state } = useForm();

  return(
    <Container>
      <Area>
        <Header/>

        <Steps>
          <Sidebar>
            
          <SidebarItem
            title="Pessoal"
            description="Se Identifique"
            icon="profile"
            path="/"
            active={state.currentStep === 1}
          />

          <SidebarItem
            title="Profissional"
            description="Seu nível"
            icon="book"
            path="/step2"
            active={state.currentStep === 2}
          />

          <SidebarItem
            title="Contatos"
            description="Como te achar"
            icon="mail"
            path="/step3"
            active={state.currentStep === 3}
          />

          </Sidebar>
          <Page>
            {children}
          </Page>
        </Steps>
      </Area>
    </Container>
  );
}