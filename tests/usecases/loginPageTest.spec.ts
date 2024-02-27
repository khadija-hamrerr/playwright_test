import { test, expect} from '@playwright/test';
import { LoginPage } from "../pages/LoginPage";

let loginPage;
test.beforeEach(async({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate('/practice-test-login/');
})

test('Positiv Login Page', async({ page }) => {
     await test.step('Positiv Login Test', async() => {
        await loginPage.username.fill('student');
        await loginPage.password.fill('Password123');
        await loginPage.submit.click();
        expect(page.url()).toBe('https://practicetestautomation.com/logged-in-successfully/');
    });
});

test('Negative Login Page 1', async({ page }) => {
    await test.step('Login Test mit falschem Username', async() => {
        await loginPage.username.fill('s');
        await loginPage.password.fill('Password123');
        await loginPage.submit.click();
        expect(page.locator("xpath=//div[@id='error']")).toHaveText('Your username is invalid!')
    });
});

test('Negative Login Page 2', async({ page }) => {
    await test.step('Login Test mit falschem Passwort', async() => {
        await loginPage.username.fill('student');
        await loginPage.password.fill('Password');
        await loginPage.submit.click();
        expect(page.locator("xpath=//div[@id='error']")).toHaveText('Your password is invalid!')
    });
});

