import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './calendar';
import Day from './day';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lessons: []};
    }

    componentDidMount() {
        fetch('https://api.maartendev.me')
            .then((res) => res.json())
            .then((data) => this.setState({lessons: data.data.lessons}));
    }

    groupByDay(lessons) {
        let events = [];
        lessons.forEach((lesson) => {
                var day = lesson.details.day.id;

                if (!(day in events)) events[day] = [];
                events[day].push(lesson);
            }
        );
        return events;
    }

    render() {
        let events = this.groupByDay(this.state.lessons);

        events = events.map(function(lessons){
            return (
                <Day key={lessons[0].details.day.id} lessons={lessons}/>
            )
        });

        return (
            <div>
                <Calendar events={events}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.app'));
