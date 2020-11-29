import {home} from "../sites/price_navigator/home";

describe("Find Price Of Coffee",() => {
    it("Find the cheapest coffee using certain filters", () =>{
        browser.url('https://pn.com.ua/')
        home
            .clickOnLanguageLink('RU')
            .clickOnCategoryHeader('Продукты и алкоголь')
            .clickOnCategoryItem("Кофе")
            .clickOnFilterItems(['Ambassador','Mokate',])
            .clickOnFilter()
            .selectValueFromDropDownList('Цена от дешевых')
            .verifyCorrectSortingOfValues()

    } )
})