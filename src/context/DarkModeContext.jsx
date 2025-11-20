import react, { createContext } from 'react';

const DarkModeContext =createContext();

function DarkModeContext({ children }) {
  const [isDarkMode, setIsDarkMode] = DarkModeContext();

  return (
    <div>DarkModeContext</div>
  );
}

export default DarkModeContext;