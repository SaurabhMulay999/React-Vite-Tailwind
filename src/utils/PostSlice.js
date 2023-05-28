import { createSlice } from "@reduxjs/toolkit";
import { content1 } from "../shared/constants/constant";

const initialState={
    
   Post: [
    {id:"1", Name:"Animal Adoption - Need " , content:content1, Creator:'Saurabh Mulay'},
    {id:"2", Name:"Veganism - Need " , content:content1 , Creator:'Saurabh Mulay'}
    ]
}

const postSlice=createSlice({
    name:"BlogPosts",
    initialState,
    reducers:{

        addPost:function(state,action){
            state.Post.push(action.payload);
        },

        removePost:function(state,action){
            state.Post.pop();
        }

    }

})

export const {addPost, removePost}=postSlice.actions;
export default postSlice.reducer;

