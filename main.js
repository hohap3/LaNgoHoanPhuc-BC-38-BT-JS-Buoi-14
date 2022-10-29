function main() {
  // BT 1 : Xuất 3 số theo thứ tự tăng dần

  function handleSortNumbers(formElement) {
    var firstNum = Number(formElement.querySelector("#first").value);
    var secondNum = Number(formElement.querySelector("#second").value);
    var thirdNum = Number(formElement.querySelector("#third").value);

    var result = document.querySelector(".result-bt-1");

    if (firstNum > secondNum) {
      var temp = firstNum;
      firstNum = secondNum;
      secondNum = temp;
    }

    if (firstNum > thirdNum) {
      var temp = firstNum;
      firstNum = thirdNum;
      thirdNum = temp;
    }
    if (secondNum > thirdNum) {
      var temp = secondNum;
      secondNum = thirdNum;
      thirdNum = temp;
    }

    result.textContent = firstNum + "," + secondNum + "," + thirdNum;
  }

  function sortNumbers() {
    var formElement = document.querySelector(".bt-1__form");
    if (!formElement) return;

    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handleSortNumbers(formElement);
    });
  }

  // BT 2 :Chương trình chào hỏi

  function handleSayHello(formElement) {
    var formSelect = formElement.querySelector(".form__select");
    var result = document.querySelector(".result-bt-2");

    if (!formSelect || !result) return;
    var message;

    switch (formSelect.value) {
      case "father":
        message = "Xin chào Bố!";

        break;
      case "mother":
        message = "Xin chào Mẹ!";

        break;
      case "brother":
        message = "Xin chào Anh trai!";

        break;
      case "sister":
        message = "Xin chào Em gái ơi";
        break;
      default:
        message = "Xin chào Người lạ ơi!";
        break;
    }

    result.textContent = message;
  }

  function sayHello() {
    var formElement = document.querySelector(".bt-2__form");
    if (!formElement) return;

    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handleSayHello(formElement);
    });
  }

  // BT 3 : Đếm số chẵn lẻ

  function handleCountNumber(formElement) {
    var firstNum = Number(formElement.querySelector("#first").value);
    var secondNum = Number(formElement.querySelector("#second").value);
    var thirdNum = Number(formElement.querySelector("#third").value);

    var countEven = 0;
    var result = document.querySelector(".result-bt-3");

    if (!result) return;

    if (!firstNum || !secondNum || !thirdNum) {
      window.alert("Dữ liệu nhập không hợp lệ!");
      result.textContent = "";
    } else {
      if (firstNum % 2 === 0) countEven++;
      if (secondNum % 2 === 0) countEven++;
      if (thirdNum % 2 === 0) countEven++;

      var countOdd = 3 - countEven;

      result.textContent =
        "Có " + countEven + " số chẵn , " + countOdd + " số lẻ";
    }
  }

  function countEvenAndOddNumber() {
    var formElement = document.querySelector(".bt-3__form");
    if (!formElement) return;

    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handleCountNumber(formElement);
    });
  }

  // BT4 : Đoán hình tam giác

  function handleGuessTriangle(formElement) {
    var a = Number(formElement.querySelector("#first").value);
    var b = Number(formElement.querySelector("#second").value);
    var c = Number(formElement.querySelector("#third").value);

    var result = document.querySelector(".result-bt-4");
    if (!result) return;
    var message = "";

    if (a + b > c && a + c > b && c + b > a) {
      if (a === b && b === c) message = "Tam giác đều";
      else if (a === b || b === c || a === c) message = "Tam giác cân";
      else if (
        Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
        Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2) ||
        Math.pow(c, 2) + Math.pow(a, 2) === Math.pow(b, 2)
      )
        message = "Tam giác vuông";
      else message = "Tam giác thường";
    } else {
      window.alert("Dữ liệu nhập không hợp lệ!");
      message = "";
    }

    result.textContent = message;
  }

  function guessTriangle() {
    var formElement = document.querySelector(".bt-4__form");
    if (!formElement) return;

    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handleGuessTriangle(formElement);
    });
  }

  guessTriangle();
  countEvenAndOddNumber();
  sortNumbers();
  sayHello();
}

main();
