import { TinyMCEPage } from "../../pages/TinyMCEPage";

describe("SMOKE - TinyMCE", () => {
  const page = new TinyMCEPage();

  it("Borra text, escribe nuevo texto en negritas, centra, cambia el color a rojo y devuelve el text como string", () => {
    page.visitPage();

    cy.textWithDateTime().then((stamp) => {
      const message = `Automated text - ${stamp}`;

      page.clearEditor();
      page.typeBoldText(message);
      page.alignCenter();
      page.setTextColorRead();

      page.getEditorText().then((txt) => {
        const text = txt.trim();
        expect(text).to.contain("Automated text");
        expect(text).to.contain(stamp);

        cy.log(`SavedText: ${savedText}`);
      });
    });
  });
});
