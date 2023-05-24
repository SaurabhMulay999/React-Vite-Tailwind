import { applyMiddleware, createSlice } from "@reduxjs/toolkit";

//creating a Slice

const BucketSlice=createSlice(
    {
        //Create a slice with name , reducers, initialstate
        name:'BucketSlice',
        initialState:{
            AnimalCount:[],
           // Keycount:[{'dog':1}],

        },
        reducers:{
            //mapping of action to reducer functions
            addAnimalToBucket:function (state,action){
                //dont return any value
                console.log(action.payload, "AddanmaltoBucket");
                
                state.AnimalCount.push(action.payload);
                // if(Keycount,has(action.payload)){
                //     Keycount[action.payload]++;
                // }
                // else{
                //     Keycount[action.payload]=1;
                // }
            },

            removeAnimalFromBucket:function(state,action){
                //removing specific element from bucket
                //state.AnimalCount.pop();
                //alternate Logic
                console.log(action.payload,"Action payload");
                var i=-1;
                // state.AnimalCount.map((item,index)=>{
                //     if(item.name==action.payload.name){
                //         i=index;
                    
                //     }
                // });
                // if(i==-1){
                    state.AnimalCount=state.AnimalCount.filter((it)=>it.id!=action.payload.id)
                // };

           console.log(state.AnimalCount);


            },
            clearBucket:function(state,action){
                state.AnimalCount=[];
            }

        }
    }
)

export const{addAnimalToBucket, removeAnimalFromBucket, clearBucket} = BucketSlice.actions;

export default BucketSlice.reducer;
