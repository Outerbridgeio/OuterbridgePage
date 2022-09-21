import React from "react";
import color from "../../../assets/color"
import { testimonial } from "../../../variables";
import styles from "./Testimonial.module.css";
import Swiper from "swiper"


class Testimonial extends React.Component {
    constructor(props) {
      super(props);
    }

  
    componentDidMount(){
        this.swiper = new Swiper('.text-slider', {
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }
    
   
    renderSlider() {
        var itemsarray = [];

        for (let i = 0; i < testimonial.length; i++) {
            itemsarray.push(
                <div key={i} className="swiper-slide">   
                       
                    <div className="text-wrapper">

                        <div className={styles['testimonial-desc']}>"{testimonial[i].desc}"</div>

                        <div style={{ display: 'flex', textAlign: 'center', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }} className={styles['testimonial-main-div']}>

                            <div className={styles['testimonial-image-div']}>
                                <img alt={testimonial[i].img} src={testimonial[i].img}></img>
                            </div>
                            
                            <div className={styles['testimonial-text-div']}>
                                <p className={styles['testimonial-author']}>{testimonial[i].name}</p>
                                <p style={{ marginTop: -10 }} className={styles['testimonial-title']}>{testimonial[i].title}</p>
                            </div>
                                
                        </div>
                        
                    </div> 
                   
                </div> 
            );
        }

        return  <div className="swiper-wrapper">{itemsarray}</div>;
    }


    render() {
        return (
            
            <div className="slider-2">
                <div style={{marginTop: 20}} className="container">
                    <div className="row">
                        <div className="col-lg-12">      
                
                            <div className="slider-container">
                                <div className="swiper-container text-slider">
                                    
                                    {this.renderSlider()}
                            
                                    <div style={{color: color.primary}} className="swiper-button-next"></div>
                                    <div style={{color: color.primary}} className="swiper-button-prev"></div>
                            
                                </div>
                            </div> 
                    
                        </div> 
                    </div> 
                </div>
            </div> 
        );
    }
}

export default Testimonial;