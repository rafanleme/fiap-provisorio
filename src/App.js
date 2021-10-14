import TopBar from "./components/TopBar";
import { GlobalStyle } from "./GlobalStyles";
import Routes from "./routes";

function App() {

  let title = "My Store";

  return (
    <>
      <GlobalStyle />
      <TopBar title={title}/>
      <Routes />
    </>
  );
}

export default App;
