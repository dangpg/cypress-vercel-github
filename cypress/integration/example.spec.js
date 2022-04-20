describe("Example", () => {
  it("should have correct title", () => {
    cy.visit("/");

    cy.get("h1").contains("Welcome to Next.js!");
  });
});
