import { usersService } from "../../support/services/UsersService";

describe("GET /users/:id - Consulta de Usuário por ID", () => {
  it("deve retornar todos os dados completos e corretos do usuário especificado (id=1)", () => {
    // Chama o método do service responsável por consultar um usuário
    usersService.getById(1).then((res) => {
      // Valida o status HTTP — aceita 200 (API real do DummyJSON)
      expect([200, 201]).to.include(res.status);

      const user = res.body;

      // Campos esperados conforme contrato da API
      const requiredFields = [
        "id",
        "firstName",
        "lastName",
        "maidenName",
        "age",
        "gender",
        "email",
        "phone",
        "username",
        "password",
        "birthDate",
        "image",
        "bloodGroup",
        "height",
        "weight",
        "eyeColor",
        "hair",
        "ip",
        "address",
        "macAddress",
        "university",
        "bank",
        "company",
        "ein",
        "ssn",
        "userAgent",
        "crypto",
        "role",
      ];

      // Verifica que o usuário contém todas as chaves principais
      expect(user, "campos obrigatórios do usuário").to.include.all.keys(requiredFields);

      // Valida objetos aninhados
      expect(user.hair, "estrutura de hair").to.include.all.keys(["color", "type"]);
      expect(user.address, "estrutura de address").to.have.property("coordinates");
      expect(user.address.coordinates, "estrutura de coordinates").to.include.all.keys(["lat", "lng"]);

      // Valida consistência de dados
      expect(user.id).to.eq(1);
      expect(user.age).to.be.a("number");
      expect(user.email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });
  });
});
