import React from 'react';

export default class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 0
    };
  }

  selectTab(index) {
    this.setState({selected: index});
  }

  render() {
    return (
      <section id="tab">
        <h1>Tabs</h1>
        <ul id="tab-titles">
          {this.props.tabs.map((el, index) => {
            return (
            <li key={index}
            class = {this.state.selected === index ? 'active' : ''}
            onClick={() => this.selectTab(index)}>
              <span>{el.title}</span>
            </li>
            )
          })}
        </ul>

        <section id="tab-content">
          <p>{this.props.tabs[this.state.selected].content}</p>
        </section>

      </section>
    );
  }
}