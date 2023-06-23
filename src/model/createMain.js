import { createEl } from "../utils/createEl.js";

export function createMain(){
    const main = createEl("main", {id:"main"})

    const leftTextBox = createEl("div",{className:"left-text-box"})
    const leftTitle = createEl("p",{className: "left-title", textContent:"desinger"})
    const leftP = createEl("p", {className: "left-p", textContent: "I am a professional UI designer with experience in creating creative and aesthetic designs. I have extensive knowledge in UI design, considering visual harmony, color schemes and the alignment of shapes."})

    const bgCon = createEl("div", {className:"background"})

    const rightTextBox = createEl("div",{className:"right-text-box"})
    const rightTitle = createEl("p",{className: "right-title", textContent:"{developer}"})
    const rightP = createEl("p", {className: "right-p", textContent: "I have strong skills in JavaScript, React, HTML, CSS, Node.js and Express. I am eager to apply my expertise in practical projects and continuously enhance my abilities in a professional setting."})

    

    leftTextBox.append(leftTitle,leftP)

    rightTextBox.append(rightTitle,rightP)
    
    main.append(leftTextBox,bgCon,rightTextBox) 

    return main
}