import React from "react";
import Image from "./Image";
import Image1 from "../assets/img/quickLink1.svg"
import Image2 from "../assets/img/quickLink2.svg"
import Image3 from "../assets/img/quickLink3.svg"
import Image4 from "../assets/img/quickLink4.svg"
import Image5 from "../assets/img/quickLink5.svg"
import Image6 from "../assets/img/quickLink6.svg"
import Image7 from "../assets/img/quickLink7.png"
import Image8 from "../assets/img/quickLink8.png"
import Image9 from "../assets/img/quickLink9.svg"
import Image10 from "../assets/img/quickLink10.svg"
import Image11 from "../assets/img/quickLink11.png"
import Image12 from "../assets/img/quickLink12.svg"

export default function QuickLink() {
  return (
    <>
      <section>
        <div className="quickLink">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="title"> Quick Links </h2>
                  </div>
                  <div className="col-md-4">
                    <div className="quickLinkBox">
                      <div className="icon-container">

                      <Image imageUrl={Image1} className="icon"/>
                      </div>
                      <div className="content">
                        <h5>Reform Booklet</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="quickLinkBox">
                      <div className="icon-container">

                       <Image imageUrl={Image2} className="icon"/>
                      </div>
                      <div className="content">
                        <h5>PMGKAY </h5>
                        <p>
                          Pradhan Mantri Garib Kalyan Anna Yojna Distribution of
                          Pulses
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="quickLinkBox">
                      <div className="icon-container">

                       <Image imageUrl={Image3} className="icon"/>
                      </div>
                      <div className="content">
                        <h5>Dashboard </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="quickLinkBox">
                      <div className="icon-container">

                       <Image imageUrl={Image4} className="icon"/>
                      </div>
                      <div className="content">
                        <h5>Blog </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="quickLinkBox">
                      <div className="icon-container">

                       <Image imageUrl={Image5} className="icon"/>
                      </div>
                      <div className="content">
                        <h5>Videos </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="quickLinkBox">
                      <div className="icon-container">

                       <Image imageUrl={Image1} className="icon"/>
                      </div>
                      <div className="content">
                        <h5>Audios </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="quickLinkBox">
                      <div className="icon-container">

                       <Image imageUrl={Image6} className="icon"/>
                      </div>
                      <div className="content">
                        <h5>NTH </h5>
                        <p>National Test House</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="quickLinkBox">
                      <div className="icon-container">

                       <Image imageUrl={Image1} className="icon"/>
                      </div>
                      <div className="content">
                        <h5>BIS </h5>
                        <p>Bureau of Indian Standards</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="quickLinkBox">
                      <div className="icon-container">

                       <Image imageUrl={Image7} className="icon"/>
                      </div>
                      <div className="content">
                        <h5>NCH </h5>
                        <p> National Consumer Helpline</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="quickLinkBox">
                      <div className="icon-container">

                       <Image imageUrl={Image1} className="icon"/>
                      </div>
                      <div className="content">
                        <h5>Reform </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="quickLinkBox">
                      <div className="icon-container">

                       <Image imageUrl={Image8} className="icon"/>
                      </div>
                      <div className="content">
                        <h5>Reform </h5>
                      </div>
                    </div>{" "}
                  
                  </div>
                </div>
              </div>
              <div className="col-md-3">
              <h2 class="title"> Quick Links </h2>
                <div className="helpLine">
                  <h6 className="normalTitle"> National Consumer Helpline </h6>
                  <p>
                    (Department of Consumer Affairs, Govt. of India) Toll Free
                    No.
                  </p>
                  <h2 className="title">1800-11-4000 OR 1915</h2>
                  <p>
                    Register your grievance through NCH APP SMS to 8800001915 to
                    get a call back You can also log in your complaints at-
                  </p>
                  <a href=" https://consumerhelpline.gov.in">
                    {" "}
                    https://consumerhelpline.gov.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
