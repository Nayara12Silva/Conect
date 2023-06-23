import React from "react";
import { Container, TabContent} from "react-bootstrap";
import NavScrollExample from "../../Components/Navbar";
import TextControlsExample from "../../Components/FormValidate";
import './index.css'

export function HomePage(){
    return(
        <Container fluid>
            <NavScrollExample/>
         <TabContent className="tabContent">
            <TextControlsExample/>
         </TabContent>
        </Container>
    )
}