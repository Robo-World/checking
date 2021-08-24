import ContactUs from './Contact-Us';
import Banner from './banner';
import Banner2 from './banner2';
import AboutUspage from './About-Us';
import OurProducts from './Our-Products';
import OrderNow from './Order-Now';
import Navbar from './Navbar';
import './p.css'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Banner2/>
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
           <Banner/>
            </> 
            )
          }}> 
          </Route>
          <Route exact path="/Our-Products" render={()=>{
            return(
            
            <OurProducts/>    
            )
          }}> 
          </Route>
          <Route exact path="/Order-Now" render={()=>{
            return(
            
            <OrderNow/>    
            )
          }}> 
          </Route>
          <Route path="/Contact-Us" render={()=>{
            return(
            
           <ContactUs/>

            )
          }}> 
          </Route>
          <Route path="/About-Us" render={()=>{
            return(
            <AboutUspage/>
            )
          }}> 
          </Route>
        </Switch> 
    </Router>
   
   </>
  );
}

export default App;
