import { createEl } from "../utils/createEl.js";

export function createMain(){
    const main = createEl("main", {id:"main"})

    const mainTitle = createEl("p",{className:"main-title", textContent:"[About Me]"})

    const leftTextBox = createEl("div",{className:"left-text-box"})
    const leftTitle = createEl("p",{className: "left-title", textContent:"{ integration }"})
    const leftP = createEl("p", {className: "left-p", textContent: "My strength lies in paying attention to the smallest details to ensure that the end result is cohesive, responsive and user-friendly. If there is no existing design, I am also happy to create visual concepts."})

    const bgCon = createEl("div", {className:"background"})

    const rightTextBox = createEl("div",{className:"right-text-box"})
    const rightTitle = createEl("p",{className: "right-title", textContent:"< development >"})
    const rightP = createEl("p", {className: "right-p", textContent: "I have strong skills in JavaScript, React, HTML, CSS, Node.js and Express. I am eager to apply my expertise in practical projects and continuously enhance my abilities in a professional setting."})

    

    leftTextBox.append(leftTitle,leftP)

    rightTextBox.append(rightTitle,rightP)
    
    main.append(mainTitle,leftTextBox,bgCon,rightTextBox) 

    return main
}