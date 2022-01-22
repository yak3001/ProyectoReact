import '../App.css';
import { useEffect, useState } from 'react';
import { getFetch } from './ItemList';
import ItemCount from './ItemCount.jsx';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import '../App.css';
import logo from '../media/logo.jpg';
import spinner from '../media/spinner.svg'


//FUNCION onAdd PARA AGREGAR ITEMS AL CARRITO
const onAdd = (numeroItems) => {
    console.log(numeroItems);
}


//CONTENEDOR ITEMS
const ItemListContainer = ({ greeting }) => {
    //ACCIÓN DE PROMESA
    const [items, setItems] = useState([])
    const [loading, setloading] = useState(true) // Función para simulación tiempo de carga
    
    useEffect(() => { //Se ejecuta después del primer render
        getFetch
            .then(result => setItems(result))
            .catch(error => console.log(error))
            .finally(()=> setloading(false))
    }, []) //Se agrega un array vacío para que se ejecute solo una vez 
    
    console.log(items)

    return (
        <div className="App-header">
            <h1>Marketing | Diseño | Web</h1>
            <p>{greeting}</p>
            {/* MAP PARA MOSTRAR PRODUCTOS*/}
            { loading ? <img src={spinner} alt='Loading' /> :
                items.map(item =>
                <CardGroup key={item.id}>
                    <Card  style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={logo} />
                        <Card.Body>
                            <Card.Title>{`${item.categoría} ${item.título}`} </Card.Title>
                            <Card.Text>
                                {`Precio: $${item.precio}`}
                            </Card.Text>
                            <Button variant="primary">Conoce más</Button>
                        </Card.Body>
                    </Card>
                    </CardGroup>
                )}
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
                }

export default ItemListContainer