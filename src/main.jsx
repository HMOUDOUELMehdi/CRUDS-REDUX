import ReactDOM from "react-dom";
import { createStore ,applyMiddleware} from "redux";
import { Provider } from "react-redux";
import  appReducer  from "./StoreDetails/RootReducer";
import App from "./App";
import { thunk } from "redux-thunk";

const store = createStore(appReducer,applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

