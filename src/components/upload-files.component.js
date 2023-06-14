import React, { Component } from "react";
import UploadService from "../services/upload-files.service";

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      fileInfos: [],
    };
  }
 

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      currentFile: currentFile,
    });

    UploadService.upload(currentFile, (event) =>
      (response) => response.json())
      .then(response => {
        this.setState({
          fileInfos: response.data,
        })
      });
   


    this.setState({
      selectedFiles: undefined,
    });
  }

  render() {
    const {
      selectedFiles,
      fileInfos,
    } = this.state;

    return (
      <div>
    
        <label className="btn btn-default">
          <input type="file" onChange={this.selectFile} />
        </label>

        <button
          className="btn btn-dark"
          disabled={!selectedFiles}
          onClick={this.upload}
        >
          Upload
        </button>

       

        <div className="table">

          <tbody>
            <tr>
              <th>empId1</th>
              <th>empId2</th>
              <th>projectId</th>
              <th>daysWorked</th>

            </tr>

            {fileInfos.map((item, index) => (
              <tr key={index}>
                <td>{item.empId1}</td>
                <td>{item.empId2}</td>
                <td>{item.projectId}</td>
                <td>{item.daysWorked}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </div>

    );
  }
}
