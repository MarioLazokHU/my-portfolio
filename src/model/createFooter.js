import { createEl } from "../utils/createEl.js";

export function createFooter() {

  const footer = createEl("footer")

  const rights = createEl("div",{className:"rights", textContent:"®2023 Mario Lazok"})

  const contactsLogoConFooter = createEl("div", { className: "contacts-logo-con" });
  const linkedIn = createEl("a", {
    href: "https://www.linkedin.com/in/m%C3%A1ri%C3%B3-l%C3%A1zok-359a68164/",
  });
  const linkedInLogo = createEl("img", {
    className: "contact-logo",
    src: "../media/linkedin.png",
  });
  const github = createEl("a", { href: "https://github.com/MarioLazokHU" });
  const githubLogo = createEl("img", {
    className: "contact-logo",
    src: "../media/github.png",
  });
  const facebook = createEl("a", {
    href: "https://www.facebook.com/mario.lazok.18",
  });
  const facebookLogo = createEl("img", {
    className: "contact-logo",
    src: "../media/facebook.png",
  });
  linkedIn.append(linkedInLogo);
  github.append(githubLogo);
  facebook.append(facebookLogo);
  contactsLogoConFooter.append(linkedIn, github, facebook);

  footer.append(rights, contactsLogoConFooter)
  return footer
}
