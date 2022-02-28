import React from "react";
import ApiProgress from "../shared/ApiProgress";
import LanguageSelector from '../components/LanguageSelector';
import UserSignupPage from '../pages/UserSignupPage';
import LoginPage from '../pages/LoginPage';

function App() {
  return (
    <div className="row">
      <div className="col">
        <ApiProgress path="/api/1.0/users">
          <UserSignupPage />
        </ApiProgress>
      </div>
      <div className="col">
        <ApiProgress path="/api/1.0/auth">
          <LoginPage />
        </ApiProgress>
      </div>
      <LanguageSelector />
    </div>
  );
}

export default App;
