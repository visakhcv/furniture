import React from 'react'
import './navbar.css'
import bajaj from '../images/client-img/bajay.png'
import crompton from '../images/client-img/crompton.png'
import Havells from '../images/client-img/Havells.png'
import lg from '../images/client-img/lg.png'
import mi from '../images/client-img/mi.png'
import Onida from '../images/client-img/Onida.png'
import samsung from '../images/client-img/samsung.png'
import usha from '../images/client-img/usha.png'

export default function Partner() {


    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <div class="contact-form">
                        <form action="">
                            <input type="" placeholder="Enter Your Name" required />
                            <input type="email" placeholder="Enter Your mail" required />
                            <input type="" placeholder="Enter Your Subject" />
                            <textarea name="" id="" cols="40" rows="10" placeholder="Enter Your Message" required />
                            <input type="submit" value="Submit" class="send" />
                        </form>
                    </div>
                </div>


                <div className="col icons">
                    <img src={bajaj} alt="bajaj" />
                    <img src={crompton} alt="crompton" />
                    <img src={Havells} alt="Havells" />
                    <img src={lg} alt="lg" />
                    <img src={mi} alt="mi" />
                    <img src={Onida} alt="onida" />
                    <img src={samsung} alt="samsung" />
                    <img src={usha} alt="usha" />
                </div>
            </div>
        </div>
    )
}
