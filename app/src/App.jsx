import React, {Component} from 'react'
import {render} from 'react-dom'
import GridLayout from 'react-grid-layout';
import ListView from './components/Containers/ListView'
import ToolBar from './components/Toolbar/Default'
import InfoBar from './components/Info/Default'
import FileBrowser from './components/FileBrowser/Default'







export default class App extends Component {
    render() {

        var layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, static: true},
            {i: 'c', x: 2, y: 0, w: 1, h: 2, static: true}
          ];

        return (
          
            <GridLayout className="layout" layout={layout} cols={3} rowHeight={100} width={1200}>
            <div key="a"><ListView /></div>
            <div key="c"><FileBrowser /></div>
          </GridLayout>
        )
    }
}
