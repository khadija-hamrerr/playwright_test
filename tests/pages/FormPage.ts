import { Page, Locator, expect } from "@playwright/test";

export class FormPage 
{
    public formPage: Page;
    public fname: Locator;
    public lname: Locator;
    public submitbtn: Locator;
    public mobil: Locator;
    public gender: Locator;
    public cookiesBtn: Locator;

    constructor(page: Page)
    {
        this.formPage = page;
        this.fname = page.locator("xpath=//input[@id='firstName']");
        this.lname = page.locator("xpath=//input[@id='lastName']");
        this.submitbtn = page.locator("xpath=//button[@id='submit']");
        this.mobil = page.locator("xpath=//input[@id='userNumber']");
        this.gender = page.locator("xpath=//input[@id='gender-radio-2']");
        this.cookiesBtn = page.locator("xpath=//div[@class='fc-dialog-container']");
    }

    async navigatTo (url: string)
    {
        this.formPage.goto(url);
    }

    async enterFname (firstName: string)
    {
        await this.fname.fill(firstName);
    }

    async enterLname (lastName: string)
    {
        await this.lname.fill(lastName);
    }

    async enterMobil (nummer: string)
    {
        await this.mobil.fill(nummer);
    }

    async checkGender ()
    {
        this.gender.evaluate(Node => Node.setAttribute('checked', 'checked'));
        const checked = await this.gender.getAttribute('checked');
        expect(checked).toBeNull()    
    }

}