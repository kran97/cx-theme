
import React, { Component } from 'react';
import { BlocxProgressIndicator, BlocxButton, BlocxNavBar, BlocxHero, BlocxHeroBody, BlocxHeroCarousel, BlocxDivider, BlocxFooter, BlocxFooterBody, BlocxModalBody, BlocxModalButtonControls, BlocxModalHeader, BlocxModal, BlocxContentBoxType } from "blocx-react-components";
import UserForm from './UserForm';
import page10json from '../json/page10.json';
import page1json from '../json/page1.json';
import classnames from 'classnames';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: { name: '' },
            errors: { name: '' },
            showModal: false,
        }
        this.newstate = {
            activeStep: 4,
            totalSteps: 4
        };
        var myObject = JSON.parse(sessionStorage.myObject);
        this.user = {
            name: myObject.name,
            email: myObject.email,
            mobile: myObject.mobile
        }
    }
    handleProgressButtonClick() {
        let totalSteps = this.newstate.totalSteps;
        let activeStep = this.newstate.activeStep;
        if (activeStep <= totalSteps) {
            this.setState({
                activeStep: activeStep + 1
            })
        }
    }
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        if (fields["email"] !== "") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                errors["email"] = "Invalid email address";
            }
        }
        this.setState({ errors: errors });
    }

    handleModalClick = (e) => {
        e.preventDefault()
        if (this.props.onClick) {
            this.props.onClick(e)
        }
        this.setState({
            showModal: !this.state.showModal
        })
    }

    onRescheduleButtonClick= (e) => {
        e.preventDefault()
        if (this.props.onClick) {
            this.props.onClick(e)
        }
        console.log('hi')
        this.setState({
            showModal: !this.state.showModal
        })
        console.log("modal--->", (e.target.id) ? e.target.id + 'd' : 'closed');
        this.props.history.push("/doctor_appoinment");
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.handleValidation()
    }

    handleClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    onClick = (item, data) => {
        console.log("Clicked Item: ", item);
        console.log("Menu Data: ", data);
        console.log(UserForm);
    }
    regex = "[A-Za-z]{3}";

    onKeyUp = (val) => {
        console.log(val)
    }

    onFocus = () => {

    }
    render() {
        let itemListFooter1 = page1json.footer.footerMenu1.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let itemListFooter2 = page1json.footer.footerMenu2.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let itemListFooter3 = page1json.footer.footerMenu3.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let { activeStep, totalSteps } = this.newstate
        const { showModal } = this.state;
        const display = classnames({ 'block': showModal, 'none': !showModal });
        return (
            <React.Fragment>
                <div>
                    <BlocxNavBar
                        data={page10json.nav}
                        onClick={(item, data) =>
                            this.onClick(item, data)}>
                    </BlocxNavBar>
                </div>
                <div>
                    <BlocxHero>
                        <BlocxHeroBody>
                            <BlocxHeroCarousel data={page10json.hero}></BlocxHeroCarousel>
                        </BlocxHeroBody>
                    </BlocxHero>
                </div>
                <div className='blocx-grid'>
                    <div className="col-md-1 col-sm-0">
                    </div>
                    <div className="col-md-10 col-sm-12">
                        <div className='blocx-grid'>
                            <div>
                                <h4 className="col-md-12 col-sm-12"> BOOK APPOINTMENT </h4>
                            </div>
                        </div>
                        <div className='blocx-grid'>
                            <div className="col-md-1 col-sm-0">
                            </div>
                            <div className="col-md-10 col-sm-12">
                                <BlocxProgressIndicator activeStep={activeStep} totalSteps={totalSteps} />
                            </div>
                            <div className="col-md-1 col-sm-0">
                            </div>
                        </div>
                        <div className='blocx-grid'>
                            <div className="col-md-12 col-sm-12">
                                <div className="col-md-3 dropsp">
                                    City
                                </div>
                                <div className="col-md-3 dropsp">
                                    Location
                                </div>
                                <div className="col-md-3 dropsp">
                                    Speciality
                                </div>
                                <BlocxDivider
                                    height={1}
                                    widthInPer={true}
                                    width={80}
                                    color="#898989"
                                    type="horizontal"
                                ></BlocxDivider>
                                <div className="col-md-3 table-content docpro">
                                    Bangalore
                                </div>
                                <div className="col-md-3 table-content docpro">
                                    Apolo Bargetta,City
                                </div>
                                <div className="col-md-3 table-content docpro">
                                    Cardiology
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3 dropsp">
                                    Doctor Name
                                </div>
                                <div className="col-md-3 dropsp">
                                    Appointment Time
                                </div>
                                <div className="col-md-3 dropsp">
                                    Your Details
                                </div>
                                <BlocxDivider
                                    height={1}
                                    widthInPer={true}
                                    width={80}
                                    color="#898989"
                                    type="horizontal"
                                ></BlocxDivider>
                                <div className="col-md-3 table-content docpro">
                                    Atul Prakash<br></br>MBBS, MD (Gen Med)<br></br>DM (Cardiology)<br></br>Senior Cardiologist
                                </div>
                                <div className="col-md-3 table-content docpro">
                                    Monday<br></br>9:30am-10:30am
                                </div>
                                <div className="col-md-3 table-content docpro">
                                    {this.user.name}<br></br>
                                    {this.user.email}<br></br>
                                    {this.user.mobile}<br></br>
                                </div><br></br>
                                <BlocxModal.Default style={{ display: display }} >
                    <div className="blocx-grid">
                        <div className="col-md-2 modalimage">
                            <img src={require('../app/assets/images/status-ok-circ-ko.svg')} alt="icon" />
                        </div>
                        <div className="col-md-8">
                            <BlocxModalHeader.Default >
                                <BlocxContentBoxType.Body>
                                    Your doctor appointment is confirmed.
                                </BlocxContentBoxType.Body >
                            </BlocxModalHeader.Default>
                            <BlocxModalBody.Default >
                                    <p className="modalp">A confirmation email and reminder sent to your contacts. detracto, vidit vituperatoribus duo id. Afert dtraxis voluptatatum vis eu innermis eloquntium cum id. Mei aequeue.
                                    </p>
                                <BlocxModalButtonControls.Default >
                                    <BlocxButton.Secondary_Outline className="dialogboxbutton" label="Reschedule" onClick={(e)=>this.onRescheduleButtonClick(e)} >
                                    </BlocxButton.Secondary_Outline>
                                    <BlocxButton.Primary className="dialogboxbutton" label="Close" onClick={(e) => this.handleModalClick(e)} >
                                    </BlocxButton.Primary>
                                </BlocxModalButtonControls.Default>
                            </BlocxModalBody.Default>
                        </div>
                    </div>
                </BlocxModal.Default>
                <BlocxModal.Overlay style={{ display: display }}>
                </BlocxModal.Overlay>
                                <div className="col-md-2">
                                    <BlocxButton.Primary label="Confirm" onClick={(e) => this.handleModalClick(e)}>
                                    </BlocxButton.Primary>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <BlocxFooter>
                        <BlocxFooterBody.Default>
                            <BlocxFooterBody.Grid>
                                <div className="col-md-6">
                                    <BlocxFooterBody.Grid>
                                        <div className="col-md-3">
                                            <h1>Logo</h1>
                                        </div>
                                        <div className="col-md-3">
                                            <ul className="blocx-menu">
                                                {itemListFooter1}
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <ul className="blocx-menu">
                                                {itemListFooter2}
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <ul className="blocx-menu">
                                                {itemListFooter3}
                                            </ul>
                                        </div>
                                    </BlocxFooterBody.Grid>
                                </div>
                                <div className="col-md-6">
                                    <BlocxFooterBody.Grid>
                                        <div className="col-md-6">
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="blocx-menu social-media">
                                                <li><a href="#/"><i className="fa fa-instagram footr" aria-hidden="true"></i> </a></li>
                                                <li><a href="#/"><i className="fa fa-twitter footr" aria-hidden="true"></i> </a></li>
                                                <li><a href="#/"><i className="fa fa-facebook footr" aria-hidden="true"></i> </a></li>
                                                <li><a href="#/"><i className="fa fa-globe footr" aria-hidden="true"></i> </a></li>
                                            </ul>
                                        </div>
                                    </BlocxFooterBody.Grid>
                                </div>
                            </BlocxFooterBody.Grid>
                        </BlocxFooterBody.Default>
                    </BlocxFooter>
                </div>
                <div id="modal"></div>
            </React.Fragment >
        );
    }
}
export default User