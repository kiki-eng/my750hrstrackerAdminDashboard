import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound, CustomerInfo } from "./screens";
import StatisticsScreen from "./screens/statistics/StatisticsScreen";
import Messages from "./screens/messages/Messages";
import ManageTeam from "./screens/manageTeam/ManageTeam";
import CreateUser from "./screens/createUser/CreateUser";


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
          <Route path="/" index element={<Dashboard />} />
          <Route path="/customerInfo" element={<CustomerInfo />} />
          <Route path="/statistics" element={<StatisticsScreen />}/>
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/manage-team" element={<ManageTeam />} />
          
          <Route path="*" element={<PageNotFound/>}/> 
          </Route>
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
}

export default App;
