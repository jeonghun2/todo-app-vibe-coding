export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TodoCreateRequest {
  title: string;
  description: string;
}

export interface TodoUpdateRequest {
  title?: string;
  description?: string;
  completed?: boolean;
}

export interface TodoFilterState {
  completed?: boolean;
  search?: string;
}

export type TodoFilter = 'all' | 'active' | 'completed';