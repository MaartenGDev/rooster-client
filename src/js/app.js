import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './Calendar';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Test36 Calendar</h1>
                <Calendar/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.app'));
