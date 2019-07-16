import React from 'react';
import SimpleTooltips from './deleteTooltip';

class Todolist extends React.Component {

    handleDoneAndRemove = (e) => {
        
        e.target.tagName === "LI" ? (
            this.props.onItemDone(e.target.id) 
            ) : (
            this.props.onItemRemove(e.currentTarget.id) );    
    }
    
    render() {
        const { todoItems } = this.props;
   
        const items = todoItems.map(item => {
            
            const classType = item.done ? "done" : "";
            return (
                <li className={classType} 
                    key={item.id}
                    id={item.id}
                    onClick={this.handleDoneAndRemove}
                >
                    {item.value} <SimpleTooltips onClick={this.handleDoneAndRemove}/>{/* <span >X</span> */} 
                </li>
            ) 
        })

        return (
            <ul>  
                {items}
            </ul>
        )
    }
}

export default Todolist;