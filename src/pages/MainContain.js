import React,{Component} from "react";
////import {BsCloudUpload} from "react-icons/bs"
//import styled from "styled-components";
//page routing
//import SimpleSlider from "./Silder"
import "../index.css"
//styled
/*const MainContain =  styled.div`
    text-align: center; 
    background: #fff9;
    margin: 2rem 0;
    padding: 1rem; 
    box-shadow: 0px 0px 13px #e2ca3e;
    border-radius: 30px;
    transition: 0.4s ease-in-out;
    &:hover{
      background: #fff;
      transition: 0.4s ease-in-out;
      box-shadow: 0px 0px 13px #97BB85;
    }
`
const DisplayNone = styled.input`
    opacity:0;
    position: absolute;
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
        text-shadow: 1px 2px 12px white;
        transition:0.3s;
    }
`*/

//fuctions
/* 
class FileUploader extends Component{
  
  state = { selectedFiles: null };
  
  componentDidUpdate = prevState => {
    if (prevState.selectedFiles !== this.state.selectedFiles) {
      this.renderPreviews();
    }
  };

  renderPreviews = () => {
    const { selectedFiles } = this.state;
    const previewContainer = document.getElementById("preview-container");
    for (let i = 0; i < selectedFiles.length; i++) {
      const preview = document.createElement("img");
      preview.id = `preview_${i}`;
      previewContainer.appendChild(preview);
      const reader = new FileReader();
      reader.onload = function(evt) {
        preview.src = reader.result;
      };
      reader.readAsDataURL(selectedFiles[i]);
      i=0
    }
  };
  
  fileChangedHandler = event => {
    const files = event.target.files;
    console.log(files);
    this.setState({
      selectedFiles: files
    });
  };

  render(){

  return(
    <>
    <MainContain>
    
    <BasicBtn> <BsCloudUpload/> <label for="file">업로드</label> </BasicBtn>
    
    <DisplayNone type="file" title="file uploader" id="file" onChange={this.fileChangedHandler}/>
   
    </MainContain>
    <div id="preview-container"/>
    </>
  )}
}*/

class Clock extends Component{
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
}
  render(){
    return(
      <p>{this.state.date.toLocaleTimeString()}</p>
    )
}}

function AllRecipe() {
  return (
    <>
     
      <h1>All AllRecipe</h1>
      <Clock/>
      
      
      
    </>
  );
}

export default AllRecipe;
