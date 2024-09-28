import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='footer container-fluid pb-5'>
          
              <div className=" row ">
                <div className='col-lg-4 col-md-4 col-12 px-5 pt-5'>
                    <h4 className='fw-bolder'>Aura</h4>
                    <p>Elevate your style with our jewelry. <br />Timeless elegance, modern design
                    <br />Makes you stand out</p>
                </div>
                <div className='col-lg-4 col-md-4 col-12  '>
                    <h4 className='fw-bolder pt-5 '>Collections</h4>
                    <ul >
                        <li>Bracelet</li>
                        <li>Earrings</li>
                        <li>Necklace</li>
                        <li>Ring</li>
                    </ul>
                </div>
                <div className='col-lg-4 col-md-4 col-12 '>
                    <h4 className='fw-bolder pt-5'>Contact Us</h4>
                    <div className='footer-sub'>
                        <ul className='d-flex gap-3 fs-5 '>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-facebook"></i></li>
                            <li><i className="fa-brands fa-twitter"></i></li>
                            <li><i className="fa-brands fa-youtube"></i></li>
            
                        </ul>
                    </div>
                </div>
              </div>
      </div>
    </>
  )
}

export default Footer
