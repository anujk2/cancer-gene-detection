import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../../components/Shared/Sidebar/Sidebar';
import useGlobalContext from '../../../../hooks/useGlobalContext';

const HomeHeader = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            {/* <div className="top-bar d-none d-md-block">
               <div className="container">
                  <div className="row d-flex align-items-center">
                     <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1 col-md-7 offset-md-1">
                        <div className="header-info">
                           <span><i className="fas fa-phone"></i> +1 800 833 9780</span>
                           <span><i className="fas fa-envelope"></i> info@example.com</span>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-5 col-md-4">
                        <div className="header-top-right-btn f-right">
                           <Link to="/contact" className="primary_btn">Make Appointment</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}

            <div className={stickyMenu ? "header-menu-area sticky_menu" : "header-menu-area"}>
               <div className="container menu_wrapper">
                  <div className="row align-items-center">
                     <div className="col-xl-3 col-lg-3 col-md-6 col-6 d-flex align-items-center">
                        <div className="logo logo-circle pos-rel">
                           <Link to="/"><img src="img/logo/logo.png" alt="" /></Link>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-6 col-6">
                        <div className="header-right f-right">
                           
                        </div>
                        <div className="header__menu f-right">
                           <nav id="mobile-menu">
                              <ul>
                                 <li><Link to="/">Home</Link>
                          
                                 </li>
                                 <li><Link to="/about">About</Link></li>
                                  
                                 
                                 <li><Link to="/team">Team</Link>
                              
                                 </li>
                              
                                 <li><Link to="/blogs">Blogs</Link>
                           
                                 </li>
            
                              </ul>
                           </nav>
                        </div>

                        <div className="side-menu-icon d-lg-none text-end">
                           <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars"></i> </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default HomeHeader;