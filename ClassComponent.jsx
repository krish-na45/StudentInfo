import React, { Component } from "react";
import "./ClassComponentStyles.css";

class ClassComponent extends Component {

  Respond = () => {
    const fullName = document.getElementById("Container11").value.trim();
    const gender = document.getElementById("Container22").value.trim();
    const mobile = document.getElementById("Container33").value.trim();
    const address = document.getElementById("Container44").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const hobbies = document.getElementById("hobbies").value.trim();
    const dob = document.getElementById("dob").value.trim();

    if (
      !fullName ||
      !gender ||
      !mobile ||
      !address ||
      !skills ||
      !hobbies ||
      !dob
    ) {
      alert("Please fill all fields!");
      return;
    }

    const tbody = document.getElementById("tableBody");
    if (!tbody) {
      console.error("tableBody element not found!");
      return;
    }

    const tr = document.createElement("tr");

    const tdFullName = document.createElement("td");
    tdFullName.textContent = fullName;
    tr.appendChild(tdFullName);

    const tdGender = document.createElement("td");
    tdGender.textContent = gender;
    tr.appendChild(tdGender);

    const tdMobile = document.createElement("td");
    tdMobile.textContent = mobile;
    tr.appendChild(tdMobile);

    const tdAddress = document.createElement("td");
    tdAddress.textContent = address;
    tr.appendChild(tdAddress);

    const tdSkills = document.createElement("td");
    tdSkills.textContent = skills;
    tr.appendChild(tdSkills);

    const tdHobbies = document.createElement("td");
    tdHobbies.textContent = hobbies;
    tr.appendChild(tdHobbies);

    const tdDob = document.createElement("td");
    tdDob.textContent = dob;
    tr.appendChild(tdDob);

    const tdRemove = document.createElement("td");
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "REMOVE";
    removeBtn.className = "remove-btn";
    removeBtn.addEventListener("click", function () {
      tr.remove();
    });
    tdRemove.appendChild(removeBtn);
    tr.appendChild(tdRemove);

    tbody.appendChild(tr);

    this.clearForm();
  };

  clearForm = () => {
    document.getElementById("Container11").value = "";
    document.getElementById("Container22").value = "";
    document.getElementById("Container33").value = "";
    document.getElementById("Container44").value = "";
    document.getElementById("skills").value = "";
    document.getElementById("hobbies").value = "";
    document.getElementById("dob").value = "";
  };

  
  render() {
    return (
      <div className="app-container">
        <h1>Student Details Form</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <div id="container1">
            <label>Full Name: </label>
            <input id="Container11" type="text" />
          </div>

          <div id="container2">
            <label>Gender: </label>
            <select id="Container22">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div id="container3">
            <label>Mobile: </label>
            <input id="Container33" type="tel" />
          </div>

          <div id="container4">
            <label>Address: </label>
            <textarea id="Container44" rows="3" />
          </div>

          <div className="extra-row">
            <label>Skills: </label>
            <input
              id="skills"
              type="text"
              placeholder="e.g. React, JavaScript, CSS"
            />
          </div>

          <div className="extra-row">
            <label>Hobbies: </label>
            <input
              id="hobbies"
              type="text"
              placeholder="e.g. Reading, Gaming, Coding"
            />
          </div>

          <div className="extra-row">
            <label>DOB: </label>
            <input id="dob" type="date" />
          </div>

          <div className="button-row">
            <button type="button" className="print" onClick={this.Respond}>
              Submit
            </button>
            <button
              type="button"
              className="clear-btn"
              onClick={this.clearForm}
            >
              Clear
            </button>
          </div>
        </form>

        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Skills</th>
              <th>Hobbies</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="tableBody"></tbody>
        </table>
      </div>
    );
  }
}

export default ClassComponent;
