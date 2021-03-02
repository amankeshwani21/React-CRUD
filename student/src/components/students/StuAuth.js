const StuAuth = {
    isAuthenticated: false,
    authenticate() {
      this.isAuthenticated = true;
    },
    signout() {
      this.isAuthenticated = false;
    },
    getAuth() {
      return this.isAuthenticated;
    },
  };
  export default StuAuth;
  