/// <reference types="cypress" />




describe('Contact us page on the Founder and Lightning website', function () {


    it('Verify the ContactUs page', function () {

        cy.visit('https://www.founderandlightning.com/contact')
        cy.get('img[alt="Founder + Lightning Logo"]').should('exist')
        cy.get('button[aria-label="Accept"]').click()
        cy.get('div[class*="text-white text"]').should('exist')
        cy.get('input[name="firstname"]').should('be.visible').type('Siva')
        cy.get('input[name="lastname"]').should('exist').type('Parvathi')
        cy.get('input[name="email"]').type('founder@gmail.com')

        cy.get('input[name="mobilephone"]').type('12345')
        cy.contains('The number you entered is not in range.')
        cy.get('input[name="mobilephone"]').clear().type('1234567891')
        cy.get('select[name="how_did_you_hear_about_us_"]').should('exist')

        // below one is select the particular drop down option
        //cy.get('select').select('Referral');

        //Below code is used to select random dropdown option

        cy.get('select[name="how_did_you_hear_about_us_"]').then(($select) => {
            const optionsCount = $select.find('option').length;
            // Generate a random index within the range of optionsCount
            const randomIndex = Math.floor(Math.random() * optionsCount);
            // Select the option at the random index
            cy.wrap($select).select($select.find('option').eq(randomIndex).val());
        });

        cy.contains('Message')
        cy.get('textarea[name="message"]').type('Congratulations on your new business venture! May your business grow and bring you prosperity. ..')
        cy.get('input[type="submit"]').click()


    })












})