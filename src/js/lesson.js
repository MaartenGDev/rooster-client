import React from 'react';

class Lesson extends React.Component {

    getLessonColor(name){
        return {
            'Microsoft Technical Association': 'red',
            'Android': 'pink',
            'Webdesign PHP': 'purple',
            'Nederlands 3F': 'teal',
            'Loopbaan en Burgerschap': 'indigo',
            'Engels': 'blue',
            'Project': 'orange',
            'Java': 'cyan'
        }[name];
    }

    render() {
        console.log(this.props.active);
        return (
            <div className="lesson ">
                <div className="lesson-times">
                    <p><b>{this.props.start}</b></p>
                    <p><b>{this.props.end}</b></p>

                </div>
                <div className={"lesson-details " + (this.props.active ? "lesson-active" : "")}>
                    <div className="lesson-details-room">
                        <span className={"lesson-color " + "lesson-color-" + this.getLessonColor(this.props.title)}></span>
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