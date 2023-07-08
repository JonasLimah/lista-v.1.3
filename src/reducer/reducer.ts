import { Item } from './../../../types/item';
type Add = {
    type: "add";
    payload:{
        text:string
    }
}
type Del = {
    type: "del";
    payload:{
        id:number;
    }
}
type Edit = {
    type: "edit";
    payload:{
        id:number;
        newText:string;
        
    }
}
type ToggleDone ={
     type: "toogleDone"
     payload:{
        id:number
     }
}

type ListAction = Add | Del | Edit | ToggleDone


export const Reducer =(state:Array<Item>,action:ListAction):Array<Item>=>{
    switch (action.type) {
        case "add":
            if(action.payload.text){
                return [...state,{done:false,id:state.length,text:action.payload.text}]
            }
            break;
        case  'del':
            return state.filter((item)=>item.id !== action.payload.id)
        case "edit" :
             return  state.map(item=>{if(item.id === action.payload.id){
                item.text = action.payload.newText
               }
               return item})
            
           
        case "toogleDone":
            return state.map(item=>{if(item.id === action.payload.id){
                item.done === !item.done
            }return item})
            
        default: state
          
    }
    return state

}