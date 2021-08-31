import React from 'react';

export function TextArea (props) {
    return(<textarea name={props.className} className={props.className} value={props.value} onChange={props.onChange} />)
}
