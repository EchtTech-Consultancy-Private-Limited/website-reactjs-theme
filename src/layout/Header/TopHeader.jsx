import React from 'react'

import emblem from '../../assets/img/emblem-sm.svg';
export default function TopHeader() {
  return (
    <>
         <div className="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 top_header_left">
                        <ul>
                            <li>
                               <img src={emblem} alt="emblem" />
                            </li>
                            <li>
                                <span>उपभोक्ता मामले, खाद्य और सार्वजनिक वितरण मंत्रालय</span>
                                <span>MINISTRY OF CONSUMER AFFAIRS, FOOD & PUBLIC DISTRIBUTION</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 top_header_right">
                        <ul>
                            <li>Skip to Main Content </li>
                            <li>Screen Reader Access</li>
                            <li className='fontAccessebility'>
                                <span> A</span>
                                <span> A+</span>
                                <span> A++</span>
                            </li>
                            <li className='themeMode'>
                                <span className="light">L</span>
                                <span className="dark">D</span>
                            </li>
                            <li>English</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
