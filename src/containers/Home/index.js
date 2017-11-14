import React, { Component } from 'react'
import * as actions from './actions'
import * as selectors from './selectors'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import Title from './../../components/Title'

const mapStateToProps = createStructuredSelector({
    title: selectors.getTitle()
})

const mapDispatchToProps = dispatch => ({
    setTitle: (value) => dispatch(actions.setTitle(value))
})

class Home extends Component {

    onCLickButton = () => {
        this.props.setTitle(this.inputValue.value)
    }

    render(){
        return(
            <div>
                <Title title={this.props.title} />
                <input type="text" ref={(input) => { this.inputValue = input }} />
                <button onClick={this.onCLickButton}>Set Title</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)