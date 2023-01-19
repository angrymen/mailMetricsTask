class CarbonCalcPage {

    xpathOnCarbonCalc = {
        core_footer__calculator: '//*[@class="core_footer__calculator"]',
        lettersAmount: '//input[@id="lettersAmount"]',
        pagesAmount: '//input[@id="pagesAmount"]',
        emailsAmount: '//input[@id="emailsAmount"]',
        emailsRange: '//input[@id="emailsRange"]',
        rangeV: '//div[@id="rangeV"]/span',
        emissionAfterReduction: '//span[@id="emissionAfterReduction"]'
    }

    get coreFooterCalculator(){
        return cy.xpath(this.xpathOnCarbonCalc.core_footer__calculator)
    }
    checkCalculatorFooterIsVisible(){
        this.coreFooterCalculator.should("be.visible");
    }
    get lettersAmount(){
        return cy.xpath(this.xpathOnCarbonCalc.lettersAmount)
    }
    checkLettersAmountIsVisible(){
        this.lettersAmount.should("be.visible")
    }
    setLetterAmount(lettersAmountValue){
        this.lettersAmount.click().type(lettersAmountValue)
    }
    get pagesAmount(){
        return cy.xpath(this.xpathOnCarbonCalc.pagesAmount)
    }
    checkPagesAmountIsVisible(){
        this.pagesAmount.should("be.visible")
    }
    setPagesAmount(pagesAmountValue){
        this.pagesAmount.click().type(pagesAmountValue)
    }
    get emailsAmount(){
        return cy.xpath(this.xpathOnCarbonCalc.emailsAmount)
    }
    checkEmailsAmountIsVisible(){
        this.emailsAmount.should("be.visible")
    }
    setEmailsAmount(emailsAmountValue){
        this.emailsAmount.click().type(emailsAmountValue)
    }

    get emailsRange(){
        return cy.xpath(this.xpathOnCarbonCalc.emailsRange)
    }
    checkEmailsRangeIsVisible(){
        this.emailsRange.should("be.visible")
    }
    setEmailsRange(emailsRangetValue){
        this.emailsRange.invoke("val", emailsRangetValue)
        .trigger("input")
        .click();
    }
    
    get rangeV(){
        return cy.xpath(this.xpathOnCarbonCalc.rangeV)
    }
    checkRangeIsChange(emailsRangetValue){
        this.rangeV.should("have.text", emailsRangetValue);
    }
    get emissionAfterReduction(){
        return cy.xpath(this.xpathOnCarbonCalc.emissionAfterReduction)
    }
    checkEmissionAfterReduction(){
        return this.emissionAfterReduction.should("be.visible")
    }


}

export default new CarbonCalcPage();