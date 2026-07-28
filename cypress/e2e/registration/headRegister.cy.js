describe('Head Registration Page', () => {
  beforeEach(() => {
    cy.visit('https://au.atlas.culturalinfusion.com/head-register');
  });

  it('loads the registration page', () => {
    cy.url().should('include', '/head-register');

    cy.contains('Registration').should('be.visible');
    cy.contains('USER DETAILS').should('be.visible');
  });

  it('shows all registration fields', () => {
    cy.contains('First name').should('be.visible');
    cy.contains('Last name').should('be.visible');
    cy.contains('Company email').should('be.visible');
    cy.contains('Password').should('be.visible');

    cy.get('input').should('have.length.at.least', 4);
    cy.contains('button', 'Continue').should('be.visible');
  });

  it('allows the user to enter registration details', () => {
    cy.get('input').eq(0).type('Riya');
    cy.get('input').eq(1).type('Gajera');
    cy.get('input').eq(2).type('riya@example.com');
    cy.get('input').eq(3).type('Password1');

    cy.get('input').eq(0).should('have.value', 'Riya');
    cy.get('input').eq(1).should('have.value', 'Gajera');
    cy.get('input').eq(2).should('have.value', 'riya@example.com');
    cy.get('input').eq(3).should('have.value', 'Password1');
  });

  it('shows the password requirements', () => {
    cy.contains(
      'Eight or more characters, with at least one digit, one lowercase and one uppercase letter'
    ).should('be.visible');
  });

  it('shows the terms and conditions link', () => {
    cy.contains('DA Terms and Conditions')
      .should('be.visible')
      .and('have.attr', 'href');
  });

  it('does not continue when required fields are empty', () => {
    cy.contains('button', 'Continue').click();

    cy.url().should('include', '/head-register');
  });

  it('checks invalid email validation', () => {
    cy.get('input').eq(0).type('Riya');
    cy.get('input').eq(1).type('Gajera');
    cy.get('input').eq(2).type('invalid-email');
    cy.get('input').eq(3).type('Password1');

    cy.contains('button', 'Continue').click();

    cy.get('input').eq(2).then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });

  it('checks weak password validation', () => {
    cy.get('input').eq(0).type('Riya');
    cy.get('input').eq(1).type('Gajera');
    cy.get('input').eq(2).type('riya@example.com');
    cy.get('input').eq(3).type('password');

    cy.contains('button', 'Continue').click();

    cy.url().should('include', '/head-register');
  });

  it('submits the form with valid details', () => {
    const uniqueEmail = `riya${Date.now()}@example.com`;

    cy.get('input').eq(0).type('Riya');
    cy.get('input').eq(1).type('Gajera');
    cy.get('input').eq(2).type(uniqueEmail);
    cy.get('input').eq(3).type('Password1');

    cy.contains('button', 'Continue').click();

    cy.url().should('not.include', '/head-register');
  });
});