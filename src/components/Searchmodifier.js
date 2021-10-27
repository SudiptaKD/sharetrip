import React from 'react'
import arrow from '../assets/icons/arrow.svg'
import busIcon from '../assets/icons/bus.svg'
 
const Searchmodifier = () => {
    return (
        <div className="search-modifier">
            <div className="content">
                <div className="onward-journey" style={{display:'flex', flexDirection:'row', marginLeft:'0px'}}>
                    <div className="icon">
                        <img src={busIcon} alt="bus"/>
                    </div>
                    <div className="text">
                        <p>Onward Journey</p>
                        <h1>Dhaka - Chottogram</h1>
                        <h6>22 June, 2021(Thursday)</h6>
                    </div>
                </div>
                <div classname="toFrom">
                    <img src={arrow} alt="arrow"/>
                </div>
                <div className="return-journey" style={{display:'flex', flexDirection:'row'}}>
                    <div className="icon">
                        <img src={busIcon} alt="bus"/>
                    </div>
                    <div className="text">
                        <p>Return Journey</p>
                        <h1>Chottogram - Dhaka</h1>
                        <h6>24 June, 2021(Thursday)</h6>
                    </div>
                </div>
                <div className="search-btn">
                    <div className="btn" style={{marginRight:'-180px'}}><p>Modify Srearch</p></div >
                </div>
            </div>
        </div>
    );
}
export default Searchmodifier;