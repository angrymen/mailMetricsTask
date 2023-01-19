/// <reference types = "cypress" />
/// <reference types = "cypress-xpath" />
/// <reference types = "cypress-plugin-snapshots" />
const { deleteDownloadsFolderBeforeEach } = require('cypress-delete-downloads-folder');


describe("visual regresion", () => {

  deleteDownloadsFolderBeforeEach()

  it.only("visual regresion - test herokuApp", () => {
    //6. Then go to http://the-internet.herokuapp.com/dynamic_content?with_content=static, click 
    //on “click here”, wait until content is refreshed and count number of characters in the last 
    //section which gets refreshed

    cy.visit(
      Cypress.env("herokuApp")
    );
    cy.document().then((image) => {
      cy.wrap(image)
        .toMatchSnapshot()
        .as("zd1")
        .then(() => {
          cy.xpath("//p//a")
            .click()
            .then(() => {
              cy.document().then((imageAfterRefresh) => {
                cy.wrap(imageAfterRefresh)
                  .toMatchSnapshot()
                  .as("zd2");
              });
            });
        });
    });
    cy.get("@zd1")
      .should("not.equal", "@zd2")
      .then(() => {
        cy.log("Test pass");
      });
      cy.xpath('//*[@class="large-10 columns"]').eq(2).invoke("text").then((getText) => {
        cy.log("The length of a string: " + getText.length)
      })
      
  });

// second methods
  it('visual regresion - test second method herokuApp', () => {
    cy.xpath('//*[@class="large-2 columns"]').eq(2).then(image =>{
        cy.wrap(image).toMatchSnapshot().as('zd1')
        .then(()=>{
            cy.xpath('//p//a').click().then(()=>{
                cy.xpath('//*[@class="large-2 columns"]').eq(2).then((imageAfterRefresh)=>{
                    cy.wrap(imageAfterRefresh).toMatchSnapshot().as('zd2')
                })
            })

        })
    })
     cy.get('@zd1').should('not.equal','@zd2').then (() => {
        cy.log("Test pass")
     })
     cy.xpath('//*[@class="large-10 columns"]').eq(2).invoke("text").then((getText) => {
        cy.log("The length of a string: " + getText.length)
      })
  });
});