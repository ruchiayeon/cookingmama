import styled,{keyframes} from "styled-components";
import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';

const bounce = keyframes`
    0% {
    transform: scale(1.2);
    color:#FDE34F;
  }
    50% {
    transform: scale(1);
    color:#F9A783;
  }
  100% {
    transform: scale(1.2);
    color:#FDE34F;
  }
`;
const swing = keyframes`
0%, 50%{
    transform: rotate(0deg);
	}
  5%, 15%, 25%, 35%, 45% {
    transform: rotate(13deg);
  }
  10%, 20%, 30%, 40% {
    transform: rotate(-13deg);
  }
;`

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
      animation: ${swing} 2s infinite;
      color:#97BB85;
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