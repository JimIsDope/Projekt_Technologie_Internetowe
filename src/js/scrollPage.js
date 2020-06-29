import $ from "jquery";
window.jQuery = $;
window.$ = $;

export const backtoNav = (navid) => {
  var navTag = $(`nav[id="${navid}"]`);
  var bodyHTML = $("html,body");
  bodyHTML.animate({ scrollTop: navTag.offset().top }, "slow");
};
export const scrollPage = (anchorId) => {
  var divTag = $(`div[id="${anchorId}"]`);
  var bodyHTML = $("html,body");
  bodyHTML.animate({ scrollTop: divTag.offset().top }, "slow");
};
$("#top-anchor").click(function () {
  backtoNav("main-site");
});
$("#about-anchor").click(function () {
  scrollPage("about");
});
$("#skills-anchor").click(function () {
  scrollPage("skills");
});
$("#projects-anchor").click(function () {
  scrollPage("projects");
});
$("#contact-anchor").click(function () {
  scrollPage("contact");
});
$(".button-banner").click(function () {
  scrollPage("contact");
});
