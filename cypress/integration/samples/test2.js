/// <reference types="Cypress" />

describe('My First Test Suite', () => {
  it('Validate the shopping flow - 1. Add a product to the cart 2. proceed to checkout', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    cy.get('.search-keyword').type('ca');
    cy.wait(2000);

    cy.get('.products').as('productLocator');

    cy.get('@productLocator')
      .find('.product')
      .each((el) => {
        const textVeg = el.find('.product-name').text();
        if (textVeg.includes('Cashews')) {
          cy.wrap(el).find('button').click();
        }
      });

    cy.get('.cart-icon').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();
  });
});
