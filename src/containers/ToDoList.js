import React, { Component } from 'react';
import ToDoItem from '../components/ToDoItem';
import NewToDoForm from '../components/NewToDoForm';
import styled from 'styled-components';

const Container = styled.div`
background-color: #2b2e39;
margin: 0 auto;
width: 80%;
max-width: 600px;
padding: 14px;
border-radius: 14px;
margin-top: 14px;
`
const Header = styled.h1`
color: green;
`

class ToDoList extends Component {
    static defaultProps = {
        tasks: [
            { done: true, text: 'start' },
            { done: false, text: 'stop' }
        ]
    }
    state = {
        tasks: this.props.tasks,
        draft: '',
    }

    handelDraft = e => {
        this.setState({
            draft: e.target.value,
        })
    }

    handelClick = () => {
        const { tasks, draft } = this.state
        const list = tasks
        list.push({ text: draft, done: false })
        this.setState({
            tasks: list,
            draft: '',
        })
    }

    render() {
        const { title } = this.props
        const { tasks, draft } = this.state
        return (
            < Container >
                <Header>{title}</Header>
                <NewToDoForm
                    onSubmit={this.handelClick}
                    onChange={this.handelDraft}
                    draft={draft}
                />
                {tasks.map(task => <ToDoItem text={task.text} done={task.done} />)}

            </Container >
        );
    }
}
export default ToDoList;