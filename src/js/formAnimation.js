import $ from "jquery";
window.jQuery = $;
window.$ = $;

//Form JQuery
export const formAnimation = () => {
  $("input").focus(function () {
    $(this).parents(".form__group").addClass("focused");
  });
  $("textarea").focus(function () {
    $(this).parents(".form__group").addClass("focused");
  });
  $("input").blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
      $(this).removeClass("filled");
      $(this).parents(".form__group").removeClass("focused");
    } else {
      $(this).addClass("filled");
    }
  });
  $("textarea").blur(function () {
    var areaValue = $(this).val();
    if (areaValue == "") {
      $(this).removeClass("filled");
      $(this).parents(".form__group").removeClass("focused");
    } else {
      $(this).addClass("filled");
    }
  });
};
