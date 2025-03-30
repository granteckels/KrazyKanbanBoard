import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    return jwtDecode<JwtPayload>(this.getToken());
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    return this.getToken();
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    const decodedToken = jwtDecode<JwtPayload>(token);

    const currentTime = Date.now() / 1000;
    if(decodedToken.exp && decodedToken.exp < currentTime) {
      return true;
    }
    return false;
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem("idToken") ?? "";
  }

  login(idToken: string): void {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    if (idToken) {
      localStorage.setItem("idToken", idToken);
      window.location.href = "/";
    }
  }

  // logout(navigate: Function) {
  logout(): void {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem("idToken");
  }
}

export default new AuthService();
