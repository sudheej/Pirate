import React, { Component } from 'react';
import {execute} from '../../core/containers'
import {getImages} from '../../core/images'
import {FaCube} from 'react-icons/fa'
import { ProgressCircle } from 'react-desktop/macOs';
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
    this.state = { 
      selected: null,
      value: [],
      images: []
     };
  }

  componentDidMount() {
    execute().then(value => {

        this.setState({value: value});
    });
    getImages().then(images => {

      this.setState({images: images});
  });
   
}

  render() {
    return (
      <ListView background="#f1f2f4" width="500" height="600">
        <ListViewHeader>
          <Text size="11" color="#696969">Order by name</Text>
        </ListViewHeader>
        <ListViewSection header={this.renderSectionHeader('Containers')}>
          {this.state.value.length == 0 ? this.renderProgressCircle(): this.state.value.map(element => {
            return this.renderItem(element.ID, element.Name,element.State,element.Status)
          })}
        </ListViewSection>
        <ListViewSeparator/>
        <ListViewSection header={this.renderSectionHeader('Images')}>
        {this.state.value.length == 0 ? this.renderProgressCircle(): this.state.images.map(element => {
          return this.renderItem(element.ID, element.Repository,element.Tag,element.Size)
        })}
        </ListViewSection>
        <ListViewFooter>
          <Text size="11" color="#696969">Status</Text>
        </ListViewFooter>
      </ListView>
    );
  }

  renderListView() {
    return (
      <ListViewRow>TESTING</ListViewRow>
    )
  }

  renderProgressCircle() {
    return (
   <ProgressCircle size={20}></ProgressCircle>
    )
  }
  renderSectionHeader(title) {
    return (
      <ListViewSectionHeader>
        {title}
      </ListViewSectionHeader>
    );
  }


  renderImageIcon() {
    return(
      <FaCube/>
    )
  }

  renderItem(title, info, state,status) {
    return (
      <ListViewRow
        onClick={() => this.setState({ selected: title })}
        background={this.state.selected === title ? '#d8dadc' : null}
      >

      {this.renderImageIcon()}

        {state === 1 ? <Text color="#774949" size="13">&nbsp;{info}({status})</Text>:<Text color="#414141" size="13">&nbsp;{info}({status})</Text>}
      </ListViewRow>
    );
  }
}