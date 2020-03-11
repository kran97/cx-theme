import React from 'react';
import { Redirect } from 'react-router-dom';
import { BlocxButton, BlocxFooterBody, BlocxPagination, BlocxFooter, BlocxNavBar, BlocxDropdown, BlocxCard, BlocxCardText, BlocxCardBody, BlocxCardImage } from 'blocx-react-components';
import page3json from '../json/page3.json';
import page1json from '../json/page1.json';
class Products extends React.Component {
  state = {
    redirect: false,
    prod_type: 'Select',
    category: 'Select',
    filterOperation: false,
    filteredCard: [],
    counter: 0
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/buyproductmodal' />
    }
  }

  renderRedirectProductPage = () => {
    if (this.state.redirect) {
      return <Redirect to='/buyproductmodal' />
    }
  }

  productType = (data) => {
    this.setState({ prod_type: data, filterOperation: false })
  }
  productCategory = (data) => {
    this.setState({ category: data, filterOperation: false })
  }

  filterCard = () => {
    this.setState({ filterOperation: true, counter: 1 })
  }

  setCards = (items) => {
    this.setState({ filteredCard: items })
  }
  render() {
    let itemListFooter1 = page1json.footer.footerMenu1.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
    let itemListFooter2 = page1json.footer.footerMenu2.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
    let itemListFooter3 = page1json.footer.footerMenu3.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
    let typeArray = [];
    let categoryArray = [];
    for (let i of page3json.typeDropdown) {
      typeArray.push(i.value);
    }
    for (let i of page3json.categoryDropdown) {
      categoryArray.push(i.value);
    }
    let cardInfo = [...page3json.cards.items];
    let showCards = cardInfo.filter(
      (card) => {
        if (this.state.prod_type !== 'Select' && this.state.category === 'Select' && this.state.filterOperation)
          return card.product_type === this.state.prod_type;
        if (this.state.prod_type === 'Select' && this.state.category !== 'Select' && this.state.filterOperation)
          return card.category === this.state.category;
        if (this.state.category !== 'Select' && this.state.prod_type !== 'Select' && this.state.filterOperation)
          return ((card.product_type === this.state.prod_type) && (card.category === this.state.category));
        if (!this.state.filterOperation && this.state.counter !== 0)
          return 0;
        if (!this.state.filterOperation && this.state.counter === 0)
          return card;
        else {
          return card;
        }
      }
    )

    return (
      <React.Fragment>
        <BlocxNavBar className="navbar1" data={page1json.navbar} />
        <div className="mainBody-pg3">
          <h2>Our Products</h2>
          <div className="blocx-input-group blocx-grid">
            <div className="category col-md-3">
              <h4>Category</h4>
              <BlocxDropdown
                placeholder="Select"
                options={categoryArray.map((value) => { return { value } })}
                onChange={(values) => this.productCategory(values)}
              />
            </div>
            <div className="category col-md-3">
              <h4>Products</h4>
              <BlocxDropdown
                placeholder="Select"
                options={typeArray.map((value) => { return { value } })}
                onChange={(values) => this.productType(values)}
              />
            </div>
            <div className="col-md-3">
              <BlocxButton.Primary label="Search" className="search-btn" onClick={() => this.filterCard()}></BlocxButton.Primary>
            </div>
          </div>

          {

            showCards.map((item) => {
              return (
                <div key={item.id} className="blocx-grid">
                  <BlocxCard.Variant9 className="cardBody-page3" key={item.id}>

                    <BlocxCardBody.Default>

                      <BlocxCardBody.Left onClick={this.setRedirect}>
                        <div className="cardLeft">
                          <BlocxCardImage.Default src={item.image} alt="Card caption"></BlocxCardImage.Default>
                        </div>
                        <div className="cardLeft-text" onClick={this.setRedirect}>
                          <BlocxCardText.Title>{item.prod_brand}</BlocxCardText.Title><label htmlFor="item">{item.category}</label>
                          <BlocxCardText.Subtitle>color:{item.prod_col}</BlocxCardText.Subtitle>
                          <BlocxCardText.Text>{item.text}</BlocxCardText.Text>
                        </div>
                      </BlocxCardBody.Left>

                      <BlocxCardBody.Right>
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
              <div className="col-md-6">
                <BlocxFooterBody.Grid>
                  <div className="col-md-6"></div>
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
export default Products