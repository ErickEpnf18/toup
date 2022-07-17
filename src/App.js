import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Page from './pages/Page';
import Resgister from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import ProtectedRoute from './components/protected/ProtectedRoute';
import { AuthProvider } from "./context/AuthContext";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App = () => {

  return (
    <IonApp>
      <AuthProvider>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/register" exact={true}>
                <Resgister />
                {/* <Redirect to="/page/Inbox" /> */}
              </Route>
              <Route path="/page/:name" exact={true}>
                <Page />
              </Route>
              <Route path="/login" exact={true}>
                <Login />
              </Route>
              <Route path="/" exact={true}>
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              </Route>
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </AuthProvider>
    </IonApp>
  );
};

export default App;
