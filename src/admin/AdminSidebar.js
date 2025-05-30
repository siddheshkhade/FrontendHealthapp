import React from 'react'
import { NavLink } from 'react-router-dom'
import adminstyles from './admin.module.css'

const AdminSidebar = () => {
  return (
   <ul className={adminstyles.adminsidebar}>
    <li>
        <NavLink to = "">Add Treatement</NavLink>
    </li>
    <li>
        <NavLink to = "deletetreatement">Edit/Delete Treatement</NavLink>
    </li>
    <li>
        <NavLink to = "adddoctor">Add Doctor</NavLink>
    </li>
    <li>
        <NavLink to = "deletedoctor">Edit/Delete Doctor</NavLink>
    </li>
    <li>
        <NavLink to = "addoffer">Add Offers</NavLink>
    </li>
    <li>
        <NavLink to = "deleteoffer">Edit/Delete Offers</NavLink>
    </li>
    <li>
        <NavLink to = "appointmentdata">Appointments Data</NavLink>
    </li>
    <li>
        <NavLink to = "deleteappointmentdata">Edit/Delete Appointments Data</NavLink>
    </li>
    <li>
        <NavLink to = "/logout">LogOut</NavLink>
    </li>
   </ul>
  )
}

export default AdminSidebar
