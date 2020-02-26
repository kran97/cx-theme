
import React, { useState } from 'react';
import { BlocxButton, BlocxNavBar, BlocxTab, BlocxTableWrapper, BlocxTable, BlocxTableHeading, BlocxTableBody, BlocxTabContent, BlocxTabContentItem, BlocxTabLabel, BlocxTabNav, BlocxCard, BlocxCardText, BlocxCardBody, BlocxCardImage, BlocxCardHeader, BlocxFooter, BlocxFooterBody, BlocxContentBox, BlocxContentBoxType } from 'blocx-react-components';
import page4json from '../json/page4.json';
import page1json from '../json/page1.json';
import tabledata from '../json/tabledata.json';

const Page4 = props => {
  const [items, setItems] = useState(page4json.tab);
  function handleClick(e, id) {
    items.forEach(item => item.isActive = false);
    items[id].isActive = !items[id].isActive;
    setItems(items);
    // if (id !== 0)
    //   setShowComponent(true);
    // else
    //   setShowComponent(false)
  }

  // const [showComponent, setShowComponent] = useState(false);

  // const { data, showcheckbox } = props;
  const data = tabledata;
  const tableHeader = data.header;
  const tableHeaderKeys = Object.keys(tableHeader);
  const tableContent = data.items;

  let contentItems = items.map((item) => {
    return (
      <BlocxTabContentItem key={item.id} active={item.isActive}>
        {item.id === '0' ?
          <div className="blocx-grid">
            <div className="col-md-6 medicine-info">
              <h4>XLS-Nutrition</h4>
              <BlocxContentBox>
                <BlocxContentBoxType.Cite>
                  {page4json.content}
                </BlocxContentBoxType.Cite>
              </BlocxContentBox>
            </div>
            <div className="col-md-6 col-sm-12">
              <BlocxTableWrapper>
                <BlocxTable id="table1">
                  <BlocxTableHeading>
                    <tr>
                      {tableHeaderKeys.map((item) => {
                        return (
                          <td key={item}>{tableHeader[item]}</td>
                        )
                      })}
                    </tr>
                  </BlocxTableHeading>
                  <BlocxTableBody>
                    {tableContent.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>
                            <div className="user-card">
                              <div className="user-card_details">
                                <h4>{item.name}</h4>
                                {<label htmlFor="email">{item.email}</label>}
                              </div>
                            </div>
                          </td>
                          <td>{item.company}</td>
                          <td>{item.phone}</td>
                          <td><span className="stricker">{item.tags}</span></td>
                        </tr>
                      )
                    })}
                  </BlocxTableBody>
                </BlocxTable>
              </BlocxTableWrapper>
            </div>
          </div> :
          <p>{item.description}</p>}

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
      <BlocxNavBar className="navbar1" label="" data={page1json.navbar} />
      <div className="blocx-grid">
        <div className="col-md-12">
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
                  <BlocxCardText.Text>Greyhound divisively hello coldly wonderfully  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut ero labore et dolorea sed do eiusmod tempor.</BlocxCardText.Text>
                </div>

                <BlocxButton.Primary label="BUY NOW" className="page4-button" onClick={() => props.history.push("/page5")}></BlocxButton.Primary>

              </BlocxCardBody.Right>
            </BlocxCardBody.Default>
          </BlocxCard.Variant9>
        </div>
      </div>
      <div className="blocx-grid tab-container">
        {/* <div className="col-md-3"></div> */}
        <div className="tab col-md-12">
          <BlocxTab className="tab-name">
            <BlocxTabNav> {tabLabel}</BlocxTabNav>
            <BlocxTabContent>
              {contentItems}
            </BlocxTabContent>
          </BlocxTab>
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
export default Page4;

