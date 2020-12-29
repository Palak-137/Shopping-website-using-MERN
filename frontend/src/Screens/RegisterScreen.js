import {useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Form,Button,Row,Col } from 'react-bootstrap'
import {useDispatch,useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { register } from '../actions/userAction'
import FormContainer from '../components/FormContainer'

const RegisterScreen = ({location,history}) =>{
    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [message,setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector(state=>state.userLogin)
    const { loading,error,userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'


     useEffect(()=>{
         if(userInfo){
           history.push(redirect)
         }
     },[history,userInfo,redirect]) 

    const submitHandler = (e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            setMessage('Passeord do not match')
        }else{
           dispatch(register(name,email,password))
        }
    }
    return(
        <FormContainer>
            <h1>Sign Up</h1>
            {message && <Message varient='danger'>Error</Message>}
            {error && <Message varient='danger'>Error</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
                 <Form.Label>
                     Name
                 </Form.Label>
                 <Form.Control type='name' placeholder='Enter Name' value={name} onChange={e=> setName(e.target.value)}>   
                 </Form.Control>
              </Form.Group>
              <Form.Group controlId='email'>
                 <Form.Label>
                     Email Address
                 </Form.Label>
                 <Form.Control type='email' placeholder='Enter email' value={email} onChange={e=> setEmail(e.target.value)}>   
                 </Form.Control>
              </Form.Group>
              <Form.Group controlId='email'>
                 <Form.Label>
                     Password
                 </Form.Label>
                 <Form.Control type='password' placeholder='Enter Password' value={password} onChange={e=> setPassword(e.target.value)}>   
                 </Form.Control>
              </Form.Group>
              <Form.Group controlId='email'>
                 <Form.Label>
                    Confirm Password
                 </Form.Label>
                 <Form.Control type='password' placeholder='Confirm Password' value={confirmPassword} onChange={e=> setConfirmPassword(e.target.value)}>   
                 </Form.Control>
              </Form.Group>
              <Button type='submit' varient = 'primary'>
                  Sign In
              </Button>
            </Form>
            <Row className='py-3'>
               <Col>
               Have an account? {' '}
               <Link to={redirect ? `/login?redirect=${redirect}`: `/login`}>
               Register </Link>
               </Col>
            </Row>
        </FormContainer>
    )
}
export default RegisterScreen;