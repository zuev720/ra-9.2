import React from 'react';

export function Button (props) {
    return(<button className={props.className} onClick={props.onClick}>{props.children}</button>)
}
