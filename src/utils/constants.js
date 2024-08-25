// API endpoints
export const API_BASE_URL = 'https://api.example.com';
export const PROPERTIES_ENDPOINT = `${API_BASE_URL}/properties`;
export const AGENTS_ENDPOINT = `${API_BASE_URL}/agents`;
export const AUTH_LOGIN_ENDPOINT = `${API_BASE_URL}/auth/login`;
export const AUTH_REGISTER_ENDPOINT = `${API_BASE_URL}/auth/register`;

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please try again later.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'Resource not found.',
  GENERAL_ERROR: 'Something went wrong. Please try again.',
};

// Other constants
export const DEFAULT_AVATAR = '/images/default-avatar.png';
export const MAX_PROPERTY_IMAGES = 10;
export const DEFAULT_PAGE_SIZE = 20;
