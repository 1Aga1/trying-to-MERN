import {BrowserRouter, useRoutes} from "react-router-dom"
import Router from "./routes/routes";

function App() {
    return (
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
    );
  }

export default App;
