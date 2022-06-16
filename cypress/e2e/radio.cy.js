

it('Deve marcar thor raragnarok', function(){
    cy.visit('/radios')

    cy.get('input[value=thor3]')
        .click()
})