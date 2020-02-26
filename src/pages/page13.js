
import React, { Component } from 'react';
import { BlocxMegaMenu, BlocxHero, BlocxHeroBody, BlocxHeroCarousel, BlocxFooter, BlocxFooterBody, BlocxCard, BlocxCardText, BlocxCardImage, BlocxContentBox, BlocxContentBoxType } from 'blocx-react-components';
import page13json from "../json/page13.json";
import page1json from "../json/page1.json";
import megaMenuJson from "../json/megamenu.json"

class Page13 extends Component {
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

    onStateChange = (value) => {
        console.log("isSubMenuOpen: ", value);
    }

    onMegaMenuClick = (item, data) => {
        console.log("Clicked Item: ", item);
        console.log("Menu Data: ", data);
    }

    onClick = (item, data) => {
        console.log("Clicked Item: ", item);
        console.log("Menu Data: ", data);
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

        return (
            <React.Fragment>
                {/* <div>
                    <BlocxNavBar
                        data={page13json.items}
                        onClick={(item, data) =>
                            this.onClick(item, data)}>
                    </BlocxNavBar>
                </div> */}
                <div>
                    <BlocxMegaMenu
                        data={megaMenuJson}
                        onClick={(item, data) => this.onMegaMenuClick(item, data)}
                        onStateChange={(value) => this.onStateChange(value)} />
                </div>
                <div>
                    <BlocxHero>
                        <BlocxHeroBody>
                            <BlocxHeroCarousel data={page13json.hero}></BlocxHeroCarousel>
                        </BlocxHeroBody>
                    </BlocxHero>
                </div>
                <div className='blocx-grid'>
                    <div className="col-md-1 col-sm-0">
                    </div>
                    <div className="col-md-10 col-sm-12">
                        <div className='blocx-grid'>
                            <BlocxContentBox>
                                <h2 className="col-sm-12 col-md-12 headingtext">Top Employer</h2>
                                <h2 className="col-sm-12 col-md-12 subheadingtext">A successful and family owned Company</h2>
                                <BlocxContentBoxType.Body className="col-sm-12 col-md-12 maintext">Boehringer Ingelheim is a global group of companies embracing many cultures and diverse societies. Learn more about the financial highlights, the corporate vision, the organisation, the Board of Managing Directors and the company’s history as well as our engagement for scientific, cultural and environmental purposes. Improving the health and quality of life of humans and animals is the goal of the research-driven pharmaceutical company Boehringer Ingelheim. The focus in doing so is on diseases for which no satisfactory treatment option exists to date. The company therefore concentrates on developing innovative therapies that can extend patients’ lives. In animal health, Boehringer Ingelheim stands for advanced prevention. Family-owned since it was established in 1885, Boehringer Ingelheim is one of the pharmaceutical industry’s top 20 companies. Some 50,000 employees create value through innovation daily for the three business areas human pharmaceuticals, animal health and biopharmaceuticals. In 2018, Boehringer Ingelheim achieved net sales of 17.5 billion euros. R&D expenditure, exceeding three billion euros, corresponded to 18.1 per cent of net sales. As a family-owned company, Boehringer Ingelheim plans in generations and focuses on long-term success. The company therefore aims at organic growth from its own resources with simultaneous openness to partnerships and strategic alliances in research. In everything it does, Boehringer Ingelheim naturally adopts responsibility towards mankind and the environment.
                                </BlocxContentBoxType.Body>
                            </BlocxContentBox>
                        </div>
                        <div>
                            <h3 className="col-sm-12 col-md-12 subsubheadingtext">More related contents</h3>
                        </div>
                        <div className='blocx-grid'>
                            <div className="col-sm-12 col-md-6">
                                <BlocxCard.Variant1>
                                    <BlocxCardImage.Top src={require('../app/assets/images/page13image1.png')} />
                                    <BlocxCardText.Text ><p className="col-sm-12 col-md-12 imageheading">Top Employer</p>
                                    </BlocxCardText.Text>
                                    <BlocxCardText.Text><p className="col-sm-12 col-md-12 textunderimage">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut ero labore et dolorea sed do eiusmod tempor.</p></BlocxCardText.Text>
                                </BlocxCard.Variant1>
                            </div>
                            <div className="col-sm-12 col-md-6 ">
                                <BlocxCard.Variant1>
                                    <BlocxCardImage.Top src={require('../app/assets/images/page13image2.png')} />
                                    <BlocxCardText.Text ><p className="col-sm-12 col-md-12 imageheading">Board of managing directors</p>
                                    </BlocxCardText.Text>
                                    <BlocxCardText.Text><p className="col-sm-12 col-md-12 textunderimage">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut ero labore et dolorea sed do eiusmod tempor.</p></BlocxCardText.Text>
                                </BlocxCard.Variant1>
                            </div>
                            <div className="col-sm-12 col-md-6 ">
                                <BlocxCard.Variant1>
                                    <BlocxCardImage.Top src={require('../app/assets/images/page13imag3.png')} />
                                    <BlocxCardText.Text ><p className="col-sm-12 col-md-12 imageheading">Organisation</p>
                                    </BlocxCardText.Text>
                                    <BlocxCardText.Text ><p className="col-sm-12 col-md-12 textunderimage">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut ero labore et dolorea sed do eiusmod tempor.</p></BlocxCardText.Text>
                                </BlocxCard.Variant1>
                            </div>
                            <div className="col-sm-12 col-md-6 ">
                                <BlocxCard.Variant1>
                                    <BlocxCardImage.Top src={require('../app/assets/images/page13image4.png')} />
                                    <BlocxCardText.Text ><p className="col-sm-12 col-md-12 imageheading">Corporate Head</p>
                                    </BlocxCardText.Text>
                                    <BlocxCardText.Text><p className="col-sm-12 col-md-12 textunderimage">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut ero labore et dolorea sed do eiusmod tempor.</p></BlocxCardText.Text>
                                </BlocxCard.Variant1>
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
        )
    }

}
export default Page13