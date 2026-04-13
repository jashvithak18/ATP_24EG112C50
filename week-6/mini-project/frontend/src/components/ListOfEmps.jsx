import { useState, useEffect } from "react";
import {useNavigate} from 'react-router';
import axios from 'axios'
function ListOfEmps() {
  const [emps, setEmps] = useState([]);
const navigate=useNavigate()
const gotoEmployee=(empObj)=>{
  navigate("/employee",{state:empObj})
}
const gotoEditEmployee=(empObj)=>{
  navigate("/edit-emp",{state:empObj})
}
const deleteEmpById=async(id)=>{
let res=await axios.delete(`http://localhost:2000/emp-api/employees/${id}`)
if(res.status==200){
  getEmps()
}
}

async function getEmps() {
      let res = await axios.get("http://localhost:2000/emp-api/employees");
      if (res.status === 200) {
        let resObj = res.data;
        setEmps(resObj.payload);
      }
  };
  

    //get all emps on component loading
  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center p-5">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 ">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-4 text-1.5xl text-center rounded-2xl shadow-2xl ">
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            <div className="flex justify-around">
            <button  onClick={()=>gotoEmployee(empObj)} className="bg-blue-300 rounded-2xl text-1xl m-0.5">View</button>
            <button onClick={()=>gotoEditEmployee(empObj)}className="bg-pink-200 rounded-2xl text-1xl m-0.5">Edit</button>
            <button onClick={()=>deleteEmpById(empObj._id)} className="bg-red-400 rounded-2xl text-1xl m-0.5">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;