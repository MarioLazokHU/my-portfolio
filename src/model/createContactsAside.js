import { createEl } from "../utils/createEl.js";

export function createContactsAside(){
  const aside = createEl("aside",{className:"hidden"})

  const contactsTitle = createEl("p",{className:"contacts-title",textContent:"Contacts"})
  
  const myContactsCon = createEl("div",{className:"my-contacts"})
  const name = createEl("p",{className:"name", textContent:"Mario Lazok"})
  const email = createEl("p", {className:"email", textContent:"e-mail: lazokmarios7@gmail.com"})
  const mobile = createEl("p",{className:"mobile", textContent:"mobile: +36 30 162 5663"})

  const form = createEl("form", {
    action: "https://formspree.io/f/xbjvrjla",
    method: "POST"
  });

  const emailLabel = createEl("label", { textContent: "Your email:" });
  const emailInput = createEl("input", { type: "email", name: "email" });
  emailLabel.appendChild(emailInput);

  const messageLabel = createEl("label", { textContent: "Your message:" });
  const messageTextarea = createEl("textarea", { name: "message" });
  messageLabel.appendChild(messageTextarea);

  const submitButton = createEl("button", { type: "submit", textContent: "Send me an e-mail" });

  myContactsCon.append(name, email, mobile)

  form.append(emailLabel, messageLabel, submitButton);

  aside.append(contactsTitle,myContactsCon,form)

  return aside
}