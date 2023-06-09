import { customElement } from "solid-element";
import { Component } from "solid-js";

import styles from "./style.css?inline";


interface WebComponentProps {

}

const WebComponent: Component<WebComponentProps> = ({  }) => {
    return (
        <div>
            <style scoped>{styles}</style>
            Hello from a Web Component!
        </div>
    )
}

customElement(
    "solid-webcomponent",
    { },
    WebComponent
)