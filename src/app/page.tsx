'use client'

import React, {  useReducer, useState } from "react";
import { Reducer } from "@/reducer/reducer";
import { Item } from "../../types/item";


const Home=()=> {
  
 const arr:Array<Item> =[]
  
 const [inputValue,setInputValue] = useState('')
 const [list,dispatch] = useReducer(Reducer,[])
 localStorage.setItem("lista",JSON.stringify(list))


 const handleAdd = ()=>{
    dispatch({
      type: 'add',
      payload:{
        text: inputValue.trim()
      }
    });
    setInputValue('')
  }
  const handleDel = (id:number)=>{
    dispatch({
      type:"del",
      payload:{
        id
      }
    })
  }
  const handleToggle =(id:number)=>{
    const item = list.find(it=>it.id === id)
    if(item){
      dispatch({
        type: 'toogleDone',
        payload:{
          id
        }
      })
    }
   
    
  }
  const handleEdit=(id:number)=>{
   const item = list.find(it=>it.id === id)
   if(!item)return false;
    const newText = window.prompt('Editar item',item.text)
    if(!newText || newText?.trim() === '') return false;
    dispatch({
      type:'edit',
      payload:{
        id,
        newText
       
      }
    })
   
  }    
 
 return(
    <div className="  min-h-screen w-full justify-around bg-gray-300 text-blac flex flex-col p-2 md:w-9/12 md:m-auto"> 
      
      <div className=" overflow-y-scroll  max-h-96 flex-1 border-2 rounded border-primary100 bg-secundary/40">
        <ul>
          {list.map((item)=>(
            <li className={`
            flex
            justify-around
            bg-gray-200
            p-2
            m-1
            rounded
            border-2
            border-primary200/50
            text-secundary
            font-sans
            font-semibold
            items-center
           
            `} key={item.id}><span className="flex-1">{item.text}</span><span onClick={()=>handleDel(item.id)} className="mx-2 px-2 cursor-pointer">X</span><input className="w-4 mx-3 cursor-pointer" type="checkbox" name="check" id="" onClick={()=>handleToggle(item.id)} /><span className="cursor-pointer" onClick={()=>handleEdit(item.id)}>Editar</span></li>
          ))}
        
        </ul>

      </div>
      <div className=" rounded my-1 w-full flex justify-around bg-gray-200 flex-2 h-40">
               <div className="flex-1">
                <input value={inputValue} onChange={e=>setInputValue(e.target.value)} className=" w-[90%] outline-none p-1 m-1 rounded bg-secundary/40 font-semibold font-serif  text-white" type="text"  placeholder="Escreva aqui seu item" />
               </div>
               <div className="bg-primary w-20 h-8 rounded p-1 m-1 text-secundary font-sans font-bold duration-500 ease-in-out hover:bg-primary100">
                <button onClick={handleAdd} >Adicionar</button>
               </div>
               

        </div>

      <p className="text-center text-primary100">&copy;Todos os direitos reservado </p>
    </div>
  );
}

export default Home;