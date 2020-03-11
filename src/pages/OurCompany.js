import React, { Component } from 'react';
import { BlocxMegaMenu, BlocxCard, BlocxCardText, BlocxCardImage, BlocxContentBox, BlocxContentBoxType, BlocxFooter, BlocxFooterBody, BlocxHero, BlocxHeroBody, BlocxHeroCarousel } from "blocx-react-components";
import page13json from "../json/page13.json";
import page1json from "../json/page1.json";
import megaMenuJson from "../json/megamenu.json"

class OurCompany extends Component {
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
    regex = "[A-Za-z]{3}";

    render() {
        let itemListFooter1 = page1json.footer.footerMenu1.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let itemListFooter2 = page1json.footer.footerMenu2.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        let itemListFooter3 = page1json.footer.footerMenu3.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
        const cardInfo = [...page1json.companyCardDetails];

        return (
            <React.Fragment>
                <div>
                    <BlocxMegaMenu
                        data={megaMenuJson}
                        onClick={(item, data) => this.onClick(item, data)}
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
                        <BlocxContentBox>
                            <h2 className="col-sm-12 col-md-12 headingtext headmar">Our Company</h2>
                            <h3 className="col-sm-12 col-md-12 subheadingtext headmar">A successful and family owned Company</h3>
                            <BlocxContentBoxType.Body className="col-sm-12 col-md-12 maintext">Boehringer Ingelheim is a global group of companies embracing many cultures and diverse societies. Learn more about the financial highlights, the corporate vision, the organisation, the Board of Managing Directors and the company’s history as well as our engagement for scientific, cultural and environmental purposes. Improving the health and quality of life of humans and animals is the goal of the research-driven pharmaceutical company Boehringer Ingelheim. The focus in doing so is on diseases for which no satisfactory treatment option exists to date. The company therefore concentrates on developing innovative therapies that can extend patients’ lives. In animal health, Boehringer Ingelheim stands for advanced prevention. Family-owned since it was established in 1885, Boehringer Ingelheim is one of the pharmaceutical industry’s top 20 companies. Some 50,000 employees create value through innovation daily for the three business areas human pharmaceuticals, animal health and biopharmaceuticals. In 2018, Boehringer Ingelheim achieved net sales of 17.5 billion euros. R&D expenditure, exceeding three billion euros, corresponded to 18.1 per cent of net sales. As a family-owned company, Boehringer Ingelheim plans in generations and focuses on long-term success. The company therefore aims at organic growth from its own resources with simultaneous openness to partnerships and strategic alliances in research. In everything it does, Boehringer Ingelheim naturally adopts responsibility towards mankind and the environment.</BlocxContentBoxType.Body>
                        </BlocxContentBox>
                        <div>
                            <h3 className="col-sm-12 col-md-12 subsubheadingtext">More related contents</h3>
                        </div>
                        <div className='blocx-grid'>
                            {cardInfo.map((item) => {
                                return (
                                    <div key={item.id} className="col-sm-12 col-md-6">
                                        <BlocxCard.Variant1>
                                            <BlocxCardImage.Top className="images" src={item.image} />
                                            <BlocxCardText.Text ><p className="col-sm-12 col-md-12 imageheading">{item.heading}</p>
                                            </BlocxCardText.Text>
                                            <BlocxCardText.Text><p className="col-sm-12 col-md-12 textunderimage">{item.text}</p></BlocxCardText.Text>
                                        </BlocxCard.Variant1>
                                    </div>
                                )
                            })}
                            <div>
                                <BlocxContentBox>
                                    <p className="col-sm-12 col-md-12 headingbetweenimages">Vision and Values</p>
                                    <BlocxContentBoxType.Body className="col-sm-12 col-md-12 textbetweenimages">For over 130 years, since our foundation by Albert Boehringer, our focus is on long-term performance rather than being limited by short-term profits. Day by day, the 50,000 employees of Boehringer Ingelheim create value through innovation with a clear goal: to provide more health and improve the lives of both humans and animals.
                            </BlocxContentBoxType.Body >
                                </BlocxContentBox>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <BlocxCard.Variant1>
                                    <BlocxCardImage.Top className="images" src={require('../app/assets/images/page14image1.png')} />
                                    <BlocxCardText.Text ><p className="col-sm-12 col-md-12 imageheading">Our Focus</p>
                                    </BlocxCardText.Text>
                                    <BlocxCardText.Text><p className="col-sm-12 col-md-12 textunderimage">Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum, class rhoncus neque. Ullamcorper porttitor non pharetra cursus nisl mollis pellentesque primis penatibus platea, dictum himenaeos eget mi bibendum ad molestie aliquet curae quis quisque, nunc duis ac at elementum dui integer viverra tempus. Lacinia bibendum diam senectus egestas nec molestie convallis aenean hac tempus, vivamus purus congue euismod fringilla cursus donec est eu blandit platea, feugiat vitae netus orci habitant accumsan placerat morbi nostra. Quam fringilla sociis suspendisse quis ultricies dis tellus cum, litora aliquet.</p></BlocxCardText.Text>
                                </BlocxCard.Variant1>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <BlocxCard.Variant1>
                                    <BlocxCardImage.Top className="images" src={require('../app/assets/images/page14image2.png')} />
                                    <BlocxCardText.Text ><p className="col-sm-12 col-md-12 imageheading">Powered by our people</p>
                                    </BlocxCardText.Text>
                                    <BlocxCardText.Text><p className="col-sm-12 col-md-12 textunderimage">Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum, class rhoncus neque. Ullamcorper porttitor non pharetra cursus nisl mollis pellentesque primis penatibus platea, dictum himenaeos eget mi bibendum ad molestie aliquet curae quis quisque, nunc duis ac at elementum dui integer viverra tempus. Lacinia bibendum diam senectus egestas nec molestie convallis aenean hac tempus, vivamus purus congue euismod fringilla cursus donec est eu blandit platea, feugiat vitae netus orci habitant accumsan placerat morbi nostra. Quam fringilla sociis suspendisse quis ultricies dis tellus cum, litora aliquet.</p></BlocxCardText.Text>
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
export default OurCompany