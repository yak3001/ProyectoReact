import './App.css';
import NavBar from './componentes/NavBar.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx';


// Se empieza a editar desde app
function App() {

  return (
    <main>
        <NavBar />
        <ItemListContainer greeting='Tenemos lo que necesitas para tu inmersión en el mundo digital'/>
    </main>
  );
}

export default App;
