import React from 'react';

class Calendar extends React.Component {
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

export default Calendar;