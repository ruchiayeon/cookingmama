import React from 'react';
import styled from 'styled-components';
import "./index.css"
import { Link, Route, BrowserRouter as Router } from "react-router-dom"


//페이지 라우팅
import AllRecipe from "./pages/MainContain"
import AddRecipePage from "./pages/AddDish"
import Addbuttons from "../src/components/Addbutton"

//이미지 라우팅
import whisk from "./assets/images/whisk.svg"

//font style change const 
/**const GlobalStyle =  createGlobalStyle`
@font-face {
    font-family:'Sansita Swashed';
    src: url(${require('./Fonts/SansitaSwashed-Bold.ttf')});
  }
  body {
    font-family: 'Sansita Swashed';
  }
`*/


const Navbar =styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  filter:invert(1);
  background:#fff9;
  display:flex;
  height: 5rem;
  transition: 0.3s ease-in-out;
  &:hover{
    transition: 0.3s ease-in-out;
  }
`
const NavContain = styled.ul`
    width: 100%;
    /* float: right; */
    text-align: right;
    margin-right: 2rem;
`
const BasicBtn = styled.button`
    font-family: -webkit-pictograph;
    background: none;
    border: 0;
    outline:0;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5rem;
    transition:0.3s;
    &:hover{
        text-shadow: 1px 2px 6px #FDE34F;
        transition:0.3s;
    }
`
const MainContainBody = styled.main`
    min-height: 100vh;
    max-height: 100%;
    background: #FDE34F;
    border-top-right-radius: 386px;
    padding: 1rem 3rem 10rem 3rem;
    margin: 7rem 0rem 0rem 0rem;  
    font-family: -webkit-pictograph;
`
const Logo = styled.img`
    filter: drop-shadow(2px 4px 6px black);
    width: 3rem;
    margin: 1rem 0rem 0rem 3rem;
`



//App main nav & Contain Routes
function App() {
  
    return (
    <div>
        
      <Router>

    
      <Navbar>
        <Link to="/index">
          <Logo src={whisk} className="App-logo" alt="logo" />
        </Link>

        <NavContain>
          <Link to="/index">
            <BasicBtn>All Recipe</BasicBtn>
          </Link>
        </NavContain>

      </Navbar>
   
          <Link to ="/addrecipe">
            <Addbuttons trigger ={['hover','focus']}/>
          </Link>
      <MainContainBody>
        <Route exact path="/index" component={AllRecipe}/>
        <Route exact path="/addrecipe" component={AddRecipePage}/>
      </MainContainBody>

      </Router>
      
    </div>

  );  
}

export default App;
