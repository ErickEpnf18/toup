import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Page from "./pages/Page";
import Resgister from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Parques from "./pages/Turismo/Parques";
import Tienda from "./pages/Turismo/Tienda";
import Turismo from "./pages/Turismo/Turismo";
import Restaurante from "./pages/Turismo/Restaurante";
import IndexEnca from "./pages/Encargado/Index";
import CreateEnca from "./pages/Encargado/create";
import GoogleMapa1 from "./pages/Turismo/GoogleMapa1";

setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <AuthProvider>
        <IonReactRouter>
          <Route path="/" exact={true}>
            <Resgister />
            {/* <Redirect to="/page/Inbox" /> */}
          </Route>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <ProtectedRoute>
            <IonSplitPane >
              <Menu />

              <IonRouterOutlet >
                <Route path="/page/:name" exact={true}>
                  <Page />
                </Route>

                <Route path="/home" exact={true}>
                  <Home />
                </Route>
                <Route exact path="/page/Parques" component={Parques} />
                <Route exact path="/page/Tienda" component={Tienda} />
                <Route exact path="/page/Turismo" component={Turismo} />
                <Route
                  exact
                  path="/page/Restaurantes"
                  component={Restaurante}
                />
                <Route
                  exact
                  path="/Encargado/Principal-Page"
                  component={IndexEnca}
                />
                <Route
                  exact
                  path="/Encargador/create-site"
                  component={CreateEnca}
                />
                <Route path="/map/:latitud/:longitud" component={GoogleMapa1} />
              </IonRouterOutlet>
            </IonSplitPane>
          </ProtectedRoute>
        </IonReactRouter>
      </AuthProvider>
    </IonApp>
  );
};

export default App;
