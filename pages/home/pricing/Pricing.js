import React from "react";
import styles from "./Pricing.module.css";
import PriceCard from "../../../components/priceCard/PriceCard";
import { pricesSection } from "../../../variables";

export default function Pricing() {
    return (
        <div className="cards-2" style={{ paddingTop: 0 }} id="pricing">
            <div className="container">
                <h1 className={styles['pricing-heading']}>Start using Outerbridge</h1>
                <div className={styles['pricing-cards-div']}>
                {pricesSection.map((card, index) => {
                    return (
                        <PriceCard
                            key={index}
                            cardInfo={{
                                title: card.title,
                                price: card.price,
                                subtitle: card.subtitle,
                                bulletpoints: card.bulletpoints,
                                actionName: card.actionName,
                                actionLink: card.actionLink,
                            }}
                        />
                    );
                })}
                </div>
            </div>
        </div>
    );
}
