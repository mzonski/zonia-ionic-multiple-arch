import './styles.scss';
import { ComponentLoader } from '@zonia/module-federation';
import { setupIonicReact } from '@ionic/react';

setupIonicReact();

function AppLoader() {
  return <ComponentLoader remoteUrl={import.meta.env.VITE_REMOTE_URL} exposedModule="./Login" />;
}

export default AppLoader;
