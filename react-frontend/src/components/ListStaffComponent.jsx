import React, { Component } from 'react';
import StaffService from '../services/StaffService';

class ListStaffComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: [],
    };
    this.addStaff = this.addStaff.bind(this);
    this.editStaff = this.editStaff.bind(this);
    this.deleteStaff = this.deleteStaff.bind(this);
  }

  deleteStaff(id) {
    StaffService.deleteStaff(id).then((res) => {
      this.setState({
        staffs: this.state.staffs.filter((staff) => staff.id !== id),
      });
    });
  }

  viewStaff(id) {
    this.props.history.push(`/view-staff/${id}`);
  }

  editStaff(id) {
    this.props.history.push(`/add-staff/${id}`);
  }

  componentDidMount() {
    StaffService.getStaffs().then((res) => {
      this.setState({ staffs: res.data });
    });
  }

  addStaff() {
    this.props.history.push('/add-staff/_add');
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Staffs List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addStaff}>
            Add Staff
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Staff First Name</th>
                <th>Staff Last Name</th>
                <th>Staff Email Id</th>
                <th>Salary</th>
                <th>Mobile Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.staffs.map((staff) => (
                <tr key={staff.id}>
                  <td>{staff.firstName}</td>
                  <td>{staff.lastName}</td>
                  <td>{staff.emailId}</td>
                  <td>{staff.salary}</td>
                  <td>{staff.mobilePhone}</td>
                  <td>
                    <button
                      onClick={() => this.editStaff(staff.id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => this.deleteStaff(staff.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => this.viewStaff(staff.id)}
                      className="btn btn-info"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListStaffComponent;
