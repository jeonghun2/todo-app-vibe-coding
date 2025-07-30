package com.example.todoapp.dto;

import jakarta.validation.constraints.Size;

public class TodoUpdateRequest {
    
    @Size(min = 1, max = 100, message = "제목은 1자 이상 100자 이하여야 합니다")
    private String title;
    
    @Size(max = 500, message = "설명은 500자 이하여야 합니다")
    private String description;
    
    private Boolean completed;
    
    public TodoUpdateRequest() {
    }
    
    public TodoUpdateRequest(String title, String description, Boolean completed) {
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public Boolean getCompleted() {
        return completed;
    }
    
    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }
}