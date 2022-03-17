import "./App.css";

import { Route } from "react-router-dom";
import Expenses from "./routes/Expenses";

import TaskTwo from "./routes/TaskTwo";
import Header from "./routes/Header";
import MainPage from "./routes/MainPage";
import WordCloud from "react-d3-cloud";
import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen ">
      <div>
        <Header />
      </div>

      <Route exact path="/" render={() => <MainPage />} />
      <Route exact path="/expenses" render={() => <Expenses />} />
      <Route exact path="/invoices" render={() => <TaskTwo />} />
      <Route exact path="/dashboard" render={() => <Dashboard />} />
    </div>
  );
}
const rootElement = document.getElementById("root");

export default App;
