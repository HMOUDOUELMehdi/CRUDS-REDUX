import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import  appReducer  from "./StoreDetails/RootReducer";
import App from "./App";

const store = createStore(appReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

