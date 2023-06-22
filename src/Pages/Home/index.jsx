import React from "react";
import { MenuTop } from "../../Components/Menu";
import Logo from '../../assets/01.png'
import './home.css'
import MediaCard from "../../Components/Card";

export function Home(){
    return(
        <>
        <div className="content">
             <div className="content_Menu">
                 <img src={Logo} alt="Logo" className="Logo" />
                 <MenuTop />
             </div>
             <div className="content_Cards">
                 <MediaCard/>
                 <MediaCard/>
                 <MediaCard/>
                 <MediaCard/>
                 <MediaCard/>
                 <MediaCard/>
             </div>
        </div>
        </>
    )
}