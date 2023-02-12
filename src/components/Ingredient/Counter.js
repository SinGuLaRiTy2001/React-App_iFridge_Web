import React from "react";

export default class Counter extends React.Component {
    state = {
        count: 1
    };
    onAdd() {
        this.setState({
            count: this.state.count + 1
        });
    };
    onSub() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            };
        });
    };
    render() {
        return (
            <div>
                <img className='num_edit' src='./image/add.svg' onClick={this.onAdd.bind(this)} />
                <span>{this.state.count}</span>
                <img className='num_edit' src='./image/del.svg' onClick={this.onSub.bind(this)} />
            </div>
        )
    }
}