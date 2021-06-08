
import Home from './pages/Home/index';
import Detail from './pages/Detail/index';
import MyPokedex from './pages/MyPokedex';

export const routes = [
    {
        path:"/",
        component: Home,
        exact:true
    },
    {
        path:'/detail',
        component:Detail,
        exact:true
    },
    {
        path:'/bags',
        component:MyPokedex,
        exact:true

    }
]

