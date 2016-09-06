import React from 'react';
import Lesson from './lesson';

export default class Day extends React.Component {
    render() {
        let lessons = this.props.lessons;
        let firstLesson = this.props.lessons[0];
        lessons = lessons.map((lesson) => {
            let details = lesson.details;
                return (
                    <Lesson
                        key={details.day.id + details.time.start + details.time.end}
                        title={lesson.name}
                        start={details.time.start}
                        end={details.time.end}
                        room={details.room}
                        teacher={details.teacher}
                        active={details.active}
                    />
                )
            }
        );
        return (
            <div className="day">
                <div className="day-details">
                    <span className="date-name">{ firstLesson.details.day.name }</span>
                    <br />
                    <span className="date-display">{ firstLesson.details.day.display_date }</span>
                </div>
                <div className="day-lessons"> {lessons}</div>
            </div>
        );
    }
}
