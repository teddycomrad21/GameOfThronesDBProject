import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


// class App extends Component {
//     state = {
//         num: 0
//     }

//     increment = () => {
//         this.setState({
//             num: this.state.num + 1
//         })
//     }

//     decrement = () => {
//         this.setState({
//             num: this.state.num - 1
//         })
//     }

//     render() {
//         const {num} = this.state;
//         return (
//             <div>
//                 <h1>{num}</h1>
//                 <button
//                     onClick={this.increment}>Increment
//                 </button>
//                 <button
//                     onClick={this.decrement}>Decrement
//                 </button>
//             </div>
//         )
//     }
// }

// function App() {
//     let [likes, setCount] = useState(0);

//     function increment() {
//         setCount(likes+1);
//     }

//     function decrement() {
//         setCount(likes-1);
//     }

//     return (
//         <div>
//             <h1>{likes}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }


ReactDOM.render(<App />, document.getElementById('root'));