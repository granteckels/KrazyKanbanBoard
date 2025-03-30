import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    return jwtDecode<JwtPayload>(this.getToken());
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    // Must check with server
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem("idToken") ?? "";
  }

  login(idToken: string): void {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    localStorage.setItem("idToken", idToken);
    window.open("/");
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem("idToken");
    window.open("/login");
  }
}

export default new AuthService();
