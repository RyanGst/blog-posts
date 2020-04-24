import Dashboard from "../pages/Dashboard/Dashboard";
import Posts from "../pages/Posts/Posts";


export const routes = [
    {
        path: "/dashboard", 
        component: Dashboard, 
        icon: "fas fa-chart-line", 
        routeName: "Painel de controle"
    }, 
    {
        path: "/posts", 
        component: Posts, 
        icon: "fas fa-mail-bulk",
        routeName: "Posts"

    }, 
]