import{ useState, useEffect} from "react"
import ItemList from"./ItemList"
import { withLoading } from "../assets/hoc/whitLoading"
import{ useParams } from "react-router"


const ItemListWithLoading = withLoading (ItemList) 

  function ItemListContainer (){  
    const [items, setItems] = useState([])
    const {id} =  useParams ()
  

  useEffect(()=>{

    const allproduct = 'https://dummyjson.com/products'
    const productcategory = `https://dummyjson.com/products/category/${id}`

        
      fetch(id ? productcategory : allproduct)
       .then(res => res.json())
       .then(data => setItems (data.products))
  }, [id])

 
    return( 
     <ItemListWithLoading items={items}/>
    )

  }
  export default ItemListContainer;
  

