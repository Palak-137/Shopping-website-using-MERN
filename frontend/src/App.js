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
import OrderScreen from './Screens/OrderScreen';
import UserListScreen from './Screens/UserListScreen';
import UserEditScreen from './Screens/UserEditScreen';


function App() {
  return (
    <Router>
    <Header/>
    <main className="py-3">  
      <Container>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/shipping" component={ShippingScreen} exact></Route>
        <Route path="/register" component={RegisterScreen} exact></Route>
        <Route path="/profile" component={ProfileScreen} exact></Route>
        <Route path="/placeorder" component={PlaceOrderScreen} exact></Route>
        <Route path="/login" component={LoginScreen} exact></Route>
        <Route path="/product/:id" component={ProductScreen} exact></Route>
        <Route path="/cart/:id?" component={CartScreen} exact></Route>
        <Route path="/orders/:id" component={OrderScreen} exact></Route>
        <Route path="/payment" component={PaymentScreen} exact></Route>
        <Route path="/admin/userlist" component={UserListScreen} exact></Route>
        <Route path="/admin/user/:id/edit" component={UserEditScreen} exact></Route>
      </Container>
    </main>
     <Footer/>
    </Router>
  );
}

export default App;
