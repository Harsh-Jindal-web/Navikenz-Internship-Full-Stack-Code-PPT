import React, { Component } from 'react';
import StaffService from '../services/StaffService';

class CreateStaffComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      firstName: '',
      lastName: '',
      emailId: '',
      salary: '',
      mobilePhone: ''
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.saveOrUpdateStaff = this.saveOrUpdateStaff.bind(this);
    this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
    this.changeMobilePhoneHandler = this.changeMobilePhoneHandler.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === '_add') {
      return;
    } else {
      StaffService.getStaffById(this.state.id).then((res) => {
        let staff = res.data;
        this.setState({
          firstName: staff.firstName,
          lastName: staff.lastName,
          emailId: staff.emailId,
          salary: staff.salary,
          mobilePhone: staff.mobilePhone,
        });
      });
    }
  }
  
  saveOrUpdateStaff = (e) => {
    e.preventDefault();
    let staff = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      salary: this.state.salary,
      mobilePhone: this.state.mobilePhone,
    };
    console.log('staff => ' + JSON.stringify(staff));

    // step 5
    if (this.state.id === '_add') {
      StaffService.createStaff(staff).then((res) => {
        this.props.history.push('/staffs');
      });
    } else {
      StaffService.updateStaff(staff, this.state.id).then((res) => {
        this.props.history.push('/staffs');
      });
    }
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  changeSalaryHandler(event) {
    this.setState({ salary: event.target.value });
  }

  changeMobilePhoneHandler(event) {
    this.setState({ mobilePhone: event.target.value });
  }

  cancel() {
    this.props.history.push('/staffs');
  }

  getTitle() {
    if (this.state.id === '_add') {
      return <h3 className="text-center">Add Staff</h3>;
    } else {
      return <h3 className="text-center">Update Staff</h3>;
    }
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email Id: </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Salary: </label>
                    <input
                      placeholder="Salary"
                      name="salary"
                      className="form-control"
                      value={this.state.salary}
                      onChange={this.changeSalaryHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Mobile Phone: </label>
                    <input
                      placeholder="Mobile Phone"
                      name="mobilePhone"
                      className="form-control"
                      value={this.state.mobilePhone}
                      onChange={this.changeMobilePhoneHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateStaff}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: '10px' }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateStaffComponent;
