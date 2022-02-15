import { FormProvider } from "./contexts/FormContext";
import { AppRoutes } from "./router";

export const App = () => {
  return(
    <FormProvider>
      <AppRoutes />
    </FormProvider>
  )
}