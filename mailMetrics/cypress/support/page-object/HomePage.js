class HomePage {

    xpathOnHomePage = {
        calculator_wrapper: '//*[@class="core_footer__calculator_wrapper"]',
        findOutMoreBtn: '//*[@class="core_footer__calculator_link core_footer__calculator_link--desktop"]//a[@data-lightbox-form=".core_footer__calculator"]'
    }

    get carbonCalc() {
        return cy.xpath(this.xpathOnHomePage.calculator_wrapper)
    }

    checkCarboCalcIsVisible(carbonWrapperTitle){
    this.carbonCalc
      .should("be.visible")
      .scrollIntoView()
      .then((calcText) => {
        expect(calcText).to.contain(carbonWrapperTitle);
      })
    }

    get findOutMoreBtn(){
        return cy.xpath(this.xpathOnHomePage.findOutMoreBtn)
    }

    checkFindOutMoreBtn(bntName){
        return this.findOutMoreBtn
        .should("contain", bntName )
    }


}

export default new HomePage();