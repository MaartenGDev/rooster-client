import React from 'react';

export default class Calendar extends React.Component {
    render(){
        return (
            <div className="calendar">
                <div className="calendar-bar">
                    <p className="calendar-title">CLASS TIMELINE</p>
                </div>
                {this.props.events}
            </div>
        );
    }
}
