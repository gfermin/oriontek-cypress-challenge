import BasePage from "./BasePage";

export class TinyMCEPage extends BasePage {
  path = "/tinymce";

  //Selectors
  editorIframe = "#mce_0_ifr";
  editorBody = "#tinymce";
  boldBtn = 'button[aria-label="Bold"]';
  alignCenterBtn = 'button[aria-label="Align center"]';

  // Color
  formatMenu = 'button[aria-label="Formats"]';
  textColorBtn = 'button[aria-label="Text color"]';

  visitPage() {
    super.visit(this.path);
  }

  clearEditor() {
    cy.getIframeBody(this.editorIframe)
      .find(this.editorBody)
      .clear({ force: true });
  }

  typeBoldText(text) {
    cy.get(this.boldBtn).click();
    cy.getIframeBody(this.editorIframe)
      .find(this.editorBody)
      .type(text, { delay: 0 });
    cy.get(this.boldBtn).click();
  }

  alignCenter() {
    cy.get(this.alignCenterBtn).click();
  }

  setTextColorRead() {
    cy.get(this.textColorBtn).click();

    cy.get('div[role="dialog"], .tox-dialog, .tox-pop')
      .should("be.visible")
      .then(($dlg) => {
        const redByAttr = $dlg.find(
          '[data-mce-color="FF0000"], [data-mce-color="ff0000"]'
        );
        if (redByAttr.length) {
          cy.wrap(redByAttr.first()).click({ force: true });
        } else {
          cy.wrap($dlg)
            .find(
              '[title*="Red"], [aria-label*="Red"], [title*="Rojo"], [aria-label*="Rojo"]'
            )
            .first()
            .click({ force: true });
        }
      });
  }

  getEditorText() {
    return cy
      .getIframeBody(this.editorIframe)
      .find(this.editorBody)
      .invoke("text");
  }
}
