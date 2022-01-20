import '../App.css';
import ItemCount from './ItemCount.jsx';

const onAdd = (numeroItems) => {
    console.log (numeroItems);
}
const ItemListContainer = ({ greeting }) => {


    return (
        <div className="App-header">
            <h1>Marketing | Diseño | Web</h1>
            <p>{greeting}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer