import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container} from 'react-bootstrap';
import HomeScreen from "./Screens/HomeScreen";
import {BrowserRouter as Router,Route} from "react-router-dom";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProfileScreen from './Screens/ProfileScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';

function App() {
  return (
    <Router>
    <Header/>
    <main className="py-3">  
      <Container>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/shipping" component={ShippingScreen} exact></Route>
        <Route path="/register" component={RegisterScreen} exact></Route>
        <Route path="/profile" component={ProfileScreen}></Route>
        <Route path="/placeorder" component={PlaceOrderScreen}></Route>
        <Route path="/login" component={LoginScreen} exact></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/payment" component={PaymentScreen}></Route>
      </Container>
    </main>
     <Footer/>
    </Router>
  );
}

export default App;
