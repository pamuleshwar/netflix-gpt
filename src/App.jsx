import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {

  return (
    
    <Provider store={appStore}>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </Provider>
  )
}

export default App
