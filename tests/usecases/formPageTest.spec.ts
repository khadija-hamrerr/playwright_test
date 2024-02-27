import { test, expect} from '@playwright/test';
import { FormPage } from '../pages/FormPage';


test("test 1", async({ page }) =>
{
    const formPage = new FormPage(page);
    const baseUrl = 'https://demoqa.com/automation-practice-form';

    await test.step('check', async() => 
    {
        await formPage.navigatTo(baseUrl);
        if(await formPage.cookiesBtn.isVisible){
            await page.locator("xpath=//div[@class='fc-dialog-container']//button[@class='fc-button fc-cta-consent fc-primary-button']").click();
        }
        await formPage.enterFname('Khokha');
        await formPage.enterLname('Qadi');
        await formPage.checkGender();
        await formPage.enterMobil('019876787876')
        await formPage.submitbtn.click();
        expect(page.locator("xpath=//div[@id='example-modal-sizes-title-lg']")).toBeVisible();
    })
});



