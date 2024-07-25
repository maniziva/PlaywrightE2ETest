import { expect, Locator, Page } from "@playwright/test"

const userName = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;
const baseURL = process.env.BASEURL as string;

export class LoginPage {
    readonly page: Page
    readonly loginInit: Locator
    readonly username: Locator
    readonly password: Locator
    readonly signIn: Locator
    readonly noThanks: Locator
    readonly profile: Locator
    readonly logoutBtn: Locator
    readonly LoginBtn: Locator

    constructor(page: Page) {
        this.page = page
  
    }
    async login() {
        await this.loginInit.click()
        console.log('Login button was clicked')
        await this.username.fill(userName)
        console.log('User Name was entered')
        await this.signIn.click()
        console.log('SignIn button was clicked')
        await this.password.fill(password)
        console.log('Password was entered')
        await this.signIn.click()
        console.log('SignIn button was clicked')

        await this.page.waitForLoadState('load'); // Waits for the page to fully load        
        console.log('Successfully logged in to '+baseURL)
    }    
    async logout(){
        await this.profile.click()
        await this.logoutBtn.click()
        await expect(this.logoutBtn).toBeVisible()
    }
}