import React from 'react';
import SimpleTooltips from './deleteTooltip';

export default function Todolist(props) {

    function handleDoneAndRemove(e) {

        e.target.tagName === "LI" ? (
        props.onItemDone(e.target.id) 
        ) : (
        props.onItemRemove(e.currentTarget.id) );    
    }
    
    const { todoItems } = props;

    const items = todoItems.map(item => {
        
        const classType = item.done ? "done" : "";
        return (
            <li className={classType} 
                key={item.id}
                id={item.id}
                onClick={handleDoneAndRemove}
            >
                {item.value} <SimpleTooltips onClick={handleDoneAndRemove}/>{/* <span >X</span> */} 
            </li>
        ) 
    })

    return (
        <ul>  
            {items}
        </ul>
    )
}