/// <reference types="cypress" />




describe(' API automation scenarios_openbrewery', function () {


    it('Retrieve ids from the response and fetch the details for breweries', function () {

        cy.request({

            method: "GET",
            url: "https://api.openbrewerydb.org/v1/breweries"
        })
            .its("status").should('equal', 200)


    })


    // Single brewery: /breweries/{id}

    it('Validate the Single brewery', function () {

        const breweryId = '5128df48-79fc-4f0f-8b52-d06be54d0cec';

        cy.request(`GET`, `https://api.openbrewerydb.org/v1/breweries/${breweryId}`)
            .then((response) => {
                // expect(response.body).has.property('address_1','1716 Topeka St')
                expect(response.status).to.eq(200);
                expect(response.body).to.deep.equal({
                    id: '5128df48-79fc-4f0f-8b52-d06be54d0cec',
                    name: '(405) Brewing Co',
                    brewery_type: 'micro',
                    address_1: '1716 Topeka St',
                    address_2: null,
                    address_3: null,
                    city: 'Norman',
                    state_province: 'Oklahoma',
                    postal_code: '73069-8224',
                    country: 'United States',
                    longitude: '-97.46818222',
                    latitude: '35.25738891',
                    phone: '4058160490',
                    website_url: 'http://www.405brewing.com',
                    state: 'Oklahoma',
                    street: '1716 Topeka St',


                });
            });

    })



    it('Multiple breweries at once by using parameter: “by_ids”', function () {

        //parameter: “by_ids”'

        const breweryIds = ['5128df48-79fc-4f0f-8b52-d06be54d0cec', '9c5a66c8-cc13-416f-a5d9-0a769c87d318', '34e8c68b-6146-453f-a4b9-1f6cd99a5ada', 'ef970757-fe42-416f-931d-722451f1f59c'];
        const idsQueryParam = breweryIds.join(',');

       
        cy.request(`GET`, `https://api.openbrewerydb.org/v1/breweries?by_ids=${idsQueryParam}`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.length).to.eq(breweryIds.length);

                response.body.forEach((brewery) => {
                    expect(breweryIds).to.include(brewery.id);

                });
            });

    })


    it('Use parameter by_type', function(){

        const breweryType = 'micro';

        // Make a GET request to fetch breweries by type
        cy.request(`GET`, `https://api.openbrewerydb.org/v1/breweries?by_type=${breweryType}`)
          .then((response) => {
            
            expect(response.status).to.eq(200);
            
            // Assert that the response body is not empty
            expect(response.body.length).to.be.greaterThan(0);
            
            // each brewery in the response has the specified type
            response.body.forEach((brewery) => {
              expect(brewery.brewery_type).to.eq(breweryType);
            });
          });


    })

    it('Sort and validate the results', function(){

        // https://api.openbrewerydb.org/v1/breweries?sort=city:asc 

       

        // Make a GET request to fetch breweries by type
        cy.request({

            method :`GET`,
            url :  `https://api.openbrewerydb.org/v1/breweries?sort=city:asc`,
    
                   })

          .then((response) => {
            
            expect(response.status).to.eq(200);
            
            // Assert that the response body is not empty
            expect(response.body.length).to.be.greaterThan(0);
            
          })


    })

   














})





