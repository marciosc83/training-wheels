

describe('Suite de testes', function(){

    before(function(){
        cy.log('Executando o BEFORE antes de todos os testes!')
    })

    beforeEach(function(){
        cy.log('Executando o BEFOREEACH antes de cada teste!')
    })

    it('teste 1', function () {
        cy.log('testando o teste 1')
    })
    
    it('teste 2', function () {
        cy.log('testando o teste 2')
    })
    
    it('teste 3', function () {
        cy.log('testando o teste 3')
    })    

    afterEach(function(){
        cy.log('Executando o AFTEREACH depois de cada teste!')
    })

    after(function(){
        cy.log('Executando o AFTER depois de todos os testes!')
    })
})

