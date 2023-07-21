import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CuteAnimals from "./src/screens/CuteAnimals";
import hehebum from "./src/screens/hehebum";
import FavoriteList from "./src/screens/FavoriteList";
import LayoutExample from "./src/screens/LayoutExample";
import SnapchatLogin from "./src/screens/SnapchatLogin";
import FlagSweden from "./src/screens/FlagSweden";
import FlagNorway from "./src/screens/FlagNorway";
import ModifyCounter from "./src/screens/ModifyCounter";
import ThePredictor from "./src/screens/ThePredictor";
import FamousThings from "./src/screens/FamousThings";
import FamousThingsFlatlist from "./src/screens/FamousThingsFlatlist";
import CreateColor from "./src/screens/CreateColor";
import RandomColor from "./src/screens/RandomColor";
import Calculator from "./src/screens/Calculator";
import CalculatorNew from "./src/screens/CalculatorNew";

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		CuteAnimals: CuteAnimals,
		hehebum: hehebum,
		FavoriteList: FavoriteList,
		LayoutExample: LayoutExample,
		SnapchatLogin: SnapchatLogin,
		FlagSweden: FlagSweden,
		FlagNorway: FlagNorway,
		ModifyCounter: ModifyCounter,
		ThePredictor: ThePredictor,
		FamousThings: FamousThings,
		FamousThingsFlatlist: FamousThingsFlatlist,
		CreateColor: CreateColor,
		RandomColor: RandomColor,
		Calculator: Calculator,
		CalculatorNew: CalculatorNew,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "RGB Color Customization",
		},
	}
);

export default createAppContainer(navigator);
