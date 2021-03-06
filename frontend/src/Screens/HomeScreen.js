import {useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import {Row,Col} from "react-bootstrap";
import Product from "../components/Product"
import { listProducts } from "../actions/productAction";
import Message from "../components/Message.js"
import Loader from "../components/Loader.js"
import ProductCarousel from '../components/ProductCarousel'

function HomeScreen({match}) {

    const keyword = match.params.keyword

   const dispatch = useDispatch()

   const productList = useSelector(state=>state.productList) 
   const {loading,error,products} = productList

    useEffect(() => {
     dispatch(listProducts(keyword))
    },[dispatch,keyword]);

    return (
        <> 
         {!keyword && <ProductCarousel/>}
            <h1> Latest Products </h1>
                {loading ?<Loader/>: error 
                ? <Message varient="danger">{error}</Message>
                :<Row>
                {products.map(product=>{
                    return(
                    <Col sm={12} md={6} lg={4} xl={3}>
                     <Product product={product}/>
                    </Col>
                    )
                })}  
                </Row>}
           
        </>
    )
}

export default HomeScreen
