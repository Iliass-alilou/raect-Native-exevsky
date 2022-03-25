import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/Components/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorsScreen from './src/screens/ColorsScreen';
import SquareScreen from './src/screens/SquareColors';
import SquareScreenReducer from './src/screens/SquareScreenReducer';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components : ComponentsScreen,
    ListFriend : ListScreen,
    ImgScreen : ImageScreen,
    CalculateScreen : CounterScreen,
    ClsScreen : ColorsScreen,
    sarScreenColor: SquareScreen,
    SqrScreenReducer : SquareScreenReducer,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
