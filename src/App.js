
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { MainHomePage } from './Service/MainHomePage';
import { AdminHomePage } from './Components/AdminComponents/AdminHomePage';
import { AdminLogin } from './Components/AdminComponents/AdminLogin';
import { MemberLogin } from './Components/MemberComponents/MemberLogin';
import { CommitteeMemberHomePage } from './Components/MemberComponents/CommitteeMemberHomepage';
import { MemberHomePage } from './Components/MemberComponents/MemberHomePage';
import { AddMember } from './Components/AddMember';
import { DeleteMember } from './Components/DeleteMember';
import { UpdateRole } from './Components/UpdateRole';
import { MembersPage } from './Components/MembersPage';
import { Elections } from './Components/Elections';
import { SelfUpdateMember } from './Components/MemberComponents/SelfUpdateMember';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ForgotPasswordPage } from './Components/ForgotPasswordPage';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<MainHomePage/>}/>
          <Route path='/adminhomepage' element={<AdminHomePage/>}/>
          <Route path='/adminloginpage' element={<AdminLogin/>}/>
          <Route path='/memberloginpage' element={<MemberLogin/>}/>
          <Route path='/committeemember' element={<CommitteeMemberHomePage/>}/>
          <Route path='/memberhomepage' element={<MemberHomePage/>}/>
           
          <Route path='/addmember' element={<AddMember/>}/>
          <Route path='/deletemember' element={<DeleteMember/>}/>
          <Route path='/setrole' element={<UpdateRole/>}/>
          <Route path='/memberspage' element={<MembersPage/>}/>
          <Route path='/election' element={<Elections/>}/>
          <Route path='/selfupdate' element={<SelfUpdateMember/>}/>
          <Route path='/forgotpasswordpage' element={<ForgotPasswordPage/>}/>
         
        </Routes>

        <ToastContainer />
      </div>
    </Router>
    
  );
}

export default App;
