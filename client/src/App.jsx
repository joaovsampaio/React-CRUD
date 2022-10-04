import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import GlobalStyle from "./utils/GlobalStyle";
import Main from "./components/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
