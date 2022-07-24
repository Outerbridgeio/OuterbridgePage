import React, { Component } from 'react';
import "./Integrations.css";
import IntegrationCard from "../../../components/integrationCard/IntegrationCard";
import { integrations } from "../../../variables";
import PropTypes from 'prop-types';

class Integrations extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container" id="games">
            <div>
                <h1 className="game-heading">Applications and Networks integration</h1>
                <p style={{lineHeight: 1.5}} className="game-sub-heading">New applications and networks are constantly added. Download the source code and create your own custom nodes.</p>
                <div className="game-cards-div">
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

