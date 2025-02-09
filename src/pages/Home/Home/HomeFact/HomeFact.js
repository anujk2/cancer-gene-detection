import React from 'react';
import { Link } from 'react-router-dom';

const HomeFact = () => {
   return (
      <>
         <section className="fact-area fact-map primary-bg pos-rel pt-115 pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-10">
                     <div className="section-title pos-rel mb-45">
                        <div className="section-text section-text-white pos-rel">
                           <h5>Cancer gene detection</h5>
                           <h1 className="white-color">"Empowering Hope through Genetic Insight"</h1>
                        </div>
                     </div>
                     <div className="section-button section-button-left mb-30">
                        {/* <Link to="/genedetect" className="primary_btn btn-icon ml-0"><span>+</span>Detect Gene</Link> */}
                     </div>
                  </div>
                  <div className="col-lg-6 col-lg-6 col-md-8">
                     <div className="cta-satisfied">
                        <div className="single-satisfied mb-50">
                           <h1>18M+</h1>
                           <h5> <i className=""></i> Total No. of Cancer cases Yealy</h5>
                           <p>Cancer cases per year vary by type, gender, and location. The World Health Organization reports
                               around 18 million new cases of cancer per year worldwide, and the number is increasing</p>
                        </div>
                        <div className="single-satisfied mb-50">
                           <h1>6M+</h1>
                           <h5><i className=""></i> No. of Death due to undiagnosed cases</h5>
                           <p>Cancer is a leading cause of death worldwide, accounting for nearly 10 million deaths in 2020  </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeFact;