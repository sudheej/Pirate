import React, { Component } from 'react';
import {
  ListView,
  ListViewHeader,
  ListViewFooter,
  ListViewSection,
  ListViewSectionHeader,
  ListViewRow,
  ListViewSeparator,
  Text
} from 'react-desktop/macOs';

export default class extends Component {
  constructor() {
    super();
    this.state = { selected: null };
  }

  render() {
    return (
      <ListView background="#f1f2f4" width="500" height="700">
        <ListViewHeader>
          <Text size="11" color="#696969">Order by name</Text>
        </ListViewHeader>
        <ListViewSection header={this.renderSectionHeader('Containers')}>
          {this.renderItem('Item 1', 'app_pie')}
          {this.renderItem('Item 2', 'grizzly_bear')}
          {this.renderItem('Item 3', 'chadwick_fox')}
        </ListViewSection>
        <ListViewSeparator/>
        <ListViewSection header={this.renderSectionHeader('Images')}>
          {this.renderItem('Item 4', 'This is the fourth item.')}
          {this.renderItem('Item 5', 'This is the fifth item.')}
          {this.renderItem('Item 6', 'This is the sixth item.')}
        </ListViewSection>
        <ListViewFooter>
          <Text size="11" color="#696969">Status</Text>
        </ListViewFooter>
      </ListView>
    );
  }

  renderSectionHeader(title) {
    return (
      <ListViewSectionHeader>
        {title}
      </ListViewSectionHeader>
    );
  }

  renderItem(title, info) {
    return (
      <ListViewRow
        onClick={() => this.setState({ selected: title })}
        background={this.state.selected === title ? '#d8dadc' : null}
      >

        <svg x="0px" y="0px" width="18" height="12" viewBox="0 0 18 12" style={{ marginRight: '6px' }}>
<g>
	<path opacity="0.8" d="M4.8,33c-0.5,0-0.9-0.4-1-0.9L3.1,26h8.1c0.7,1.8,3.4,3,6.8,3c3.4,0,6.1-1.2,6.8-3h8.1l-0.7,6.1
		c-0.1,0.5-0.5,0.9-1,0.9H4.8z"/>
	<g>
		<path d="M31.8,27l-0.5,5L4.8,32l-0.5-5h6.4c1.2,1.8,3.9,3,7.4,3s6.2-1.2,7.4-3H31.8 M34,25H24c0,1.7-2.7,3-6,3s-6-1.3-6-3H2
			l0.8,7.2c0.1,1,1,1.8,2,1.8h26.5c1,0,1.9-0.8,2-1.8L34,25L34,25z"/>
	</g>
</g>
<path fill-opacity="0.12" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M25,26
	c0,0-0.5,3-7,3s-7-3-7-3H3.2L3,25L5.7,3.7c0.1-1,1-1.7,2-1.7h20.6c1,0,1.8,0.7,2,1.7L33,25l-0.6,1L25,26z"/>
<line fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" x1="8.5" y1="7" x2="27.5" y2="7"/>
<line fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" x1="8" y1="11" x2="28" y2="11"/>
<line fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" x1="7.5" y1="15" x2="28.5" y2="15"/>
<line fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" x1="7" y1="19" x2="29" y2="19"/>
</svg>

        <Text color="#414141" size="13">{info}</Text>
      </ListViewRow>
    );
  }
}