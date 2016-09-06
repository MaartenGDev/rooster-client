import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar';
import Day from './components/Day';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lessons: []
        };
    }

    componentDidMount() {
        fetch('https://api.maartendev.me')
            .then((res) => res.json())
            .then((data) => this.setState({lessons: data.data.lessons}));
    }

    groupByDay(lessons) {
        return lessons.reduce((events, lesson) => {
            const day = lesson.details.day.id;

            if (!(day in events)) {
                events[day] = [];
            }

            events[day].push(lesson);

            return events;
        }, []);
    }

    render() {
        const { lessons } = this.state;

        const events = this.groupByDay(lessons).map((lessons) => {
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
