import Login from "./Login/Login";
import CreateAccount from "./Login/CreateAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountInformation from "./Login/AccountInformation";
import SwipeMenu from "./Pages/SwipeMenu";
import Chat from "./Pages/Chat";

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
        <Route path="/SwipeMenu/:userId" element={<SwipeMenu />} />
        <Route path="/Chat/:userId" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
