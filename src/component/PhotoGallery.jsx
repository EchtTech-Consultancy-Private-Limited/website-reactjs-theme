import React from 'react'
import Image from './Image'
import CollectionsIcon from '@mui/icons-material/Collections';
import Image1 from "../assets/img/gallery1.png"
import Image2 from "../assets/img/gallery2.png"
import Image3 from "../assets/img/gallery3.png"
import Image4 from "../assets/img/gallery4.png"
import Butotn from './Button';

export default function PhotoGallery() {
  return (
    <>
    <section className='pt-0'>
      <div className="photoGallery">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex align-items-center justify-content-between">
            <h2 class="title"> Photo Gallery </h2>
            <Butotn value="View All"/>
            </div>
            <div className="col-md-3">
              <div className="photoCard">
               <Image imageUrl={Image1}/>
               <div className="photoContent top">
                <p> Celebration of ‘Rashtriya Ekta Diwas’</p>
              
                <div>
                  <button>View All</button>
                  <p><CollectionsIcon/> 169</p>
                </div>
               </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="photoCard">
               <Image imageUrl={Image2}/>
               <div className="photoContent bottom">
                <p>Nukkad Natak "Swachhta Pakhwara" </p>

                <div>
                  <button>View All</button>
                  <p><CollectionsIcon/>169</p>
                </div>
               </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="photoCard">
               <Image imageUrl={Image3}/>
               <div className="photoContent top">
                <p> Swachhta Pledge"Swachhta Pakhwara"</p>

                <div>
                  <button>View All</button>
                  <p><CollectionsIcon/>169</p>
                </div>
               </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="photoCard">
               <Image imageUrl={Image4}/>
               <div className="photoContent bottom">
                <p> Nukkad Natak At Ndmc Market</p>

                <div>
                  <button>View All</button>
                  <p><CollectionsIcon/>169</p>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
