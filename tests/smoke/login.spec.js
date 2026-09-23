import {test,expect} from "@playwright/test"
import {LoginPage} from "../../pages/LoginPage.js"

test('login to application',async({page})=>
{
    await page.goto('/login')

    const loginpage = new LoginPage(page)

    loginpage.loginToApplication('admin@email.com','admin@123')

})
