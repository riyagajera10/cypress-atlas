// describe ('Login Test',()=> {
// it('Valid Login', ()=> {
//     cy.visit('https://the-internet.herokuapp.com/login')

//     cy.get('#username').type('tomsmith')

//     cy.get('#password').type('SuperSecretPassword!')

//     cy.get('button').click()

//     cy.contains('You logged into a secure area!')

// })
//     it('Wrong Password', () => {

//         cy.visit('https://the-internet.herokuapp.com/login')

//         cy.get('#username').type('tomsmith')

//         cy.get('#password').type('wrongpassword')

//         cy.get('button').click()

//         cy.contains('Your password is invalid!')

//     })
//     it('Check checkbox', () => {

//         cy.visit('https://the-internet.herokuapp.com/checkboxes')

//         cy.get('input').first().check()

//         cy.get('input').first().should('be.checked')

//     })

//   it('Select Option', () => {

//         cy.visit('https://the-internet.herokuapp.com/dropdown')

//         cy.get('#dropdown').select('Option 1')

//         cy.get('#dropdown').should('have.value', '1')

//     })
//     it('Upload', () => {

//         cy.visit('https://the-internet.herokuapp.com/upload')

//         cy.get('#file-upload')
//           .selectFile('cypress/fixtures/user.json')

//         cy.get('#file-submit').click()

//         cy.contains('File Uploaded!')

//     })




// })
describe('Atlas Registration', () => {
  it('should visit the registration page', () => {
    cy.visit('https://au.atlas.culturalinfusion.com/head-register', {
      failOnStatusCode: false,
      timeout: 60000,
    });
  });
});