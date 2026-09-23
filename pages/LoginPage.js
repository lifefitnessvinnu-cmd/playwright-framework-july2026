import {page} from "@playwright/test"

 class LoginPage{

    constructor(page)
    {
        this.page = page
        this.usernameField = page.getByPlaceholder('Enter Email', { exact: true }) 
        this.passwordField = page.getByPlaceholder('Enter Password',{ exact: true })
        this.signinButton = page.getByText('Sign in', { exact: true })
        this.newsignupLink = page.getByText('New user? Signup', { exact: true })

    }

    async loginToApplication(username, password)
    {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.signinButton.click();
    }

    async clickOnNewUserSignupLink()
    {
        await this.newsignupLink.click();
    }

}
module.exports = {LoginPage}