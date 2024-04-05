import React, { useRef } from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import Butotn from "./Button";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ButtonGroup from './MultiCarouselButtonGroup'; // Import the ButtonGroup component
import Next from '../assets/img/arrow-next.svg'
import Prev from '../assets/img//arrow-prev.svg'

export default function Events() {
  const [key, setKey] = useState("events");
  


  const carouselRef = useRef(null);
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <>
      <section>
        <div className="event">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="eventTab">
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className=""
                  >
                    <Tab eventKey="latestUpdate" title="Latest Updates">
                      Tab content for Latest Updates
                    </Tab>
                    <Tab eventKey="events" title="Events">
                      {/* carousel ************************************ */}
                      <Carousel
              ref={carouselRef}
              responsive={responsive}
              infinite
              customTransition="all .5s"
              customTransitionTimingFunction="ease-in-out"
              transitionDuration={500}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}
            >
                 <div className="">
                          <div className="eventBox">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="eventDate">
                                  <div>
                                    <div>
                                      <span>Start Date</span>
                                      <span>21st Nov 2022</span>
                                    </div>
                                    <div className="dateIcon">
                                      <CalendarMonthIcon />
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <span>End Date</span>
                                      <span>26th Nov 2022</span>
                                    </div>
                                    <div className="dateIcon">
                                      <CalendarMonthIcon />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="eventText">
                                  <p className="normalTitle">
                                    Sponsoring for Participation in Sports and
                                    Cultural Events
                                  </p>
                                  <p className="address">
                                    <span className="locationIcon">
                                      <PlaceIcon />
                                    </span>
                                    <span> Kendriya Vidhyalayam</span>
                                  </p>
                                  <Butotn
                                    url={""}
                                    value=" View Details"
                                    className="viewDetails"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="">
                          <div className="eventBox">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="eventDate">
                                  <div>
                                    <div>
                                      <span>Start Date</span>
                                      <span>21st Nov 2022</span>
                                    </div>
                                    <div className="dateIcon">
                                      <CalendarMonthIcon />
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <span>End Date</span>
                                      <span>26th Nov 2022</span>
                                    </div>
                                    <div className="dateIcon">
                                      <CalendarMonthIcon />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="eventText">
                                  <p className="normalTitle">
                                    Sponsoring for Participation in Sports and
                                    Cultural Events
                                  </p>
                                  <p className="address">
                                    <span className="locationIcon">
                                      <PlaceIcon />
                                    </span>
                                    <span> Kendriya Vidhyalayam</span>
                                  </p>
                                  <Butotn
                                    url={""}
                                    value=" View Details"
                                    className="viewDetails"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="">
                          <div className="eventBox">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="eventDate">
                                  <div>
                                    <div>
                                      <span>Start Date</span>
                                      <span>21st Nov 2022</span>
                                    </div>
                                    <div className="dateIcon">
                                      <CalendarMonthIcon />
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <span>End Date</span>
                                      <span>26th Nov 2022</span>
                                    </div>
                                    <div className="dateIcon">
                                      <CalendarMonthIcon />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="eventText">
                                  <p className="normalTitle">
                                    Sponsoring for Participation in Sports and
                                    Cultural Events
                                  </p>
                                  <p className="address">
                                    <span className="locationIcon">
                                      <PlaceIcon />
                                    </span>
                                    <span> Kendriya Vidhyalayam</span>
                                  </p>
                                  <Butotn
                                    url={""}
                                    value=" View Details"
                                    className="viewDetails"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="eventBox">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="eventDate">
                                  <div>
                                    <div>
                                      <span>Start Date</span>
                                      <span>21st Nov 2022</span>
                                    </div>
                                    <div className="dateIcon">
                                      <CalendarMonthIcon />
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <span>End Date</span>
                                      <span>26th Nov 2022</span>
                                    </div>
                                    <div className="dateIcon">
                                      <CalendarMonthIcon />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="eventText">
                                  <p className="normalTitle">
                                    Sponsoring for Participation in Sports and
                                    Cultural Events
                                  </p>
                                  <p className="address">
                                    <span className="locationIcon">
                                      <PlaceIcon />
                                    </span>
                                    <span> Kendriya Vidhyalayam</span>
                                  </p>
                                  <Butotn
                                    url={""}
                                    value=" View Details"
                                    className="viewDetails"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
            </Carousel>


              <a href="#" className="viewAll">View All</a>
                      {/* carousel ************************************ */}
                
                    </Tab>
                    <Tab eventKey="downloads" title="Downloads">
                      Tab content for Downloads
                    </Tab>
                    <Tab eventKey="circulars" title="Circulars">
                      Tab content for Circulars
                    </Tab>
                    <Tab eventKey="vacancy" title="Vacancy">
                      Tab content for Vacancy
                    </Tab>
                    <Tab eventKey="tenders" title="Tenders">
                      Tab content for Tenders
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
