import Login from "../PageObjects/LoginPage.js";

it.only('Logintest',() => {
    cy.visit("https://opensourse-demo.orangehrmlive.com/")

    const ln=new Login();
    ln.SetUserName("Admin")
    ln.SetPassword("admin123")
    ln.clickSubmit();
    ln.verifyLogin()
})