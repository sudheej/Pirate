import React, { Component } from 'react';
import { TitleBar, Toolbar, Text } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <TitleBar>
        <Toolbar height="15" width="25" horizontalAlignment="center"/>
      </TitleBar>
    );
  }
}