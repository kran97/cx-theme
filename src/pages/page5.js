import React, { Component } from 'react';
import '../styles/page5.css'
import { BlocxModalBody, BlocxModalHeader, BlocxModal, BlocxButton, BlocxDropdown } from 'blocx-react-components';
import classnames from 'classnames';
import product from '../app/assets/images/prod.png'
import prodSuper from '../app/assets/images/prodSuperdrug.png';
import prodBoosters from '../app/assets/images/prodBooter.png';

class Page5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: true,
        }
    }
    handleClick = (e) => {
        e.preventDefault()
        if (this.props.onClick) {
            this.props.onClick(e)
        }
        this.setState({
            showModal: !this.state.showModal
        })
        console.log("modal--->", (e.target.id) ? e.target.id + 'd' : 'closed');
    }
    render() {
        const { showModal } = this.state;
        const display = classnames({ 'block': showModal, 'none': !showModal });
        //const { title } = this.props;
        return (
            <React.Fragment>
                <BlocxModal.Default style={{ display: display }}>
                    <BlocxModalHeader.Default>
                        <span className="blocx-modal_close" id="close" onClick={(e) => this.handleClick(e)} ></span>
                    </BlocxModalHeader.Default>
                    <BlocxModalBody.Default>
                        <div className="pds blocx-grid">
                            <div className="col-md-3">
                                <h4 className="heading">Buy Product</h4>
                                <img src={product} alt="product" />
                                <h5>XLS-Nutrition Vanilla</h5>
                            </div>
                            <div className="col-md-9">
                                <div className="row-md-3">
                                    <div className="col-md-6">
                                        <p><b className="header1">Category</b></p>
                                        <BlocxDropdown
                                            placeholder="Select..."
                                            options={[
                                                { value: 'Medicine' },
                                            ]}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <p><b className="header1">Product</b></p>
                                        <BlocxDropdown
                                            placeholder="Select..."
                                            options={[
                                                { value: 'XLS-Medical Mass Strength' },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="row-md-9">
                                    <div className="row-md-6">
                                        <div className="col-md-2">
                                            <img src={prodSuper} alt="" />
                                        </div>
                                        <div className="col-md-4">
                                            <h4>Superdrugs</h4>
                                        </div>
                                        <div className="col-md-3">
                                            <h4><b className="grays">In Stock</b></h4>
                                        </div>
                                        <div className="col-md-3">
                                            <BlocxButton.Primary label="Buy Now" className="page5btn" >
                                            </BlocxButton.Primary>&nbsp;
                                        </div>
                                    </div>
                                    <div className="row-md-6">
                                        <div className="col-md-2">
                                            <img src={prodBoosters} alt="" />
                                        </div>
                                        <div className="col-md-4">
                                            <h4>Booter</h4>
                                        </div>
                                        <div className="col-md-3">
                                            <h4><b className="grays">In Stock</b></h4>
                                        </div>
                                        <div className="col-md-3">
                                            <BlocxButton.Primary label="Buy Now" className="page5btn">
                                            </BlocxButton.Primary>&nbsp;
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BlocxModalBody.Default>
                </BlocxModal.Default>
                <BlocxModal.Overlay style={{ display: display }}></BlocxModal.Overlay>
            </React.Fragment>
        )
    }
}
export default Page5