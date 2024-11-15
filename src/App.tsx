import Login from "./Login/Login";
import CreateAccount from "./Login/CreateAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountInformation from "./Login/AccountInformation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route
          path="/account-information/:userId"
          element={<AccountInformation />}
        />
      </Routes>
    </Router>
  );
};

export default App;
