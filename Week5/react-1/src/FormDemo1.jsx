import { useForm } from "react-hook-form";
import { useState } from "react";
function FormDemo1() {
  const {register,handleSubmit,formState:{errors},reset}=useForm();
  const [users, setUsers]=useState([]);
  const onFormSubmit=(obj)=>{
    setUsers([...users, obj]);
    reset();
  };
  return (
    <div>
      {/* FORM */}
      <div>
        <h1 className="text-center text-3xl ">User Form</h1>
        <form 
        className="max-w-md mx-auto m"
        onSubmit={handleSubmit(onFormSubmit)}>
          <div className="mb-3">
            <label htmlFor="firstName"> First Name : </label>
            <input
              type="text"
              id="firstName"
              className="border w-full p-2"
              {...register("firstName", {
                required: "firstName is required",
                minLength: 5,
                maxLength: 15
              })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">
                {errors.firstName.message || "Invalid length"}
              </p>
            )}
          </div>
         <div className="mb-3">
            <label htmlFor="email"> Email : </label>
            <input
              type="email"
              id="email"
              className="border w-full p-2"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth"> Date Of Birth : </label>
            <input
              type="date"
              id="dateOfBirth"
              className="border w-full p-2"
              {...register("dateOfBirth")}
            />
          </div>
          <button className="bg-pink-500 text-white px-4 py-2 w-full">
            Add User
          </button>
        </form>
      </div>
      {/* USER LIST */}
      <div>
        <h2 className="text-center text-xl mb-3 padding-top:30px">List of Users</h2>
          <table className="w-full text-sm ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.firstName}</td>
                  <td>{user.email}</td>
                  <td>{user.dateOfBirth}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default FormDemo1;