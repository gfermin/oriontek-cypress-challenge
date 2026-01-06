import BasePage from "./BasePage";

export class WindowPage extends BasePage {
  path = "/windows";

  link = 'a[href="/windows/new"]';

  visitPage() {
    super.visit(this.path);
  }

  openNewWindowInSameTab() {
    cy.get(this.link).invoke("removeAttr", "target").click();
  }

  getNewWindowText() {
    return cy.get("h3").invoke("text");
  }
}
