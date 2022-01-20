import { useState } from 'react';
import logo from '../media/logo.jpg';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../App.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

// BOTÓN AUMENTAR
    const handlerMore = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
// BOTÓN DISMINUIR
    const handlerLess = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
// BOTÓN AGREGAR
    const addCart = () => {
        onAdd (count)
    }
    
    return (
        
<Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src={logo} />
  <Card.Body>
<div className='Card'>
    <Card.Text>¿Cuántos quieres?</Card.Text>
    <Card.Title><b>{count}</b></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">
      Productos disponibles: {stock}
    </Card.Subtitle>
    <div>
    <Button variant="outline-dark" size="sm" onClick={handlerMore} >Aumentar</Button>
    <Button variant="outline-dark" size="sm" onClick={handlerLess} >Disminuir</Button></div><br />
    <div className="d-grid gap-2">
    <Button variant="success" size="sm" onClick={addCart} >Agregar al Carrito</Button>
    </div>
    </div>
  </Card.Body>
</Card>



        // <p style={estilos}>{count} <button onClick={handlerMore} >Aumentar</button><button onClick={handlerLess} >Disminuir</button><button onClick={addCart} >Agrega al carrito</button></p>
    )
}

export default ItemCount