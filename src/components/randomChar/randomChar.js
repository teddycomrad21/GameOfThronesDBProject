import React, {Component, useState, useEffect} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';


// =============================================== классовый способ

// export default class RandomChar extends Component {

//     gotService = new gotService();
//     state = {
//         char: {},
//         loading: true,
//         error: false
//     }

//     componentDidMount() {
//         this.updateChar();
//         this.timerId = setInterval(this.updateChar, 15000);
//     }

//     componentWillUnmount(){
//         clearInterval(this.timerId);
//     }

//     onCharLoaded = (char) => {
//         this.setState({
//             char,
//             loading: false
//         })
//     }

//     onError = (err) => {
//         this.setState({
//             error: true,
//             loading: false
//         })
//     }

//     updateChar = () => {
//         const id = Math.floor(Math.random()*140 + 25); //25-140
//         this.gotService.getCharacter(id)
//             .then(this.onCharLoaded)
//             .catch(this.onError);
//     }

//     render() {
//         const { char, loading, error } = this.state;

//         const errorMessage = error ? <ErrorMessage/> : null;
//         const spinner = loading ? <Spinner/> : null;
//         const content = !(loading || error) ? <View char={char}/> : null;

//         return (
//             <div className="random-block rounded">
//                 {errorMessage}
//                 {spinner}
//                 {content}
//             </div>
//         );
//     }
// }


// ======================================================= на хуках!



export default function RandomChar() {
    let gotService = new GotService();

    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    function onError(err) {
        setError(true);
        setLoading(false);
    }

    function updateChar() {
        const id = Math.floor(Math.random()*140 + 25); //25-140
        gotService.getCharacter(id)
            .then((pers => {
                setChar(pers);
                setLoading(false);
            }))
            .catch(onError);
    }

    useEffect(() => {
        updateChar();
        let timerId = setInterval(updateChar, 15000);

        return () => {
            clearInterval(timerId);
        }
    }, []);


    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={char}/> : null;

    return (
            <div className="random-block rounded">
                 {errorMessage}
                 {spinner}
                 {content}
            </div>
    )
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}