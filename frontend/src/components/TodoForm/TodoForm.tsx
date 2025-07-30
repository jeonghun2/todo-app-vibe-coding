import React, { useState } from 'react';
import { TodoCreateRequest } from '../../types';
import './TodoForm.css';

interface TodoFormProps {
  onSubmit: (todo: TodoCreateRequest) => void;
  loading?: boolean;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, loading = false }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert('제목을 입력해주세요.');
      return;
    }

    onSubmit({
      title: title.trim(),
      description: description.trim()
    });

    // 폼 초기화
    setTitle('');
    setDescription('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-input"
          placeholder="할 일 제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
          maxLength={100}
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-textarea"
          placeholder="할 일 설명을 입력하세요 (선택사항)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={loading}
          maxLength={500}
          rows={3}
        />
      </div>
      <button 
        type="submit" 
        className="form-submit-btn"
        disabled={loading || !title.trim()}
      >
        {loading ? '추가 중...' : '할 일 추가'}
      </button>
    </form>
  );
};

export default TodoForm;