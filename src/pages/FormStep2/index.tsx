import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SelectionOption } from '../../components/SelectOption';
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from '../../contexts/FormContext';
import { Container } from "./styles";


export const FormStep2 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(() => {
    if(state.name === "") {
      navigate("/")
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      });
    }
  },[]);

  const handleNextStep = () => {
    if(state.name !== "") {
      navigate("/step3")
    } else {
      alert("Preencha os Dados.!")
    }
  }

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return(
   <Theme>
      <Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a melhor opção que condiz com seu estado atual, profissionalmente.</p>
        
        <hr/>

        <SelectionOption 
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() =>setLevel(0)}
        />

        <SelectionOption 
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() =>setLevel(1)}
        />

        <Link to="/" className="backButton">Voltar</Link>
        <button type="button" onClick={handleNextStep}>Próximo</button>
      </Container>
   </Theme>
  );
}