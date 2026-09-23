import {page} from "@playwright/test"

class SingupPage{

    constructor(page)
    {
        this.page = page
        this.signupusernameField = this.signupusernameField = page.getByRole('textbox', { name: /Name/i })
        this.emailField = page.getByPlaceholder('Email', { exact: true })
        this.signuppasswordField = page.getByPlaceholder('Password', { exact: true })
        this.intrest = page.getByRole('checkbox', { name: /AWS/i },{ name: /Selenium/i })
        page.getByRole('textbox', { name: /Name/i })
        this.emailField = page.getByPlaceholder('Email', { exact: true })
        this.signuppasswordField = page.getByPlaceholder('Password', { exact: true })
        this.intrest = page.getByRole('checkbox', { name: /AWS/i },{ name: /Selenium/i })
        
        this.gender = page.locator("//input[@id='gender2']")
        this.state = page.locator("//select[@name='state']")
        this.hobbies = page.locator("//select[contains(@id,'hobbies')]")
        this.signupbutton = page.getByRole('button', { name: /Sign up/i },{ exact: true })
        this.alreadyuserlink = page.getByText('Already a user? Login', { exact: true })
    }

    async newUserSingup()
    {
        await this.signupusernameField.fill()
        await this.emailField.fill()
        await this.signuintrestppasswordField.fill()
        await this.intrest.
        //await this.gender.click()
        //await this.state.
    }
}
module.exports ={SingupPage}