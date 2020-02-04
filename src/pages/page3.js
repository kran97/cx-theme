import React from 'react';
import { Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { BlocxButton, BlocxContentBoxType, BlocxFooterBody, BlocxPagination, BlocxFooter, BlocxNavBar, BlocxDropdown, BlocxCard, BlocxCardText, BlocxCardBody, BlocxCardImage, BlocxCardHeader, BlocxContentContainer, BlocxContentBox } from 'blocx-react-fullbundle';
// import navbarData from '../json/navbar.json';
// import footerData from '../json/footer.json';
// import data from '../json/dropDown-pg3.json';
// import paginationData from '../json/pagination.json';
// import cardData from '../json/cards.json';
import page3json from '../json/page3.json';
import page1json from '../json/page1.json';
// function Page3() {
  export default class Page3 extends React.Component{
    state = {
      redirect: false
    }
   setRedirect=()=>{
      this.setState({
        redirect: true
      })
    }
  renderRedirect=()=>{
      if (this.state.redirect) {
        return <Redirect to='/page4' />
      }
    }
  render(){
  let itemListFooter1 = page1json.footer.footerMenu1.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
  let itemListFooter2 = page1json.footer.footerMenu2.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
  let itemListFooter3 = page1json.footer.footerMenu3.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
  let dropdownArray = [];
  for (let i of page3json.dropdown) {
    dropdownArray.push(i.value);
  }
  let cardInfo = [...page3json.cards.items];
 
  return (
    <React.Fragment>
      <BlocxNavBar className="navbar1" label={false} data={page1json.navbar} />
      <div className="mainBody-pg3">
        <h2>Our Products</h2>
        <div className="blocx-input-group" className="blocx-grid">
        
          <div className="category" className="col-md-3">
            <h4>Category</h4>
            <BlocxDropdown
              placeholder="Select"
              options={dropdownArray.map((value) => { return { value } })}
            />
          </div>
          <div className="category" className="col-md-3">
            <h4>Products</h4>
            <BlocxDropdown
              placeholder="Select"
              options={dropdownArray.map((value) => { return { value } })}
            />
          </div>
          <div className="col-md-3">
          <BlocxButton.Primary label="Search" className="search-btn"></BlocxButton.Primary>
          </div>
        </div>

        {
        
          page3json.cards.items.map((item) => {
            return (
              <div className="blocx-grid">
              <BlocxCard.Variant9 className="cardBody-page3" key={item.id}>

                <BlocxCardBody.Default>

                  <BlocxCardBody.Left>
                    <div className="cardLeft">
                      <BlocxCardImage.Default src={item.image} alt="Card image caption"></BlocxCardImage.Default>
                    </div>
                    <div className="cardLeft-text">
                      <BlocxCardText.Text>{item.text}</BlocxCardText.Text>
                    </div>
                  </BlocxCardBody.Left>

                  <BlocxCardBody.Right>
                    {/* <BlocxButton.Primary label="BUY NOW" className="page3-button"></BlocxButton.Primary> */}
                    {this.renderRedirect()}

                    <BlocxButton.Primary label="BUY NOW" className="page3-button" onClick={this.setRedirect}></BlocxButton.Primary>

                  </BlocxCardBody.Right>

                </BlocxCardBody.Default>

              </BlocxCard.Variant9>
              </div>

            )
          })
        }

        <div className="pagination">
          <BlocxPagination data={page3json.pagination} />
        </div>
      </div>

      <BlocxFooter className="footerBody">
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
            <div className="col-md-7">
              <BlocxFooterBody.Grid>
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
      
    </React.Fragment>
  )
      }
    }
// }

// export default Page3;
