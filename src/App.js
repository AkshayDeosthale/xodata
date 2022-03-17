import "./App.css";

import { Route } from "react-router-dom";
import TaskOne from "./routes/TaskOne";

import TaskTwo from "./routes/TaskTwo";
import Header from "./routes/Header";
import MainPage from "./routes/MainPage";
import WordCloud from "react-d3-cloud";
import Dashboard from "./routes/Dashboard";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  return (
    <div className="flex flex-col justify-center items-center w-screen ">
      <div>
        <Header />
      </div>

      <Route exact path="/" render={() => <MainPage />} />
      <Route exact path="/taskone" render={() => <TaskOne />} />
      <Route exact path="/tasktwo" render={() => <TaskTwo />} />
      <Route
        exact
        path="/dashboard"
        render={() => <Dashboard history={history} />}
      />
    </div>
  );
}
const rootElement = document.getElementById("root");

export default App;
