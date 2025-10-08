/// <reference types="cypress" />
import { productsService } from "../../support/services/ProductsService";

describe("POST /auth/products/add - Criação de Produto", () => {
  before(() => {
    cy.login(); // Agora o Cypress vai encontrar este comando
  });

  it("cria produto usando token de autorização e valida retorno", () => {
    cy.fixture("productPayload").then((payload) => {
      const token = Cypress.env("token");
      expect(token, "token deve existir").to.be.a("string");

      productsService.create(payload, token).then((res) => {
        expect([200, 201]).to.include(res.status);

        const body = res.body;
        ["title", "price", "stock", "rating", "thumbnail", "description", "brand", "category"].forEach((k) => {
          expect(body, `campo ${k}`).to.have.property(k);
        });

        expect(body).to.have.property("id");
      });
    });
  });
});
