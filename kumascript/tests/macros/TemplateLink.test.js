/**
 * @prettier
 */
const { assert, describeMacro, itMacro } = require("./utils");

describeMacro("TemplateLink", () => {
  itMacro("TemplateLink generates correct DOM", (macro) => {
    return assert.eventually.equal(
      macro.call("TemplateLink"),
      '<code class="templateLink">' +
        '<a href="https://github.com/NukaWorks/natsuu/tree/main/kumascript/macros/TemplateLink.ejs">' +
        "TemplateLink" +
        "</a></code>"
    );
  });
});
