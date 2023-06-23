import { createHeader } from "./model/createHeader.js";
import { createMain } from "./model/createMain.js";
import { createBlogSection } from "./model/createBlogSection.js";
import { createFooter } from "./model/createFooter.js";
import { createPortfolioSection } from "./model/createPortfolioSection.js";
import { createContactsAside } from "./model/createContactsAside.js";

function main() {
  const root = document.getElementById("root");
  root.append(
    createHeader(),
    createMain(),
    createPortfolioSection(),
    createContactsAside(),
    createBlogSection(),
    createFooter()
  );
}
main();
