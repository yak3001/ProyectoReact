import React from 'react';
import Item from './Item'
import productos from './Productos';

const ItemList = () => {
    return (
        <>
            {productos.map((item) => (
                <Item
                    key={item.id}
                    categoría={item.categoría}
                    título={item.título}
                    precio={item.precio}
                    id={item.id}
                />
            ))};
        </>
    )
};


export default ItemList

