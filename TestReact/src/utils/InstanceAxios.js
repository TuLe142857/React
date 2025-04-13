import axios from 'axios';
import React, { useState, useEffect } from 'react';

// Tạo axios instance với phần đầu URL cố định
const apiInstance = axios.create({
  baseURL: 'http://localhost:8080/api', // Thay thế URL của bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm token vào header mỗi khi gửi yêu cầu
apiInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('jwtToken'); // Lấy token từ sessionStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Thêm token vào header Authorization
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Hàm để lưu token vào sessionStorage
const setToken = (token) => {
    sessionStorage.setItem('jwtToken', token); // Lưu token vào sessionStorage
  };
  
  // Hàm để xóa token khỏi sessionStorage
  const removeToken = () => {
    sessionStorage.removeItem('jwtToken'); // Xóa token khỏi sessionStorage
  };
  

export { apiInstance, setToken, removeToken };
