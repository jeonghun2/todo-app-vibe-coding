import React from 'react';
import { Todo, TodoUpdateRequest } from '../../types';
import TodoItem from '../TodoItem';
import './TodoList.css';

interface TodoListProps {
  todos: Todo[];
  loading?: boolean;
  onUpdate: (id: number, updates: TodoUpdateRequest) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  loading = false,
  onUpdate,
  onDelete,
  onToggle
}) => {
  if (loading) {
    return (
      <div className="todo-list">
        <div className="loading-message">
          <p>할 일 목록을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="todo-list">
        <div className="empty-message">
          <p>등록된 할 일이 없습니다.</p>
          <p>새로운 할 일을 추가해보세요!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <div className="todo-list-header">
        <h2>할 일 목록 ({todos.length}개)</h2>
      </div>
      <div className="todo-items">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onToggle={onToggle}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;