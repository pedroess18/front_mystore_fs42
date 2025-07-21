describe("Teste inicial", () => {
  it("Deve pesquisar por Cypress no Google", () => {
    cy.visit("https://www.google.com");
    cy.get('textarea[name="q"]').type("cypress{enter}");
    cy.contains("https://www.cypress.io").should("exist");
  });
});
