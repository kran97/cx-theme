import React, { Component } from 'react';
import { BlocxButton } from 'blocx-react-components';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleClickPharma = (e) => {
        e.preventDefault()
        if (this.props.onClick) {
            this.props.onClick(e)
        }
        this.props.history.push("/pharma");

    }

    handleClickDoc = (e) => {
        e.preventDefault()
        if (this.props.onClick) {
            this.props.onClick(e)
        }
        this.props.history.push("/doctor_appoinment");

    }

    render() {
        return (
            <React.Fragment>
                <div style={{paddingTop:'20px'}}>
                    <BlocxButton.Primary className="" label="Pharma" onClick={(e) => this.handleClickPharma(e)} >
                    </BlocxButton.Primary>&nbsp;
                    <BlocxButton.Primary className="" label="Doctor Appointment" onClick={(e) => this.handleClickDoc(e)} >
                    </BlocxButton.Primary>
                </div>
            </React.Fragment>
        )
    }
}
export default Home