import { createEl } from "../utils/createEl.js";

export function createContactsAside(){
  const aside = createEl("aside",{className:"hidden",id:"contact"})

  const contactsTitle = createEl("p",{className:"contacts-title",textContent:"[Contacts]"})
  
  const myContactsCon = createEl("div",{className:"my-contacts"})
  const close = createEl("button",{textContent:"✖",className:"close"})
  const name = createEl("p",{className:"name", textContent:"Mario Lazok"})
  const email = createEl("p", {className:"email", textContent:"e-mail: lazokmarios7@gmail.com"})
  const mobile = createEl("p",{className:"mobile", textContent:"mobile: +36 30 162 5663"})

  const downloadA = createEl("a", {href:"./media/cv.jpg"})
  const downloadButton = createEl("button",{innerHTML:"Download my CV", className:"download-btn"})
  downloadA.append(downloadButton)

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

  myContactsCon.append(close, name, downloadA)

  form.append(emailLabel, messageLabel, submitButton);

  aside.append(contactsTitle,myContactsCon,form)

  return aside
}