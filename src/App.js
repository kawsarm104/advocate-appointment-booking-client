import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About/About";
import Login from "./Pages/Auth/Login/Login";
import AdvocateRegister from "./Pages/Auth/Register/AdvocateRegister/AdvocateRegister";
import ClientRegister from "./Pages/Auth/Register/ClientRegister/ClientRegister";
import Register from "./Pages/Auth/Register/Register";
import MakeAdmin from "./Pages/Dashboard/Admin/MakeAdmin/MakeAdmin";
import AllAdvocateParent from "./Pages/Dashboard/AllAdvocate/AllAdvocateParent/AllAdvocateParent";
import SingleAdvocateData from "./Pages/Dashboard/AllAdvocate/SingleAdvocateData/SingleAdvocateData";
import AdvocateAppointment from "./Pages/Dashboard/Appointment/AdvocateAppointment/AddvocateAppointment";
import AllAppointment from "./Pages/Dashboard/Appointment/AllAppointment/AllAppointment";
import ClientAppointment from "./Pages/Dashboard/Appointment/ClientAppointment/ClientAppointment";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import ManageAllAdvocateParent from "./Pages/Dashboard/ManageAllAdvocate/ManageAllAdvocateParent/ManageAllAdvocateParent";
import MyAppointmentParent from "./Pages/Dashboard/MyAppointment/MyAppointmentParent/MyAppointmentParent";
// import Footer from "./Pages/Shared/Footer/Footer";
// import NavigationMenu from "./Pages/Shared/Header/NavigationMenu/NavigationMenu";
// import TopHeader from "./Pages/Shared/Header/TopHeader";
import AuthRoute from "./ProtectedRoute/AuthRoute/AuthRoute";
import PrivateRoute from "./ProtectedRoute/PrivateRoute/PrivateRoute";
// react spinner 
import {useState} from 'react'
import { css } from "@emotion/react";
import {HashLoader} from "react-spinners";
// react spinner 
function App() {
  // react spinner 
  let [spinner, setSpinner] = useState(true);
  let [color, setColor] = useState("#36D7B7");
  const override = css`
  display: block;
  align:center;
  margin: 125px auto;
  border-color: red;
`;
setTimeout(() => {
  setSpinner(false)
}, 2000);

if(spinner){
  return <HashLoader color={color} spinner={spinner} css={override}  size={65} />

}

  // react spinner 
  return (
    <AuthProvider>
      <Router>
        {/* <NavigationMenu /> */}
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Login></Login>
              </AuthRoute>
            }
          ></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>
            }
          >
            <Route
              path="/dashboard"
              element={<DashboardHome></DashboardHome>}
            ></Route>
            <Route
              path="/dashboard/alladvocate"
              element={<AllAdvocateParent></AllAdvocateParent>}
            ></Route>
            <Route
              path="/dashboard/managealladvocate"
              element={<ManageAllAdvocateParent></ManageAllAdvocateParent>}
            ></Route>
            <Route
              path={`/dashboard/alladvocates/:id`}
              element={<SingleAdvocateData></SingleAdvocateData>}
            ></Route>
            <Route
              path="/dashboard/myappointment"
              element={<MyAppointmentParent></MyAppointmentParent>}
            ></Route>
            <Route
              path="/dashboard/allappointment"
              element={<AllAppointment></AllAppointment>}
            ></Route>
            <Route
              path="/dashboard/clientappointment"
              element={<ClientAppointment/>}
            ></Route>
            <Route
              path="/dashboard/advocateappointment"
              element={<AdvocateAppointment/>}
            ></Route>
            <Route
              path="/dashboard/makeadmin"
              element={<MakeAdmin/>}
            ></Route>
          </Route>

          <Route
            path="/login"
            element={
              <AuthRoute>
                <Login></Login>
              </AuthRoute>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <AuthRoute>
                <Register></Register>
              </AuthRoute>
            }
          ></Route>
          <Route
            path="/advocateregister"
            element={
              <AuthRoute>
                <AdvocateRegister></AdvocateRegister>
              </AuthRoute>
            }
          ></Route>
          <Route
            path="/clientregister"
            element={
              <AuthRoute>
                <ClientRegister></ClientRegister>
              </AuthRoute>
            }
          ></Route>
          {/* <Route path="/*">
          <NotFound></NotFound>
        </Route>  */}
        </Routes>
        {/* <Footer></Footer> */}
      </Router>
    </AuthProvider>
  );
}

export default App;
