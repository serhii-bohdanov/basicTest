import {categories} from "./categories";

class Home {

    categoryByText = {
        'Продукты и алкоголь': '/food/'
    }

    //Locators // state
    private categoryHeader(text: string): WebdriverIO.Element {
        return $(`//*[@class="h2 pc-block__head" and @href="${text}"]`)
    }
    private languageLinkByText(text: string): WebdriverIO.Element {
        return $(`//*[@class ="dropdown-inline"]/*[text()= "${text}"]`)
    }

    //Page Actions // Methods
    public clickOnLanguageLink(language: string){
        this.languageLinkByText(language).click()
        return this;
    }
    public clickOnCategoryHeader (header: string) {
        this.categoryHeader(this.categoryByText[header]).click()
        return categories
    }
}
export const home = new Home();