console.log('page is ready')
const all_details = [];
const stordata = (e) => {
  let studentDetails = {
    rollno: document.getElementById("rollno").value,
    name: document.getElementById("student name").value,
    subject: document.getElementById("subject").value,
    storage: document.getElementById("storage").value,
  };
  // localStorage.setItem("studentData", JSON.stringify(alldata));
  alldata.push(studentDetails);
  dispData();
  e.preventDefault();
};


