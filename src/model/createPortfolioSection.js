import { createEl } from "../utils/createEl.js";

export function createPortfolioSection() {
  const portfolioSection = createEl("section", {
    className: "portfolio-section", id:"portfolio"
  });
  const portfolioTitle = createEl("p", {
    className: "portfolio-title",
    textContent: "[My latest work]",
  });
  const portfolioCard1 = createEl("div", { className: "portfolio-card" });
  const portfolioPic1 = createEl("img", { className: "portfolio-pic" , src:"./media/webshop.png"});
  const portfolioName1 = createEl("p", {
    className: "portfolio-name",
    textContent: "Webshop App",
  });
  const portfolioDesc1 = createEl("p", {
    className: "portfolio-desc",
    textContent:
      "Created with JS & Node, the admin login is just an 'a'. This running in 'Render Service' if the app is can't load just wait a min and refresh.",
  });
  const link1 = createEl("a", {
    href: "https://webshop-prototype.onrender.com/",
  });
  const goToButton1 = createEl("button", { textContent: "Go To App" });
  link1.append(goToButton1);

  portfolioCard1.append(portfolioPic1, portfolioName1, portfolioDesc1, link1);
  portfolioSection.append(portfolioTitle, portfolioCard1);

  const portfolioCard2 = createEl("div", { className: "portfolio-card" });
  const portfolioPic2 = createEl("img", { className: "portfolio-pic" , src:"./media/gallery.png"});
  const portfolioName2 = createEl("p", {
    className: "portfolio-name",
    textContent: "Gallery App",
  });
  const portfolioDesc2 = createEl("p", {
    className: "portfolio-desc",
    textContent:
      "Created with JS & Node, you can upload pictures. !!!Only desktop!!! This running in 'Render Service' if the app is can't load just wait a min and refresh.",
  });
  const link2 = createEl("a", {
    href: "https://image-gallery-4p7y.onrender.com",
  });
  const goToButton2 = createEl("button", { textContent: "Go To App" });
  link2.append(goToButton2);

  portfolioCard2.append(portfolioPic2, portfolioName2, portfolioDesc2, link2);
  portfolioSection.append(portfolioCard2);

  return portfolioSection;
}
