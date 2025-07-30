import { useState, useEffect, useCallback } from 'react';
import { Todo, TodoCreateRequest, TodoUpdateRequest, TodoFilter } from '../types';
import { todoApi } from '../services/api';

interface UseTodosReturn {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  createTodo: (todoData: TodoCreateRequest) => Promise<void>;
  updateTodo: (id: number, updates: TodoUpdateRequest) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
  toggleTodo: (id: number) => Promise<void>;
  refetchTodos: () => Promise<void>;
}

export const useTodos = (filter: TodoFilter = 'all', searchQuery: string = ''): UseTodosReturn => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      let fetchedTodos: Todo[];

      if (searchQuery.trim()) {
        // 검색 모드
        fetchedTodos = await todoApi.searchTodos(searchQuery.trim());
      } else if (filter === 'active') {
        // 진행 중인 할 일만
        fetchedTodos = await todoApi.getTodosByStatus(false);
      } else if (filter === 'completed') {
        // 완료된 할 일만
        fetchedTodos = await todoApi.getTodosByStatus(true);
      } else {
        // 전체 할 일
        fetchedTodos = await todoApi.getAllTodos();
      }

      setTodos(fetchedTodos);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '할 일을 불러오는데 실패했습니다.';
      setError(errorMessage);
      console.error('Failed to fetch todos:', err);
    } finally {
      setLoading(false);
    }
  }, [filter, searchQuery]);

  const createTodo = useCallback(async (todoData: TodoCreateRequest) => {
    setLoading(true);
    setError(null);

    try {
      const newTodo = await todoApi.createTodo(todoData);
      setTodos(prevTodos => [newTodo, ...prevTodos]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '할 일 생성에 실패했습니다.';
      setError(errorMessage);
      console.error('Failed to create todo:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateTodo = useCallback(async (id: number, updates: TodoUpdateRequest) => {
    setLoading(true);
    setError(null);

    try {
      const updatedTodo = await todoApi.updateTodo(id, updates);
      setTodos(prevTodos =>
        prevTodos.map(todo => todo.id === id ? updatedTodo : todo)
      );
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '할 일 수정에 실패했습니다.';
      setError(errorMessage);
      console.error('Failed to update todo:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteTodo = useCallback(async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      await todoApi.deleteTodo(id);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '할 일 삭제에 실패했습니다.';
      setError(errorMessage);
      console.error('Failed to delete todo:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleTodo = useCallback(async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const updatedTodo = await todoApi.toggleTodo(id);
      setTodos(prevTodos =>
        prevTodos.map(todo => todo.id === id ? updatedTodo : todo)
      );
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '할 일 상태 변경에 실패했습니다.';
      setError(errorMessage);
      console.error('Failed to toggle todo:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const refetchTodos = useCallback(async () => {
    await fetchTodos();
  }, [fetchTodos]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return {
    todos,
    loading,
    error,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    refetchTodos,
  };
};