/// <reference types="Cypress" />

describe('My First Test Suite', () => {
  it('My First Test Case', () => {
    // Navigating to the URL
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Locate an element and type texts
    cy.get('.search-keyword').type('ca');
    // Wait since there's no loading that cypress can catch
    cy.wait(2000);
    cy.get('.product').should('have.length', 5);

    cy.get('.product:visible').should('have.length', 4);

    // Aliasing
    cy.get('.products').as('productLocator');

    cy.get('@productLocator').find('.product').should('have.length', 4);
    cy.get('@productLocator')
      .find('.product')
      .eq(2)
      .contains('ADD TO CART')
      .click();

    cy.get('@productLocator')
      .find('.product')
      .each((el) => {
        const textVeg = el.find('.product-name').text();
        if (textVeg.includes('Cashews')) {
          cy.wrap(el).find('button').click();
        }
      });

    cy.get('.brand').should('have.text', 'GREENKART');

    // Handle a promise
    // const logo = cy.get('.brand') this doesn't work
    cy.get('.brand').then((logoEl) => {
      cy.log('logoEl', logoEl.text());
    });
  });
});
