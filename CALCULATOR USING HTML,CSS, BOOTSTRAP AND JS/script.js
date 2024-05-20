document.addEventListener("DOMContentLoaded", function (event) {
  //Selector
  let body = document.querySelector("body");
  let result = document.querySelector("#result");
  let dark_mode_btn = document.querySelector(".dark-mode-btn");
  let clear = document.querySelector("#clear");
  let history = document.querySelector("#history");
  let equalTo = document.querySelector("#equalTo");
  let delete_single_num = document.querySelector("#delete_single_num");
  let squareRoot = document.querySelector("#squareroot");
  let Normal_btn = document.querySelectorAll("#Normal_btn");
  let text = "";
  //Normal click event and Input Limit
  Normal_btn.forEach((Normal_btn) => {
    Normal_btn.addEventListener("click", function () {
      text = this.innerHTML;
      result.value += text;
      if (result.value.length >= 20) {
        result.value = 0;
        history.innerHTML = "To many digits";
      }
    });
  });
  //Square of a number
  squareRoot.addEventListener("click", function () {
    history.innerHTML = result.value;
    result.value = eval(result.value) * eval(result.value);
  });
  //Equal to button action
  equalTo.addEventListener("click", function () {
    if (result.value != "") {
      history.innerHTML = result.value;
      result.value = eval(result.value);
    } else {
      alert("Enter any Number");
    }
  });
  //Dark_mode
  let dark_mode_status = false;
  dark_mode_btn.addEventListener("click", function () {
    body.classList.toggle("dark_mode_active");
    if (dark_mode_status == false) {
      this.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
      dark_mode_status = true;
    } else {
      this.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
      dark_mode_status = false;
    }
  });
  //Clear all number
  clear.addEventListener("click", function () {
    result.value = "";
    history.innerHTML = "";
  });
  //Delete single number
  delete_single_num.addEventListener("click", function () {
    result.value = result.value.substring(0, result.value.length - 1);
  });
});
