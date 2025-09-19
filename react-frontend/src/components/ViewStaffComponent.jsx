import React, { Component } from 'react';
import StaffService from '../services/StaffService';

class ViewStaffComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      staff: {},
    };
  }

  componentDidMount() {
    StaffService.getStaffById(this.state.id).then((res) => {
      this.setState({ staff: res.data });
    });
  }

  render() {
    const { firstName, lastName, emailId, salary, mobilePhone } = this.state.staff;

    return (
      <div>
        <br />
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">View Staff Details</h3>
          <div className="card-body">
            <div className="row">
              <label>Staff First Name: </label>
              <div> {firstName}</div>
            </div>
            <div className="row">
              <label>Staff Last Name: </label>
              <div> {lastName}</div>
            </div>
            <div className="row">
              <label>Staff Email ID: </label>
              <div> {emailId}</div>
            </div>
            <div className="row">
              <label>Staff Salary: </label>
              <div> {salary}</div>
            </div>
            <div className="row">
              <label>Staff Mobile Phone: </label>
              <div> {mobilePhone}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewStaffComponent;
