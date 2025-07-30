import axios from 'axios';
import { Todo, TodoCreateRequest, TodoUpdateRequest, SearchParams } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const todoApi = {
  // 모든 Todo 조회
  getAllTodos: async (params?: SearchParams): Promise<Todo[]> => {
    const response = await apiClient.get('/todos', { params });
    return response.data as Todo[];
  },

  // 특정 Todo 조회
  getTodoById: async (id: number): Promise<Todo> => {
    const response = await apiClient.get(`/todos/${id}`);
    return response.data as Todo;
  },

  // Todo 생성
  createTodo: async (todoData: TodoCreateRequest): Promise<Todo> => {
    const response = await apiClient.post('/todos', todoData);
    return response.data as Todo;
  },

  // Todo 수정
  updateTodo: async (id: number, updates: TodoUpdateRequest): Promise<Todo> => {
    const response = await apiClient.put(`/todos/${id}`, updates);
    return response.data as Todo;
  },

  // Todo 완료 상태 토글
  toggleTodo: async (id: number): Promise<Todo> => {
    const response = await apiClient.patch(`/todos/${id}/toggle`);
    return response.data as Todo;
  },

  // Todo 삭제
  deleteTodo: async (id: number): Promise<void> => {
    await apiClient.delete(`/todos/${id}`);
  },

  // 완료/미완료 상태별 Todo 조회
  getTodosByStatus: async (completed: boolean): Promise<Todo[]> => {
    const response = await apiClient.get('/todos', {
      params: { completed }
    });
    return response.data as Todo[];
  },

  // 키워드로 Todo 검색
  searchTodos: async (keyword: string): Promise<Todo[]> => {
    const response = await apiClient.get('/todos', {
      params: { search: keyword }
    });
    return response.data as Todo[];
  },
};

export default apiClient;