/// <reference types="cypress" />

describe('Productos api', () => {
    context('GET /api/v1/products/search', () => {
        it('Deve retornar produto HP Pro Tablet 608', () => {
            cy.request({
                method: 'GET',
                url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=hp pro&quantityPerEachCategory=-1'
            })
                .then((response) => {
                    expect(response.status).to.be.equal(200);
                    expect(response.body).is.not.empty;
                    cy.log(JSON.stringify(response.body));
                })
        });
    });
});