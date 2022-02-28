
import './App.css';
import Settings from './components/Settings';
import Timer from './components/Timer';
import {useState} from "react";
import SettingsContext from './components/SettingsContext';

function App() {
  const [showSetting, setShowSetting] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <SettingsContext.Provider value={{
        showSetting,
        setShowSetting,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSetting ? <Settings/> : <Timer/>}
      </SettingsContext.Provider>
    </main>  
  );
}

export default App;
