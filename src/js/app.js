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

        this.colors = ['red', 'pink', 'purple', 'teal', 'indigo', 'blue', 'orange', 'cyan', 'green', 'orange', 'brown', 'grey', 'blue-grey'];
        this.lessonsNames = [];

    }

    componentDidMount() {
        fetch('https://api.maartendev.me')
            .then((res) => res.json())
            .then((data) => this.setState({lessons: data.data.lessons}));
    }

    getLessonColor(name){

        if(this.lessonsNames.indexOf(name) === -1){
            this.lessonsNames.push(name);
        }

        return this.colors[this.lessonsNames.indexOf(name)];
    }
    groupByDay(lessons) {
        return lessons.reduce((events, lesson) => {
            const day = lesson.details.day.id;

            lesson.details.color = this.getLessonColor(lesson.name);

            if(lesson.details.room === ''){
                lesson.details.room = '-';
            }
            if(lesson.details.teacher === ''){
                lesson.details.teacher = '-';
            }
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
            const dayId = lessons[0].details.day.id;
            return (
                <Day key={dayId} lessons={lessons}/>
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
