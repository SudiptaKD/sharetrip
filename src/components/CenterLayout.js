import React from 'react'
import LeftPanel from './LeftPanel'
import panel1Icon from '../assets/icons/diamond.svg'
import panel2Icon from '../assets/icons/coins.svg'
import panel34Icon from '../assets/icons/lightning.svg'
import leftArrow from '../assets/icons/left.svg'
import rightArrow from '../assets/icons/right.svg'
import Coin from '../assets/icons/tripcoin.png'
import right from '../assets/icons/rightdot.svg'
import left from '../assets/icons/dot.svg'
import Bus from '../assets/icons/ticketBus.svg'


const CenterLayout = () => {
    return (
        <div className="center-layout container-fluid p-0" >

            <div className="row m-0">

                <div className="col-lg-3 layout-left p-0">
                    <LeftPanel/>
                </div>

                <div className="col-lg-9 layout-right p-0">
                    <div className="right-panel container-fluid p-0 ">

                        <div className="row-fluid bus-number m-0 p-0" >
                            <p>48 Available Buses</p>
                        </div>

                        <div className="row operator p-0" >
                                    <div className="col-lg-1 p-0" style={{width:"4.665%",height:'44px'}}>
                                        <img src={leftArrow} alt="icon" />
                                    </div>
                                    <div className="col-lg-2 p-0 operators op1" style={{width:"15.89%",height:'44px'}}>
                                        <h6>Hanif Enterprize</h6>
                                        <p>40 Buses</p>
                                    </div>
                                    <div className="col-lg-2 p-0 operators" style={{width:"15.89%",height:'44px'}}>
                                        <h6>Shohag Paribahan</h6>
                                        <p>40 Buses</p>
                                    </div>
                                    <div className="col-lg-2 p-0 operators" style={{width:"15.89%",height:'44px'}}>
                                        <h6>Ena Transport(Pvt) Ltd</h6>
                                        <p>40 Buses</p>
                                    </div>
                                    <div className="col-lg-2 p-0 operators" style={{width:"15.89%",height:'44px'}}>
                                        <h6>Saintmartin Travels</h6>
                                        <p>40 Buses</p> 
                                    </div>
                                    <div className="col-lg-1 p-0 operators" style={{width:"15.89%",height:'44px'}}>
                                        <h6>Soudia Coach Service</h6>
                                        <p>40 Buses</p>
                                    </div>
                                    <div className="col-lg-1 p-0 operators" style={{width:"11.22%",height:'44px'}}>
                                        <h6>Saintmartin Hyu</h6>
                                        <p>40 Buses</p> 
                                    </div>
                                    <div className="col-lg-1 p-0" style={{width:"4.665%",height:'44px'}}>
                                        <img src={rightArrow} alt="icon" />
                                    </div>
                        </div>
                        <div className="row panel m-0 p-0" >
                            <div className="col-lg-3 panel1 p-0">
                                <img src={panel1Icon} alt="icon" />
                                <p>Earliest Buses</p>
                            </div>
                            <div className="col-lg-3 panel2 p-0">
                                <img src={panel2Icon} alt="icon" />
                                <p>Cheapest Buses</p>
                            </div>
                            <div className="col-lg-3 panel3 p-0">
                                <img src={panel34Icon} alt="icon" />
                                <p>Available Seats</p>
                            </div>
                            <div className="col-lg-3 panel4 p-0">
                                <img src={panel34Icon} alt="icon" />
                                <p>Fastest Trips</p>
                            </div>
                        </div>

                        <div className="row list p-0" >
                            <div className="col-lg-8 left" style={{width:'70%'}}>
                                <div className="row  top"  >
                                    <div className=" col-sm-2 left-top" style={{maxHeight:'40px'}} >
                                        <p>AC</p>
                                    </div>
                                    <div className=" col-sm-8 middle-top" style={{maxHeight:'40px'}} >
                                        <h6>Hanif Enterprize</h6>
                                        <p>31-DHK-CTG(D)</p>
                                    </div>
                                    <div className=" col-sm-2 right-top m-0"  >
                                        <div className="row ">
                                            <div className="col-sm-6 p" >
                                                <img src={Coin} alt ="coin"
                                                style={{height:'20px', width:'22px'}} />
                                                </div>
                                            <div className="col-sm-6" ><p>55</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row  bottom" >
                                    <div className=" col-md-4 left-bottom"  >
                                        <p>From</p>
                                        <h6>DHAKA <strong>11:30 PM</strong></h6>
                                        <p style={{fontSize:'14px'}}>Kolabagan Counter</p>
                                        <p style={{marginTop:'-10px'}}>22 June 2021</p>
                                    </div>
                                    <div className=" col-md-4 middle-bottom" >
                                        <div className="row p-0 logo" >
                                            <div className="col-4" >
                                                <img src={left} alt="icon" />
                                            </div>
                                            <div className="col-4 ticket-bus" >
                                                <img src={Bus} alt="icon" />
                                            </div>
                                            <div className="col-4" >
                                                <img src={right} alt="icon" />
                                            </div>
                                        </div>
                                        <div className="row p-0 seats">
                                            <strong>16 Seats Available</strong>
                                            <p>6h 00m</p>
                                        </div>
                                    </div>
                                    <div className=" col-md-4 right-bottom m-0" style={{backgroundColor:'#ffffff'}} >
                                        <p>To</p>
                                        <h6>CHOTTOGRAM <strong>05:30 AM</strong></h6>
                                        <p style={{fontSize:'14px'}}>Dampara Counter</p>
                                        <p  style={{marginTop:'-10px'}}>23 June 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 right p-0" style={{width:'30%'}}>
                                <div className="container-fluid">
                                    <div className="row p-0" >
                                        <div className="col-lg-6" ></div>
                                        <div className="col-lg-6" >
                                            <p>Per Person</p>
                                            <h4>BDT 750</h4>
                                            <h6>BDT 775</h6>
                                            <div className="btn"><p>VIEW SEATS</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:'60px', marginLeft:'200px'}} >
                            <h4>Please Watch it in a 768p Display.</h4>
                            <p>My current Monitor's width 1366px </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CenterLayout
