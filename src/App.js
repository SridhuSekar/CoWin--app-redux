import React from "react";
import "./App.css";
import { Provider } from 'react-redux'
import store from'./redux/store'

import CombineComponents from "./components/CombineComponents";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CombineComponents />
    </div>
    </Provider>
  );
}

export default App;
