import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { pin, wifi, wine, warning, walk, skull, exit } from "ionicons/icons";
import Slider from "../../components/slider/Slider";
import { Typography } from "@mui/material";
import "./Home.css"
import { useAuth } from '../../context/AuthContext';
import Button from "@mui/material/Button";

export const Home = () => {
  const { user, logout } = useAuth();

  console.log("Home", user)

  const handleLogOut = async () => {
    console.log("home, logout", logout)
    await logout();
  };
  const cardsCategories = [
    {
      img: "/assets/imgs/res/coffety.jpg",
      alt: "Ecuador Restaurant",
      name: "RESTAURANTES",
      href: "/page/restaurants",
    },
    {
      img: "/assets/imgs/mitad_del_mundo.jpg",
      alt: "Ecuador Parks",
      name: "PARQUES",
      href: "/page/parks",
    },
    {
      img: "/assets/imgs/res/hibachi.jpg",
      alt: "Hibachi - Teppanyaki & Sushi Bar",
      name: "BARES",
      href: "/page/bars",
    },
    {
      img: "/assets/imgs/res/queso-te-sirva-de-experiencia.jpg",
      alt: "Ecuador Tienda",
      name: "TIENDAS",
      href: "/page/stores",
    },
    {
      img: "/assets/imgs/ceremonias-museo-templo.jpg",
      alt: "Ecuador Museos",
      name: "MUSEOS",
      href: "/page/museums",
    },
    {
      img: "/assets/imgs/acco/laronda.jpg",
      alt: "Ecuador Sitios turisticos",
      name: "Sitios",
      href: "/page/turistics",
    },
    { img: "exit", alt: "exit", name: "COMIDAS", href: "" },
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>
              <IonIcon icon={skull}></IonIcon>
            </IonCardSubtitle>
            <IonCardTitle>Carlos Cueva</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Espíritu viajero, que ama recorrer el mundo y siente un deseo
            incontrolable por vivir nuevas experiencias en lugares desconocidos.
          </IonCardContent>
        </IonCard> */}

        <IonCard>
          <IonItem>
            <IonIcon icon={skull} slot="start" />

            <IonLabel>Welcome {user.email} </IonLabel>
            <IonButton fill="outline" slot="end">
            <Button onClick={handleLogOut} type="submit" variant="contained" color="primary" fullWidth>
        Cerrar sesión
      </Button>
            </IonButton>
          </IonItem>

          <IonCardContent>
            Espíritu viajero, que ama recorrer el mundo y siente un deseo
            incontrolable por vivir nuevas experiencias en lugares desconocidos
          </IonCardContent>
        </IonCard>
        <IonCard>
          <Slider />
        </IonCard>
        <IonGrid className="container-grid">
          <IonRow>
            {cardsCategories.slice(0, 2).map((i, item) => (
              <IonCol key={item}>
                <IonCard>
                  <IonItem href={i.href}>
                    <div
                      onClick={() => console.log("hey over there")}
                      style={{ display: "unset" }}
                    >
                      <img src={i.img} alt={i.alt} />
                      <Typography
                        variant="h6"
                        align="center"
                        component="div"
                        noWrap
                        className="title-card"
                      >
                        {i.name}
                      </Typography>
                    </div>
                  </IonItem>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            {cardsCategories.slice(2, 4).map((i, item) => (
              <IonCol key={item}>
                <IonCard>
                  <IonItem href={i.href}>
                    <div
                      onClick={() => console.log("hey over there")}
                      style={{ display: "unset" }}
                    >
                      <img src={i.img} alt={i.alt} />
                      <Typography
                        variant="h6"
                        align="center"
                        component="div"
                        noWrap
                        className="title-card"
                      >
                        {i.name}
                      </Typography>
                    </div>
                  </IonItem>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            {cardsCategories.slice(4, 6).map((i, item) => (
              <IonCol key={item}>
                <IonCard>
                  <IonItem href={i.href}>
                    <div
                      onClick={() => console.log("hey over there")}
                      style={{ display: "unset" }}
                    >
                      <img src={i.img} alt={i.alt} />
                      <Typography
                        variant="h6"
                        align="center"
                        component="div"
                        noWrap
                        className="title-card"
                      >
                        {i.name}
                      </Typography>
                    </div>
                  </IonItem>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonItem className="ion-activated" onClick={handleLogOut}>
                  <IonIcon icon={walk} slot="start" />
                  <IonLabel>Salir</IonLabel>
                </IonItem>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Home;
