import React from "react";
import Button from "./Button";
import Image from "./Image";
import Ashwani from "../assets/img/ashwini_kumar.png";
import Sadhvi from "../assets/img/sadhavi_niranjan_jyoti.png";
import Piyush from "../assets/img/piyush_goyal.png";
import Butotn from "./Button";
export default function AboutUs() {
  return (
    <>
      <section>
        <div className="aboutUs">
          <div className="container">
            <div className="row">
              <div className="col-md-7 border-right-about left">
                <div className="row">
                  <div className="col-md-12 border-bottom-about">
                    <div className="">
                      <h1 className="title">
                        Welcome to Department of Consumer Affairs
                      </h1>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <p>
                      Department of Consumer Affairs is one of the two
                      Departments under the Ministry of Consumer Affairs, Food &
                      Public Distribution. It was constituted as a separate
                      Department in June 1997 as it was considered necessary to
                      have a separate Department to give a fillip to the nascent
                      consumer movement in the country.
                    </p>
                    <a href="#" className="d-block text-center" >
                      <Button value="View All"/>
                    </a>
                  </div>
                  <div className="col-md-12">
                    <div className="row justify-content-center mt-5 mb-4">
                      <div className="col-md-3">
                        <div className="box">
                        <Image className="img img1" imageUrl={Piyush}/>
                          <div className="content">
                            <h5>Hon’ble Minister</h5>
                            <p>Shri Piyush Goyal</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="box">
                       <Image className="img img2" imageUrl={Sadhvi}/>
                          <div className="content">
                            <h5>Hon’ble MoS</h5>
                            <p>Sadhvi Niranjan Jyoti</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="box">
                        <Image className="img img3" imageUrl={Ashwani}/>
                          <div className="content">
                            <h5>Hon’ble MoS</h5>
                            <p>Shri Ashwini Kumar Choubey</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="right">
                  <div className="row ">
                    <div className="col-md-12">
                        <div className="row border-bottom-about">
                        <div className="col">
                      <h1 className="title">What's New</h1>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end">
                      <Butotn url={''}  value={'View All'} />
                      {/* <button>View All</button> */}
                    </div>
                        </div>
                    </div>

                    <div className="col-md-12 py-3">
                        <div className="rightContent">
                            <div className="linkText">
                                 <div> 
                                  <p>Filling up one post of the Registrar in Level-14(Rs.144200- 218200) in the pay matrix in the National Consumer Disputes Redressal Commission (NCDRC), New Delhi by composite method (deputation/) </p>
                                   <span className="dateText">July 25, 2023</span>
                                   </div>
                            </div>
                            <div className="linkText">
                                <div> <p>Request for proposal (RFP) for selection of agency for Operationalization and maintenance of national Consumer helpline (NCH) for a period of </p> <span className="dateText">June 20, 2023</span></div>
                            </div>
                           <div className="linkText">
                                <div> <p>Engagement of Young Professional on contract basis </p> <span className="dateText"> June 12, 2023</span></div>
                            </div>
                            <div className="linkText">
                                <div> <p>Request for proposal (RFP) for appointment of consultant / consultancy firm for establishment of technical requirements for generation and dissemination of IST and to develop policy & regulatory framework for the legislation of Indian standard time (IST)</p>  <span className="dateText">May 28, 2023</span></div>
                            </div>
                            <div className="linkText">
                                <div> <p>Engagement of Young Professional on contract basis</p>  <span className="dateText">June 12, 2023</span></div>
                            </div>
                            
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
