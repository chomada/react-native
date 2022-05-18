import ShopProvider from './context/ShopProvider';
import MainNavigation from './navigation/MainNavigation';
import { LogBox } from 'react-native';

export default function App() {

  LogBox.ignoreLogs(["timer"])
  LogBox.ignoreLogs(["AsyncStorage"])


  return (
    <ShopProvider>
      <MainNavigation />
    </ShopProvider>
  );
}


