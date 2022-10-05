import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./utils/Theme.styled";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import GlobalStyle from "./utils/GlobalStyle";
import Main from "./components/Main";
import Switch from "react-switch";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);

    localStorage.setItem("current-theme", JSON.stringify(theme));
  };
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <Header
        btnSwitch={
          <Switch
            uncheckedIcon={false}
            checkedIcon={false}
            checked={selectedTheme === light ? false : true}
            onChange={() =>
              HandleThemeChange(selectedTheme === light ? dark : light)
            }
          />
        }
      />
      <Nav />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
