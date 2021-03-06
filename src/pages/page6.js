import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/page6.css';
import { BlocxHero, BlocxHeroBody, BlocxHeroCarousel } from "blocx-react-fullbundle";
import { BlocxNavBar } from "blocx-react-fullbundle";
import carouseljson from "../json/page6.json";

import { BlocxCard, BlocxCardText, BlocxCardBody, BlocxCardImage } from 'blocx-react-fullbundle';
import { BlocxFooter, BlocxFooterBody } from 'blocx-react-fullbundle'
import card1 from "../app/assets/images/card1.png";
import card2 from "../app/assets/images/card2.png";
import card3 from "../app/assets/images/card3.png";
import card4 from "../app/assets/images/card4.png";
import page1json from '../json/page1.json';

export default class Page6 extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            fields: { name: '' },

            errors: { name: '' }

        }

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

    render() {
        const onClick = (item, data) => {

            console.log("Clicked Item: ", item);

            console.log("Menu Data: ", data);

        }

        // const pStyle = {

        //     color:'red'

        //   };

        // let { data1, data2, data3 } = this.state

        // let itemListFooter1 = data1[0].map(item => <li key={item.id}> <a className="foot" href="#/" onClick={() => this.handleClick()}> {item.label} </a> </li>)

        // let itemListFooter2 = data2[0].map(item => <li key={item.id}> <a className="foot" href="#/" onClick={() => this.handleClick()}> {item.label} </a> </li>)

        // let itemListFooter3 = data3[0].map(item => <li key={item.id}> <a className="foot" href="#/" onClick={() => this.handleClick()}> {item.label} </a> </li>)

        let itemListFooter1 = page1json.footer.footerMenu1.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let itemListFooter2 = page1json.footer.footerMenu2.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let itemListFooter3 = page1json.footer.footerMenu3.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        return (

            <React.Fragment>
                {/* <div>
                    <BlocxNavBar

                        data={navData.items}

                        onClick={(item, data) => onClick(item, data)}>

                        <img src={logo} alt="logo" />

                    </BlocxNavBar>
                </div> */}
                      <BlocxNavBar className="navbar1" label={false} data={page1json.navbar} />

                <div>
                    <BlocxHero>

                        <BlocxHeroBody>

                            <BlocxHeroCarousel data={carouseljson.items}></BlocxHeroCarousel>

                        </BlocxHeroBody>

                    </BlocxHero>

                </div>
                <div className="pads">
                    <h2><b>Success Stories</b></h2>
                </div>

                <div className="blocx-grid">

                    <div className="col-md-3" style={{ width: '310px', height: '400px' }}>

                        <BlocxCard.Variant5 className="card-page6">

                            <BlocxCardBody.Default>

                                <BlocxCardImage.Default src={card1} alt="a">

                                </BlocxCardImage.Default>

                                <BlocxCardText.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do

eiusmod tempor incididunt ut ero labore et dolorea sed do eiusmod tempor.</BlocxCardText.Text>

                                <br></br>

                                <div className="blocx-card_links">
                                    <Link to="/my_story" className="linkTo">
                                    <a className="share-link" href="">Read More</a>
                                    </Link>
                                </div>

                            </BlocxCardBody.Default>

                        </BlocxCard.Variant5>

                    </div>
                    <div className="col-md-3" style={{ width: '310px', height: '400px' }}>

                        <BlocxCard.Variant5>

                            <BlocxCardBody.Default>

                                <BlocxCardImage.Default src={card2} alt="a">

                                </BlocxCardImage.Default>

                                <BlocxCardText.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do

eiusmod tempor incididunt ut ero labore et dolorea sed do eiusmod tempor.</BlocxCardText.Text>

                                <br></br>

                                <div className="blocx-card_links">

                                <Link to="/my_story" className="linkTo">
                                    <a className="share-link" href="">Read More</a>
                                    </Link>

                                </div>

                            </BlocxCardBody.Default>

                        </BlocxCard.Variant5>

                    </div>
                    <div className="col-md-3" style={{ width: '310px', height: '400px' }}>

                        <BlocxCard.Variant5>

                            <BlocxCardBody.Default>

                                <BlocxCardImage.Default src={card3} alt="a">

                                </BlocxCardImage.Default>

                                <BlocxCardText.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do

eiusmod tempor incididunt ut ero labore et dolorea sed do eiusmod tempor.</BlocxCardText.Text>

                                <br></br>

                                <div className="blocx-card_links">

                                <Link to="/my_story" className="linkTo">
                                    <a className="share-link" href="">Read More</a>
                                    </Link>

                                </div>

                            </BlocxCardBody.Default>

                        </BlocxCard.Variant5>

                    </div>
                    <div className="col-md-3" style={{ width: '310px', height: '400px' }}>

                        <BlocxCard.Variant5>

                            <BlocxCardBody.Default>

                                <BlocxCardImage.Default src={card4} alt="a">

                                </BlocxCardImage.Default>

                                <BlocxCardText.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do

eiusmod tempor incididunt ut ero labore et dolorea sed do eiusmod tempor.</BlocxCardText.Text>

                                <br></br>

                                <div className="blocx-card_links">

                                <Link to="/my_story" className="linkTo">
                                    <a className="share-link" href="">Read More</a>
                                    </Link>

                                </div>

                            </BlocxCardBody.Default>

                        </BlocxCard.Variant5>

                    </div>
                    <div className="col-md-3" style={{ width: '310px', height: '400px' }}>

                        <BlocxCard.Variant5>

                            <BlocxCardBody.Default>

                                <BlocxCardImage.Default src={card1} alt="a">

                                </BlocxCardImage.Default>

                                <BlocxCardText.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do

eiusmod tempor incididunt ut ero labore et dolorea sed do eiusmod tempor.</BlocxCardText.Text>

                                <br></br>

                                <div className="blocx-card_links">

                                <Link to="/my_story" className="linkTo">
                                    <a className="share-link" href="">Read More</a>
                                    </Link>

                                </div>

                            </BlocxCardBody.Default>

                        </BlocxCard.Variant5>

                    </div>
                    <div className="col-md-3" style={{ width: '310px', height: '400px' }}>

                        <BlocxCard.Variant5>

                            <BlocxCardBody.Default>

                                <BlocxCardImage.Default src={card2} alt="a">

                                </BlocxCardImage.Default>

                                <BlocxCardText.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do

eiusmod tempor incididunt ut ero labore et dolorea sed do eiusmod tempor.</BlocxCardText.Text>

                                <br></br>

                                <div className="blocx-card_links">

                                <Link to="/my_story" className="linkTo">
                                    <a className="share-link" href="">Read More</a>
                                    </Link>

                                </div>

                            </BlocxCardBody.Default>

                        </BlocxCard.Variant5>

                    </div>
                    <div className="col-md-3" style={{ width: '310px', height: '400px' }}>

                        <BlocxCard.Variant5>

                            <BlocxCardBody.Default>

                                <BlocxCardImage.Default src={card3} alt="a">

                                </BlocxCardImage.Default>

                                <BlocxCardText.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do

eiusmod tempor incididunt ut ero labore et dolorea sed do eiusmod tempor.</BlocxCardText.Text>

                                <br></br>

                                <div className="blocx-card_links">

                                <Link to="/my_story" className="linkTo">
                                    <a className="share-link" href="">Read More</a>
                                    </Link>

                                </div>

                            </BlocxCardBody.Default>

                        </BlocxCard.Variant5>

                    </div>
                    <div className="col-md-3" style={{ width: '310px', height: '400px' }}>

                        <BlocxCard.Variant5>

                            <BlocxCardBody.Default>

                                <BlocxCardImage.Default src={card4} alt="a">

                                </BlocxCardImage.Default>

                                <BlocxCardText.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do

eiusmod tempor incididunt ut ero labore et dolorea sed do eiusmod tempor.</BlocxCardText.Text>

                                <br></br>

                                <div className="blocx-card_links">

                                <Link to="/my_story" className="linkTo">
                                    <a className="share-link" href="">Read More</a>
                                    </Link>

                                </div>

                            </BlocxCardBody.Default>

                        </BlocxCard.Variant5>

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
        )
    }
}