import { createEl } from "../utils/createEl.js";
import { data } from "../../media/blogpost.js";

export function createBlogSection() {

  const blogSection = createEl("section", {
    className: "blog-section",
    id: "blog",
  });
  const blogTitle = createEl("p", {
    className: "blog",
    textContent: "[My Blog]",
  });
  const blogPostCard1 = createEl("div", { className: "blog-card" });
  const blogPostTitle1 = createEl("p", {
    className: "blog-title",
    textContent: data.blogtitle1,
  });
  const blogPost1 = createEl("div", {
    className: "blog-post",
    innerHTML: `${data.blog1} <br><br> Posted at: 2023.06.24.`
  });

  blogPost1.prepend(blogPostTitle1);
  blogPostCard1.append(blogPost1);
  blogSection.append(blogTitle, blogPostCard1);
  
  const blogPostCard2 = createEl("div", { className: "blog-card" });
  const blogPostTitle2 = createEl("p", {
    className: "blog-title",
    textContent: data.blogtitle2,
  });
  const blogPost2 = createEl("div", {
    className: "blog-post",
    innerHTML: `${data.blog2} <br><br> Posted at: 2023.06.25.`
  });

  blogPost2.prepend(blogPostTitle2);
  blogPostCard2.append(blogPost2);
  blogSection.append(blogPostCard2);

  return blogSection;
}
