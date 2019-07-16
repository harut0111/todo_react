import React from 'react';

class Todolist extends React.Component {

    handleDoneAndRemove = (e) => {

        e.target.tagName === "LI" ? (
            this.props.onItemDone(e.target.id) 
            ) : (
            this.props.onItemRemove(e.target.parentElement.id) );    
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
                    {item.value} <span onClick={this.handleDoneAndRemove}>X</span> 
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