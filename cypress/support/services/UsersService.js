export const usersService = {
  getAll(params = '') {
    return cy.request({ method: 'GET', url: `/users${params}`, failOnStatusCode: false });
  },
  getById(id) {
    return cy.request({ method: 'GET', url: `/users/${id}`, failOnStatusCode: false });
  }
};
