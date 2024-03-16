import { IonSpinner, IonText } from '@ionic/react';
import { useRemoteModule } from '../hooks/useRemoteModule';

type RemoteAppProps = Readonly<{
  remoteUrl: string;
  exposedModule: string;
}>;

function ComponentLoader({ remoteUrl: url, exposedModule }: RemoteAppProps) {
  const [RemoteComponent, isLoading, error] = useRemoteModule({
    exposedModule,
    remoteUrl: url,
  });

  if (isLoading) {
    return (
      <div className="loading-card">
        <IonSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading-card">
        <IonText color="danger">Error loading component: {error.message}</IonText>
      </div>
    );
  }

  if (RemoteComponent) {
    return RemoteComponent;
  }

  return null;
}

export default ComponentLoader;
