import React, { Component } from "react";
import { DropZone } from "../lib";
import moment from 'moment'

class App extends Component {
  state = {
    jsonResult: null
  };
    convertCvs() {
        let data = this.state.jsonResult
       let filteredResults = []
        for (var i = 0; i < data.length; i++) {
 
            let m = moment(data[i]["DTSTART-DATE"]).format('MM')
            if (m === this.state.input) {
               
                filteredResults.push(data[i])
                
            }
            
          
        }
        console.log(filteredResults)
        window.JSONToCSVConvertor(filteredResults, "Matt's Hours", true)
    }
    handleChange(e) {
        this.setState({input: e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log(e)
        console.log(this.state.input)
    }


    render() {
        var dropStyle = {
            margin: '0 auto', 
            position: 'relative',
            width: '200px',
            height: '200px',
            borderWidth: '2px',
            borderColor: 'rgb(102, 102, 102)',
            borderStyle: 'dashed',
            borderRadius: '5px'
        }

        var containerStyle = {
            marginTop: '200px'
        }

        var formStyle = {
           textAlign: 'center'
        }

        var colStyle = {
            margin: '0 auto',
            textAlign: 'center',
            paddingTop: '100px', 
            paddingBottom: '100px'
        }

        var rowStyle = {
            borderColor: 'black',
            borderStyle: 'solid',
            borderWidth: '5px'
        }
      return (
          <div className="container" style={containerStyle}>
              <h2 style={formStyle}>Tracked Tasks - Filter by Month</h2>
              <div className="row" style={rowStyle}>
                  <div className="col-md-6" style={colStyle}>
                      <h3>Step 1: Input Month</h3>
                      <br />
                      <form style={formStyle}>
                      <input type="text" onChange={this.handleChange.bind(this)} placeholder="MM"></input>
                      
                  </form>
              </div>
          
     
                  <div className="col-md-6" style={colStyle}>
                      <h3> Step 2: Select CVS File </h3>
                      <br />
                      <DropZone style={dropStyle}
            getJson={jsonResult => {
                        this.setState({ jsonResult }, () => {
                            this.convertCvs()
                        });
            }}
          >
            <p>Add a file and see for yourself</p>
                </DropZone>
                
         
            </div>

           </div>
              </div>

    );
  }
}

export default App;
