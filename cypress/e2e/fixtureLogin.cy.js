describe('Fixture Login', () => {

    it('Login using fixture', () => {

        cy.fixture('user').then((user) => {

            cy.visit('https://the-internet.herokuapp.com/login')

            cy.get('#username').type(user.username)

            cy.get('#password').type(user.password)

            cy.get('button').click()

            cy.contains('You logged into a secure area!')

        })

    })

})