import react from 'react';
import ButtonIcon from './ButtonIcon';
import { HiOutlineMoon } from 'react-icons/hi';
import { useDarkMode } from '../context/DarkModeContext';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon>
      <HiOutlineMoon />
    </ButtonIcon>
  )
}

export default DarkModeToggle;