import $ from "jquery";
$(document).ready(function () {
  var textarea = $("textarea");
  var originalRows = parseInt(textarea.attr("rows"));
  textarea.on("input", function () {
    textarea.attr("rows", originalRows + 1);
    textarea.attr("rows", originalRows);
  });
});
