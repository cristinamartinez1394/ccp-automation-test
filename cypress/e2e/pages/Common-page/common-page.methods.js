import { CommonPageData } from "./common-page.data";

export class CommonPageMethods{
    static navigateToCcp(){
        cy.clearAllCookies();
        cy.clearLocalStorage();
        cy.visit(CommonPageData.url);
    }
}