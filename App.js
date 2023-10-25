import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import { ComponentsScreen } from './src/screens/ComponentScreen';
import { ListScreen } from './src/screens/ListScreen';
import { ImageScreen } from './src/screens/ImageScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { ColorsScreen } from './src/screens/ColorsScreen';
import { ColoredSquareScreen } from './src/screens/ColoredSquareScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Lists: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorsScreen,
    ColoredSquare: ColoredSquareScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'My First App',
    },
  }
);

export default createAppContainer(navigator);
