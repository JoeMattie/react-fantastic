import 'normalize.css';
import './styles/App.scss';

import React, { Component } from 'react';
import { render } from 'react-dom';

import io from 'socket.io-client';

let socket = io();

export const App = React.createClass({

    childContextTypes: { io: React.PropTypes.object },

    getInitialState() { return { message: '' } },

    getChildContext() { return { io: socket } },

    componentDidMount() {
        socket.emit('init', 'exampleMessage' );

        socket.on('init', msg => {
            console.log(msg);
            this.setState({ message: msg });
        });
    },

    render() {
        return (
            <div className='app-root'>
                HELLO WORLD! <br/>
                { this.state.message }
            </div>
        )
    }
});

render(<App/>, document.getElementById('root'));