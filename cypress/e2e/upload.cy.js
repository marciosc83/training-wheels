

it('Deve fazer o upload da minha foto', function(){
    cy.visit('/upload')

    const imageFile = 'cypress/fixtures/marcio.jpg'
    
    cy.get('input[name=file]').selectFile(imageFile, {force:true})

    cy.get('input[value=Upload]').click()

    cy.get('img[src="/uploads/marcio.jpg"]',{timeout: 9000}).should('be.visible')
})