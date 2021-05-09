import { NavDropdown, Button, Nav, DropdownButton, FormControl, Navbar, Form } from 'react-bootstrap'

export function Navigation(){
  const token = {
    "Name": "Solby Alimentos"
  } 
  return(
    <Navbar expand="lg" className="navbar" >
      <Navbar.Brand href="/Home">
        logo super flud
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="nav">
        <Form inline className="searchbar" >
          <FormControl type="search" placeholder="Busca marcas y productos..."/> 
          <Button type="submit" value="submit">lupa</Button>
        </Form>
        
        <Nav className="mr-auto">
          Carrito
        </Nav>
        <Nav className="mr-auto">
          <Form>
            <Form.Group>
              Solby alimentos
      { token ? (
        
              <DropdownButton title="Mi Perfil" menuAlign='right' id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </DropdownButton>
        ):(
          <>
              <Nav.Link href="/#">Ingresar</Nav.Link>   
          </>
        )
      }     
            </Form.Group>
          </Form>
        </Nav>
      </Navbar.Collapse>  
    </Navbar>
  )
}