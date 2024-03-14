import { useRemoteModule } from "../hooks/useRemoteModule";
import { IonSpinner, IonText } from '@ionic/react';
import AdaptiveFlexBox from "@zonia/ui/components/AdaptiveFlexBox";
import { FC } from "react";

type RemoteAppProps = Readonly<{
  remoteUrl: string;
  exposedModule: string;
}>;

const Test: FC<RemoteAppProps> = ({remoteUrl: url, exposedModule}) => {
  const [RemoteComponent, isLoading, error] = useRemoteModule({
    exposedModule: exposedModule,
    remoteUrl: url,
  });

  if (isLoading) {
    return <AdaptiveFlexBox align="center"><IonSpinner/></AdaptiveFlexBox>;
  }

  if (error) {
    return <IonText color="danger">Error loading component: {error.message}</IonText>;
  }

  if (RemoteComponent) {
    console.log("=>(ComponentLoader.tsx:26) RemoteComponen", RemoteComponent);
    return <>{RemoteComponent}</>;
  }

  return <div>TEST</div>
}

const ComponentLoader2 = ({remoteUrl: url, exposedModule}: RemoteAppProps) => {
  const [RemoteComponent, isLoading, error] = useRemoteModule({
    exposedModule: exposedModule,
    remoteUrl: url,
  });

  if (isLoading) {
    return <AdaptiveFlexBox align="center"><IonSpinner/></AdaptiveFlexBox>;
  }

  if (error) {
    return <IonText color="danger">Error loading component: {error.message}</IonText>;
  }

  if (RemoteComponent) {
    console.log("=>(ComponentLoader.tsx:26) RemoteComponen", RemoteComponent);
    return RemoteComponent;
  }

  return null;
}

export default Test;
