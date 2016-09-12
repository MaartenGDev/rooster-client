import React from 'react';

class Calendar extends React.Component {
    render(){
        const { events } = this.props;

        return (
            <div className="calendar">
                <div className="calendar-bar">
                    <p className="calendar-title">ROOSTER</p>
                </div>
                { events }
            </div>
        );
    }
}

export default Calendar;
