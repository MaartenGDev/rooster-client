import React from 'react';

class Lesson extends React.Component {
    render(){
        return (
            <div className="lesson">
                <h1>{ this.props.title }</h1>
                <p>{this.props.start} tot {this.props.end}</p>
                <p><b>Teacher: </b>{this.props.teacher}</p>
                <p><b>Room: </b>{this.props.room}</p>
            </div>
        );
    }
}

export default Lesson;