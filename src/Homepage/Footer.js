// const Footer = (props) => (
//   <footer id="footer">
//     <section className="special">
//       <p className="copyright_nomargin">&copy; <a href="https://twitter.com/liran_tal">Liran Tal</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
//     </section>
//     <section className="special">
//       <ul className="icons">
//         <li>
//           <a href="https://twitter.com/liran_tal" className="icon fa-twitter alt">
//             <span className="label">Twitter</span>
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://github.com/lirantal/dockly"
//             className="icon fa-github alt"
//           >
//             <span className="label">GitHub</span>
//           </a>
//         </li>
//       </ul>
//     </section>
//   </footer>
// )

// export default Footer;


// NEXTNEXT

import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div className='Footerclass'>
    <MDBFooter style={{backgroundColor:'#45637d'}} className='text-center text-lg-start text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-3 border-bottom'>
        {/* <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div> */}

        {/* <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div> */}
      </section>
      <div className='footer'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>VIHATHA FOUNDATION
              </h6>
              <p>
                Vihatha provides transformational experimental learning programs for academic, technical and personal needs of learners.
              </p>
            </MDBCol>

            {/* <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'> */}
              {/* <h6 className='text-uppercase fw-bold mb-4'>Products</h6> 
               <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p> */}
            {/* </MDBCol> */}

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              {/* <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p> */}
              <p>
                <a href='#!' className='text-reset'>
                  Blogs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Support us
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='4' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                A -130, Nature City, Uslapur, Bilaspur, 495001, Chhattisgarh.
              </p>
              <p>
 
                rovinpushp@gmail.com
              </p>
              <p>+91 8448878770
              </p>
              {/* <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      </div>
      {/* <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div> */}
    </MDBFooter>
    </div>
  );
}





