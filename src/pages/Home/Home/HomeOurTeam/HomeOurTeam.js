import React from 'react';
import { Link } from 'react-router-dom';
import HomeSingleTeam from '../../../../components/HomeSingleTeam/HomeSingleTeam';

const HomeOurTeam = () => {
   return (
      <>
         <section className="team-area pt-115 pb-55">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-10">
                     <div className="section-title pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Our Team</h5>
                           <h1>With Dedication & Purpose</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
                  
               </div>
               <div className="row">
                  <HomeSingleTeam image="2" title="Vijay Kumar Besra" subtitle="Assistant Professor | Project Guide" />
                  <HomeSingleTeam image="4" title="Anuj Kumar Barnwal" subtitle="IT BTECH" />
                  <HomeSingleTeam image="5" title="Sayan Singh" subtitle="IT BTECH" />
                  <HomeSingleTeam image="6" title="Anjali Kumari Agrwal" subtitle="IT BTECH" />
                  <HomeSingleTeam image="7" title="Piyush Kumar Singh" subtitle="IT BTECH" />
                  

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeOurTeam;