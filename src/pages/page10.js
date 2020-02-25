import React, { Component } from 'react';
import { BlocxFooter, BlocxFooterBody, BlocxTextInput, BlocxNavBar, BlocxButton, BlocxHero, BlocxHeroBody, BlocxHeroCarousel, BlocxProgressIndicator } from "blocx-react-components";
import { Link } from 'react-router-dom';
import page10json from '../json/page10.json';
import page1json from '../json/page1.json';

class UserForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: { name: '', email: '', mobile: '' },
      errors: { name: '', email: '', mobile: '' },
      email: '',
      name: '',
      mobile: ''
    }

    this.info = {
      "name": '',
      "email": '',
      "mobile": ''
    }

    this.newstate = {
      activeStep: 3,
      totalSteps: 4

    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = this.state.errors;
    const validEmailRegex =
      RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    if (fields["name"] !== "") {
      errors.name =
        fields["name"].length < 5
          ? 'Name must be 5 characters long!'
          : '';
    }
    if (fields["email"] !== "") {
      errors.email =
        validEmailRegex.test(fields["email"])
          ? ''
          : 'Email is not valid!';
    }
    if (fields["mobile"] !== "") {
      errors.mobile =
        fields["mobile"].length != 10
          ? 'Mobile must be of 10 digits'
          : '';
    }
    this.setState({ errors: errors });
    console.log(errors)
  }

  handleChange(field, val) {
    console.log("here");
    let fields = this.state.fields;
    fields[field] = val;
    this.handleValidation()
    if (this.state.errors.name == ''&&field=="name")
      this.info.name = val;

    if(this.state.errors.mobile == ''&&field=="mobile")
      this.info.mobile = val;

     if(this.state.errors.email == ''&&field=="email") {
      this.info.email = val;
    }
    console.log(this.info);

  }

  handleClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }
  regex = "[A-Za-z]{3}";
  onButtonClick() {
    if (this.state.errors.name == '' && this.state.errors.mobile == '' && this.state.errors.email == '') {
      let myObject = {}
      sessionStorage.myObject = JSON.stringify(this.info);
      sessionStorage.setItem(myObject, sessionStorage.myObject)
      console.log(this.info)
      this.props.history.push("/confirm_appoinment");
      console.log(this.info)
    }
    else {
      this.props.history.push("/book_appoinment");
    }
  }

  render() {

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
              this.onClick(item, data)} style={{ textdecoration: 'lowercase' }}>
          </BlocxNavBar>
        </div>
        <div >
          <BlocxHero >
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
              <div className="col-md-4 col-sm-12">
                <div>
                  <BlocxTextInput
                    label="Your Name"
                    regex={this.regex}
                    type="text"
                    onKeyup={(val) => this.handleChange("name", val)}
                    onBlur={(val) => this.handleChange("name", val)}>

                  </BlocxTextInput>
                  <span className="col-md-12 errormessage">{this.state.errors.name}</span>
                </div>
                <div >
                  <BlocxTextInput
                    label="Email ID"
                    regex={this.regex}
                    type="text"
                    onKeyup={(val) => this.handleChange("email", val)}
                    onBlur={(val) => this.handleChange("email", val)}>
                  </BlocxTextInput>
                  <span className="col-md-12 errormessage">{this.state.errors.email}</span>
                </div>
                <div>
                  <BlocxTextInput
                    label="Mobile Number"
                    regex={this.regex}
                    type="text"
                    onKeyup={(val) => this.handleChange("mobile", val)}
                    onBlur={(val) => this.handleChange("mobile", val)}>
                  </BlocxTextInput>
                  <div>
                      <span className="col-md-12 errormessage">{this.state.errors.mobile}</span>
                  </div>
                </div>

                <Link to="/page11">
                  <div>
                    <BlocxButton.Primary label="Next" onClick={this.onButtonClick.bind(this)}>
                    </BlocxButton.Primary>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-1 col-sm-0">
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
      </React.Fragment>

    );
  }
}
export default UserForm