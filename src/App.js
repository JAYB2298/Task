import SignIn from './components/user/sing_in'
import Navbar from './components/navbar/nav' 
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import SignUp from './components/user/sign_up'
import AppM from "./components/App"


function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Switch>
             <Route path='/signIn' component={SignIn}/>
             <Route path='/signUp' component={SignUp}/> 
             <Route path='/' component={AppM}/>
        </Switch>
    </Router>
    
    </>
  );
}

export default App;
