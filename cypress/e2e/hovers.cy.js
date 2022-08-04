

it('Deve exibirt o nome da tecnologia ao passar o mouse', function(){

    cy.visit('/hovers')

    const techs = [
        {locator: 'img[src*=python]', tag: '.tag-python', brand: 'Python'},
        {locator: 'img[src*=golang]', tag: '.tag-golang', brand: 'Golang'},
        {locator: 'img[src*=nodejs]', tag: '.tag-nodejs', brand: 'Node.js'},
        {locator: 'img[src*=netcore]', tag: '.tag-netcore', brand: '.NETCore'}
    ]

    techs.forEach(function(tech){
        cy.get(tech.locator).realHover('mouse')
        cy.get(tech.tag).should('be.visible').should('have.text',tech.brand)
    })
    

})