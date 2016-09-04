import React from 'react';

class Lesson extends React.Component {
    render() {
        return (
            <div className="lesson">
                <div className="lesson-times">
                    <p><b>{this.props.start}</b></p>
                    <p><b>{this.props.end}</b></p>

                </div>
                <div className="lesson-details">
                    <div className="lesson-details-room">
                        <span className="lesson-color"></span>
                        <div className="lesson-location">
                            <p className="lesson-details-title"><span>{this.props.title}</span></p>
                            <p className="lesson-details-classroom">{this.props.room}</p>
                        </div>
                    </div>
                    <span className="lesson-teacher">{ this.props.teacher }</span>
                </div>
            </div>
        );
    }
}

export default Lesson;