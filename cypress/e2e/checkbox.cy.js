

it('Deve marcar os top 5 filmes da marvel', function () {
    cy.visit('/checkboxes')

    cy.get('input[name=avengers]')
        .click()
        .should('be.checked')

    cy.get('input[name=cap2]')
        .click()
        .should('be.checked')

    cy.get('input[name=guardians]')
        .click()
        .should('be.checked')

    cy.get('input[name=blackpanther]')
        .click()
        .should('be.checked')

    cy.get('input[name=thor3]')
        .click()
        .should('be.checked')


    cy.reload()


    const movies = [
        'avengers','cap2','guardians','blackpanther','thor3'
    ]    

    movies.forEach(function(movie){
        cy.get(`input[name=${movie}]`)
            .click()
            .should('be.checked')
    })
})