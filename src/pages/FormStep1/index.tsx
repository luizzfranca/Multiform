import { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from '../../contexts/FormContext';
import { Container } from "./styles";


export const FormStep = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  },[]);

  const handleNextStep = () => {
    if(state.name !== "") {
      navigate("/step2")
    } else {
      alert("Preencha os Dados.!")
    }
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  return(
   <Theme>
      <Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>
        
        <hr/>

        <label>
          Seu nome completo
          <input 
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button type="button" onClick={handleNextStep}>Próximo</button>
      </Container>
   </Theme>
  );
}