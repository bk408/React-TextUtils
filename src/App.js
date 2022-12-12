import logo from './logo.svg';
import './App.css';

let name = "Bhavya";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
       <div className="container">
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, cum deserunt consectetur sed quae porro veniam magni eum, accusantium facilis itaque quos dolor iusto ratione illo. Ea a voluptates qui commodi sapiente rerum adipisci!</p>
       </div>
    </>
    
  );
}

export default App;
