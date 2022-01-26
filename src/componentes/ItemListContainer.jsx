import '../App.css';
import ItemCount from './ItemCount';
import ItemList from './ItemList'
import { getFetch } from './Item';
import { useEffect, useState } from 'react';
import spinner from '../media/spinner.svg';



//FUNCION onAdd PARA AGREGAR ITEMS AL CARRITO
const onAdd = (numeroItems) => {
    console.log(numeroItems);
}

//CONTENEDOR ITEMS

//PROMESAS
const ItemListContainer = ({ greeting }) => {
    const [items, setListaProductos] = useState([])
    const [loading, setloading] = useState(true) // Función para simulación tiempo de carga
    useEffect(() => { //Se ejecuta después del primer render
        getFetch
            .then(result => setListaProductos(result))
            .catch(error => console.log(error))
            .finally(() => setloading(false))
    }, []) //Se agrega un array vacío para que se ejecute solo una vez 
    console.log({ items })

    return (
        <div className="App-header">
            <h1>Marketing | Diseño | Web</h1>
            <p>{greeting}</p>
            {loading ?
                <img src={spinner} alt='Loading' /> : <ItemList />}

            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
}
export default ItemListContainer