import React, { Component } from 'react'
import './Iframe.css';

export default class Iframe extends Component {
    render() {

        window.open(this.props.location.state.url,"_self")
        return (
            <div className="Iframe">
            </div>
        )
    }
}
