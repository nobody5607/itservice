import App from './pages/App';
import Home from './pages/Home';
import User from './pages/User';
import Role from './pages/Role';

const routes=[{
    path:'/',
    component:App,
    indexRoute:{component:Home},
    childRoutes:[
        {path:'user', component:User},
        {path:'role', component:Role}
    ]

}];
export default routes;