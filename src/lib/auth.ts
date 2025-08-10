export const getToken = () => localStorage.getItem("iv_token");
export const setToken = (token: string) => localStorage.setItem("iv_token", token);
export const clearToken = () => localStorage.removeItem("iv_token");
