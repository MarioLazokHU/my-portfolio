import { createHeader } from "./model/createHeader.js";
import { createMain } from "./model/createMain.js";
import { createBlogSection } from "./model/createBlogSection.js";
import { createFooter } from "./model/createFooter.js";
import { createPortfolioSection } from "./model/createPortfolioSection.js";
import { createContactsAside } from "./model/createContactsAside.js";
import { contactHandler } from "./controller/contactHandler.js";
import { createHamburger } from "./model/createHamburger.js";
import { contactCloseBtn } from "./controller/contactCloseBtn.js";

function main() {
  const root = document.getElementById("root");
  root.append(
    createHeader(),
    createMain(),
    createPortfolioSection(),
    createBlogSection(),
    createContactsAside(),
    createFooter(),
    );
    contactHandler();
    createHamburger()
    contactCloseBtn()
}
main();
