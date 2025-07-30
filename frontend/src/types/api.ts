export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface ApiError {
  status: number;
  message: string;
  timestamp: string;
  errors?: Record<string, string>;
}

export interface PaginationParams {
  page?: number;
  size?: number;
}

export interface SearchParams {
  search?: string;
  completed?: boolean;
}