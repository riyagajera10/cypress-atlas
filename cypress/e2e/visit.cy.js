describe('Atlas Registration', () => {
  it('should load the actual registration page', () => {
    cy.visit('https://au.atlas.culturalinfusion.com/head-register', {
      failOnStatusCode: false,
      timeout: 60000,
    });

    cy.get('body').then(($body) => {
      const pageText = $body.text();

      if (pageText.includes('Performing security verification')) {
        throw new Error(
          'Cloudflare detected the Cypress automated browser and blocked access'
        );
      }
    });

    // Verify the registration form actually loaded
    cy.get('input', { timeout: 30000 }).should('exist');
  });
});