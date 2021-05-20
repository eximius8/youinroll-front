import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {configureStore} from './store/configureStore';
import UserContextProvider from "./contexts/UserContext";
import WindowSizeContextProvider from "./contexts/WindowSizeContext";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <UserContextProvider>
        <WindowSizeContextProvider>
          <App/>
        </WindowSizeContextProvider>
      </UserContextProvider>      
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();