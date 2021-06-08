import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {routes} from "./route";
import {useStore} from './utils/useContext';

import './App.css'
import Navbar from "./components/Navbar/index";

const App = ()=> {
  const {state} = useStore();
  const routings = routes.map((el,idx)=>{
    return <DefaultRoute {...el} key={idx}/>

  }) 
  return (
    <Router>
      {state.isCompleted && <Navbar/>}
      <Switch>
          {routings}
      </Switch>
      
    </Router>
  
  );
}

const DefaultRoute = ({path,component, exact})=>{
  return(
      <Route path={path} component={component} exact={exact} />
         
  )
}


export default App;
