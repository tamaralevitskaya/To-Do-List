import { Component } from "react";
import yes from "./yes.png";

export class ToDoList extends Component {
    state = {
        userInput: '',
        todolist: [],
        image: yes
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input) {
        if (input === '') {
            alert("please enter an item.")
        } else {
            let listArray = this.state.todolist;
            listArray.push(input);
            this.setState({todolist: listArray, userInput: ''})
        }
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }


    onFormSubmit(e) {
        e.preventDefault();
    }

    deleteItem() {
        let listArray = this.state.todolist;
        listArray = [];
        this.setState({todolist: listArray})
    }


    render() {
        return(
            <div className="App">
                <form onSubmit={this.onFormSubmit}>
                    <div className='container'>
                        <input placeholder="New task for today" onChange={(e) => 
                            {this.onChangeEvent(e.target.value)}}
                            value={this.state.userInput}/>
                    </div>
                    <div className='container'>
                        <button onClick={() => this.addItem(this.state.userInput)} className="add">Add</button>
                    </div>
                    <ul> {this.state.todolist.map((item, index) => 
                        <li onClick={this.crossedWord} key={index}>
                            <img src={yes} width="30px" alt="yes"/>{item}                        </li>
                    )}
                    </ul>
                    <div className='container'>
                        <button onClick={() => this.deleteItem()} className="delete">Delete</button>
                    </div>

                </form>
            </div>
        )
    }

}


