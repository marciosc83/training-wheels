

it('Selecionar Bucky por ID', function () {
    cy.visit('/select')

    cy.get('#avengerList')
        .select('Bucky')
        .should('have.value', '2')
})

it('selecionar tony stark sem ser pelo ID', function () {
    cy.visit('/select')

    cy.contains('option', 'Selecione um personagem')
        .parent()
        .select('Tony Stark')
        .should('have.value', '3')
})