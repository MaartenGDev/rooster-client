import React from 'react';

class Calendar extends React.Component {
    render(){
        return (
            <div className="calendar"><h1>Calendar 2.0</h1>{this.props.events}</div>
        );
    }
}

export default Calendar;