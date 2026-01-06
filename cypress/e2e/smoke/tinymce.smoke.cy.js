import { TinyMCEPage } from "../../pages/TinyMCEPage";

describe("@smoke SMOKE - TinyMCE", () => {
  const page = new TinyMCEPage();

  it(
    "TC-TMCE-001 - Delete text, write new text in bold, center, change the color to red, and return the text as a string",
    { tags: "@smoke" },
    () => {
      page.visitPage();

      cy.textWithDateTime("Automated text 1").then(({ text, stamp }) => {
        page.clearEditor();
        page.typeBoldText(text);
        page.alignCenter();
        page.setTextColorRead();

        page.getEditorText().then((txt) => {
          const text = txt.trim();
          expect(text).to.contain("Automated text 1");
          expect(text).to.contain(stamp);

          cy.log(`SavedText: ${text}`);
        });
      });
    }
  );
});
