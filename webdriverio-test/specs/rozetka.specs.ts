import {home} from "../sites/rozetka/home";

describe("Find Min Price of Product ",() => {
    it("Find Min Price of Product using certain filters", () =>{
        browser.url('https://rozetka.com.ua/')
        home
            .clickOnlanguageLinkIfItPresent("RU")
            .clickOnMenuToggler()
            .mouseOverCategory("Смартфоны, ТВ и электроника")
            .clickOnSubCategory("Смартфоны")
            .clickOnChekBoxItem("Apple")
            .clickOnChekBoxItem("iPhone 12")
            .clearMaxValue()//clear Max value

        //input Max value
            .clickOnOkButton()//click on Ok

            .clickOnDropDownList()// open dropdown list filter
            .clickOnValueInDropDownList()// choose Value from DroopDownList
            .clickOnMinItem()//click on Min mobile

            .verifyPriceElement(30000)


    } )
})