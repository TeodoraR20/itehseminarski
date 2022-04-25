import logo from './logo.svg';
import './App.css';
import { Button} from 'react-bootstrap';
import Header from  './Header'
import { BrowserRouter,Route,Routes } from 'react-router-dom'


import Login from './Login'
import UpdateProduct from './UpdateProduct'
import AddProduct from './AddProduct'
import Register from './Register'
import Protected from './Protected'

function App() {
  return (
    <div className="App">




      <BrowserRouter>
  
   
     {/*<h1>E-comm website</h1>*/}

   
<Routes>

<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} />
<Route path="/add" element={<AddProduct/>} >   </Route>
<Route path="/update" element={<UpdateProduct/>}  >   </Route>

</Routes>

      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
