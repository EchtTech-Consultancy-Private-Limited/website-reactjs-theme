import React from 'react'
import emblem from '../../assets/img/emblem-sm.svg';
import { Link } from '@mui/icons-material';
import LanguageIcon from '@mui/icons-material/Language';
export default function TopHeader() {
  return (
    <>
         <div className="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 top_header_left">
                        <ul>
                            {/* <li>
                               <img src={emblem} alt="emblem" />
                            </li> */}
                            <li>
                                <span className="me-3">Government of India</span>
                            </li>
                            <li>
                                {/* <span>उपभोक्ता मामले, खाद्य और सार्वजनिक वितरण मंत्रालय</span> */}
                                <span>Ministry of Consumer Affairs, Food & Public Distribution</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 top_header_right">
                        <ul>
                            <li> <a href="#" className="text-black">Skip to Main Content</a> </li>
                            <li><a href="#" className="text-black">Screen Reader Access</a></li>
                            <li className='fontAccessebility'>
                                <a href="#" className="text-black me-3">A</a>
                                <a href="#" className="text-black me-3">A+</a>
                                <a href="#" className="text-black">A++</a>
                            </li>
                            <li className='themeMode'>
                                <span className="light">L</span>
                                <span className="dark">D</span>
                            </li>
                            <li>
                               <div className="language-box">
                               <span><LanguageIcon/></span>
                               <select name="" id="" className="form-control-select">
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                </select>
                               </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
