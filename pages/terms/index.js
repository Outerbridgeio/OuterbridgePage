import React, { Component } from 'react';
import NavBar from '../../components/navbar/NavBar';

class TermsOfService extends Component {

    constructor(props) {
      super(props);
    }

    exploreProductClicked(e) {
        e.preventDefault()
        window.location.href = "/";
    }

    whyUsClicked(e) {
        e.preventDefault()
        window.location.href = "/";
    }

    featureClicked(e) {
        e.preventDefault()
        window.location.href = "/";
    }

    integrationClicked(e) {
        e.preventDefault()
        window.location.href = "/";
    }

    render() {
        return (
            <div id="app">

            <NavBar theme={'dark'} whyUsClicked={e=>this.whyUsClicked(e)} featureClicked={e=>this.featureClicked(e)} integrationClicked={e=>this.integrationClicked(e)} />

            <div className="container">

                <h1 style={{ marginTop: 120 }}>Terms of Use</h1>
                <br/>

                <h3>1. Terms</h3>

                <p>By accessing this Website, accessible from <a href="https://www.outerbridge.io">https://www.outerbridge.io</a>, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

                <br/>
                <h3>2. Use License</h3>

                <p>Permission is granted to temporarily download one copy of the materials on Outerbridge Inc's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>

                <ul>
                    <li>modify or copy the materials;</li>
                    <li>use the materials for any commercial purpose or for any public display;</li>
                    <li>attempt to reverse engineer any software contained on Outerbridge Inc's Website;</li>
                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                    <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
                </ul>

                <p>This will let Outerbridge Inc to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</p>

                <br/>
                <h3>3. Disclaimer</h3>

                <p>All the materials on Outerbridge Inc’s Website are provided "as is". Outerbridge Inc makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Outerbridge Inc does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

                <br/>
                <h3>4. Limitations</h3>

                <p>Outerbridge Inc or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Outerbridge Inc’s Website, even if Outerbridge Inc or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>

                <br/>
                <h3>5. Revisions and Errata</h3>

                <p>The materials appearing on Outerbridge Inc’s Website may include technical, typographical, or photographic errors. Outerbridge Inc will not promise that any of the materials in this Website are accurate, complete, or current. Outerbridge Inc may change the materials contained on its Website at any time without notice. Outerbridge Inc does not make any commitment to update the materials.</p>

                <br/>
                <h3>6. Links</h3>

                <p>Outerbridge Inc has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Outerbridge Inc of the site. The use of any linked website is at the user’s own risk.</p>

                <br/>
                <h3>7. Site Terms of Use Modifications</h3>

                <p>Outerbridge Inc may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>

                <br/>
                <h3>8. Your Privacy</h3>

                <p>Please read our Privacy Policy.</p>

                <br/>
                <h3>9. Governing Law</h3>

                <p>Any claim related to Outerbridge Inc's Website shall be governed by the laws of ie without regards to its conflict of law provisions.</p>
                <br/>
                <br/>
            </div>
            </div>
        );
    }
};

export default TermsOfService;
