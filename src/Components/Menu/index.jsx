import { Input } from "@mui/base";
import { AccountCircle, Add } from "@mui/icons-material";
import React from "react";
import './menu.css'


export const MenuTop= ()=>{
    return(
        <>
               <div className="menu">
               <button  className="btn_Menu">
                     <Add/>
                     Adicionar Grupos
                 </button>
                 <button className="btn_Menu">
                     Meus Grupos
                 </button>
                 <AccountCircle/>
               </div>

        </>
    )
}