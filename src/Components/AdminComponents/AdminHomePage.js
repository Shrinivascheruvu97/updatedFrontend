// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import LogoutIcon from '@mui/icons-material/Logout';
// // import 'bootstrap/dist/css/bootstrap.min.css'
// // import LoginIcon from '@mui/icons-material/Login';
// // import HomeIcon from '@mui/icons-material/Home';

// // export const AdminHomePage = () => {
// //   const [isLoggedIn2, setIsLoggedIn2] = useState(false);
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const checkLoginStatus2 = () => {
// //       const isLoggedInUser2 = localStorage.getItem('isLoggedIn2') === 'true';
// //       setIsLoggedIn2(isLoggedInUser2);
// //     };
// //     checkLoginStatus2();
// //   }, []);

// //   const logout = () => {
// //     localStorage.removeItem('isLoggedIn2');
// //     setIsLoggedIn2(false);
    
// //     alert('Successfully Logged out!');
// //   };

// //   const navigatePage1 = () => {
// //     navigate('/adminloginpage');
// //   };

// //   const navigatePage2 = () => {
// //     navigate('/');
// //   };
// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
    
// //   };
  

  

// //   return (
// //     <div >
// //       <div>
// //         {isLoggedIn2 ? (
// //           <>
// //             <nav >
              
// //               <a  onClick={toggleMenu} class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><MenuIcon/></a>
// //               <a  href="#">Members</a>
// //               <a href="#">Blog</a>
// //               <a href="#">Portfolio</a>
// //               <a onClick={logout}><LogoutIcon/></a>
              
// //               {isMenuOpen && (
// //            <ul className="menu-list">
          
// //             <li><a href="#">Members</a></li>
// //             <li><a href="#">Voting</a></li>
// //             <li><a href="#">AssignCommittee</a></li>
            
// //           </ul>

// //         )}
              
// //               <div className="animation start-home"></div>
// //             </nav>
// //            <h1>Hey Admin Welcome!!</h1>
            
// //           </>
// //         ) : (
// //           <div>
// //             <h1>Bye Admin!!</h1>
// //             <br />
// //             <h5 >Have A Great Day   !!! </h5>
// //             <br />
// //             <button onClick={navigatePage1} className="btn btn-primary">
// //             <LoginIcon/>
// //             </button>
// //             <hr></hr><br></br>
// //             <button className="btn btn-primary" onClick={navigatePage2}>
// //             <HomeIcon/>
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };








import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminHomePage = () => {
  const [isLoggedIn2, setIsLoggedIn2] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus2 = () => {
      const isLoggedInUser2 = localStorage.getItem('isLoggedIn2') === 'true';
      setIsLoggedIn2(isLoggedInUser2);
    };
    checkLoginStatus2();
  }, []);

  const logout = () => {
    localStorage.removeItem('isLoggedIn2');
    setIsLoggedIn2(false);
    alert('Successfully Logged out!');
  };

  const navigatePage1 = () => {
    navigate('/adminloginpage');
  };

  const navigatePage2 = () => {
    navigate('/');
  };

  const navigateToMembersPage = () => {
    navigate('/memberspage');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick6 = () => {
    navigate('/election',{ state: { role: 'admin' } });
};

  return (
    <div className="admin-home-page">
      <div>
        {isLoggedIn2 ? (
          <>
            <nav>
              <a  onClick={navigateToMembersPage}>
                Members
              </a>
              <a onClick={handleClick6}>Elections</a>
              
              <a onClick={logout}>
                <LogoutIcon />
              </a>

              {isMenuOpen && (
                <ul className="menu-list">
                  <li>
                    <a href="#">Voting</a>
                  </li>
                  <li>
                    <a href="#">AssignCommittee</a>
                  </li>
                </ul>
              )}

              <div className="animation start-home"></div>
            </nav>

            <h1>Hey Admin Welcome!!</h1>
          </>
        ) : (
          <div>
            <h1>Bye Admin!!</h1>
            <br />
            <h5>Have A Great Day !!!</h5>
            <br />
            <button onClick={navigatePage1} className="btn btn-primary">
              <LoginIcon />
            </button>
            <hr />
            <br />
            <button className="btn btn-primary" onClick={navigatePage2}>
              <HomeIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
















// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import LogoutIcon from '@mui/icons-material/Logout';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import LoginIcon from '@mui/icons-material/Login';
// import HomeIcon from '@mui/icons-material/Home';
// import axios from 'axios';

// export const AdminHomePage = () => {
//   const [isLoggedIn2, setIsLoggedIn2] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [membersData, setMembersData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkLoginStatus2 = () => {
//       const isLoggedInUser2 = localStorage.getItem('isLoggedIn2') === 'true';
//       setIsLoggedIn2(isLoggedInUser2);
//     };
//     checkLoginStatus2();
//   }, []);

//   const logout = () => {
//     localStorage.removeItem('isLoggedIn2');
//     setIsLoggedIn2(false);
//     alert('Successfully Logged out!');
//   };

//   const navigatePage1 = () => {
//     navigate('/adminloginpage');
//   };

//   const navigatePage2 = () => {
//     navigate('/');
//   };

//   const navigateToMembersPage = () => {
//     navigate('/memberspage');
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const fetchMembersData = async () => {
//       try {
//         const response = await axios.get('http://localhost:9001/admin/members');
//         setMembersData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchMembersData();
//   }, []);

//   const renderTable = () => {
//     return (
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>User ID</th>
//             <th>Email</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Mobile No</th>
//             <th>Role</th>
//             <th>Flat No</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {membersData.map((member) => (
//             <tr key={member.userId}>
//               <td>{member.userId}</td>
//               <td>{member.email}</td>
//               <td>{member.firstName}</td>
//               <td>{member.lastName}</td>
//               <td>{member.mobileNo}</td>
//               <td>{member.role}</td>
//               <td>{member.flatNo}</td>
//               <td>
//                 <a className="add" title="Add" data-toggle="tooltip">
//                   <i className="material-icons">&#xE03B;</i>
//                 </a>
//                 <a className="edit" title="Edit" data-toggle="tooltip">
//                   <i className="material-icons">&#xE254;</i>
//                 </a>
//                 <a className="delete" title="Delete" data-toggle="tooltip">
//                   <i className="material-icons">&#xE872;</i>
//                 </a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div>
//       <div>
//         {isLoggedIn2 ? (
//           <>
//             <nav>
//               <a onClick={toggleMenu} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
//                 <MenuIcon />
//               </a>
//               <a href="#" onClick={navigateToMembersPage}>
//                 Members
//               </a>
//               <a href="#">Blog</a>
//               <a href="#">Portfolio</a>
//               <a onClick={logout}>
//                 <LogoutIcon />
//               </a>

//               {isMenuOpen && (
//                 <ul className="menu-list">
//                   <li>
//                     <a href="#">Voting</a>
//                   </li>
//                   <li>
//                     <a href="#">AssignCommittee</a>
//                   </li>
//                 </ul>
//               )}

//               <div className="animation start-home"></div>
//             </nav>

//             <h1>Hey Admin Welcome!!</h1>
//             <h2>Members</h2>
//             {renderTable()}
//           </>
//         ) : (
//           <div>
//             <h1>Bye Admin!!</h1>
//             <br />
//             <h5>Have A Great Day !!!</h5>
//             <br />
//             <button onClick={navigatePage1} className="btn btn-primary">
//               <LoginIcon />
//             </button>
//             <hr />
//             <br />
//             <button className="btn btn-primary" onClick={navigatePage2}>
//               <HomeIcon />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

