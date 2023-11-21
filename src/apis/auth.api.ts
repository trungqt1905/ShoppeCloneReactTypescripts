import { AuthResponse } from 'src/types/auth.type'
import http from 'src/untils/https'

export const registerAccount = (body = { email: '', password: '' }) => http.post<AuthResponse>('/register', body)

export const loginAccount = (body = { email: '', password: '' }) => http.post<AuthResponse>('/login', body)
