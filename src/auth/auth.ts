// super simple "auth" for learning (not real security)
export function isLoggedIn(): boolean {
  return localStorage.getItem("isLoggedIn") === "true";
}

export function login(): void {
  localStorage.setItem("isLoggedIn", "true");
}

export function logout(): void {
  localStorage.setItem("isLoggedIn", "false");
}
