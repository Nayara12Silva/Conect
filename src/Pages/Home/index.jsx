import React from "react";
import { MenuTop } from "../../Components/Menu";
import Logo from '../../assets/01.png'
import './home.css'
import BasicExample from "../../Components/CardBoot";

export function Home(){
    return(
        <>
        <div className="content">
             <div className="content_Menu">
                 <img src={Logo} alt="Logo" className="Logo" />
                 <MenuTop />
             </div>
             <div className="content_Cards">
                 <BasicExample/>
                              
             </div>
        </div>
        </>
    )
}