import { ChangeEvent, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from '../../contexts/FormContext';
import { Container } from "./styles";


export const FormStep3 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(() => {
    if(state.name === "") {
      navigate("/")
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
  },[]);

  const handleNextStep = () => {
   if(state.email !== "" && state.github !== "") {
    console.log(state);
   } else {
     alert("Por Favor, preencha os dados!")
   }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }

  return(
   <Theme>
      <Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos.</p>
        
        <hr/>

        <label>
          Qual seu email?
          <input 
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu Github?
          <input 
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="backButton">Voltar</Link>
        <button type="button" onClick={handleNextStep}>Finalizar Cadastro</button>
      </Container>
   </Theme>
  );
}