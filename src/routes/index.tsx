import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from '../routes/app,routes';
import { View } from "react-native";

export function Routes() {
  return (
    
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    
  );
}