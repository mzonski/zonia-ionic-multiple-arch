import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToggle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import "@zonia/ui/styles/_zui-style.scss";

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import { ComponentLoader } from "@zonia/module-federation";
import { Popup } from "@zonia/ui/components/Popup";
import CardComponent from "@zonia/ui/components/Card";
import { closeCircle } from "ionicons/icons";

setupIonicReact();

const AppLoader = () => (
  <IonApp><IonContent><ComponentLoader remoteUrl="http://localhost:3001/assets/remoteEntry.js" exposedModule="./Login"/></IonContent></IonApp>);

const SuccessPopup = () => (
  <Popup type={"success"} onConfirm={() => console.log("BRAWO")} confirmText={"Potwierdzam"} message={"XDXD"}
         isOpen={true} onClose={() => console.log("CLOSE")}/>);
const CardComponentX = () => (
  <CardComponent/>);
const FailPopup = () => (
  <Popup type={"failure"} onReject={() => console.log("REJECT")} rejectText={"CHUJ"}
         onConfirm={() => console.log("BRAWO")} confirmText={"PotwierdzxamXX"}
         message={"Lorem ipsum sit dolor amet consecontam elo"}
         isOpen={true} onClose={() => console.log("CLOSE")}/>);

const Appx = () => (
  <IonApp><Popup isOpen={true} onClose={() => console.log("CLOSE")}><ModalContent/></Popup></IonApp>);


const ModalContent: React.FC<{ onDismiss: () => void }> = ({onDismiss}) => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Advanced Modal</IonTitle>
        <IonButton slot="end" fill="clear" onClick={onDismiss}>
          <IonIcon icon={closeCircle}/>
        </IonButton>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonList>
        <IonItem>
          <IonLabel position="stacked">Username</IonLabel>
          <IonInput placeholder="Enter Username"/>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Bio</IonLabel>
          <IonTextarea placeholder="Your bio"/>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Date of Birth</IonLabel>
          {/*<IonDatetime displayFormat="MMM DD, YYYY" placeholder="Select Date" />*/}
        </IonItem>
        <IonItem>
          <IonLabel>Dark Mode</IonLabel>
          <IonToggle slot="end" name="darkMode"/>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Gender</IonLabel>
          <IonSelect placeholder="Select One">
            <IonSelectOption value="female">Female</IonSelectOption>
            <IonSelectOption value="male">Male</IonSelectOption>
          </IonSelect>
        </IonItem>
        {/* More items can be added here */}
      </IonList>
      <IonButton expand="block" onClick={onDismiss}>
        Close Modal
      </IonButton>
    </IonContent>
  </>
);

const App = () => {
  return <></>
}

export default AppLoader;


