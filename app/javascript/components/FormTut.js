import React, { Component } from 'react'

export default class FormTut extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: "phamkhanh90@co.jp",
      password: "1234567890",
      description: "this is description",
      gender: 0,
      txtGender: "fe",
      txtStatus: true
    }
  }

  onHandleInputName = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onHandleSubmitForm = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  onHandleReset = (event) => {
    this.setState({
      name: "",
      password: ""
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-info">
                <div className="panel-heading">
                  <h3 className="panel-title">Panel title</h3>
                </div>
                <div className="panel-body">
                  <form action="" method="POST" role="form" onSubmit={this.onHandleSubmitForm}>
                    <legend>Form title</legend>
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" name="name" className="form-control" placeholder="Input field" onChange={this.onHandleInputName} value={this.state.name} />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" name="password" className="form-control" placeholder="Input field" onChange={this.onHandleInputName} value={this.state.password} />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea name="description" className="form-control" rows="3" required="required" onChange={this.onHandleInputName} value={this.state.description}></textarea>
                    </div>
                    <div className="form-group">
                      <label>Gender</label>
                      <select name="gender" className="form-control" required="required" onChange={this.onHandleInputName} value={this.state.gender}>
                        <option value={1}>Male</option>
                        <option value={0}>Female</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Options</label>
                      <div className="radio">
                        <label>
                          <input type="radio" name="txtGender" value="ma" onChange={this.onHandleInputName} checked={this.state.txtGender === "ma"} />
                          Male
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" name="txtGender" value="fe" onChange={this.onHandleInputName} checked={this.state.txtGender === "fe"} />
                          Female
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Options</label>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" value={this.state.txtStatus} name="txtStatus" onChange={this.onHandleInputName} checked={this.state.txtStatus === true} />
                          Status
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <br/>
                    <button type="reset" className="btn btn-primary" onClick={this.onHandleReset}>Reset</button>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
