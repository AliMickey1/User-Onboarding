
describe("OnBoarding App", () => {
    beforeEach (() => {
        cy.visit("http://localhost:3000");
    })

    const usernameInput = () => cy.get("input[name=username]");
    const emailInput = () => cy.get("input[name=email");
    const passwordInput = () => cy.get("input[name=password");
    const tosInput = () => cy.get('[type="checkbox"]');

    const submitBtn = () => cy.get('[type="submit"]');

it("sanity check to make sure test work", () => {
 
    expect(1 + 2).to.equal(3);
    expect(2+2).not.equal(5); 
    expect({}).not.to.equal({}); 
    expect({}).to.eql({}); 
})

describe("Filling out the form", () => {
    it("can navigate to the site", () => {
        cy.url().should("include", "localhost");
    })

    it("Get the Name input and type a name in it", () => {
        usernameInput()
        .should("have.value", "")
        .type("Ali")
        .should("have.value", "Ali");
    })

    it("Get the email", () => {
        emailInput()
        .should("have.value", "")
        .type("ali@g.com")
        .should("have.value", "ali@g.com")
    })

    it("Get the password", () => {
        passwordInput()
        .should("have.value", "")
        .type("password")
        .should("have.value", "password")
    })

    it("check the terms of service", () => {
        tosInput()
       .should("not.be.checked")
       .check()
       .should("be.checked")

    })

    it("Check to see if form can be submitted", () => {
        submitBtn()
        .should("not.be.disabled")
    })
})

    describe("form validation", () => {
        it("check for empty input", () => {
            usernameInput()
            .type("")
        })
    })

})