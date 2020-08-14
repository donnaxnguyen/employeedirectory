import React, { Component } from "react";
import Employees from "./employees.js";
import Search from "./search.js";
// ** add .css styling later ** //


class Directory extends Component {
// employees is an empty array 
// empsort will be the filtered employees, also an empty array 
// search is empty quotes because it will have an output
// sorted is set to false because the employee directory will not show as sorted
    state = {
      employees: [],
      empSort: [],
      search: "",
      sorted: false,
    };
  
    // this will check if the compnent is rendered at least once
    // then it will pull the data from the api (fetching it)
    // then it will give the response/results
    componentDidMount = () => {
      fetch(`https://randomuser.me/api/?results=25&nat=us&inc=name,email,phone,id,picture,dob`)
        .then(res => res.json())
        .then(json => {
          this.setState({ employees: json.results })
        })
    };
  
    // sorting through employees based on what the user searches
    // this will sort by first name, last name, or email
    // regardless of capitalization or lowercase
    sortEmp = () => {
      let { employees, search } = this.state;
      let empSort = employees.filter(sorted => {
        return (
          sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
          sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
          sorted.email.toLowerCase().includes(search.toLowerCase())
        )})
      this.setState({ empSort })
    }
  
    // grab search term, activate sorted
    // startsort is going to be used in search.js
    // once sorted, sorted will change to true
    startSort = event => {
      this.setState({ search: event.target.value }, () => {
        this.sortEmp();
        this.setState({ sorted: true });
      });
    };
  
    // creating the magic here !!
    // starting with a header and some text .. 
    // then using Search to return the search form
    render = () => {
      return (
        <div>
          <div className="jumbotron">
            <h2 className="display-4">
              Employee Directory</h2>
            <p>Welcome to Weenie Hut Juniors. Here are the members apart of our Restaurant.</p>
            <p>Search by name or email to find who you're looking for!</p>
            <Search
              name="search"
              startSort={this.startSort}
              label="Search"
            />
          </div>

  {/* created a container and table ..
  then created a table head (thead) which will look like a title
  using table rows (tr) to make it horizontal and table headers (th) to name the titles */}

          <div className="container">
            <table className="table">
              <thead className="thead">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Birth Date</th>
                </tr>
              </thead>
              <tbody>
  
                {/* if it's not sorted, just map it */}
                {!this.state.sorted ? this.state.employees.map(employee => (
                  <Employees
                    key={employee.id.value}
                    firstName={employee.name.first}
                    lastName={employee.name.last}
                    phone={employee.phone}
                    email={employee.email}
                    icon={employee.picture.medium}
                    dob={employee.dob.date}
                  />
                ))
                  // otherwise, if it is sorted, map the sorted employees
                  : this.state.empSort.map(employee => (
                    <Employees
                      key={employee.id.value}
                      firstName={employee.name.first}
                      lastName={employee.name.last}
                      phone={employee.phone}
                      email={employee.email}
                      icon={employee.picture.medium}
                      dob={employee.dob.date}
                    />
                  ))};
            </tbody>
            </table>
          </div>
        </div >
      )}}
  
  export default Directory;