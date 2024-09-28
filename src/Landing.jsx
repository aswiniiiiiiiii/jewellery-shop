import React from 'react'
import './App.css'
import LandImg from './assets/land.jpg'
import Product1 from './assets/prd1.jpeg'
import Product3 from './assets/prd3.jpeg'
import Bracelet1 from './assets/b1.jpeg'
import Bracelet2 from './assets/b2.jpeg'
import Bracelet3 from './assets/b3.jpeg'
import Bracelet4 from './assets/b4.jpeg'
import Earring1 from './assets/e1.jpeg'
import Earring2 from './assets/e2.jpeg'
import Earring3 from './assets/e3.jpeg'
import Earring4 from './assets/e4.jpeg'
import Necklace1 from './assets/n1.jpeg'
import Necklace2 from './assets/n2.jpeg'
import Necklace3 from './assets/n3.jpeg'
import Necklace4 from './assets/n4.jpeg'
import Ring1 from './assets/r1.jpeg'
import Ring2 from './assets/r2.jpeg'
import Ring3 from './assets/r3.jpeg'
import Ring4 from './assets/r4.jpeg'
import Earring from './assets/Earring.png'
import Bracelet from './assets/Bracelet.webp'
import Ring from './assets/ring.png'
const Landing = () => {
  return (
    
   <>
   
   {/* Landing */}
        <div className='container-fluid'>
            <div  className='Land row py-5 '>
              <div className="col-lg-6 col-12 py-4  d-flex flex-column justify-content-center align-items-start text-justify px-5">
                <h3  className='LandHead'>HandCrafted <br /> & Ethically Sourced</h3>
                <p className='fs-5'>The rarest things in the world, next to a spirit of discernment, are diamonds and pearls</p>
                <button className='Explore p-2'>Explore More</button>
              </div>
              
              <div className="col-lg-6 col-12">
                <img style={{height :'600px', width:"100%"}} className='img img-fluid'  src={LandImg} alt="" />
              </div>
              
            </div>
        </div>
        {/* category */}
        <div id="Category" className="container mt-5  shadow border">
          <div className='row'>
              
               <div className='col-lg-3 col-12  col-md-6 text-center'>
                    <img className='p-2' width={'200px'} src={Bracelet} alt="" />
                    <h5>Bracelet</h5>
               </div>
               <div className='col-lg-3 col-12  col-md-6 text-center'>
                    <img className='p-2' width={'200px'} src={Earring} alt="" />
                    <h5>Earrings</h5>
               </div>
               <div className='col-lg-3 col-12  col-md-6 text-center'>
                    <img className='p-2' width={'200px'} src={Ring} alt="" />
                    <h5>Ring</h5>
               </div>
               <div className='col-lg-3 col-12  col-md-6 text-center'>
                    <img className='p-2' width={'200px'} src="https://www.pngall.com/wp-content/uploads/8/Necklace-Locket-PNG-File.png" alt="" />
                    <h5>Necklace</h5>
               </div>
               
          </div>
        </div>
        {/* limited sale */}
        <h2 className='text-center align-justify p-5'>Shop Our Limited <br /> Edition Collaborations</h2>
        <div className='d-flex justify-content-center align-items-center'>
            <div className="container  row">
                {/* card1 */}
                <div style={{width:'300px', height: '400px'}} className="container col-lg-3 col-xl-3 col-xxl-3 col-6 shadow mt-4 ">
                    <img style={{height:'250px'}} className='img-fluid' src="https://png.pngtree.com/background/20211217/original/pngtree-earring-photography-picture-image_1580510.jpg" alt="" />
                    <div className='text-center  pt-3 align-justify'>
                        <h5>Stone Earnings</h5>
                        <h5>Brand : Aqua</h5>
                        <h5> 100$</h5>
                    </div>
                </div>
                {/* card2 */}
                <div style={{width:'300px', height: '400px'}} className="container col-lg-3 col-xl-3 col-xxl-3 col-6 shadow mt-4">
                    <img style={{height:'250px'}} className='img-fluid' src="https://m.media-amazon.com/images/I/71vG0xUgbiL._UL1500_.jpg" alt="" />
                    <div className='text-center pt-3 align-justify'>
                        <h5>Rosegold Bracelet</h5>
                        <h5>Brand : Ruby</h5>
                        <h5> 400$</h5>
                    </div>
                </div>
                {/* card3 */}
                <div style={{width:'300px', height: '400px'}} className="container col-lg-3 col-xl-3 col-xxl-3 col-6 shadow mt-4">
                    <img style={{height:'250px'}} className='img-fluid py-2' src="https://tse3.mm.bing.net/th?id=OIF.IC%2fPWIxT%2bl4myGw6VuS3BA&pid=Api&P=0&h=180" alt="" />
                    <div className='text-center  pt-3 align-justify'>
                        <h5>White Beads Necklace</h5>
                        <h5>Brand : Austra</h5>
                        <h5> 300$</h5>
                    </div>
                </div>
                {/* card4 */} 
                <div style={{width:'300px', height: '400px'}} className="container col-lg-3 col-xl-3 col-xxl-3 col-6 shadow mt-4">
                    <img style={{height:'250px'}} className=' img img-fluid' src="https://d1e0b1m7y2tal1.cloudfront.net/catalog/product/images/14k-gold-designer-ladies-diamond-bracelet-710ct-p-6298_ye.jpg" alt="" />
                    <div className='text-center  pt-3 align-justify'>
                        <h5>Golden Bracelet </h5>
                        <h5>Brand : Aqua</h5>
                        <h5> 200$</h5>
                    </div>
                </div>
            </div>
        </div>
        {/* Top offers */}
        <h2 id='offers' className='text-center align-justify p-5'>Top Offers</h2>
       
        <div className='container-fluid top-offers'>
        <div className="row ">
            <div style={{height: '600px'}} className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-12">
                <img style={{height :'100%', width: '100%' , objectFit :'cover',overflow :'hidden'}} className='' src="https://images.summitmedia-digital.com/preview/images/2018/03/28/MINnm.jpg" alt="" />
               <div className='limited'>
                    <h3 className=''>Limited</h3>
                    <a className='arrow' href="">Explore <i class="fa-solid fa-arrow-right"></i></a>
               </div>
            </div>
            <div style={{height: '600px'}} className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-12">
                <img style={{height :'100%', width: '100%', objectFit :'cover',overflow :'hidden'}}  className='img-fluid' src="https://images.herzindagi.info/image/2019/Oct/minimal-gold-jewellery.jpg" alt="" />
                <div className='Trending'>
                    <h3 className=''>Trending</h3>
                    <a className='arrow' href="">Explore <i class="fa-solid fa-arrow-right"></i></a>
               </div>
            </div>

        </div>

       </div>
        {/* cards */}
        <h2  className='text-center align-justify pt-5'>Offers Zone</h2>

        <div className="container">
            <div className="row">
                <div className="col-lg-3 card rounded text-center off d-flex justify-content-center align-items-center mt-5 ">
                <a className='card-link' href=''>
                    <p>Winter Sale</p>
                    <h1>25% Off</h1>
                </a>
                </div>
                <div className="col-lg-3 rounded ">
                    <div  className="card rounded shadow mt-5">
                    <a className='card-link' href=''>
                        <img width={'100%'} height={'250px'} className='p-1 img img-fluid' src="https://i.pinimg.com/originals/df/71/4e/df714e6fad8cb1d5746f1aff291df9b8.png" alt="" />
                        <div className="text-center">
                        <h5>Necklace</h5>
                        <h6>Brand : Aqua</h6>
                        <h5> 130$</h5>
                        </div>
                     </a>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="card rounded shadow mt-5">
                <a className='card-link' href=''>
                        <img width={'100%'} height={'250px'} className='p-1 img img-fluid' src={Product1} alt="" />
                        <div className="text-center">
                        <h5>Bracelet</h5>
                        <h6>Brand : Retera</h6>
                        <h5> 180$</h5>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="card rounded shadow mt-5">
                <a className='card-link' href=''>
                        <img width={'100%'} height={'250px'} className='p-1 img img-fluid' src={Product3} alt="" />
                        <div className="text-center">
                        <h5>Diamond Earnings</h5>
                        <h6>Brand : altar</h6>
                        <h5> 180$</h5>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Bracelet */}
        <h2 id="collections" className='text-center align-justify pt-5'>Bracelets</h2>

        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                <div className="card rounded shadow">
                     <a className='card-link' href=''>
                        <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Bracelet1} alt="" />
                        <div className="text-center">
                        <h5>Three Layer</h5>
                        <h6>Brand : Greek</h6>
                        <h5> 100$</h5>
                        </div>
                     </a>
                    </div>
                </div>
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                <div className="card rounded shadow">
                    <a className='card-link' href=''>
                        <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Bracelet2} alt="" />
                        <div className="text-center">
                        <h5>Lock Chain</h5>
                        <h6>Brand : Altar</h6>
                        <h5> 180$</h5>
                        </div>
                    </a>
                    </div>
                </div>
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                <div className="card rounded shadow">
                    <a className='card-link' href=''>
                        <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Bracelet3} alt="" />
                        <div className="text-center">
                        <h5>Galaxy Bracelet</h5>
                        <h6>Brand : Astra</h6>
                        <h5> 160$</h5>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                <div className="card rounded shadow">
                <a className='card-link' href=''>
                        <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Bracelet4} alt="" />
                        <div className="text-center">
                        <h5>White Beads Bracelet</h5>
                        <h6>Brand : Veto</h6>
                        <h5> 99$</h5>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Earrings */}
        <h2 className='text-center align-justify pt-5'>Earrings</h2>

        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                <div  className="card rounded shadow">
                      <a className='card-link' href=''>
                        <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Earring1} alt="" />
                        <div className="text-center">
                        <h5>Three Layer</h5>
                        <h6>Brand : Swastra</h6>
                        <h5> 100$</h5>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                <div className="card rounded shadow">
                     <a className='card-link' href=''>
                        <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Earring2} alt="" />
                        <div className="text-center">
                        <h5>Lock Chain</h5>
                        <h6>Brand : Neglth</h6>
                        <h5> 180$</h5>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                <div className="card rounded shadow">
                      <a className='card-link' href=''>
                        <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Earring3} alt="" />
                        <div className="text-center">
                        <h5>Galaxy Bracelet</h5>
                        <h6>Brand : Astra</h6>
                        <h5> 160$</h5>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                <div className="card rounded shadow">
                        <a className='card-link' href=''>
                            <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Earring4} alt="" />
                            <div className="text-center">
                            <h5>White Beads Bracelet</h5>
                            <h6>Brand : Ruby</h6>
                            <h5> 99$</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Ring */}
        <h2 className='text-center align-justify pt-5'>Rings</h2>

        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                <div className="card rounded shadow">
                      <a className='card-link' href=''>
                        <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Ring1} alt="" />
                        <div className="text-center">
                        <h5>White Peralish Ring</h5>
                        <h6>Brand : Aqua</h6>
                        <h5> 124$</h5>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                <div className="card rounded shadow">
                     <a className='card-link' href=''>
                        <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Ring2} alt="" />
                        <div className="text-center">
                        <h5>Twisted Ring </h5>
                        <h6>Brand : Greek</h6>
                        <h5> 136$</h5>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                <div className="card rounded shadow">
                      <a className='card-link' href=''>
                        <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Ring3} alt="" />
                        <div className="text-center">
                        <h5>Dimensional Ring</h5>
                        <h6>Brand : Veto</h6>
                        <h5> 65$</h5>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                <div className="card rounded shadow">
                        <a className='card-link' href=''>
                            <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Ring4} alt="" />
                            <div className="text-center">
                            <h5>Double layered Ring</h5>
                            <h6>Brand : Qua</h6>
                            <h5> 110$</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Necklace */}
        <h2 className='text-center align-justify pt-5 '>Necklace</h2>

        <div className="container mb-5">
            <div className="row">
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5" >
                <div className="card rounded shadow">
                      <a className='card-link' href=''>
                        <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Necklace1} alt="" />
                        <div className="text-center">
                        <h5>Diamond Ring Chain</h5>
                        <h6>Brand : Aqua</h6>
                        <h5> 124$</h5>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                <div className="card rounded shadow">
                     <a className='card-link' href=''>
                        <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Necklace2} alt="" />
                        <div className="text-center">
                        <h5>Flower Chain</h5>
                        <h6>Brand : Altar</h6>
                        <h5> 156$</h5>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                <div className="card rounded shadow">
                      <a className='card-link' href=''>
                        <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Necklace3} alt="" />
                        <div className="text-center">
                        <h5>Lotus Chain</h5>
                        <h6>Brand : Astra</h6>
                        <h5> 145$</h5>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-5">
                <div className="card rounded shadow">
                        <a className='card-link' href=''>
                            <img height={'250px'} width={'100%'} className='p-1 img img-fluid' src={Necklace4} alt="" />
                            <div className="text-center">
                            <h5>Swan Chain</h5>
                            <h6>Brand : Aqua</h6>
                            <h5> 130$</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
   </>
    
    
  )
}

export default Landing
