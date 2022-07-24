import Lottie from 'react-lottie';
import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter,} from 'reactstrap';
import PropTypes from 'prop-types';

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: require('../../../assets/animation/letsdothis_fail.json'),
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
            toggle={e => this.props.toggleFailModal(e)}
            isOpen={this.props.showFail} >
            <ModalHeader toggle={e =>this.props.toggleFailModal(e)}> Please Try Again </ModalHeader>
            <ModalBody>
                <div>
                    <Lottie 
                        options={defaultOptions}
                        height='auto'
                        width='100%'/>

                    <p style={{textAlign: 'center', paddingLeft:20, paddingRight:20, fontSize: 16, fontWeight: '600'}}>
                        Thank you for expressing your interest! We are experiencing some network issue. Please try again.
                    </p>
                </div>
            </ModalBody>
        </Modal>
 );
}
};

Success.propTypes = {
    showFail: PropTypes.bool,
};

export default Success;
