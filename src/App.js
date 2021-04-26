import SignIn from './user/sing_in'
import Navbar from './user/nav' 
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import SignUp from './user/sign_up'
import Product from './user/product'
import Cart from './user/Cart'


function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Switch>
             <Route path='/cart' component={Cart}/>
             <Route path='/signIn' component={SignIn}/>
            <Route path='/signUp' component={SignUp}/> 
            <Route path='/product' component={Product}/>
        </Switch>
    </Router>
    
    </>
  );
}

export default App;
