describe('Visit page', function () {
    it('Visits the Kitchen Sink', function () {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        function makeName(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        for(let i=0;i<10000000;i++) {
            cy.visit('https://www.savebarneysny.com/')
    
            cy
                .get('.open-form-button-container')
                .click()
    
            cy.get('.field-element').eq(0).type(makeName(8))
            cy.get('.field-element').eq(1).type(makeName(10))
            cy.get('.field-element').eq(2).type(`${makeName(8)}@${makeName(7)}.com`)
    
            cy.get('.button').click();

            cy.wait(2 * 1000 * 60)

        }
    })
})