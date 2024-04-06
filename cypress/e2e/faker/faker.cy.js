/// <reference types="cypress" />


///// <reference types="Cypress-iframe" />
//import 'cypress-file-upload'
//import 'cypress-iframe'
//import 'cypress-xpath'
import '@faker-js/faker'
import { faker } from '@faker-js/faker'



describe('Login Test with Faker', () => {

  it('Should login with random username and password', () => {

    const randomUsername = faker.internet.userName();
    const randomPassword = faker.internet.password();
    //const randomPastDate = faker.date.past();
    //const randomJobTitle = faker.internet.jobtitle;
    //const randomString = faker.internet.string();
    //const stringToType = randomString.toString();
    cy.visit('https://yourweb.app/#/login')
    cy.get('input[type="email"]').type('sivadaram008@gmail.com')
    cy.get('input[type="password"]').type('Lingareddy@9867')
    cy.get('button[id="pf-lesson-login-2"]').click()
    cy.get('a[href="#/people/add"]').click()
    cy.get('input[id="pf-lesson-add-person-0"]').type(randomUsername)
    cy.get('input[id="pf-lesson-add-person-1"]').type(randomPassword)
    cy.get('input[id="pf-lesson-add-person-2"]').type(faker.internet.email())
    cy.get('input[id="pf-lesson-add-person-3"]').type("2023-12-05")
    cy.get('select[id=pf-lesson-add-person-4]').select('Management')
   // cy.log('Random Past Date:', randomPastDate);
    
   

  })


 

 




})