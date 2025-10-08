import CryptoJS from "crypto-js";
import { authService } from "./services/AuthService";

// Gera hash MD5
Cypress.Commands.add("generateMD5", (texto) => {
  return CryptoJS.MD5(texto).toString();
});

// Faz login e salva token
Cypress.Commands.add("login", (username, password) => {
  if (username && password) {
    // Quando o login é passado diretamente
    return authService.login(username, password).then((response) => {
      expect([200, 201]).to.include(response.status);
      const token = response.body.token || response.body.accessToken;
      expect(token, "token presente").to.exist;

      Cypress.env("token", token);
      Cypress.env("userId", response.body.id);
      return response;
    });
  } else {
    // Quando usa fixture
    cy.fixture("userCredentials").then((user) => {
      return authService.login(user.username, user.password).then((response) => {
        expect([200, 201]).to.include(response.status);
        const token = response.body.token || response.body.accessToken;
        expect(token, "token presente").to.exist;

        Cypress.env("token", token);
        Cypress.env("userId", response.body.id);
        return response;
      });
    });
  }
});
