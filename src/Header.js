import {Navbar,Nav, NavDropdown} from 'react-bootstrap'
import { Link ,useNavigate} from 'react-router-dom'

function Header()
{


let user = JSON.parse(localStorage.getItem('user-info'));
const navigate = useNavigate();

function logout()
{

localStorage.clear();
navigate('/login');
}

return( 

<div> 

<Navbar bg="dark" variant="dark">
    
    <Navbar.Brand href="#home">E-comm</Navbar.Brand>
    <Nav className="me-auto  navbar_wrapper" >

{

localStorage.getItem('user-info') ? 
<>

<Link to="/">Product List</Link>

<Link to="/add">Add product</Link>
      <Link to="/update">Update product</Link>

</>
:

<>

<Link to="/login">Login </Link>
      <Link to="/register">Register </Link>

</>
}

    
      
    </Nav>
   { localStorage.getItem('user-info') ?
    
<Nav>

<NavDropdown title={user && user.name}>

<NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>

</NavDropdown>

</Nav>
:null}
  </Navbar>

 
 

</div>

)



}

export default Header

