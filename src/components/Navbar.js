import React from 'react'
import NavLogo from '../assets/logo/Navbar Brand.svg'
import Spin from '../assets/icons/spin.svg'
import Profile from '../assets/icons/Profile.svg'

const Navbar = () => {
    return (
        <div className="container-fluid m-0 nav" >
            <div className="row nav-content m-0">
                <div className="col-lg-2 p-0 nav-brand" style={{width:'18%'}}>
                    <img src={NavLogo} alt="sharetrip" />
                </div>
                <div className="col-lg-8 p-0 nav-items" style={{width:'63.5%'}} >
                    <div className="row m-0" style={{ height:'100%', width:'100%'}}>
                        <div className="col-lg-1 links" ><p>Flight</p></div>
                        <div className="col-lg-1 links" ><p style={{color:'#1882FF'}} >Bus</p></div>
                        <div className="col-lg-1 links" ><p>Hotel</p></div>
                        <div className="col-lg-1 links" ><p>Holiday</p></div>
                        <div className="col-lg-1 links" ><p>Visa</p></div>
                        <div className="col-lg-1 links" ><p>Visa Guide</p></div>
                        <div className="col-lg-1 links" ><p>Group request</p></div>
                        <div className="col-lg-1 links" ><p>Travel Advisory</p></div>
                        <div className="col-lg-1 links" ><p>Promotions</p></div>
                        <div className="col-lg-1 links" ><p>Blog</p></div>
                    </div>
                </div>
                <div className="col-lg-2 p-0 m-0 right-items " style={{width:'18.5%', marginTop:'5px'}}>
                    <div className="row  m-0" style={{marginTop:'10px', height:'100%', width:'100%'}} >
                        <div className="col-sm-1 spin" style={{paddingTop:'15px'}} >
                            <img src={Spin} alt="spin" />
                        </div>
                        <div className="col-sm-6 text" style={{paddingTop:'15px', paddingRight:'2px'}} >
                            <p>Spin To Win</p>
                        </div>
                        <div className="col-sm-4 profile" >
                            <img src={Profile} alt="Profile" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar
