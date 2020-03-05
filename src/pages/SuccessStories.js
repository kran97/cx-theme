import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/page6.css';
import carouseljson from "../json/page6.json";
import { BlocxCard, BlocxCardText, BlocxCardBody, BlocxCardImage, BlocxHero, BlocxHeroBody, BlocxHeroCarousel, BlocxFooter, BlocxFooterBody, BlocxNavBar } from 'blocx-react-components';
import page1json from '../json/page1.json';

class SuccessStories extends React.Component {
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
        const cardInfo = [...page1json.successCardDetails];
        return (
            <React.Fragment>
                <BlocxNavBar className="navbar1" label="" data={page1json.navbar} />
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
                    {
                        cardInfo.map((item) => {
                            return (
                                <div key={item.id} className="col-md-3 cardhw">
                                    <BlocxCard.Variant5 className="card-page6">
                                        <BlocxCardBody.Default>
                                            <BlocxCardImage.Default src={item.image} alt="a">
                                            </BlocxCardImage.Default>
                                            <BlocxCardText.Text>{item.text}</BlocxCardText.Text>
                                            <br></br>
                                            <div className="blocx-card_links">
                                                <Link to="/my_story" className="linkTo share-link">Read More
                                                </Link>
                                            </div>
                                        </BlocxCardBody.Default>
                                    </BlocxCard.Variant5>
                                </div>
                            )
                        })
                    }
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
export default SuccessStories