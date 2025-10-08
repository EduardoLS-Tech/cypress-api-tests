export const productsService = {
  create(payload, token) {
    return cy.request({
      method: 'POST',
      url: '/auth/products/add',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: payload,
      failOnStatusCode: false
    });
  }
};
