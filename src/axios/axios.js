import axios from "axios";
const BASE_URL = `https://api.marlin.ge/api`;


const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZGFpbHlAZ21haWwuY29tIiwiVXNlcklEIjoiMTAwMSIsIkFjY291bnROYW1lIjoi4YOT4YOU4YOY4YOa4YOYIiwiRmlyc3ROYW1lIjoi4YOT4YOQ4YOV4YOY4YOXIiwiTGFzdE5hbWUiOiLhg5nhg53hg5rhg67hg5giLCJDb250YWN0TnVtYmVyIjoiNTc3MTMyNDU2IiwiRW1haWwiOiJkYWlseUBnbWFpbC5jb20iLCJEZXNjcmlwdGlvbiI6InN0cmluZyIsIlBvc2l0aW9uSW5Db21wYW55Ijoic3RyaW5nIiwiSXNSZXRhaWwiOiIxIiwiQWNjb3VudElEIjoiUjAwMDAxIiwiZXhwIjoxNzAyODkwMzM5LCJpc3MiOiJodHRwczovLzEwLjAuMC4yMDI6NTAwMSIsImF1ZCI6Imh0dHBzOi8vbWFybGluLXByb2oubmV0bGlmeS5hcHAifQ.N-M--56TfrYwqUuk0xRYYMtuqwqzJKedYhFCSBjyubs"
  
  

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `bearer ${token}` },

})