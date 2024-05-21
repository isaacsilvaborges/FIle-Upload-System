import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {
    selectedFile: null,
    fileUploadedSuccessfully: false
  }

  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]})
  }

  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "demo file",
      this.state.selectedFile,
      this.state.selectedFile.name
    )

    //call api, like rebooting the application
    console.log(formData);
    this.setState({selectedFile: null});
    this.setState({fileUploadedSuccessfully: true})
  }

  fileData = () => {
    if (this.state.selectedFile) {
      <div>
        <h2>File Details:</h2>
        <p>FIle Name: {this.state.selectedFile.name}</p>
        <p>FIle type: {this.state.selectedFile.type}</p>
      </div>
    }
  }

  render() {
    return (
      <div>
        <h2>Jinmeister File Upload System</h2>
        <h3>File Upload with React and Serverless API!</h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>
            Upload
          </button>
        </div>
        {this.fileData()}
      </div>
    )
  }
}
export default App;
