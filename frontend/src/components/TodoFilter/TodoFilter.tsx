import React, { useState } from 'react';
import { TodoFilter as FilterType } from '../../types';
import './TodoFilter.css';

interface TodoFilterProps {
  currentFilter: FilterType;
  searchQuery: string;
  onFilterChange: (filter: FilterType) => void;
  onSearchChange: (query: string) => void;
  totalCount: number;
  activeCount: number;
  completedCount: number;
}

const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  searchQuery,
  onFilterChange,
  onSearchChange,
  totalCount,
  activeCount,
  completedCount
}) => {
  const [searchInput, setSearchInput] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(searchInput.trim());
  };

  const handleSearchClear = () => {
    setSearchInput('');
    onSearchChange('');
  };

  return (
    <div className="todo-filter">
      <div className="filter-section">
        <h3>필터</h3>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
            onClick={() => onFilterChange('all')}
          >
            전체 ({totalCount})
          </button>
          <button
            className={`filter-btn ${currentFilter === 'active' ? 'active' : ''}`}
            onClick={() => onFilterChange('active')}
          >
            진행 중 ({activeCount})
          </button>
          <button
            className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
            onClick={() => onFilterChange('completed')}
          >
            완료됨 ({completedCount})
          </button>
        </div>
      </div>

      <div className="search-section">
        <h3>검색</h3>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <div className="search-input-group">
            <input
              type="text"
              className="search-input"
              placeholder="할 일 제목으로 검색..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" className="search-btn">
              검색
            </button>
            {searchQuery && (
              <button 
                type="button" 
                className="clear-btn"
                onClick={handleSearchClear}
              >
                초기화
              </button>
            )}
          </div>
        </form>
        {searchQuery && (
          <p className="search-result">
            '{searchQuery}' 검색 결과
          </p>
        )}
      </div>
    </div>
  );
};

export default TodoFilter;