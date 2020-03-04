import React from 'react';
import '../styles/page8.css';
import { BlocxHero, BlocxHeroBody, BlocxHeroCarousel, BlocxNavBar, BlocxFooter , BlocxFooterBody, BlocxProgressIndicator, BlocxContentBox, BlocxContentBoxType, BlocxDivider, BlocxDropdown, BlocxButton } from "blocx-react-components";
import carouseljson from "../json/page8.json";
import logo from "../logo.svg"; //Not the required one
import page1json from '../json/page1.json';

class DoctorAppointment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {name: ''},
            errors: {name: ''}
        }
        this.newstate = {
            activeStep: 1,
            totalSteps: 4
        };
    }
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        if (fields["email"] !== "") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
               // formIsValid = false;
                errors["email"] = "Invalid email address";
            }
        }
        this.setState({ errors: errors });
    }
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        // this.setState({fields});
        this.handleValidation()
    }
    handleClick() {
        if(this.props.onClick) {
        this.props.onClick();
        }
    }
    onButtonClick() {
        let totalSteps = this.newstate.totalSteps;
        let activeStep = this.newstate.activeStep;
        if (activeStep <= totalSteps) {
            this.setState({
                activeStep: activeStep + 1
            })
        }
        this.props.history.push("/doctor_select");   
    }
    render() {
        const onClick = (item, data) => {
            console.log("Clicked Item: ", item);
            console.log("Menu Data: ", data);
        }
        const handleClick = (e)=> {
            console.log(e);
          }
        let itemListFooter1 = page1json.footer.footerMenu1.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let itemListFooter2 = page1json.footer.footerMenu2.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let itemListFooter3 = page1json.footer.footerMenu3.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let { activeStep, totalSteps } = this.newstate
        return (
            <React.Fragment>
                <div>
                    <BlocxNavBar
                        data={carouseljson.nav}
                        onClick={(item, data) => onClick(item, data)}>
                        <img src={logo} alt="logo" />
                    </BlocxNavBar>
                </div>
                <div>
                    <BlocxHero>
                        <BlocxHeroBody>
                            <BlocxHeroCarousel data={carouseljson.items}></BlocxHeroCarousel>
                        </BlocxHeroBody>
                    </BlocxHero>
                </div>
                <div className="padss heading">
                    <p><b>BOOK APPOINTMENT</b></p>
                </div>
                <div className="progressContainer">
                    <BlocxProgressIndicator activeStep={activeStep} totalSteps={totalSteps} />
                </div>
                <div className="padss blocx-grid">
                    <div className="blocx-input-group col-md-3">
                        <p><b>State</b></p>
                        <BlocxDropdown
                            placeholder="Select..."
                            options={[
                                { value: 'Andhra Pradesh' },
                                { value: 'Arunachal Pradesh' },
                                { value: 'Assam' },
                                { value: 'Bihar' },
                                { value: 'Chattisgarh' },
                                { value: 'Goa' },
                                { value: 'Gujrat' },
                                { value: 'Haryana' },
                                { value: 'Himachal Pradesh' },
                                { value: 'Jharkhand' },
                                { value: 'Karnataka' },
                                { value: 'Kerala' },
                                { value: 'Madhya Pradesh' },
                                { value: 'Maharashtra' },
                                { value: 'Punjab' },
                                { value: 'Rajasthan' },
                                { value: 'Tamil Nadu' },
                                { value: 'Telangana' },
                                { value: 'Uttar Pradesh' },
                                { value: 'Uttrakhand' },
                                { value: 'West Bengal' },
                                { value: 'New Delhi' }
                            ]}
                        />
                    </div>
                    <div className="blocx-input-group col-md-3">
                        <p><b>City</b></p>
                        <BlocxDropdown
                            placeholder="Select..."
                            options={[
                                { value: 'Chandigarh' },
                                { value: 'Panchkula' },
                                { value: 'Mumbai' },
                                { value: 'Gurgaon' },
                                { value: 'Chennai' },
                                { value: 'Pune' },
                                { value: 'Patiala' },
                                { value: 'Kolkata' },
                                { value: 'Lucknow' },
                                { value: 'Bhopal' },
                                { value: 'Noida' },
                                { value: 'Patna' },
                                { value: 'Bangalore' }
                            ]}
                        />
                    </div>
                    <div className="col-md-2 buttonsearch">
                        <BlocxButton.Primary label="Search" onClick={(e) => handleClick(e)}></BlocxButton.Primary>&nbsp;
                    </div>
                </div>
                <div className="padss">
                    <BlocxContentBox>
                    <BlocxContentBoxType.Body><b className="black">Apolo Hospitals</b> <span className="gray">(4 Dealers in Bangalore)</span></ BlocxContentBoxType.Body>
                    </BlocxContentBox>
                </div>
                <div>
                    <div className="blocx-grid">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <BlocxContentBox>
                                <BlocxContentBoxType.Body><span className="col-md-9"><span className="dark-gray"><b>Apolo Hospital<br></br> Bannergatta road<br></br><br></br></b></span> 560034 No 107/3, 80 Feet Road, 4th Block, Koramangala 4th Block, Koramangala, Bengaluru, Karnataka 560034 Bengaluru Tel. +91 802296294 customerconnect@akshayabenz.com www.akshayamotors.mercedes-benz.co.in</span></ BlocxContentBoxType.Body>
                            </BlocxContentBox>
                            <BlocxButton.Primary className="quad-button" label="Select" onClick={this.onButtonClick.bind(this)}>
                            </BlocxButton.Primary>&nbsp;
                        </div>
                        <div>
                            <BlocxDivider
                                height={285}
                                width={1}
                                color="#8E8E8E"
                                type="vertical"
                                className="top-space"
                            />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <BlocxContentBox>
                                <BlocxContentBoxType.Body><span  className="col-md-9"><span className="dark-gray"><b>Apolo Diagnostics<br></br> Whitefield<br></br><br></br></b></span> 107, Kasturba Road 560001 Bengaluru Tel. +91 80 22070734 <br></br>Fax +91 80 22273533 servicemgr@sundarammotors.com www.sundarammotors.mercedes-benz.co.in</span></ BlocxContentBoxType.Body>
                            </BlocxContentBox>
                            <BlocxButton.Primary className="quad-button" label="Select" onClick={this.onButtonClick.bind(this)}>
                            </BlocxButton.Primary>&nbsp;
                        </div>
                    </div>
                    <div className="padss">
                        <BlocxDivider
                            height={1}
                            widthInPer={true}
                            width={80}
                            color="#8E8E8E"
                            type="horizontal"
                        />
                    </div>
                    <div className="blocx-grid">
                    <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <BlocxContentBox>
                                <BlocxContentBoxType.Body><span className="col-md-9"><span className="dark-gray"><b>Apolo Fertility Centre<br></br> Indiranagar<br></br><br></br></b></span> 560034 No 107/3, 80 Feet Road, Koramangala 4th Block, Koramangala, Bengaluru, Karnataka 560034 Bengaluru Tel. +91 802296294 customerconnect@akshayabenz.com www.akshayamotors.mercedes-benz.co.in</span></ BlocxContentBoxType.Body>
                            </BlocxContentBox>
                            <BlocxButton.Primary className="quad-button" label="Select" onClick={this.onButtonClick.bind(this)}>
                            </BlocxButton.Primary>&nbsp;
                        </div>
                        <div>
                            <BlocxDivider
                                height={325}
                                width={1}
                                color="#8E8E8E"
                                type="vertical"
                                className="top-space"
                            />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <BlocxContentBox>
                                <BlocxContentBoxType.Body><span  className="col-md-9"><span className="dark-gray"><b>Apolo Cloud 9<br></br> Koramangala<br></br><br></br></b></span> 107, Kasturba Road 560001 Bengaluru <br></br>Tel. +91 80 22070734 <br></br>Fax +91 80 22273533 <br></br>servicemgr@sundarammotors.com <br></br>www.sundarammotors.mercedes-benz.co.in</span></ BlocxContentBoxType.Body>
                            </BlocxContentBox>
                            <BlocxButton.Primary className="quad-button" label="Select" onClick={this.onButtonClick.bind(this)}>
                            </BlocxButton.Primary>&nbsp;
                        </div>
                    </div>
                </div>
                <br></br><br></br>
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
            </React.Fragment>
        )
    }
}
export default DoctorAppointment