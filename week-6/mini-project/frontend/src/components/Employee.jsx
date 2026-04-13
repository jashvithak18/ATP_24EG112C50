import {useLocation} from 'react-router'

function Employee() {
  //read state received in navigation
  const {state}=useLocation()
  return (
    <div className='p-10 text-center text-3xl shadow-2xl bg-olive-200'>
<p>Name: {state.name}</p>
<p>Email: {state.email}</p>
<p>Mobile: {state.mobile}</p>
<p>Designation: {state.designation}</p>
<p>Company Name: {state.companyName}</p>
    </div>
  )
}

export default Employee