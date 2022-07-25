import React from "react";
import { FooterStyle } from "./FooterStyle";

export function Footer(props){              // pode ser passado "{texto}"
    return(
        <FooterStyle>{props.texto}</FooterStyle>      // e recebido como "{texto}"
    )
}
