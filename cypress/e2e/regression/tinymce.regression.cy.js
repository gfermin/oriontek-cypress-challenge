import { TinyMCEPage } from "../../pages/TinyMCEPage";

describe("Regression - TineMCE", () => {
  const page = new TinyMCEPage();

  it("Aplica formato sin text y valida que el editor no quede vacio", () => {
    page.visitPage();

    cy.textWithDateTime().then((stamp) => {
      const message = `OrionTek Challenge - ${stamp}`;

      page.clearEditor();
      page.typeBoldText(message);
      page.alignCenter();
      page.setTextColorRead();

      page.getEditorText().then((txt) => {
        expect(txt.trim().length).to.be.greaterThan(0);
        expect(txt).to.include(stamp);
      });
    });
  });
});
