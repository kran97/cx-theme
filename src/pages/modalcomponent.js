
import React, { Component } from 'react';
import { BlocxModalBody, BlocxModalButtonControls, BlocxModalHeader, BlocxModal, BlocxButton, BlocxContentBoxType } from 'blocx-react-components'
import classnames from 'classnames';

class WModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: true,
        }
    }


    handleClick = (e) => {
        e.preventDefault()
        if (this.props.onClick) {
            this.props.onClick(e)
        }
        this.setState({
            showModal: !this.state.showModal
        })
        console.log("modal--->", (e.target.id) ? e.target.id + 'd' : 'closed');
    }

    onRescheduleButtonClick= (e) => {
        e.preventDefault()
        if (this.props.onClick) {
            this.props.onClick(e)
        }
        this.setState({
            showModal: !this.state.showModal
        })
        console.log("modal--->", (e.target.id) ? e.target.id + 'd' : 'closed');
        //this.props.history.push("/page8");
    }



    render() {
        const { showModal } = this.state;
        const display = classnames({ 'block': showModal, 'none': !showModal });
        return (

            <React.Fragment>

                <BlocxModal.Default style={{ display: display }} >
                    <div className="blocx-grid">
                        <div className="col-md-2 modalimage">
                            <img src={require('../app/assets/images/status-ok-circ-ko.svg')} alt="icon" />
                        </div>
                        <div className="col-md-8">
                            <BlocxModalHeader.Default >
                                <BlocxContentBoxType.Body >
                                    <h4 style={{padding:'0px'}}>Your doctor appointment is confirmed.</h4>
                                </BlocxContentBoxType.Body >
                            </BlocxModalHeader.Default>
                            <BlocxModalBody.Default >
                                    <p  style={{padding:'0px'}}>A confirmation email and reminder sent to your contacts. detracto, vidit vituperatoribus duo id. Afert dtraxis voluptatatum vis eu innermis eloquntium cum id. Mei aequeue.
                                    </p>
                                <BlocxModalButtonControls.Default >
                                    <BlocxButton.Secondary_Outline className="dialogboxbutton" label="Reschedule" onClick={(e)=>this.onRescheduleButtonClick(e)} >
                                    </BlocxButton.Secondary_Outline>
                                    <BlocxButton.Primary className="dialogboxbutton" label="Close" onClick={(e) => this.handleClick(e)} >
                                    </BlocxButton.Primary>
                                </BlocxModalButtonControls.Default>
                            </BlocxModalBody.Default>
                        </div>
                    </div>
                </BlocxModal.Default>
                <BlocxModal.Overlay style={{ display: display }}>
                </BlocxModal.Overlay>
            </React.Fragment>
        )
    }
}
export default WModal