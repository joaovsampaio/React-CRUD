import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/Theme.styled";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import GlobalStyle from "./styles/GlobalStyle";
import Main from "./components/Main";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);

  useEffect(() => {
    if (localStorage.getItem("current-theme")) {
      const currentTheme = JSON.parse(
        localStorage.getItem("current-theme") || "{}"
      );
      if (currentTheme) {
        setSelectedTheme(currentTheme);
      }
    }

    return;
  }, []);

  const HandleThemeChange = () => {
    setSelectedTheme(selectedTheme.name === "light" ? dark : light);

    if (selectedTheme.name === "dark") {
      localStorage.setItem("current-theme", JSON.stringify(light));
    } else {
      localStorage.setItem("current-theme", JSON.stringify(dark));
    }
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <Header HandleThemeChange={HandleThemeChange} />
      <Nav />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
