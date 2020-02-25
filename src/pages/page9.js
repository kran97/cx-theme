import React from 'react';
import '../styles/page8.css';
import { BlocxHero, BlocxHeroBody, BlocxContentBox, BlocxDatePicker, BlocxChips, BlocxDropdown, BlocxButton, BlocxHeroCarousel, BlocxNavBar, BlocxFooter, BlocxFooterBody, BlocxProgressIndicator, BlocxContentBoxType } from "blocx-react-components";
import carouseljson from "../json/carousel8.json";
import navData from "../json/navData81.json";
import logo from "../logo.svg"; //Not the required one
import page1json from '../json/page1.json';

class Page9 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: { name: '' },
            errors: { name: '' },
        }
        this.newstate = {
            activeStep: 2,
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
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    // onButtonClick() {
    //     let totalSteps = this.newstate.totalSteps;
    //     let activeStep = this.newstate.activeStep;
    //     if (activeStep <= totalSteps) {
    //         this.setState({
    //             activeStep: activeStep + 1
    //         })
    //     }
    //     this.props.history.push("/page10");
    // }
    onButtonClick() {
        let totalSteps = this.newstate.totalSteps;
        let activeStep = this.newstate.activeStep;
        if (activeStep <= totalSteps) {
            this.setState({
                activeStep: activeStep + 1
            })
        }
        this.props.history.push("/book_appoinment");
    }

    render() {
        const onClick = (item, data) => {
            console.log("Clicked Item: ", item);
            console.log("Menu Data: ", data);
        }
        const handleClick = (e) => {
            console.log(e);
        }
        const action = (item, data) => {
            console.log("clickedItem: ", item);
            console.log("All items: ", data);
            // item.isSelected ? alert("Item is removed from: " + item.value) : alert("Item is added to: " + item.value);
            for (var i = 0; i < data.length; i++) {
                if (data[i].id === item.id) {
                    data[i].isSelected = !data[i].isSelected;
                }
            }
            return data;
        }
        const filterChange = (item, data) => {
            console.log("clickedItem: ", item);
            console.log("All items: ", data);
        }
        let itemListFooter1 = page1json.footer.footerMenu1.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let itemListFooter2 = page1json.footer.footerMenu2.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let itemListFooter3 = page1json.footer.footerMenu3.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let { activeStep, totalSteps } = this.newstate
        return (
            <React.Fragment>
                <div>
                    <BlocxNavBar
                        data={navData.items}
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
                        <div style={{ paddingBottom: '0px' }}><b>Specialty</b></div>
                        <BlocxDropdown
                            placeholder="Select..."
                            options={[
                                { value: 'Cardiology' },
                                { value: 'Oncologist' },
                                { value: 'Paedeatrician' },
                                { value: 'Gynaecologist' },
                                { value: 'Ophthalmologist' },
                                { value: 'Dentist' },
                                { value: 'Orthopaedic' },
                                { value: 'Neurologist' },
                                { value: 'Gastro' },
                                { value: 'General Physicist' },
                                { value: 'Psychiatrist' }
                            ]}
                        />
                    </div>
                    <div className="blocx-input-group col-md-3">
                        <div style={{ paddingBottom: '20px' }}><b>Date</b></div>
                        <BlocxDatePicker
                            value="2020-01-22"
                        />
                    </div>
                    <div className="searchbut col-md-2" style={{ paddingTop: '54px' }}>
                        <BlocxButton.Primary label="Search" onClick={(e) => handleClick(e)}></BlocxButton.Primary>&nbsp;
                    </div>
                </div>
                <div className="padss">
                    <BlocxContentBox>
                        <BlocxContentBoxType.Body><b className="black">Location</b>&nbsp; <span className="gray">Bangalore</span></ BlocxContentBoxType.Body>
                    </BlocxContentBox>
                </div>
                <div className="padss blocx-grid">
                    <div className="blocx-input-group col-md-3">
                        <p><b>Hospital</b></p>
                        <BlocxDropdown
                            placeholder="Select..."
                            options={[
                                { value: 'Apolo, Bannergatta Road' },
                                { value: 'Apolo, Whitefeild' },
                                { value: 'Apolo, Indiranagar' },
                                { value: 'Apolo, Koramangala' }
                            ]}
                        />
                    </div>
                    <div className="blocx-input-group col-md-3">
                        <p><b>Time</b></p>
                        <BlocxDropdown
                            placeholder="Select..."
                            options={[
                                { value: '8AM - 9AM' },
                                { value: '9AM - 10AM' },
                                { value: '10AM - 11AM' },
                                { value: '11AM - 12PM' },
                                { value: '12PM - 1PM' },
                                { value: '1PM - 2PM' },
                                { value: '2PM - 3PM' },
                                { value: '3PM - 4PM' },
                                { value: '4PM - 5PM' },
                                { value: '5PM - 6 pm' },
                                { value: '6PM - 7PM' },
                                { value: '7PM - 8PM' },
                                { value: '8PM - 9PM' },
                                { value: '9PM - 10PM' }
                            ]}
                        />
                    </div>
                    <div className="blocx-input-group col-md-3">
                        <p><b>Experience</b></p>
                        <BlocxDropdown
                            placeholder="Select..."
                            options={[
                                { value: 'High to Low' },
                                { value: 'Low to High' }
                            ]}
                        />
                    </div>
                </div>
                <div className="padss blocx-grid" style={{ paddingRight: '80px' }}>
                    <div className="bgwhite col-md-12" style={{ width: '' }}>
                        <div className="col-md-1">
                            <img className="image-male" src='/assets/images/male.png' alt="Card caption" />
                        </div>
                        <div className="col-md-4" style={{ paddingTop: '0px' }}>
                            <div className="row-md-4">
                                <p className="doc"><b>Atul Prakash</b></p>
                            </div>
                            <div className="row-md-4">
                                <p className="info-doc">MBBS MD (Gen Med) DM (Cardiology)</p>
                            </div>
                        </div>
                        <div className="col-md-3" style={{ paddingTop: '0px' }}>
                            <div className="col-md-12" style={{ paddingTop: '0px' }}>
                                <div className="row-md-6">
                                    <p><b>Senior Cardiologist</b></p>
                                </div>
                                <div className="row-md-6">
                                    <p>(Experience: 10 Years)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" style={{ paddingTop: '0px' }}>
                            <div className="col-md-12" style={{ paddingTop: '0px' }}>
                                <div className="row-md-6">
                                    <p><b>Mon-Friday</b></p>
                                </div>
                                <div className="row-md-6">
                                    <p className="greens">10AM - 6PM</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" style={{ paddingTop: '0px' }}>
                            <div className="col-md-12">
                                <BlocxButton.Primary label="Select" onClick={this.onButtonClick.bind(this)}></BlocxButton.Primary>&nbsp;
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4" style={{ marginTop: '' }}>
                            <BlocxChips
                                data={[{ id: 1, value: 'Morning', isSelected: true, iconClass: "" }, { id: 2, value: 'Afternoon', isSelected: false, iconClass: "" }, { id: 3, value: 'Night', isSelected: false, iconClass: "" }]}
                                type="Action"
                                onClick={(item, data) => action(item, data)}
                            />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6" style={{ marginTop: '30px' }}>
                            <BlocxChips
                                data={[{ id: 1, value: '09.00AM-09.30AM', isSelected: true }, { id: 2, value: '09.30AM-10.00AM', isSelected: false }, { id: 3, value: '10.00AM-10.30AM', isSelected: false }]}
                                type="Filter"
                                onChange={(item, data) => filterChange(item, data)}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="padss blocx-grid" style={{ paddingRight: '80px' }}>
                    <div className="bgwhite col-md-12" style={{ width: '' }}>
                        <div className="col-md-1">
                            <img className="image-male" src='/assets/images/male.png' alt="Card caption" />
                        </div>
                        <div className="col-md-4" style={{ paddingTop: '0px' }}>
                            <div className="row-md-4">
                                <p className="doc"><b>Danya N</b></p>
                            </div>
                            <div className="row-md-4">
                                <p className="info-doc">MBBS MD (Gen Med) DM (Cardiology)</p>
                            </div>
                        </div>
                        <div className="col-md-3" style={{ paddingTop: '0px' }}>
                            <div className="col-md-12" style={{ paddingTop: '0px' }}>
                                <div className="row-md-6">
                                    <p><b>Senior Cardiologist</b></p>
                                </div>
                                <div className="row-md-6">
                                    <p>(Experience: 10 Years)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" style={{ paddingTop: '0px' }}>
                            <div className="col-md-12" style={{ paddingTop: '0px' }}>
                                <div className="row-md-6">
                                    <p><b>Mon-Friday</b></p>
                                </div>
                                <div className="row-md-6">
                                    <p className="greens">10AM - 6PM</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" style={{ paddingTop: '0px' }}>
                            <div className="col-md-12">
                                <BlocxButton.Primary label="Select" onClick={this.onButtonClick.bind(this)}></BlocxButton.Primary>&nbsp;
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4" style={{ marginTop: '' }}>
                            <BlocxChips
                                data={[{ id: 1, value: 'Morning', isSelected: true, iconClass: "" }, { id: 2, value: 'Afternoon', isSelected: false, iconClass: "" }, { id: 3, value: 'Night', isSelected: false, iconClass: "" }]}
                                type="Action"
                                onClick={(item, data) => action(item, data)}
                            />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6" style={{ marginTop: '30px' }}>
                            <BlocxChips
                                data={[{ id: 1, value: '09.00AM-09.30AM', isSelected: true }, { id: 2, value: '09.30AM-10.00AM', isSelected: false }, { id: 3, value: '10.00AM-10.30AM', isSelected: false }]}
                                type="Filter"
                                onChange={(item, data) => filterChange(item, data)}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="padss blocx-grid" style={{ paddingRight: '80px' }}>
                    <div className="bgwhite col-md-12" style={{ width: '' }}>
                        <div className="col-md-1">
                            <img className="image-male" src='/assets/images/male.png' alt="Card caption" />
                        </div>
                        <div className="col-md-4" style={{ paddingTop: '0px' }}>
                            <div className="row-md-4">
                                <p className="doc"><b>Atul Prakash</b></p>
                            </div>
                            <div className="row-md-4">
                                <p className="info-doc">MBBS MD (Gen Med) DM (Cardiology)</p>
                            </div>
                        </div>
                        <div className="col-md-3" style={{ paddingTop: '0px' }}>
                            <div className="col-md-12" style={{ paddingTop: '0px' }}>
                                <div className="row-md-6">
                                    <p><b>Senior Cardiologist</b></p>
                                </div>
                                <div className="row-md-6">
                                    <p>(Experience: 10 Years)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" style={{ paddingTop: '0px' }}>
                            <div className="col-md-12" style={{ paddingTop: '0px' }}>
                                <div className="row-md-6">
                                    <p><b>Mon-Friday</b></p>
                                </div>
                                <div className="row-md-6">
                                    <p className="greens">10AM - 6PM</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" style={{ paddingTop: '0px' }}>
                            <div className="col-md-12">
                                <BlocxButton.Primary label="Select" onClick={this.onButtonClick.bind(this)}></BlocxButton.Primary>&nbsp;
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4" style={{ marginTop: '' }}>
                            <BlocxChips
                                data={[{ id: 1, value: 'Morning', isSelected: true, iconClass: "" }, { id: 2, value: 'Afternoon', isSelected: false, iconClass: "" }, { id: 3, value: 'Night', isSelected: false, iconClass: "" }]}
                                type="Action"
                                onClick={(item, data) => action(item, data)}
                            />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6" style={{ marginTop: '30px' }}>
                            <BlocxChips
                                data={[{ id: 1, value: '09.00AM-09.30AM', isSelected: true }, { id: 2, value: '09.30AM-10.00AM', isSelected: false }, { id: 3, value: '10.00AM-10.30AM', isSelected: false }]}
                                type="Filter"
                                onChange={(item, data) => filterChange(item, data)}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="padss blocx-grid" style={{ paddingRight: '80px' }}>
                    <div className="bgwhite col-md-12" style={{ width: '' }}>
                        <div className="col-md-1">
                            <img className="image-male" src='/assets/images/male.png' alt="Card caption" />
                        </div>
                        <div className="col-md-4" style={{ paddingTop: '0px' }}>
                            <div className="row-md-4">
                                <p className="doc"><b>Dyna N</b></p>
                            </div>
                            <div className="row-md-4">
                                <p className="info-doc">MBBS MD (Gen Med) DM (Cardiology)</p>
                            </div>
                        </div>
                        <div className="col-md-3" style={{ paddingTop: '0px' }}>
                            <div className="col-md-12" style={{ paddingTop: '0px' }}>
                                <div className="row-md-6">
                                    <p><b>Senior Cardiologist</b></p>
                                </div>
                                <div className="row-md-6">
                                    <p>(Experience: 10 Years)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" style={{ paddingTop: '0px' }}>
                            <div className="col-md-12" style={{ paddingTop: '0px' }}>
                                <div className="row-md-6">
                                    <p><b>Mon-Friday</b></p>
                                </div>
                                <div className="row-md-6">
                                    <p className="greens">10AM - 6PM</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" style={{ paddingTop: '0px' }}>
                            <div className="col-md-12">
                                <BlocxButton.Primary label="Select" onClick={this.onButtonClick.bind(this)}></BlocxButton.Primary>&nbsp;
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4" style={{ marginTop: '' }}>
                            <BlocxChips
                                data={[{ id: 1, value: 'Morning', isSelected: true, iconClass: "" }, { id: 2, value: 'Afternoon', isSelected: false, iconClass: "" }, { id: 3, value: 'Night', isSelected: false, iconClass: "" }]}
                                type="Action"
                                onClick={(item, data) => action(item, data)}
                            />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6" style={{ marginTop: '30px' }}>
                            <BlocxChips
                                data={[{ id: 1, value: '09.00AM-09.30AM', isSelected: true }, { id: 2, value: '09.30AM-10.00AM', isSelected: false }, { id: 3, value: '10.00AM-10.30AM', isSelected: false }]}
                                type="Filter"
                                onChange={(item, data) => filterChange(item, data)}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
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
export default Page9