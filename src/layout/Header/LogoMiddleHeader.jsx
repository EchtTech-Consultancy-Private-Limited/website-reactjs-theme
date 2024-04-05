import React from 'react';
import Image from '../../component/Image';
import LogoLg from '../../assets/img/logolg.svg';
import AmritMhotsav from '../../assets/img/Azadi_Ka_Amrit_Mahotsav.png';
import G20 from '../../assets/img/G20_India_Logo.png';
import TollFreeImg from '../../assets/img/male-services-support-icon.svg';


export default function LogoMiddleHeader() {
  return (
    <>
       <div className="logoMiddleHeader">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="logoLeft">
                     <Image imageUrl={LogoLg} className="AmritMhotsav"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="logoRight d-flex justify-content-end align-items-center">
                       <Image imageUrl={AmritMhotsav} className="AmritMhotsav"/>
                       <Image imageUrl={G20} className="AmritMhotsav"/>

                       <div className="tollfreeNO">
                       <Image imageUrl={TollFreeImg}/>
                         <span>1800-11-4000 or 1915</span>
                       </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}
