import { WindowPage } from "../../pages/WindowPage";

describe("@regression REGRESSION - Windows", () => {
  const page = new WindowPage();

  it(
    "TC-WIN-001 - Click on Click Here and validate the text in New Window",
    { tags: "@regression" },
    () => {
      page.visitPage();

      page.openNewWindowInSameTab();
      page.getNewWindowText().then((text) => {
        expect(text.trim()).to.eq("New Window");
        cy.log(`New page text: ${text}`);
      });
    }
  );
});
