import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addPost, removePost } from '../utils/PostSlice';

function Blogpost() {
    const str="ANIMAL ADOPTION";
    const arr=[...str];
    const [title, setTitle]= useState('');
    const [content, setContent]=useState('');
    const [creator,setCreator]=useState('');
    const dispatch=useDispatch();

    function remove(){
        dispatch(removePost());
    }

    function CreatePost(title, content, creator){
        if(title && content){
            const value=dispatch(addPost(
                {
                    id:nanoid(),
                    Name:title,
                    content:content,
                    Creator:creator,
                }
                ))

        }
    }


    const PostData=useSelector((store)=>store.Posts.Post);
    console.log(PostData)
  return (
    
    <>
    <div className='text-2xl font-extralight bg-yellow-100'>BlogPost</div>
     <div className="bg-gray-300 font-extralight  border-gray-800">
           {
            arr.map((ele)=>(
                <div id={Math.random(0.2)} className="m-[18px] hover:animate-bounce p-4 inline-flex">
                <h1 className="text-4xl">{ele}</h1>
                </div>
            ))
           } 
        </div>


        <div className='flex'>

        <div className='p-4 m-4 bg-gray-50' >
            <form onSubmit={(e)=> (e.preventDefault(),CreatePost(title, content,creator))}>
                <div className='inline-flex'>   
                <h1 className=' text-xl font-thin m-4 bg-gray-50'>Name</h1><input className='border' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className='inline-flex'>   
                <h1 className=' text-xl font-thin m-4 bg-gray-50'>Content</h1><input type="text" className='border w-96 h-24 break-words break-all' value={content} onChange={(e)=>setContent(e.target.value)}/>
                </div>
                <div className='inline-flex'>   
                <h1 className=' text-xl font-thin m-4 p-2 bg-gray-50'>Creator</h1><input type="text" className='border w-24 h-12 break-words break-all' value={creator} onChange={(e)=>setCreator(e.target.value)}/>
                </div>
                <div>
                    <button className='bg-slate-100 text-black p-2 m-2'>POST</button>
                </div>
                
            </form>
        
        </div>
        </div>

        <div>
            <h1 className='text-4xl hover:animate-pulse font-light'> Posts</h1>
            {
                PostData.map((Ele)=>{
                    return(
                        <>
                        <div className='border bg-gray-50 p-12 m-4'> 
                        <div key={Ele.id} className='flex '>
                            <div>
                                <h1 className='text-2xl  font-extralight'>{Ele.Name}</h1>
                                <h1 className=' text-xl  p-4 font-light'>{Ele.content}</h1>
                            </div>
                            <h1 className='font-extralight p-2 text-xs'>{Ele.Creator}</h1>
                        
                        </div>
                        <button className='bg-red-100 text-center' onClick={()=>remove()}> Remove </button>
                        </div>
                        </>
                    )
                })
            }
        </div>




    </>
  )
}

export default Blogpost