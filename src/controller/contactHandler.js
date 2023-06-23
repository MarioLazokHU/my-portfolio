import { createEl } from "../utils/createEl.js";

export function contactHandler() {
  const contactBtn = document.querySelector(".contact-btn");
  const contact = document.getElementById("contact");
  const form = document.querySelector("form")
  contactBtn.addEventListener("click", () => {
    if (contact.classList.contains("hidden")) {
      contact.classList.remove("hidden");
      contact.classList.add("nohidden");
    } else {
      contact.classList.remove("nohidden");
      contact.classList.add("hidden");
    }
  });
  form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const messageBox = createEl("p",{textContent:"Your message has been sent."})
    contact.prepend(messageBox)
    setTimeout(()=>{
      contact.classList.remove("nohidden");
      contact.classList.add("hidden");
    },2000)
  })
}