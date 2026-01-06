import { NestedFramePage } from "../../pages/NestedFramesPage";

describe("Regression - Nested frames", () => {
  const page = new NestedFramePage();

  it("Imprime los diferentes textos de los iframes", () => {
    page.visitPage();

    const framesToRead = [
      ["frame-top", "frame-left"],
      ["frame-top", "frame-middle"],
      ["frame-top", "frame-right"],
      ["frame-bottom"],
    ];

    framesToRead.forEach((path) => {
      page.getFrameTextByNames(path).then((text) => {
        cy.log(`${path.join(" > ")}: ${text}`);
        expect(text).to.not.equal("");
      });
    });
  });
});
