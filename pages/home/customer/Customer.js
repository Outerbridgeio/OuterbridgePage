import React from "react";
import { customer } from "../../../variables";
import Swiper from "swiper"


class Customer extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount(){
        this.swiper = new Swiper('.image-slider', {
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            loop: true,
            spaceBetween: 30,
            slidesPerView: 3,
            breakpoints: {
                // when window is <= 580px
                580: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                // when window is <= 768px
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                // when window is <= 992px
                992: {
                    slidesPerView: 5,
                    spaceBetween: 20
                },
                // when window is <= 1200px
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 20
                },
    
            }
        });
    }
        
    renderLogo() {
        var itemsarray = [];

        for (let i = 0; i < customer.length; i++) {
            itemsarray.push(
                <div style={{display: 'flex'}} key={i} className="swiper-slide">
                    <img style={{margin: 'auto', height: 50, width: 50, objectFit: 'contain',}} className="img-fluid" src={customer[i]} alt="alternative"/>
                </div>
            );
        }

        return  <div className="swiper-wrapper">{itemsarray}</div>;
    }


    render() {
        return (
            <div id="customer" className="container">
                <div >
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="slider-container">
                                <div style={{ paddingTop: 35, paddingBottom: 35 }} className="swiper-container image-slider">
                                    {this.renderLogo()}
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        );
    }
}

export default Customer;