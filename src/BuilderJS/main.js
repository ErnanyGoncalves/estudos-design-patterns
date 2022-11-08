/**
 * https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3
 * 
 * 
 * 
 * 
 * https://blog.openreplay.com/3-design-patterns-in-typescript-for-frontend-developers
 * Um exemplo de Factory para front end seria a Interface Button com as Classes WarningBtn, ConfirmBtn que a implementam?
 */

class Paragraph {
  constructor(content, style) {
    this.content = content;
    this.style = style;
  }

  getParagraph() {
    return `<p ${
      Object.keys(this.style).length > 0 && `style='${this.style}'`
    }>${content}</p>`;
  }
}

function ParagraphBuilder() {
    this.content= "";
    this.style ={};
  return {
    addContent(content) {
      this.content = content;
    },
    addColor(color) {
      this.style.color = color;
    },
    addtextAlign(txtAlign) {
      this.style.txtAlign = txtAlign;
    },
    build() {
      return new Paragraph(this.content, this.style);
    },
  };
}

const pBuilder = new ParagraphBuilder()
pBuilder.addContent("AAAA")
pBuilder.addColor("red");

pBuilder.getParagraph();
