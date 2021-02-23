import MainContextProvider from "./context/MainContext";
import Prop from "./Prop";
import Edit from "./Edit";

function App() {
  return (
    <MainContextProvider>
      <div>
        <Prop />
        <Edit />
      </div>
    </MainContextProvider>
  );
}

export default App;
