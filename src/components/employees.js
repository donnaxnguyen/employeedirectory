// requiring react and moment
import React from "react";
import Moment from "moment";

// employees will be exported and props will be used to render through the components
const Employees = (props) => {
    // fixedDate will use Moment for their date of birth
    let fixedDate = Moment(props.dob).format("LL");

    // creating a table row (tr) and table data (td)
    return (
    // will show first name , last name , icon , email , phone , and birthdate
      <tr className="tr"> 
        <td><img alt={props.firstName} src={props.icon} /></td>
        <td>{props.firstName} {props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.phone} </td>
        <td>{fixedDate}</td>
      </tr>
    )}

  export default Employees;