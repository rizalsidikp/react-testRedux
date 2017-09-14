import React, { Component } from 'react'
import Title from './../../components/Title'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: ''
        }
    }

    onCLickButton = () => {
        this.setState({title: this.inputValue.value});
    }

    render(){
        return(
            <div>
                <Title title={this.state.title} />
                <input type="text" ref={(input) => { this.inputValue = input }} />
                <button onClick={this.onCLickButton}>Set Title</button>
            </div>
        )
    }
}

export default Home