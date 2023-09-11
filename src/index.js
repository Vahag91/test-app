import React from 'react';
import ReactDOM from 'react-dom/client';
import { Component } from 'react';
import "./index.css"
import Header from './components/Header';
import Input from './components/Input';

class App extends Component {



    render() {
        return (
            <div className='main'>
                <Header />
                <Input />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);


