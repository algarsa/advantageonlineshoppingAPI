/// <reference types="cypress" />

describe('Products api', () => {
    context('GET /catalog/api/v1/products/search?name=hp pro', () => {
        it('Deve retornar produto HP Pro Tablet 608', () => {
            cy.request({
                method: 'GET',
                url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=hp pro'
            })
                .then((response) => {
                    cy.log(JSON.stringify(response.body));
                    expect(response.status).to.be.equal(200);
                    expect(response.body[0].products[0]).is.not.empty;
                    expect(response.body[0].products[0]).to.have.all.keys(
                        'productId', 'categoryId', 'productName', 'price', 'imageUrl'
                    );
                    expect(response.body[0].products[0].productId).to.eq(18);
                    expect(response.body[0].products[0].categoryId).to.eq(3);
                    expect(response.body[0].products[0].productName).to.eq("HP Pro Tablet 608 G1");
                    expect(response.body[0].products[0].price).to.eq(479);
                    expect(response.body[0].products[0].imageUrl).to.eq('3300');
                })
        });
    });
});