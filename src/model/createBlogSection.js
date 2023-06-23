import { createEl } from "../utils/createEl.js";
import { data } from "../../media/blogpost.js";

export function createBlogSection() {


    const blogSection = createEl("section", { className: "blog-section" });
    const blogTitle = createEl("p", { className: "blog-title", textContent: "Blog" });
    const blogPostCard1 = createEl("div", { className: "blog-card" });
    const blogPostTitle1 = createEl("p", { className: "blog-title", textContent: data.blogtitle1 });
    const blogPost1 = createEl("div", {className:"blog-post", textContent: data.blog1})

    blogPostCard1.append(blogPostTitle1,blogPost1)
    blogSection.append(blogTitle,blogPostCard1)

    return blogSection

}