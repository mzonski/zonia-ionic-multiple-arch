import { useRemoteModule } from "../hooks/useRemoteModule";
import { IonSpinner, IonText } from '@ionic/react';
import AdaptiveFlexBox from "@zonia/ui/components/AdaptiveFlexBox";
import CardComponent from "@zonia/ui/components/Card";

type RemoteAppProps = Readonly<{
  remoteUrl: string;
  exposedModule: string;
}>;


const ComponentLoader = ({remoteUrl: url, exposedModule}: RemoteAppProps) => {
  const [RemoteComponent, isLoading, error] = useRemoteModule({
    exposedModule: exposedModule,
    remoteUrl: url,
  });
  return <div className={"flex-center"}><CardComponent><IonSpinner/></CardComponent></div>;
  //
  // if (isLoading) {
  //   return <AdaptiveFlexBox align="center"><IonSpinner/></AdaptiveFlexBox>;
  // }
  //
  // if (error) {
  //   return <IonText color="danger">Error loading component: {error.message}</IonText>;
  // }
  //
  // if (RemoteComponent) {
  //   return RemoteComponent as unknown as JSX.Element;
  // }

  return null;
}

export default ComponentLoader;
