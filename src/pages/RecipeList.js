import React from 'react'
//import {styled} from "styled-components"

//styled 



function RecipeList() {
    function editList(e) {
        e.preventDefault();
        console.log("fuck")
    }

    function removeList(e) {
        e.preventDefault();
        console.log("U")
    }

    return (
        <div>
            <form>
                <label>
                    New recipe 추가 :
                    <input type="text" placeholder="레시피를 추가하세요."/> 
                    <button type="toggle" onClick={editList}>수정</button>
                    <button type="toggle" onClick={removeList}>삭제</button>
                </label>
                <label>
                    <input type="submit" name='저장 완료'/>
                </label>
            </form>
        </div>
    )
}



export default RecipeList
