import { WindowPage } from "../../pages/WindowPage";

describe("REGRESSION - Windows", () => {
  const page = new WindowPage();

  it("Hace click en Click Here y valida texto de New Window", () => {
    page.visitPage();

    page.openNewWindowInSameTab();
    page.getNewWindowText().then((text) => {
      expect(text.trim()).to.eq("New Window");
      cy.log(`New page text: ${text}`);
    });
  });
});
