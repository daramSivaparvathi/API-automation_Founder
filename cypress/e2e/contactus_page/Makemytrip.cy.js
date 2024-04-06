/// <reference types="cypress" />
//import {faker} from "@sinonjs/fake-timers"
//import faker from 'faker';


describe('makemytrip', function () {


    it('trip', function () {

        cy.visit('https://www.flipkart.com/')
        

        // cy.get("span[class='_1XjE3T']").each(($ele)=>{
        //      cy.log($ele.text())
        //     cy.contains('Travel')

        //     })

        const scheduledTime = '2024-04-10'; // Example: April 10, 2024, 8:00 AM UTC

    // Trigger the external scheduler using cy.task
    cy.task('message', { scheduledTime });

    // Optionally, add assertions to verify that the tests were scheduled
    cy.log('Tests scheduled for execution at: ' + scheduledTime);

      //cy.get('._1XjE3T', {timeout:2000}).siblings()

   


    })

    it.skip('should register a new user', () => {
      const name = faker.name.findName();
      const email = faker.internet.email();
      cy.visit('/register');
      cy.get('#name').type(name);
      cy.get('#email').type(email);
      cy.get('#register-button').click();
      // Assertions or further actions
    })




})