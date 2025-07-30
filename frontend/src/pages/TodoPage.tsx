import React, { useState } from 'react';
import { TodoFilter } from '../types';
import { useTodos } from '../hooks/useTodos';
import Layout from '../components/Layout';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodoFilterComponent from '../components/TodoFilter';

const TodoPage: React.FC = () => {
  const [filter, setFilter] = useState<TodoFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const {
    todos,
    loading,
    error,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
  } = useTodos(filter, searchQuery);

  const handleFilterChange = (newFilter: TodoFilter) => {
    setFilter(newFilter);
    setSearchQuery(''); // 필터 변경 시 검색어 초기화
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setFilter('all'); // 검색 시 필터를 전체로 변경
    }
  };

  // 통계 계산
  const totalCount = todos.length;
  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;

  const handleCreateTodo = async (todoData: any) => {
    try {
      await createTodo(todoData);
    } catch (error) {
      // 에러는 useTodos에서 처리됨
    }
  };

  const handleUpdateTodo = async (id: number, updates: any) => {
    try {
      await updateTodo(id, updates);
    } catch (error) {
      // 에러는 useTodos에서 처리됨
    }
  };

  const handleDeleteTodo = async (id: number) => {
    if (window.confirm('정말로 이 할 일을 삭제하시겠습니까?')) {
      try {
        await deleteTodo(id);
      } catch (error) {
        // 에러는 useTodos에서 처리됨
      }
    }
  };

  const handleToggleTodo = async (id: number) => {
    try {
      await toggleTodo(id);
    } catch (error) {
      // 에러는 useTodos에서 처리됨
    }
  };

  return (
    <Layout>
      <div className="todo-page">
        {error && (
          <div className="error-message" style={{
            backgroundColor: '#f8d7da',
            color: '#721c24',
            padding: '1rem',
            borderRadius: '6px',
            marginBottom: '1rem',
            border: '1px solid #f5c6cb'
          }}>
            <strong>오류:</strong> {error}
          </div>
        )}

        <TodoForm 
          onSubmit={handleCreateTodo}
          loading={loading}
        />

        <TodoFilterComponent
          currentFilter={filter}
          searchQuery={searchQuery}
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
          totalCount={totalCount}
          activeCount={activeCount}
          completedCount={completedCount}
        />

        <TodoList
          todos={todos}
          loading={loading}
          onUpdate={handleUpdateTodo}
          onDelete={handleDeleteTodo}
          onToggle={handleToggleTodo}
        />
      </div>
    </Layout>
  );
};

export default TodoPage;