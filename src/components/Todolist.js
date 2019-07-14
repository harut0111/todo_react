import React from 'react';

class Todolist extends React.Component {

    handleRemove = (e) => {
        this.props.onItemRemove(e.currentTarget.parentElement.id);
    }

    render() {
        const { todoItems } = this.props;
        const items = todoItems.map((text, index) => (
            text ?
                <li className="todoList" 
                    key={index}
                    id={index}
                    >
                    {text} <span onClick={this.handleRemove}>X</span> 
                </li> : text
            )
        )
        return (
            <ul>  
                {items}
            </ul>
        )
    }
}

export default Todolist;