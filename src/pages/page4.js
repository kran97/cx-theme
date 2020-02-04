
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { BlocxButton, BlocxNavBar, BlocxTab, BlocxTable, BlocxTabContent, BlocxTabContentItem, BlocxTabLabel, BlocxTabNav, BlocxCard, BlocxCardText, BlocxCardBody, BlocxCardImage, BlocxCardHeader, BlocxFooter, BlocxFooterBody, BlocxContentContainer, BlocxContentBox } from 'blocx-react-fullbundle';
// import navbarData from '../json/navbar.json';
// import tabData from '../json/tab.json';
// import tablejson from '../json/table.json';
// import footerData from '../json/footer.json';
import page4json from '../json/page4.json';
import page1json from '../json/page1.json';

const Page4 = props => {
  const [items, setItems] = useState(page4json.tab);
  const [test, setTest] = useState(0);
  function handleClick(e, id) {
    items.forEach(item => item.isActive = false);
    items[id].isActive = !items[id].isActive;
    setItems(items);
    if(id!=0)
      setShowComponent(true);
    else
      setShowComponent(false)
    setTest(Math.random());
  }
  
  const [showComponent,setShowComponent]=useState(false);
  
  let contentItems = items.map((item) => {
    return (    
           <BlocxTabContentItem key={item.id} active={item.isActive}> 
            <h1>{item.contentTitle}</h1>
            {/* {item.itemImage?<img src={item.itemImage} alt="Tabs"/>:''} */}
            <br></br>
            {item.description ? item.description :''}
           </BlocxTabContentItem> 
    );

});

  let itemListFooter1 = page1json.footer.footerMenu1.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
  let itemListFooter2 = page1json.footer.footerMenu2.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
  let itemListFooter3 = page1json.footer.footerMenu3.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)

  let tabLabel = items.map((item) => {

    return (
      <BlocxTabLabel key={item.id} id={item.id} label={item.label} active={item.isActive} onClick={(e) => handleClick(e, item.id)}></BlocxTabLabel>
    );

  });
  return (
    <React.Fragment>
      <BlocxNavBar className="navbar1" label={false} data={page1json.navbar} />

      <BlocxCard.Variant9 className="cardBody-page4">
        <BlocxCardBody.Default>
          <BlocxCardBody.Left>
            <div className="page4-card">
              <BlocxCardImage.Default src='../../card3.png' alt="Card image caption"></BlocxCardImage.Default>
            </div>

          </BlocxCardBody.Left>

          <BlocxCardBody.Right>
            <BlocxCardHeader.Default>
              <span className="itemHeader">XLS-Nutrition Vanilla</span>
            </BlocxCardHeader.Default>
            <div className="page4-cardLeft-text">
              <BlocxCardText.Text>Greyhound divisively hello coldly wonderfully</BlocxCardText.Text>
            </div>

            <BlocxButton.Primary label="BUY NOW" className="page4-button" onClick={() => props.history.push("/page5")}></BlocxButton.Primary>
            
          </BlocxCardBody.Right>
        </BlocxCardBody.Default>
      </BlocxCard.Variant9>

      <div className="blocx-grid tab-container">
        <div className="tab col-md-6">
          <BlocxTab className="tab-name">
            <BlocxTabNav> {tabLabel}</BlocxTabNav>
            {(showComponent==true) ?  <BlocxTabContent>{contentItems}</BlocxTabContent> : ''}
             {/* <BlocxTabContent> {contentItems}</BlocxTabContent>    */}
          </BlocxTab>
        </div>
      </div>
    {showComponent ? '':
      <div className="blocx-grid">
        <div className="col-md-6 medicine-info">
          <h4>XLS-Nutrition</h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut ero labore et dolorea sed do eiusmod tempor.
                    </div>
        <div className="col-md-6 col-sm-12">
          <BlocxTable data={page4json.table}
            showcheckbox={false}
            className={''}
          />
        </div>
      </div>
     }
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
export default Page4;

