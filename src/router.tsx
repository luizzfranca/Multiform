import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { FormStep } from "./pages/FormStep1";
import { FormStep2 } from "./pages/FormStep2";
import { FormStep3 } from "./pages/FormStep3";

export const AppRoutes = () => {
  return(
    <Router>
      <Routes>
        <Route path="/"  element={<FormStep />}/>
        <Route path="/step2" element={<FormStep2 />}/>
        <Route path="/step3" element={<FormStep3 />}/>
      </Routes>
    </Router>
  );
}