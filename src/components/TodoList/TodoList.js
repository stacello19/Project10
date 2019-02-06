import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoItem >리액트 공부하기</TodoItem>
                <TodoItem done>컴포넌트 스타일링 해보기</TodoItem>
            </div>
        );
    }
}

export default TodoList;