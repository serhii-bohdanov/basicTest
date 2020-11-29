import {categories} from "./categories";

class Home {

//Locators
    private languageLink(text: string): WebdriverIO.Element {
        return $(`//*[@class="header-topline__language-item"]/*[text()='${text}']`)
    }
    private menuToggler(): WebdriverIO.Element {
        return $(`//*[@class="menu-toggler__text"]`)
    }
    private categoty(text:string): WebdriverIO.Element{
        return $(`//*[@class="menu-categories__item"]//*[contains(text(),"${text}")]`)
    }
    private subCategoty(text:string): WebdriverIO.Element{
        return $(`//*[@class="menu__link" and contains(text(),"${text}")]`)
    }









//Methods
    public clickOnlanguageLinkIfItPresent (language: string) {
        if (this.languageLink(language).isDisplayed()) {
            this.languageLink(language).click()
        }
        return this
    }
    public clickOnMenuToggler (){
        this.menuToggler().click()
        return this
    }
    public mouseOverCategory(text:string){
        this.categoty(text).moveTo()
        return this
    }
    public clickOnSubCategory(text:string){
        this.subCategoty(text).click()
        return categories
    }













}
export const home = new Home()