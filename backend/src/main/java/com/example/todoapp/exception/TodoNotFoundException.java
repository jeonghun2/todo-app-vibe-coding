package com.example.todoapp.exception;

public class TodoNotFoundException extends RuntimeException {
    
    public TodoNotFoundException(Long id) {
        super("Todo를 찾을 수 없습니다. ID: " + id);
    }
    
    public TodoNotFoundException(String message) {
        super(message);
    }
}