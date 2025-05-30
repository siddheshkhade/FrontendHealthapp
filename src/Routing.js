import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
import Register from "./admin/Register";
import AdminDashboard from "./admin/AdminDashboard";
import AddTreatment from "./admin/AddTreatment";
import DeleteTreatment from "./admin/DeleteTreatment";
import AddDoctor from "./admin/AddDoctor";
import DeleteDoctor from "./admin/DeleteDoctor";
import AddOffer from "./admin/AddOffer";
import DeleteOffer from "./admin/DeleteOffer";
import AppointmentData from "./admin/AppointmentData";
import DeleteAppointmentData from "./admin/DeleteAppointmentData";
import Treatment from "./innerpages/Treatment";
import AboutUs from "./innerpages/AboutUs";
import Offers from "./innerpages/Offers";
import BookAppointments from "./innerpages/BookAppointments";
import ContactUs from "./innerpages/ContactUs";
import Homepage from "./innerpages/Homepage";
import TreatmentDetails from "./innerpages/TreatmentDetails";
import EditTreatment from "./admin/EditTreatment";
import Logout from "./admin/Logout";

const Routing = () => {
return (
    <div>
        <Routes>
            <Route path = '/admin' Component={Admin}></Route>

            <Route path="/" Component={Homepage}/>
            <Route path="/treatment" Component={Treatment} />
            {/* based on the tid we cant fetch the doctors directly so we need to pass tname also  */}
            <Route path="/treatmentDetails/:tid/:tname" Component={TreatmentDetails}/>
            <Route path="/aboutus" Component={AboutUs} />
            <Route path="/offers" Component={Offers} />
            <Route path ="/bookappointment" Component={BookAppointments}/>
            <Route path = '/contactus' Component={ContactUs}/> 
            <Route path="/editTreatment/:tid" Component={EditTreatment}/>

            {/* for fetching dr with given treatment on the bookappointment form */}
            {/* if you are booking appointment from treatment page use this routing path */}
            <Route path ="/bookappointment/:dname1/:tname1" Component={BookAppointments}/>
            <Route path = "/logout" Component={Logout} />
            
            {/* Nested route starts here */}
            <Route path = '/admindashboard' Component={AdminDashboard}>
                <Route path="" Component={AddTreatment} />
                <Route path = "deletetreatement" Component={DeleteTreatment} />
                <Route path="adddoctor" Component={AddDoctor}/>
                <Route path="deletedoctor" Component={DeleteDoctor} />
                <Route path="addoffer" Component={AddOffer} />
                <Route path="deleteoffer" Component={DeleteOffer} />
                <Route path="appointmentdata" Component={AppointmentData} />
                <Route path="deleteappointmentdata" Component={DeleteAppointmentData} />
                
            </Route>   
            {/* Nested route ends here */}

            <Route path='/register' Component={Register}></Route>
        </Routes>
    </div>
)
}
export default Routing;