import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../pages/Home";
import Wallet from "../pages/Wallet";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "rgb(253,165,29)"
            }
        }
    },
    Wallet: {
        screen: Wallet
    }
}

const Stack = createStackNavigator(screens)

export default createAppContainer(Stack)