import React from 'react';
import styled,{keyframes} from 'styled-components';
import {useSpring,animated} from "react-spring";
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import "./index.css"

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

//App Styled info
const Navbar =styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 black;
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
    background-image: linear-gradient(to bottom,  #FDE34F 0%, #fda085 100%);
    border-top-right-radius: 386px;
    padding: 1rem 3rem 10rem 3rem;
    margin: 7rem 0rem 0rem 0rem;  
    font-family: -webkit-pictograph;
`
const bounce = keyframes`
0%, 50%{
    transform: rotate(0deg);
	}
  5%, 15%, 25%, 35%, 45% {
    transform: rotate(13deg);
  }
  10%, 20%, 30%, 40% {
    transform: rotate(-13deg);
  }
`;
const Logo = styled.img`
    filter: drop-shadow(0px 0px 2px #FDE34F);
    width: 3rem;
    margin: 1rem 0rem 0rem 3rem;
    transition:0.3s ease-in;
    &:hover{
        filter: drop-shadow(0px 0px 10px #F9A783);
        animation: ${bounce} 2s infinite;
        transition:0.3s ease-in;
    }
`



//App main nav & Contain Routes
function App() {
  //주석
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    return (
    <div>
        
      <Router>
       {/*GNB 부분*/}
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
       {/* ADD buttun 부분 => AddRecipe page 이동*/}
          <Link to ="/addrecipe">
            <Addbuttons trigger ={['hover','focus']}/>
          </Link>
      
        <animated.div style={props}>
            <MainContainBody>
                <Route exact path="/index" component={AllRecipe}/>
                <Route exact path="/addrecipe" component={AddRecipePage}/>
            </MainContainBody>
        </animated.div>
      </Router>
      
    </div>

  );  
}

export default App;
