import React,{Component}from "react";
import {Navbar, Nav, Form, FormControl,Button} from 'react-bootstrap'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";        
import Services from "./Services";
import Products from "./Products";
export default class NavbarComp extends Component{
  render(){
    return(
        <Router>
      <div>
         <Navbar bg="dark" variant={"dark"} expand="lg">
           <Navbar.Brand href="#">Minor Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
           <Navbar.Collapse id="navbarScroll">
           <Nav className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll >
                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
                <Nav.Link as={Link} to={"/products"}>Products</Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
            </Nav>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
        <div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/services">
                    <Services/>
                </Route>
                <Route path="/products">
                    <Products/>
                </Route>
            </Switch>
        </div>
        </Router>
    );
  }
}
