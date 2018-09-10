import React, { Component } from 'react';
import { Box, Text } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <Box background="#f1f2f4" label="Details" padding="10px 30px" width={500}>
        <Text>Some text...</Text>
      </Box>
    );
  }
}