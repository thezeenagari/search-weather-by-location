import React from "react";
import { useState } from "react";
import "./styles.scss"

interface IProps {
    value?: string
    onChange?: (value?: string) => void;
}

export const Search: React.FC<IProps> = ({value, onChange}) => {

    let searchTimeOut: any;

    const [query, setQuery] = useState('')

    const updateValue = (e: any): void => {
        e.preventDefault();
        setQuery(e.target.value)
        clearTimeout(searchTimeOut);
        searchTimeOut = setTimeout(() => {
            if(onChange){
                onChange(e.target.value)
            }
        }, 400);
    };

    return(
        <input placeholder="Search for location" value={query} onChange={updateValue}/>
    )
}