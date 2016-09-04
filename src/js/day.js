import React from 'react';
import Lesson from './lesson';

class Day extends React.Component {
    render() {
        let lessons = this.props.lessons;

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
                    />
                )
            }
        );

        return (
            <div className="lesson"><h1>{ this.props.name }</h1>{lessons}</div>
        );
    }
}

export default Day;