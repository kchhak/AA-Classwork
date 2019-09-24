import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({date: new Date()});
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <section id="clock">
                <h1>Cool Clock</h1>
                <section id="things">
                    <section id="time">
                        <h2>time</h2>
                        <p>{this.state.date.getHours()} : {this.state.date.getMinutes()} : {this.state.date.getSeconds()}</p>
                    </section>
                    <section id="date">
                        <h2>date</h2>
                        
                        <p>{(new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(this.state.date)).slice(0,3)} {(new Intl.DateTimeFormat('en-US', { month: 'long' }).format(this.state.date)).slice(0,3) } { this.state.date.getDate() } { this.state.date.getFullYear() }</p>
                    </section>
                </section>
            </section>
        )
    }
}