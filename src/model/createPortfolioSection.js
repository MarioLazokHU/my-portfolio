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
  const portfolioDesc = createEl("p", {
    className: "portfolio-desc",
    textContent:
      "Created with JS & Node, the admin login is just an 'a'. This service running in 'Render Service' if the app is can't load just wait a min.",
  });
  const link1 = createEl("a", {
    href: "https://webshop-prototype.onrender.com/",
  });
  const goToButton1 = createEl("button", { textContent: "Go To App" });
  link1.append(goToButton1);

  portfolioCard1.append(portfolioPic1, portfolioName1, portfolioDesc, link1);
  portfolioSection.append(portfolioTitle, portfolioCard1);

  return portfolioSection;
}
