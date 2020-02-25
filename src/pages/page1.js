import React from 'react';
import { BlocxButton, BlocxNavBar, BlocxDivider, BlocxHero, BlocxHeroBody, BlocxHeroCarousel, BlocxContentBoxType, BlocxCard, BlocxCardText, BlocxCardBody, BlocxCardImage, BlocxCardHeader, BlocxFooter, BlocxFooterBody, BlocxContentBox } from 'blocx-react-components';
import page1json from '../json/page1.json';

  class Page1 extends React.Component{
    render(){
    let itemListFooter1 = page1json.footer.footerMenu1.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
    let itemListFooter2 = page1json.footer.footerMenu2.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
    let itemListFooter3 = page1json.footer.footerMenu3.map(item => <li key={item.id}> <a className="foot" href={item.url}> {item.label} </a> </li>)
    const cardInfo = [...page1json.cardDetails];
  return (
    <React.Fragment>
      <BlocxNavBar className="navbar1" label="" data={page1json.navbar} />
      <BlocxHero>
        <BlocxHeroBody>
          <BlocxHeroCarousel className="heroBody" data={page1json.hero}></BlocxHeroCarousel>
        </BlocxHeroBody>
      </BlocxHero>
      <div className="text">Our Products</div>

      <div className="cardContainer blocx-grid">
        {
          cardInfo.map((item)=>{
            return(
        
        <BlocxCard.Variant5 className="col-md-3">
          <BlocxCardBody.Default>
               <BlocxCardImage.Default src={item.image} alt="a"></BlocxCardImage.Default>
            <BlocxCardHeader.Default><span className="itemHeader">{item.title}</span></BlocxCardHeader.Default>
          <BlocxCardText.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
     
     eiusmod tempor incididunt ut ero labore et dolorea sed do eiusmod tempor.</BlocxCardText.Text>
            <br></br>
           <div className="blocx-card_links">
              <BlocxButton.Primary label="Buy Now" className="cardButton" onClick={()=>this.props.history.push("/products")} ></BlocxButton.Primary>
            </div>
         </BlocxCardBody.Default>

       </BlocxCard.Variant5>
            )
          })
        }

      </div>
      <BlocxDivider
            height={1}
            width={99}
            widthInPer={true}
            color="#E3E3E3"
            type="horizontal"
          />

      <div className="blocx-grid">
        <div className="col-md-4"><img src="./page1_1.png" alt="pic"></img></div>
        <div className="col-md-8">
        <div className="midBody-container">
          <div className="midBody-content">
            <h3>Discover our success stories</h3>
            <h2>” I was stuck at the same weight for a year…<br></br>
              Until I started XLS Medical”</h2>
            <p>Scarlet - 21lbs*</p>
            <div className="blocx-grid midBody-button">
              <div className="col-md-3"><BlocxButton.Primary label="MY STORY" className="btn2"></BlocxButton.Primary></div>
              <div className="col-md-5"><BlocxButton.Primary label="ALL OUR SUCCESS STORIES" className="btn2" onClick={()=>this.props.history.push("/success_stories")}></BlocxButton.Primary></div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="diet-tips blocx-grid">
        <div className="col-md-4 diet-tips-image"><img src="./page1_2.png" alt="cardImage"></img></div>
        <div className="col-md-8">
        <BlocxContentBox>
            <BlocxContentBoxType.H6>Diet tips & advice</BlocxContentBoxType.H6>
            <BlocxContentBoxType.SmallBody>XLS-Medical is here to help make your life a little easier and help you navigate the dieting minefield, ensuring you get the best diet tips and advice and helping you reach your weight loss goals in the best possible manner. No matter which diet plan you follow, almost all start by setting a goal – a target weight. It’s useful having something to aim for. The danger is that once we get there, we stop setting ourselves goals. And that can make it easier to slip back into the lifestyle that meant we needed to go on a diet in the first place. From Zumba and dog walking, to cycling and rock climbing – all of the physical activities you can think of burn fat. Even weeding the garden can To make matters worse, when we’ve lost weight there’s not just a physical change to our body, there’s also a hormonal one. Leptin kicks in and tries to keep up those fat stores.</BlocxContentBoxType.SmallBody>
          </BlocxContentBox>
        </div>
      </div>

      <div className="divider blocx-grid">
        <div className="divider-text col-md-3">You can find XLS-Medical in:</div>
        <div className="divider-line">
          <BlocxDivider
            height={90}
            width={2}
            color="#A6ADB4"
            type="vertical"
          />
        </div>
        <div className="divider-links col-md-6">
          <a href="https://www.boots.com/"><img src="../../boots.png" alt="link"></img></a>
          <a href="https://www.superdrug.com/"><img src="../../img2.png" alt="link"></img></a>
          <a href="https://www.amazon.in/"><img src="../../amazon.png" alt="link"></img></a>
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
      export default Page1
