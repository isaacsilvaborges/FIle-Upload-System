import './App.css'; //Imports the style of App
import React, { Component } from 'react'; //Componet is a block from React

class App extends Component { //Creation of the app

  state = { //Boolean state
    selectedFile: null,
    fileUploadedSuccessfully: false
  }

  onFileChange = event => { //Extracts the event
    this.setState({selectedFile: event.target.files[0]})
  }

  onFileUpload = () => { //Holds the state and informations regarding the file
    const formData = new FormData();
    formData.append(
      "demo file",
      this.state.selectedFile,
      this.state.selectedFile.name
    )

    //call api, like rebooting the application and printing information
    console.log(formData);
    this.setState({selectedFile: null});
    this.setState({fileUploadedSuccessfully: true})
  }

  fileData = () => { //Extracts everything from the file and uploads
    if (this.state.selectedFile) {
      const file = this.state.selectedFile;
      const lastModifiedDate = new Date(file.lastModified);
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {file.name}</p>
          <p>File Type: {file.type}</p>
          <p>
            Last Modified:{" "}
            {lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else if (this.state.fileUploadedSuccessfully) {
        return (
          <div>
            <br />
            <h4>Your file has been succesfully uploaded.</h4>
          </div>
        );
    } else {
        return (
          <div>
            <br />
            <h4>Choose a file and then press the Upload button</h4>
          </div>
        );
    }
  }

  render() { //Creates the screen with the functions
    return (
      <div className="container">
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
    );
  }
}
export default App;
