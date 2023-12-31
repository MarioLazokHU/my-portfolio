import { createEl } from "../utils/createEl.js";

export function createPortfolioSection() {
  const portfolioSection = createEl("section", {
    className: "portfolio-section",
    id: "portfolio",
  });
  const portfolioTitle = createEl("p", {
    className: "portfolio-title",
    textContent: "[My latest work]",
  });
  const portfolioCard1 = createEl("div", { className: "portfolio-card" });
  const portfolioPic1 = createEl("img", {
    className: "portfolio-pic",
    src: "./media/webshop.png",
  });
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
  const portfolioPic2 = createEl("img", {
    className: "portfolio-pic",
    src: "./media/gallery.png",
  });
  const portfolioName2 = createEl("p", {
    className: "portfolio-name",
    textContent: "Gallery App",
  });
  const portfolioDesc2 = createEl("p", {
    className: "portfolio-desc",
    textContent:
      "Created with JS & Node, you can upload pictures. !Upload & Delete function is Disabled! This running in 'Render Service' if the app is can't load just wait a min and refresh.",
  });
  const link2 = createEl("a", {
    href: "https://image-gallery-n1oq.onrender.com/",
  });
  const goToButton2 = createEl("button", { textContent: "Go To App" });
  link2.append(goToButton2);

  portfolioCard2.append(portfolioPic2, portfolioName2, portfolioDesc2, link2);
  portfolioSection.append(portfolioCard2);

  const portfolioCard3 = createEl("div", { className: "portfolio-card" });
  const portfolioPic3 = createEl("img", {
    className: "portfolio-pic",
    src: "./media/flivestar.png",
  });
  const portfolioName3 = createEl("p", {
    className: "portfolio-name",
    textContent: "Flivestar App",
  });
  const portfolioDesc3 = createEl("p", {
    className: "portfolio-desc",
    textContent:
      "This project is greater than it looks at first glance. Frontend: VUE.js, backend: NODE.js, database: MySQL, mobile chat: Firebase, and so on.",
  });
  const link3 = createEl("a", {
    href: "https://flivestar.com",
  });
  const goToButton3 = createEl("button", { textContent: "Go To App" });
  link3.append(goToButton3);

  portfolioCard3.append(portfolioPic3, portfolioName3, portfolioDesc3, link3);
  portfolioSection.append(portfolioCard3);

  const portfolioCard4 = createEl("div", { className: "portfolio-card" });
  const portfolioPic4 = createEl("img", {
    className: "portfolio-pic",
    src: "./media/e-ticket.png",
  });
  const portfolioName4 = createEl("p", {
    className: "portfolio-name",
    textContent: "E-ticket system",
  });
  const portfolioDesc4 = createEl("p", {
    className: "portfolio-desc",
    textContent:
      "You can create badges using template PDF files, edit and download all badges or tickets. Frontend & backend: SvelteKit, database: Edgedb.",
  });
  const link4 = createEl("a", {
    href: "https://e-ticket.vip",
  });
  const goToButton4 = createEl("button", { textContent: "Go To App" });
  link4.append(goToButton4);

  portfolioCard4.append(portfolioPic4, portfolioName4, portfolioDesc4, link4);
  portfolioSection.append(portfolioCard4);

  return portfolioSection;
}
