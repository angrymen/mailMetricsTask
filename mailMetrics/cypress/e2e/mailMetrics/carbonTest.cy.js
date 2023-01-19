/// <reference types = "cypress" />
/// <reference types = "cypress-xpath" />
/// <reference types = "cypress-mailosaur" />
import HomePage from "..//..//support//page-object//HomePage";
import CarbonCalcPage from "..//..//support//page-object//CarbonCalcPage";
import EmailSender from "..//..//support//helpers//EmailSender";

describe("Carbon footprint calculator", () => {

  it("Carbon footprint calculator - test", () => {

    //1. Go to website mailmetrics.com
    cy.visit(Cypress.env("mailMetricsUrl"));

    //2. Verify that on the main page there is “Carbon footprint calculator”
    HomePage.checkCarboCalcIsVisible("Carbon footprint calculator")

    //3. Go to “Find out more”

    HomePage.checkFindOutMoreBtn("Find out more")
      .click();

    //4. Fill in the calculator with the following data

    CarbonCalcPage.checkCalculatorFooterIsVisible()
    CarbonCalcPage.checkLettersAmountIsVisible()
    CarbonCalcPage.setLetterAmount("1000")

    //Verify that on the clac page there are all of the elements and fill the form

    CarbonCalcPage.checkPagesAmountIsVisible()
    CarbonCalcPage.setPagesAmount("2")
    CarbonCalcPage.checkEmailsAmountIsVisible()
    CarbonCalcPage.setEmailsAmount("35000")
    
    CarbonCalcPage.checkEmailsRangeIsVisible()
    CarbonCalcPage.setEmailsRange(70)
    CarbonCalcPage.checkRangeIsChange(70)

    //Verify emission after Reduction
    
    CarbonCalcPage.checkEmissionAfterReduction()
      .invoke("text")
      .then((emissionAfterReduction) => {
        let doubleEmissionAfterReduction =
          parseFloat(emissionAfterReduction) * 2;
        cy.log("Double value is: " + doubleEmissionAfterReduction);

        //5. Send the double value of the result achieved in the calculator through an email to andrzej.pieta@mailmetrics.com
        
        const serverID = "jmybfqol";
        const sendEmailAdress = "michalmadejski00@gmail.com";
        const subject = "Email from Michal Madejski - automation test";
        const text = `The double value of the result achieved in the calculator is ${doubleEmissionAfterReduction}`

        EmailSender.sendEmail(serverID, sendEmailAdress, subject, text)
        .then((result) => {
          expect(result.text.body).to.equal(
            `The double value of the result achieved in the calculator is ${doubleEmissionAfterReduction}`
          );
        });
      });
  });
});
