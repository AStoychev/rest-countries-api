import { useState } from "react";

import { Routes, Route } from "react-router-dom"

import Header from "./components/shared/Header/Header"
import Home from "./pages/Home/Home"
import CountryDetails from "./pages/CountryDetails/CountryDetails"

function App() {

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isDark, setIsDark] = useState<boolean>(true);

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setIsDark(isDark === false ? true : false)
  }

  return (
    <>
      <div>
        <Header switchTheme={switchTheme} isDark={isDark} />
        <Routes>
          <Route path="/" element={<Home dark={isDark} />} />
          <Route path="/:country" element={<CountryDetails isDark={isDark} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
