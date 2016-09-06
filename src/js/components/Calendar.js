import React from 'react';

class Calendar extends React.Component {
    render(){
        const { events } = this.props;

        return (
            <div className="calendar">
                <div className="calendar-bar">
                    <p className="calendar-title">CLASS TIMELINE</p>
                </div>
                { events }
            </div>
        );
    }
}

export default Calendar;
