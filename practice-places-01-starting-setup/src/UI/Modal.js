export class Modal {
  constructor(contentId, fallBcakText) {
    this.fallBcakText = fallBcakText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById("modal-template");
  }
  show() {
    if ("content" in document.createElement("template")) {
      const modalElements = document.importNode(
        this.modalTemplateEl.content,
        true
      );
      this.modalElement = modalElements.querySelector(".modal");
      this.backdropElement = modalElements.querySelector(".backdrop");
      const contentEl = document.importNode(
        this.contentTemplateEl.content,
        true
      );

      this.modalElement.appendChild(contentEl);
      document.body.insertAdjacentElement('afterbegin',this.modalElement);
      document.body.insertAdjacentElement('afterbegin',this.backdropElement);
    } else {
      alert(this.fallBcakText);
    }
  }
  hide() {
    if(this.modalElement){
        document.body.removeChild(this.modalElement);
        document.body.removeChild(this.backdropElement);
        this.modalElement = null;
        this.backdropElement = null;

    }
  }
}
