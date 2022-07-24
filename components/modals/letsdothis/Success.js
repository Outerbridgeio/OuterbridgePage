import Lottie from 'react-lottie';
import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter,} from 'reactstrap';
import PropTypes from 'prop-types';

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: require('../../../assets/animation/letsdothis_success.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

class Success extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Modal    
            aria-labelledby="contained-modal-title-vcenter"
            centered
            toggle={e => this.props.toggleSuccessModal(e)}
            isOpen={this.props.showSuccess} >
            <ModalHeader toggle={e =>this.props.toggleSuccessModal(e)}> Thank You! </ModalHeader>
            <ModalBody>
                <div>
                    <Lottie 
                        options={defaultOptions}
                        height='auto'
                        width='100%'/>

                    <p style={{textAlign: 'center', paddingLeft:20, paddingRight:20, fontSize: 16, fontWeight: '600'}}>
                        Thank you for expressing your interest! We will get back to you within 24 - 48 hours with more exciting details!
                    </p>
                </div>
            </ModalBody>
        </Modal>
 );
}
};

Success.propTypes = {
    showSuccess: PropTypes.bool,
};

export default Success;
