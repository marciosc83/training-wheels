
describe('Suite Drag and Drop', function () {
    before(function () {
        cy.visit('/drag_and_drop')
    })

    it('Deve arrastar a caixinha para dentro do node', function () {
        //cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop')

        const dataTransfer = new DataTransfer()

        cy.get('img[alt=Cypress]').trigger('dragstart', { dataTransfer })

        cy.get('.nodejs figure[draggable=true]').trigger('drop', { dataTransfer })

    })

    it('Deve arrastar o robot para dentro do python', function () {
        //cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop')

        const dataTransfer = new DataTransfer()

        cy.get('img[alt="Robot Framework"]').trigger('dragstart', { dataTransfer })

        cy.get('.python figure[draggable=true]').trigger('drop', { dataTransfer })

    })
})

