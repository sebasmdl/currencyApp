export interface User {
  username: string;
  password: string;
  token?: string; // Opcional para almacenar el token si se necesita
}