import logo from './logo.svg';
import './App.css';

import React, { useEffect } from "react";
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";
import { Body, Container, Header, Image, LinkFromStyled } from "./components";

import WalletButton from './components/WalletButton';
import WalletBySam from "./components/Wallet";
import Home from "./components/Home";
import About from "./components/About";
import UpdateData from "./components/Mydata";
import MintAnimal from "./components/MintAnimal";

function App() {

  return (
    <Container>

      <Header>
        <WalletButton />
      </Header>

      <BrowserRouter>
        <header className="bg-light pt-3">
          <div className="container">
            <h1 className="display-1">Blockchain App by AndyBimBam</h1>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <NavLink to="/default" className="nav-link" activeClassName="active">Default App</NavLink>
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
          </div>
        </header>

        <div className="container py-3 py-md-5">
          <Switch>
            <Route path="/wallet">
              <WalletBySam />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/data">
              <UpdateData />
            </Route>
            <Route path="/mintanimal">
              <MintAnimal />
            </Route>
            <Route path="/default">
              <Body>
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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

        <footer className="border-top pt-3">
          <p className="small text-center text-muted">
            <Link className="text-muted mr-1" to="/" > Home </Link>
            {" "}|{" "}
            <Link className="text-muted mr-1" to="/about" > About Me </Link>
          </p>
        </footer>
      </BrowserRouter>

    </Container>
  );
}

export default App;
