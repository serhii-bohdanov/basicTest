import {expect} from "chai"

class Products_page {

    //Locators
    private filterItemByText (item: string):WebdriverIO.Element{
        return $(`//*[@class="filter-block-body"]//*[text()="${item}"]`)
    }

    private filterDropDownList ():WebdriverIO.Element{
        return  $(`//*[@class="nav-panel short-menu"]//*[@class="toggler"]`)
    }
    private filterDropDownListValue (item: string):WebdriverIO.Element{
        return $(`//*[@class="dropdown-menu"]//*[text()="${item}"]`)
    }
    private itemPrices ():WebdriverIO.ElementArray{
        return $$(`//*[@class="price"]//strong[contains(text(), 'грн')]`)
    }

    //Methods
    public clickOnFilterItems (filterItems: string[]){
        filterItems.forEach(items => {
            this.filterItemByText(items).click()
        })
        return this;
    }
    public clickOnFilter(){
        this.filterDropDownList().click()
        return this
    }
    public selectValueFromDropDownList (filterOption: string){
        this.filterDropDownListValue(filterOption).click()
        browser.refresh()
        return this;
    }

    //Verify
    public verifyCorrectSortingOfValues() {
        const elemetPrices = [];
        this.itemPrices().forEach( item => {
                elemetPrices.push(parseInt(item.getText().match(/[0-9]+/g)[0]))
            }
        )
        console.log(elemetPrices)
        expect(Math.min(...elemetPrices),"First element price isn't minimal").to.equal(elemetPrices[0])


    }
}

export const productPage = new Products_page()