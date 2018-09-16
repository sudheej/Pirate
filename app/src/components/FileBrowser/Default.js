import React from 'react'
import ReactDOM from 'react-dom'
import Moment from 'moment'

import FileBrowser from 'react-keyed-file-browser'

export default class extends React.Component {

    constructor() {
        super();
         
  this.state = {
    files: [
      {
        key: '/photos/animals/cat in a hat.png',
        modified: +Moment().subtract(1, 'hours'),
        size: 1.5 * 1024 * 1024,
      },
      {
        key: '/photos/animals/kitten_ball.png',
        modified: +Moment().subtract(3, 'days'),
        size: 545 * 1024,
      },
     
    ],
  }


  
  this.handleCreateFolder = (key) => {
    this.setState(state => {
      state.files = state.files.concat([{
        key: key,
      }])
      return state
    })
  }
  this.handleCreateFiles = (files, prefix) => {
    this.setState(state => {
      const newFiles = files.map((file) => {
        let newKey = prefix
        if (prefix !== '' && prefix.substring(prefix.length - 1, prefix.length) !== '/') {
          newKey += '/'
        }
        newKey += file.name
        return {
          key: newKey,
          size: file.size,
          modified: +Moment(),
        }
      })

      const uniqueNewFiles = []
      newFiles.map((newFile) => {
        let exists = false
        state.files.map((existingFile) => {
          if (existingFile.key === newFile.key) {
            exists = true
          }
        })
        if (!exists) {
          uniqueNewFiles.push(newFile)
        }
      })
      state.files = state.files.concat(uniqueNewFiles)
      return state
    })
  }
  this.handleRenameFolder = (oldKey, newKey) => {
    this.setState(state => {
      const newFiles = []
      state.files.map((file) => {
        if (file.key.substr(0, oldKey.length) === oldKey) {
          newFiles.push({
            ...file,
            key: file.key.replace(oldKey, newKey),
            modified: +Moment(),
          })
        } else {
          newFiles.push(file)
        }
      })
      state.files = newFiles
      return state
    })
  }
  this.handleRenameFile = (oldKey, newKey) => {
    this.setState(state => {
      const newFiles = []
      state.files.map((file) => {
        if (file.key === oldKey) {
          newFiles.push({
            ...file,
            key: newKey,
            modified: +Moment(),
          })
        } else {
          newFiles.push(file)
        }
      })
      state.files = newFiles
      return state
    })
  }
  this.handleDeleteFolder = (folderKey) => {
    this.setState(state => {
      const newFiles = []
      state.files.map((file) => {
        if (file.key.substr(0, folderKey.length) !== folderKey) {
          newFiles.push(file)
        }
      })
      state.files = newFiles
      return state
    })
  }
  this.handleDeleteFile = (fileKey) => {
    this.setState(state => {
      const newFiles = []
      state.files.map((file) => {
        if (file.key !== fileKey) {
          newFiles.push(file)
        }
      })
      state.files = newFiles
      return state
    })
  }

      }
  


  render(props) {
    return (
      <FileBrowser
        files={this.props.files}
        onCreateFolder={this.handleCreateFolder}
        onCreateFiles={this.handleCreateFiles}
        onMoveFolder={this.handleRenameFolder}
        onMoveFile={this.handleRenameFile}
        onRenameFolder={this.handleRenameFolder}
        onRenameFile={this.handleRenameFile}
        onDeleteFolder={this.handleDeleteFolder}
        onDeleteFile={this.handleDeleteFile}
      />
    )
  }
}
