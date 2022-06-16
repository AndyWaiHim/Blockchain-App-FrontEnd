import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";
import { Body, Container, Header, Image, LinkFromStyled, Footer } from "./components";

import WalletButton from './components/WalletButton';
import WalletBySam from "./components/Wallet";
import UpdateData from "./components/Mydata";
import MintAnimal from "./components/MintAnimal";

function App() {

  return (
    <Container>
      <Header>
        <WalletButton />
      </Header>

      <header className="bg-light pt-3">
        <div className="container">
          <h1 className="display-1">Blockchain App by AndyBimBam</h1>
        </div>
      </header>

      <main className="headnav">
        <BrowserRouter >
          <ul className="nav nav-tabs">
            <li>
              <NavLink to="/default" className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/wallet" className="nav-link" activeClassName="active">My Wallet</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/data" className="nav-link" activeClassName="active">Update data</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mintanimal" className="nav-link" activeClassName="active">Mint Animal</NavLink>
            </li>
          </ul>

          <div className="container py-3 py-md-5">
            <Switch>
              <Route path="/wallet" >
                <div className="component">
                  <WalletBySam />
                </div>
              </Route>
              <Route path="/data">
                <div className="component">
                  <UpdateData />
                </div>
              </Route>
              <Route path="/mintanimal">
                <div className="component">
                  <MintAnimal />
                </div>
              </Route>
              <Route path="/default">
                <Body className="component">
                  <Image src={logo} alt="ethereum-logo" />
                  <p>
                    Edit <code>packages/react-app/src/App.js</code> and save to reload.
                  </p>
                  <LinkFromStyled href="https://reactjs.org">
                    Learn React
                  </LinkFromStyled>
                  <LinkFromStyled href="https://usedapp.io/">Learn useDapp</LinkFromStyled>
                  <LinkFromStyled href="https://thegraph.com/docs/quick-start">Learn The Graph</LinkFromStyled>
                </Body>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
        <footer style={{ color: "white" }}>test2</footer>
      </main>


      <BrowserRouter>
        <Footer className="border-top pt-3">
          <p className="small text-center text-muted">
            <Link className="text-muted mr-1" to="/" > Home </Link>
            {" "}|{" "}
            <Link className="text-muted mr-1" to="/about" > About Me </Link>
          </p>
        </Footer>
      </BrowserRouter>

      <Footer style={{ color: "white" }}>test3</Footer>

    </Container>
  );
}

export default App;
