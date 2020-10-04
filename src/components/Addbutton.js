import styled,{keyframes} from "styled-components";
import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';

const bounce = keyframes`
    0% {
    transform: scale(1.2)
  }
    50% {
    transform: scale(1)
  }
  100% {
    transform: scale(1.2)
  }
`;

const Addbutton = styled.button`
    filter: drop-shadow(2px 2px 2px #4e4e4e);
    z-index:3000;
    border: 0;
    outline:0;  
    background: none;
    border: none;
    color: white;
    font-size: 4rem;
    margin: 1rem;
    position: fixed;
    bottom: 0;
    right:0;
    animation: ${bounce} 2s infinite;
    transition: 0.3s;
    &:hover{
      color:#F9998B;
      transition: 0.3s;
    }
`

function Addbuttons(){
    var MoveAddPageEventHandler = () => {alert("레시피 추가 페이지로 넘어갑니다.")}

    return(
        <Addbutton onClick={MoveAddPageEventHandler}> <AiFillPlusCircle/></Addbutton>
    );    
}

export default Addbuttons