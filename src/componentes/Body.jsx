import '../App.css';
import logo from '../media/logo.jpg';

const Body = () => {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="MentorMenta Studio" />
            <p>
                Somos los mentores de tu inmersión hacia el mundo digital
            </p>
            <a
                className="App-link"
                href="https://mentormenta.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Próximamente
            </a>
        </div>
    )
}

export default Body