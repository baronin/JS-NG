(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const $btnTwo = document.querySelector('.task__btn_two');
    const $btnThree = document.querySelector('.task__btn_three');
    const $btnFour = document.querySelector('.task__btn_four');
    const $taskInput = document.querySelector('.task__input_three');
    const $taskInputFour = document.querySelector('.task__input_four');
    const changeBtnText = document.querySelector('.task__btn_text');
    const $btnColorText = document.querySelector('.task___btn_change-color');
    const $inputColorText = document.querySelector('.task__input_change-color');
    const $btnSwap = document.querySelector('.task___btn_swap');
    const $inputSwap1 = document.querySelector('.task__swap1');
    const $inputSwap2 = document.querySelector('.task__swap2');
    const $btnDisabled = document.querySelector('.task___btn_disable');
    const $btnUnlock = document.querySelector('.task___btn_unlock');
    const $inputDisabled = document.querySelector('.task__input_disabled');
    const $square = document.querySelector('.square');
    if ($btnTwo) {
      $btnTwo.addEventListener('click', function () {
        alert();
      })
    } if ($btnThree) {
      $btnThree.addEventListener('click', function () {
        let inputValue = $taskInput.value;
        alert(inputValue);
      })
    }
    if ($btnFour) {
      $btnFour.addEventListener('click', function () {
        let inputVal = $taskInputFour.value;
        if (Number(inputVal)) {
          let pow = Math.pow(inputVal, 2);
          alert(pow);
        } else {
          alert('Введите число');
        }
      })
    }

    if (changeBtnText) {
      changeBtnText.addEventListener('click', function () {
        changeBtnText.innerHTML = 'new text'
        changeBtnText.style.color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
      })
    }

    if ($btnColorText) {
      $btnColorText.addEventListener('click', function (e) {
        $inputColorText.style.color = 'red';
      })
    }

    if ($btnSwap) {
      $btnSwap.addEventListener('click', function () {
        let inp1 = $inputSwap1.value;
        let inp2 = $inputSwap2.value;
        $inputSwap1.value = inp2;
        $inputSwap2.value = inp1;
      });
    }

    if ($btnDisabled && $btnUnlock) {
      $btnDisabled.addEventListener('click', function () {
        $inputDisabled.setAttribute('disabled', 'disabled');
      })
      $btnUnlock.addEventListener('click', function () {
        $inputDisabled.removeAttribute('disabled');
      })
    }

    if ($square) {
      $square.addEventListener('mouseout', function () {
        alert();
      })
    }

    /**
     * calculator
     */

    let btns = document.querySelectorAll(".set-symbols");
    let input = document.querySelector(".input");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        let currentSymbol = e.currentTarget.textContent;
        console.log(e.currentTarget);

        let number = Number(currentSymbol);
        if (input.value.length < 10) {
          input.value += number;
          return;
        }
        let symb = e.currentTarget;
        input.value += symb;
        console.log(symb);
        if (currentSymbol === "C") {
          input.value = "";
          return;
        }
      });
    });
  })
})()
