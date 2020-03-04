import React from 'react';
import '../styles/page7.css';
import { BlocxHero, BlocxHeroBody, BlocxHeroCarousel, BlocxNavBar, BlocxCard, BlocxCardBody, BlocxCardImage, BlocxFooter, BlocxFooterBody, BlocxContentBox, BlocxContentBoxType, BlocxMediaPlayer } from "blocx-react-components";
import carouseljson from "../json/page6.json";
import transform from "../app/assets/images/transform.png";
import page1json from '../json/page1.json';

class MyStory extends React.Component {

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

        let itemListFooter1 = page1json.footer.footerMenu1.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let itemListFooter2 = page1json.footer.footerMenu2.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let itemListFooter3 = page1json.footer.footerMenu3.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        return (

            <React.Fragment>
                <div>
                    <BlocxNavBar className="navbar1" label='' data={page1json.navbar} />
                </div>
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

                    <div className="pads col-md-6">

                        <BlocxContentBox>

                            <BlocxContentBoxType.LargeBody>I was stuck at the same weight for a year...<br></br>until I started with XLS-Medical</ BlocxContentBoxType.LargeBody>

                            <BlocxContentBoxType.H2>Body fat reduced from 42% to 29.1%</ BlocxContentBoxType.H2>

                            <BlocxContentBoxType.Body>“My daughter was cuddled up to me and she said Mummy, where has your squishy tummy gone?” Waist size reduced from 36 inches to 31 inches. Body fat reduced from 42% to 29.1%. Metabolic age reduced from 41 years to 29 years.</ BlocxContentBoxType.Body>

                            <BlocxContentBoxType.Body><span className="boldd"><b>Starting weight:</b></span> 12st 8lbs<br></br><span className="boldd"><b>Finishing weight:</b></span> 11st 1lbs<br></br><span className="boldd"><b>Total weight:</b></span> 1st 7lbs*</ BlocxContentBoxType.Body>

                        </BlocxContentBox>

                    </div>

                    <div className="col-md-6 cardsty">
                        <BlocxCard.Variant5>
                            <BlocxCardBody.Default>
                                <BlocxCardImage.Default src={transform} alt="a" >
                                </BlocxCardImage.Default>
                            </BlocxCardBody.Default>
                        </BlocxCard.Variant5>
                    </div>
                </div>
                <div className="pads col-md-6">
                    <BlocxContentBox>
                        <BlocxContentBoxType.H2>Scarlett Shares Her Weight Loss Experience:</ BlocxContentBoxType.H2>
                    </BlocxContentBox>
                </div>

                <div className="pads blocx-grid">
                    <div className="col-md-12">
                        <BlocxMediaPlayer
                            controls
                            loop
                            poster="../app/assets/images/"
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                        />
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
export default MyStory