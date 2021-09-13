import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// function App() {

//     const [count, setCount] = useState(0);

//     function increase() {
//         return setCount(prev => prev + 1);
//     }

//     function decrease() {
//         return setCount(prev => prev - 1);
//     }

//     useEffect(() => {
//         console.log(`Вы нажали ${count} раз`);
//     })

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={increase}>Increase</button>
//             <button onClick={decrease}>Decrease</button>
//         </div>
//     )
// }


ReactDOM.render(<App />, document.getElementById('root'));