import { authService } from "../../support/services/AuthService";

describe("POST /auth/login - Autenticação de Login", () => {
  it("valida login, estrutura e token JWT", () => {
    cy.fixture('userCredentials').then((user) => {
      authService.login(user.username, user.password).then((res) => {
        expect([200,201]).to.include(res.status);

        // basic fields expected
        ['id','username','email','firstName','lastName','gender','image'].forEach(k => {
          expect(res.body, `campo ${k} presente`).to.have.property(k);
        });

        // accept either token or accessToken
        const token = res.body.token || res.body.accessToken;
        expect(token, 'token presente').to.exist;

        // quick jwt format check (three base64url parts)
        expect(token).to.match(/^[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+$/);

        // save token for next tests
        Cypress.env('token', token);
        Cypress.env('userId', res.body.id);
      });
    });
  });
});
