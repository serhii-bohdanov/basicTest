import is from "@sindresorhus/is";

import {product} from "./product";

class Categories {

    //Locators
    private checkBoxItem(text: string): WebdriverIO.Element {
        return $(`//*[@id="${text}"]/..`)
    }

    private maxValuePriceField(): WebdriverIO.Element {
        return $(`//*[@class=\"slider-filter__input ng-untouched ng-pristine ng-valid\"][2]`)
    }

    private okButton(): WebdriverIO.Element {
        return $(`//*[@class="button button_color_gray button_size_small slider-filter__button"]`)
    }

    private filterDropDownList(): WebdriverIO.Element {
        return $(`//*[@class="select-css ng-untouched ng-pristine ng-valid"]`)
    }

    private valueDropDownList(): WebdriverIO.Element {
        return $(`//*[@class="select-css ng-untouched ng-pristine ng-valid"]//*[2]`)
    }

    private minItem(): WebdriverIO.Element {
        return $(`//*[@class="goods-tile__picture"]`)
    }


    //Methods
    public clickOnChekBoxItem(name: string) {
        this.checkBoxItem(name).click()
        return this
    }

    public clearMaxValue() {
        this.maxValuePriceField().clearValue()
        return this
    }

    public clickOnOkButton() {
        this.okButton().click()
        return this
    }

    public clickOnDropDownList() {
        this.filterDropDownList().click()
        return this
    }

    public clickOnValueInDropDownList() {
        this.valueDropDownList().click()
        browser.pause(5000)
        return this
    }

    public clickOnMinItem() {
        this.minItem().click()
        return product
    }


}

export const categories = new Categories()