import { usersService } from "../../support/services/UsersService";

describe("GET /users - Verificação de Usuários", () => {
  it("valida campos obrigatórios e paginação", () => {
    usersService.getAll().then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("users");
      expect(res.body.users).to.be.an("array");
      expect(res.body.users).to.have.length.of.at.most(30);

      const required = ["id", "firstName", "lastName", "age", "gender", "email", "username", "birthDate", "role"];

      // Verifica apenas alguns usuários como amostra
      res.body.users.slice(0, 5).forEach((u) => {
        expect(u).to.include.all.keys(required);
      });
    });
  });
});
