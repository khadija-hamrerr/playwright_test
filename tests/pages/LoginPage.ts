import { Locator, Page } from "@playwright/test";

export class LoginPage
{
    public loginPage:     Page;
    public username: Locator;
    public password: Locator;
    public submit:   Locator;

    constructor (page: Page) {
        this.loginPage     = page;
        this.username = page.locator("xpath=//section[@id='login']//input[@id='username']");
        this.password = page.locator("xpath=//section[@id='login']//input[@id='password']");
        this.submit   = page.locator("xpath=//section[@id='login']//button[@id='submit']");
    }

    async navigate(url: string) {
        await this.loginPage.goto(url)
    }
}