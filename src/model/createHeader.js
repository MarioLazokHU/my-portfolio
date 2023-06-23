import { createEl } from "../utils/createEl.js"

export function createHeader(){

    const header = createEl("header",{id:"header"})
    
    const logo = createEl("img",{className: "logo", src:"../media/logo.png"})
    const nav = createEl("nav")

    const aAboutBtn = createEl("a",{href:"#main"})
    const aboutBtn = createEl("div", {className: "about-btn", textContent:"about"})
    const aPortfolioBtn = createEl("a",{href:"#portfolio"})
    const portfolioBtn = createEl("div",{className:"portfolio-btn", textContent:"portfolio"})
    const aBlogBtn = createEl('a',{href:"#blog"})
    const blogBtn = createEl("div", {className: "blog-btn", textContent:"blog"})
    const contactBtn = createEl("div", {className: "contact-btn", textContent:"contact"})

    const contactsLogoCon = createEl("div", {className: "contacts-logo-con"})
    const linkedIn = createEl("a",{href:"https://www.linkedin.com/in/m%C3%A1ri%C3%B3-l%C3%A1zok-359a68164/"})
    const linkedInLogo = createEl("img",{className:"contact-logo", src:"../media/linkedin.png"})
    const github = createEl("a",{href:"https://github.com/MarioLazokHU"})
    const githubLogo = createEl("img",{className:"contact-logo", src:"../media/github.png"})
    const facebook = createEl("a",{href:"https://www.facebook.com/mario.lazok.18"})
    const facebookLogo = createEl("img",{className:"contact-logo", src:"../media/facebook.png", href:""})
    linkedIn.append(linkedInLogo)
    github.append(githubLogo)
    facebook.append(facebookLogo)
    contactsLogoCon.append(linkedIn, github, facebook)

    aAboutBtn.append(aboutBtn)
    aPortfolioBtn.append(portfolioBtn)
    aBlogBtn.append(blogBtn)

    nav.append(aAboutBtn,aPortfolioBtn,aBlogBtn,contactBtn)

    header.append(logo, nav, contactsLogoCon)

    return header
}