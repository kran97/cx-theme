
import React, { Component } from 'react';


import { BlocxTextInput } from "blocx-react-fullbundle";
import { BlocxNavBar } from "blocx-react-fullbundle";
import { BlocxButton } from "blocx-react-fullbundle";
import { BlocxFooter, BlocxFooterBody } from 'blocx-react-fullbundle'
import { BlocxHero, BlocxHeroBody, BlocxHeroCarousel } from "blocx-react-fullbundle";
import { BlocxProgressIndicator } from 'blocx-react-fullbundle'
import { Link } from 'react-router-dom';
import page10json from '../json/page10.json';
import page1json from '../json/page1.json';
export default class UserForm extends Component {



  // changeHandler = event => {
  //   this.setState({
  //     email: event.target.value,
  //     name: event.target.value
  //   });
  //   console.log(event.target.value);
  //   console.log("stired", this.state.email);
  // }

  // onChange = (event) => {
  //   this.setState({ name: event.target.value })
  //   console.log("on change insidfe")
  // }

  constructor(props) {
    super(props);
    this.state = {
      fields: { name: '' },
      errors: { name: '' },
      
      email: '',
      name: '',
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
  }
  regex = "[A-Za-z]{3}";

  onKeyUp = (val) => {
  }
  onBlur = (val, name) => {
    if (name === "name") {
      this.info.name = val;
    }
    if (name === "email") {
      this.info.email = val;
    }
    if (name === "mobile") {
      this.info.mobile = val;
    }
    console.log(this.info);
  }

  onFocus = () => {
  }
  onButtonClick() {
    let totalSteps = this.newstate.totalSteps;
    let activeStep = this.newstate.activeStep;
    if (activeStep <= totalSteps) {
      this.setState({
        activeStep: activeStep + 1
      })
    }
    let myObject = {}
    sessionStorage.myObject = JSON.stringify(this.info);
    sessionStorage.setItem(myObject, sessionStorage.myObject)
    this.props.history.push("/confirm_appoinment");
  }
  handleButtonClick = (e) => {
    console.log(e);
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
          <div>
            <h4 className="col-md-12 col-sm-12"> BOOK APPOINTMENT </h4>
          </div>
        </div>
        <div className='blocx-grid'>
          <div className="col-md-6 col-sm-12">
            <BlocxProgressIndicator activeStep={activeStep} totalSteps={totalSteps} />
          </div>
        </div>
        <div >
          <div className='blocx-grid'>
            <div className="col-md-4 col-sm-12">
              <div>
                <BlocxTextInput
                  label="Your Name"
                  regex={this.regex}
                  type="text"
                  onBlur={(val) => this.onBlur(val, "name")}
                  onFocus={this.onFocus}>
                </BlocxTextInput>
              </div>
              <div >
                <BlocxTextInput
                  label="Email ID"
                  regex={this.regex}
                  type="text"
                  onBlur={(val) => this.onBlur(val, "email")}
                  onFocus={this.onFocus}>
                </BlocxTextInput>
              </div>
              <div>
                <BlocxTextInput
                  label="Mobile Number"
                  regex={this.regex}
                  type="text"
                  onBlur={(val) => this.onBlur(val, "mobile")}
                  onFocus={this.onFocus}>
                </BlocxTextInput>
              </div>
              <Link to="/page11">
                <div>
                  <BlocxButton.Primary label="Next" onClick={this.onButtonClick.bind(this)}>
                  </BlocxButton.Primary>&nbsp;
          </div>
              </Link>
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
      </React.Fragment>

    );
  }
}


