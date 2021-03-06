
import React, { Component } from 'react';
import { BlocxNavBar } from "blocx-react-fullbundle";
import { BlocxButton } from "blocx-react-fullbundle";
import { BlocxFooter, BlocxFooterBody } from 'blocx-react-fullbundle'
import { BlocxDivider } from 'blocx-react-fullbundle'
import { BlocxHero, BlocxHeroBody, BlocxHeroCarousel } from "blocx-react-fullbundle";
import UserForm from './page10';
import ReactDOM from 'react-dom';
import { BlocxProgressIndicator } from 'blocx-react-fullbundle'
import WModal from '../pages/modalcomponent';
import page10json from '../json/page10.json';
import page1json from '../json/page1.json';

export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: { name: '' },
            errors: { name: '' },
            // data1: [footerdata.footerMenu1],
            // data2: [footerdata.footerMenu2],
            // data3: [footerdata.footerMenu3],
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
    confirmButton(){
         ReactDOM.render(<WModal  showModal={true} />,document.getElementById('modal'));
    }

    render() {
        // let { data1, data2, data3 } = this.state
        // let itemListFooter1 = data1[0].map(item => <li key={item.id}> <a className="foot" href="#/" onClick={() => this.handleClick()}> {item.label} </a> </li>)
        // let itemListFooter2 = data2[0].map(item => <li key={item.id}> <a className="foot" href="#/" onClick={() => this.handleClick()}> {item.label} </a> </li>)
        // let itemListFooter3 = data3[0].map(item => <li key={item.id}> <a className="foot" href="#/" onClick={() => this.handleClick()}> {item.label} </a> </li>)
        let itemListFooter1 = page1json.footer.footerMenu1.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let itemListFooter2 = page1json.footer.footerMenu2.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let itemListFooter3 = page1json.footer.footerMenu3.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let { activeStep, totalSteps } = this.newstate
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
                    <div>
                        <h4 className="col-md-12 col-sm-12"> BOOK APPOINTMENT </h4>
                    </div>
                </div>
                <div className='blocx-grid'>
                    <div className="col-md-6 col-sm-12">
                        <BlocxProgressIndicator activeStep={activeStep} totalSteps={totalSteps} />
                    </div>
                </div>
                <div className='blocx-grid'>
                    <div className="col-md-10 col-sm-12">
                        <table >
                            <thead>
                                <tr>
                                    <td className="table-heading">City</td>
                                    <td className="table-heading">Location</td>
                                    <td className="table-heading">Speciality</td>
                                </tr>
                            </thead>
                        </table>
                        <BlocxDivider
                            height={0.01}
                            widthInPer={true}
                            width={100}
                            color="#898989"
                            type="horizontal"
                        ></BlocxDivider>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="table-content">Bangalore</td>
                                    <td className="table-content">Apolo Bargetta,City</td>
                                    <td className="table-content">Cardiology</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <tr>
                                    <td className="table-heading">Doctor Name</td>
                                    <td className="table-heading">Appointment Time</td>
                                    <td className="table-heading">Your Details </td>
                                </tr>
                            </thead>
                        </table>
                        <BlocxDivider
                            height={0.01}
                            widthInPer={true}
                            width={100}
                            color="#898989"
                            type="horizontal"
                        ></BlocxDivider>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="table-content">
                                        <tr>Atul Prakash</tr>
                                        <tr>MBBS, MD (Gen Med)</tr>
                                        <tr>DM (Cardiology)</tr>
                                        <tr>Senior Cardiologist</tr>
                                    </td>
                                    <td className="table-content">
                                        <tr>Monday</tr>
                                        <tr>9:30am-10:30am</tr>
                                    </td>
                                    <td className="table-content">
                                        <tr>{this.user.name}</tr>
                                        <tr>{this.user.email}</tr>
                                        <tr>{this.user.mobile}</tr>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <BlocxButton.Primary label="Confirm" onClick={this.confirmButton}>
                        </BlocxButton.Primary>
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
                
                
            </React.Fragment>
        );
    }
}