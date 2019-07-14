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
            if(item.value) {
                const classType = item.done ? "todoList done" : "todoList"
                return (
                    <li className={classType} 
                        key={item.id}
                        id={item.id}
                        onClick={this.handleDoneAndRemove}
                    >
                        {item.value} <span onClick={this.handleDoneAndRemove}>X</span> 
                    </li>
                ) 
            }
            return null;
        })

        return (
            <ul>  
                {items}
            </ul>
        )
    }
}

export default Todolist;