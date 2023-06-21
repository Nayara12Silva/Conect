import React from "react";
import { MenuTop } from "../../Components/Menu";
import Logo from '../../assets/01.png'
import './home.css'

export function Home(){
    return(
        <div className="content">
            <img src={Logo} alt="Logo"className="Logo"/>
            <MenuTop/>
        </div>
    )
}