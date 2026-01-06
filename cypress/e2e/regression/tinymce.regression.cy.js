import { TinyMCEPage } from "../../pages/TinyMCEPage";

describe("@regression Regression - TineMCE", () => {
  const page = new TinyMCEPage();

  it(
    "TC-TMCE-002 - Empty Editor Without Crashing",
    { tags: "@regression" },
    () => {
      page.visitPage();

      cy.textWithDateTime("Automated text 2").then(({ text, stamp }) => {
        page.clearEditor();
        page.typeBoldText(text);
        page.alignCenter();
        page.setTextColorRead();

        page.getEditorText().then((txt) => {
          expect(txt.trim().length).to.be.greaterThan(0);
          expect(txt).to.include(stamp);
        });
      });
    }
  );
});
