import React, { Component } from 'react';
import styles from "./Integrations.module.css";
import IntegrationCard from "../../../components/integrationCard/IntegrationCard";
import { integrations } from "../../../variables";
import PropTypes from 'prop-types';

class Integrations extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container" id="integration">
            <div>
                <h1 className={styles['integration-heading']}>Applications and Networks Integration</h1>
                <p style={{lineHeight: 1.5}} className={styles['integration-sub-heading']}>New applications and networks are constantly added. Download the source code and create your own custom nodes.</p>
                <div className={styles['integration-cards-div']}>
                {integrations.map((card, index) => {
                    return (
                        <IntegrationCard
                            key={index}
                            cardInfo={{
                                title: card.name,
                                desc: card.desc,
                                img: card.img,
                            }}
                        />
                    );
                })}
                </div>
                <div className="button-wrapper" style={{textAlign: 'center', marginTop: 30, paddingBottom: 80}}>
                    <a style={{marginTop: 10, cursor: 'pointer'}} className="btn-contained-lg page-scroll" href="https://demo.outerbridge.io/canvas" target="_blank">View All 50+ Integrations</a>
                </div>
            </div>
        </div>
        
    );
}
};

Integrations.propTypes = {
    theme: PropTypes.string,
};

export default Integrations;

