import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Edit from "./components/Edit";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import UserContext,{ UserDataContext } from "./components/context/UserContext";


function App() {
 
  return (
    <>
       <div className="container-fluid">
        <div className="row">
          <BrowserRouter>
          <Sidebar/>
          <Routes>
          <Route path='/dashboard' element={ <UserContext>  <Dashboard />   </UserContext>}/>
          <Route path='/edit/:id' element={ <UserContext>  <Edit/>  </UserContext>}/>
        
          <Route path='/*' element={<Navigate to={'/dashboard'}/>}/>
          </Routes>
          </BrowserRouter>
      
       
       
       

      
     </div>
     </div>
    </>
  );
}

export default App;
