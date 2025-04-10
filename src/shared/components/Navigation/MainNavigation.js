import React,{useState} from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import './MainNavigation.css';
import Backdrop from "../UIElements/Backdrop";
import locationIcon from "../../../assets/location.png";

const MainNavigation = props => {
    const  [drawerIsOpen,setDrawerIsOpen] =useState(false);
     
    const openDrawer=()=>{
        setDrawerIsOpen(true);
    }

    const closeDrawer=()=>{
        setDrawerIsOpen(false);
    }
    return (
        <>
        {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
       
        <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer> 
        
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={openDrawer}>
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title">
                <div className="title">
                    <Link to="/">
                        <img src={locationIcon} alt="Location Logo" className="locationImg" />
                        Spot Mark
                    </Link>
                </div>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </MainHeader>
        </>
    );
};

export default MainNavigation;
