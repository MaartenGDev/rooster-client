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
        const { start, end, title, active, room, teacher } = this.props

        return (
            <div className="lesson ">
                <div className="lesson-times">
                    <p><b>{ start }</b></p>
                    <p><b>{ end }</b></p>

                </div>
                <div className={"lesson-details " + (active ? "lesson-active" : "")}>
                    <div className="lesson-details-room">
                        <span className={"lesson-color " + "lesson-color-" + this.getLessonColor(title)}></span>
                        <div className="lesson-location">
                            <p className="lesson-details-title"><span>{ title }</span></p>
                            <p className="lesson-details-classroom">{ room }</p>
                        </div>
                    </div>
                    <span className="lesson-teacher">{ teacher }</span>
                </div>
            </div>
        );
    }
}

export default Lesson;
