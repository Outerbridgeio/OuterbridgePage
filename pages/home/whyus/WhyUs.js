import React from "react";
import styles from "./WhyUs.module.css";
import WhyUsCard from "../../../components/whyusCard/WhyUsCard";
import { whyus } from "../..//../variables";

export default function WhyUs() {
    return (
        
        <div style={{paddingTop: 50, paddingBottom: 50}} className="container" id="whyus">
            <div>
                <h1 className={styles['whyus-heading']}>Automate on-chain and off-chain workflows</h1>
                <p className={styles['whyus-sub-heading']} style={{lineHeight: 1.5}}>Outerbridge is created to allow people building workflows involving on-chain and off-chain applications, with simple drag and drop interface.</p>
                <div className={styles['whyus-cards-div']}>
                {whyus.map((card, index) => {
                    return (
                        <WhyUsCard
                            key={index}
                            cardInfo={{
                                title: card.title,
                                desc: card.desc,
                                img: card.img,
                                index: index,
                            }}
                        />
                    );
                })}
                </div>
            </div>
        </div>
        
    );
}
