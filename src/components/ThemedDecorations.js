import React, { Component } from 'react';

export default class ThemedDecorations extends Component {
  render() {
    const ch = React.Children.map(this.props.children, child => {
      return <div className={this.props.theme}>{child}</div>;
    });
    return <div>{ch}</div>;
  }
}
