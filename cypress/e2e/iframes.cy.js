
const niceIFrame = function () {
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}

const badIFrame = function () {
    return cy
        .get('iframe[src*=instagram]')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}

it('Deve validar o total de seguidores', function () {
    cy.visit('/nice_iframe')
    niceIFrame().find('.FollowerCountText').should('have.text', ' 6,906 followers').should('be.visible')

    cy.visit('/bad_iframe')
    badIFrame().contains('.FollowerCountText').should('have.text', ' 6,906 followers').should('be.visible')
})