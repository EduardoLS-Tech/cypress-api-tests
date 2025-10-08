export const authService = {
  login(username, password) {
    return cy.request({
      method: "POST",
      url: "/auth/login",
      headers: { "Content-Type": "application/json" },
      body: { username, password },
      failOnStatusCode: false
    });
  }
};
