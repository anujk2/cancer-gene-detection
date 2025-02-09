import React from 'react';

const HomeAboutArea = () => {
   return (
      <>
         <section className="about-area pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-5 about_left">
                     <div className="medical-icon-brand-2">
                        <img src="img/about/medical-brand-icon-border.png" alt=""/>
                     </div>
                     <div className="about-left-side pos-rel mb-30">
                        <div className="about-front-img">
                           <img src="img/about/about-img.jpg" alt=""/>
                        </div>
                        <div className="about-shape">
                           <img src="img/about/about-shape.png" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                     <div className="about-right-side pt-55 mb-30">
                        <div className="about-title mb-20">
                           <h5>About Us</h5>
                           <h1> Collaboration of medicine and technology </h1>
                        </div>
                        <div className="about-text">
                           <p>Cancer is a deadly disease that results from the abnormal growth of the cells usually damaged
                              cells and later spread in different parts of the body. Cells growth is caused because of
                              certain gene mutation which they undergro. </p>
                           <p>Inorder to detect cancer and stop its growth,identification of that gene mutation is needed 
                              which require manula labour of seperate testing. If detected earlier, one can stop as well 
                              as treat cancer leading to the increment of the life of patient. With ML algorithm we will 
                              be able to predict those mutations in gene who are responsible for growth of cancerous cells, 
                              reducing the burden of pathologists/oncologist and give a hope of life to the deing patients.</p><br/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeAboutArea;