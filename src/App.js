import logo from './logo.svg';
import './App.css';

function App() {
  console.log("checking app.js file")
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world!!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios('/api/products');
//       setProducts(result.data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       {products.map(product => (
//         <h2 key={product._id}>{product.name}</h2>
//       ))}
//     </div>
//   );
// }

// export default App;
