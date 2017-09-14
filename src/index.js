import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import styles from './index.scss'
import Home from './containers/Home'


class App extends Component {
    render(){
        return(
            <Home />
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))