import is from "@sindresorhus/is";
import number = is.number;
import {expect} from "chai"


class Product {
    //Locators
    private priceProduct (): WebdriverIO.Element{
        return $(`//*[@class="product-prices__big product-prices__big_color_red"]`)
    }

    //Verify
    //Method
    public verifyPriceElement (value:number) {
        const price = +this.priceProduct().getText().replace(/\s/g, '')
        expect(price,`Price value should be less than "${value}"`).to.be.lessThan(value)
    }
}
export const product = new Product()