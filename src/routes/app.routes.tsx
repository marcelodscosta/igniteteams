import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Groups } from "../screens/Groups";
import { Players } from "../screens/Players";
import { NewGroup } from "../screens/NewGroup";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="groups" //Página Inicial
      screenOptions={{ headerShown: false }} //Remoção de cabeçalho
    >
      <Screen
        name="groups" //Nome da rota
        component={Groups} //Componente a ser renderizado
      />

      <Screen name="players" component={Players} />

      <Screen name="new" component={NewGroup} />
    </Navigator>
  );
}
