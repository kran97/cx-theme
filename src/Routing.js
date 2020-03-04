import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pharma from './pages/Pharma';
import Products from './pages/Products';
import BuyProducts from './pages/BuyProducts';
import UserForm from './pages/UserForm';
import User from './pages/User';
import GlobalSite from './pages/GlobalSite';
import OurCompany from './pages/OurCompany';
import SuccessStories from './pages/SuccessStories';
import MyStory from './pages/MyStory';
import DoctorAppointment from './pages/DoctorAppointment';
import BuyProductModal from './pages/BuyProductModal';
import DoctorSelect from './pages/DoctorSelect';
import Home from './pages/HomePage';

function Routing() {
    return (

        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/pharma" component={Pharma} />
                    <Route path="/products" component={Products} />
                    <Route path="/buyproducts" component={BuyProducts} />
                    <Route path="/buyproductmodal" component={BuyProductModal} />
                    <Route path="/book_appoinment" component={UserForm} />
                    <Route path="/confirm_appoinment" component={User} />
                    <Route path="/global_site" component={GlobalSite} />
                    <Route path="/ourcompany" component={OurCompany} />
                    <Route path="/success_stories" component={SuccessStories} />
                    <Route path="/my_story" component={MyStory} />
                    <Route path="/doctor_appoinment" component={DoctorAppointment} />
                    <Route path="/doctor_select" component={DoctorSelect} />
                </Switch>
            </div >
        </Router>
    );
}
export default Routing;  