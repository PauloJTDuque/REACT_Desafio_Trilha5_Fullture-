import React from "react";

export function Footer(props){              // pode ser passado "{texto}"
    return(
        <footer>{props.texto}</footer>      // e recebido como "{texto}"
    )
}
