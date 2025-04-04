import{ useState, useEffect} from "react"
import{ useParams } from "react-router"

export function ItemDetail () {

        const [detalle, setDetalle] = useState(null)
        const{id} = useParams()
        
        useEffect ( ( )=>{ 
            fetch(`https://dummyjson.com/products/${id}`)
                .then(res => res.json())
                .then(prod => setDetalle(prod));

        })
    return(     

    <div>
    <img src={detalle?.thumbnail} alt={detalle?.title}></img>
    <h1> {detalle?.title} </h1>    
    <h4>{detalle?.category}</h4>
    <p>{detalle?.description}</p>
    </div>
    )
}