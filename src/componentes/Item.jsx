import productos from './Productos'
import React from 'react';
import logo from '../media/logo.jpg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

export const getFetch = new Promise((resolve, reject) => {
    let condition = true;
    //Tiempo para simular retraso
    if (condition) {
        setTimeout(() => {resolve({productos})}, 3000);
    }
    else {
        reject('rechazo')
    }
    });

const Item = ({id, categoría, título, precio}) => {
    return (
            <div>
            <CardGroup key={id}>
            <Card  style={{ width: '14rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{`${categoría} ${título}`} </Card.Title>
                    <Card.Text>
                        {`Precio: $${precio}`}
                    </Card.Text>
                    <Button variant="primary">Conoce más</Button>
                </Card.Body>
            </Card>
            </CardGroup>
            </div>
        
    );
}

export default Item
