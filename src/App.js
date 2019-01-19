import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { SideNav } from 'react-sidenav'
import "./App.css";
import Routes from "./Routes";
import { Auth } from "aws-amplify";
import { AppContainer, Navigation, Body, Title } from "./containers";


class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    await Auth.signOut();
  
    this.userHasAuthenticated(false);
    
    this.props.history.push("/");
  }



  render() {
  const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating &&
      <div className="App">
      <AppContainer>
        <Navigation>
            <div className="lander">
            {this.state.isAuthenticated
                ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
              : null}
              <Link to="/"><img alt="logo" className="logo" src="/harfen.png" /></Link>
              <Title>
              <h1>Harfen</h1>
              </Title>
              <p>Design & Architecture</p>
              
            
            <SideNav>
              <div className="nav">
              <ul>   
              <li><Link to="/">Project</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              </ul>     
              </div>
            </SideNav>
            </div>
        </Navigation>

        <Body>
          <div className="mobile-navbar">
          <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"><img alt="logo" className="logo-mobile" src="/harfen.png" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse ref="{this.nav2}">
            <Nav pullRight>
              <NavItem><Link to="/"><li>Project</li></Link></NavItem>
              <NavItem><Link to="/about"><li>About Us</li></Link></NavItem>
              <NavItem><Link to="/contact" ><li>Contact</li></Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          </div>
          <Routes childProps={childProps} />
        </Body>
      </AppContainer>
      </div>
    );
  }
}

export default withRouter(App);