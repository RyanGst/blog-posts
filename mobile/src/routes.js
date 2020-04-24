import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import List from './pages/List';
import Post from './pages/Post';
import { createDrawerNavigator } from 'react-navigation-drawer';

const AuthStack = createSwitchNavigator({
    Login, SignUp
})

const Home = createSwitchNavigator({
    List, Post
})

const Drawer = createDrawerNavigator({
    Home: {
        screen: Home
    }
})

const App = createSwitchNavigator({
    Auth: {
        screen: AuthStack
    },
    App: {
        screen: Drawer
    }
})

const Routes = createAppContainer(
    App
);

export default Routes;