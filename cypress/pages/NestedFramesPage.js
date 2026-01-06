import BasePage from "./BasePage";

export class NestedFramePage extends BasePage {
  path = "/nested_frames";

  visitPage() {
    super.visit(this.path);
  }

  getFrameTextByNames(frameNames) {
    let chain = cy.document();

    frameNames.forEach((name) => {
      chain = chain
        .find(`frame[name="${name}"], iframe[name="${name}"]`)
        .should("exist")
        .then(($frame) => {
          return cy.wrap($frame[0].contentDocument);
        });
    });

    return chain
      .find("body")
      .should("not.be.empty")
      .invoke("text")
      .then((text) => text.trim());
  }
}
