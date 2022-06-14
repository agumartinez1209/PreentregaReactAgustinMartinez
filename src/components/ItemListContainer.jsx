import { useEffect, useState } from "react";
import ItemList from "./ItemList";


const ItemListContainer = ({onAdd}) => {
 
 
  const[productos, setProductos] = useState([]) 

  useEffect( () => {
    setTimeout(()=>{
      fetch("productos.json")
        .then (res => res.json ())
        .then (body => {setProductos(body)})  
        .catch (error => console.error("error:", error))
    },2000)


    },[])

  console.log(productos)
  
  return( 
    <>
    <ItemList productos = {productos} onAdd={onAdd} />
    
    </>
  )
}


export default ItemListContainer
