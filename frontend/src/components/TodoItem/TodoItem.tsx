import React, { useState } from 'react';
import { Todo, TodoUpdateRequest } from '../../types';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onUpdate: (id: number, updates: TodoUpdateRequest) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  loading?: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ 
  todo, 
  onUpdate, 
  onDelete, 
  onToggle, 
  loading = false 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);

  const handleEdit = () => {
    setIsEditing(true);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
  };

  const handleSave = () => {
    if (!editTitle.trim()) {
      alert('제목을 입력해주세요.');
      return;
    }

    onUpdate(todo.id, {
      title: editTitle.trim(),
      description: editDescription.trim()
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ko-KR');
  };

  if (isEditing) {
    return (
      <div className="todo-item editing">
        <div className="todo-edit-form">
          <input
            type="text"
            className="edit-input"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            maxLength={100}
          />
          <textarea
            className="edit-textarea"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            maxLength={500}
            rows={2}
          />
          <div className="edit-actions">
            <button className="save-btn" onClick={handleSave} disabled={loading}>
              저장
            </button>
            <button className="cancel-btn" onClick={handleCancel} disabled={loading}>
              취소
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <div className="todo-header">
          <h3 className="todo-title">{todo.title}</h3>
          <div className="todo-actions">
            <button 
              className="toggle-btn"
              onClick={() => onToggle(todo.id)}
              disabled={loading}
            >
              {todo.completed ? '완료 취소' : '완료'}
            </button>
            <button 
              className="edit-btn"
              onClick={handleEdit}
              disabled={loading}
            >
              수정
            </button>
            <button 
              className="delete-btn"
              onClick={() => onDelete(todo.id)}
              disabled={loading}
            >
              삭제
            </button>
          </div>
        </div>
        {todo.description && (
          <p className="todo-description">{todo.description}</p>
        )}
        <div className="todo-meta">
          <span className="todo-status">
            상태: {todo.completed ? '완료됨' : '진행 중'}
          </span>
          <span className="todo-date">
            생성: {formatDate(todo.createdAt)}
          </span>
          {todo.updatedAt !== todo.createdAt && (
            <span className="todo-date">
              수정: {formatDate(todo.updatedAt)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;