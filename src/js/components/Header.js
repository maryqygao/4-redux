import React from 'react';

import Title from './Header/Title';

export default class Header extends React.Component {
  handleInputChange = e => {
    this.props.changeTitle(e.target.value);
  };

  render() {
    return (
      <header>
        <Title title={this.props.title} />
        <input
          value={this.props.title}
          onChange={this.handleInputChange}
          type="text"
        />
      </header>
    );
  }
}
