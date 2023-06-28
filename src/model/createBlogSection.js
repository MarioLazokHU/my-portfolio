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

  blogSection.append(blogTitle);
  const numBlogs = Object.keys(data).length / 4;

  for (let i = numBlogs; i >= 1; i--) {
    const blogPostCard = createEl("div", { className: "blog-card" });
    const blogPostTitle = createEl("p", {
      className: "blog-title",
      textContent: data[`blogtitle${i}`],
    });
    const blogPost = createEl("div", {
      className: "blog-post",
      innerHTML: `${data[`blog${i}`]} <br><br> Posted at: ${data[`date${i}`]}`,
    });
    if (data[`git${i}`]) {
      blogPost.innerHTML = `${data[`blog${i}`]} <br><br>Github: ${data[`git${i}`]}<br><br> Posted at: ${data[`date${i}`]}`;
    }
  
    blogPost.prepend(blogPostTitle);
    blogPostCard.append(blogPost);
    blogSection.append(blogPostCard);
  }
  
  

  return blogSection;
}
