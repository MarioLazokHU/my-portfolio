import { createEl } from "../utils/createEl.js";

export function createHamburger(){

const input = createEl('input', {
  id: 'menu-toggle',
  type: 'checkbox'
});

const label = createEl('label', {
  className: 'menu-button-container',
  htmlFor: 'menu-toggle'
});

const div = createEl('div', {
  className: 'menu-button'
});


const ul = createEl('ul', {
  className: 'menu'
});

const li1 = createEl('li');
const href1 = createEl("a",{href:"#main", textContent: 'about'})
const li2 = createEl('li');
const href2 = createEl("a",{href:"#portfolio",textContent: 'portfolio'})
const li3 = createEl('li');
const href3 = createEl("a",{href:"#blog",textContent: 'blog'})
const li4 = createEl('li');
const href4 = createEl("a",{href:"#contact",textContent: 'contact'})
li1.append(href1)
li2.append(href2)
li3.append(href3)
li4.append(href4)

const hamburgerCon = createEl("div",{className:"hamb-con"})

ul.append(li1,li2,li3,li4);
label.append(div);

hamburgerCon.append(input,label,ul)

const header = document.querySelector("header")
header.append(hamburgerCon)

}
