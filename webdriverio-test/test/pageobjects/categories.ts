import {productPage} from "./products_page";

class Categories {

    //Locators
    private categoryItemLink(item: string): WebdriverIO.Element {
        return $(`//*[@title = "${item}"]`)
    }

    //Methods
    public clickOnCategoryItem(categoryItem: string){
        this.categoryItemLink(categoryItem).click()
        return productPage
    }
}
export const categories = new Categories()