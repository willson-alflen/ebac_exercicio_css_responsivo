const form = document.querySelector("#form");
const btnSubmitForm = document.querySelector("#btnSubmitForm");
const btnSubmitFormText = document.querySelector("#btnSubmitFormText");

const cartButtons = document.querySelectorAll(".cart-button");

cartButtons.forEach((button) => {
  button.addEventListener("click", cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add("clicked");
}

$("form").validate({
  rules: {
    name: {
      required: true,
      minlength: 3,
    },
    email: {
      required: true,
      email: true,
    },
    userMessage: {
      required: true,
    },
  },
  messages: {
    name: "Por favor, preencha este campo corretamente!",
    email: "Por favor, preencha este campo corretamente!",
    userMessage: "Por favor, preencha este campo corretamente!",
  },
  submitHandler: function () {
    btnSubmitForm.onclick = () => {
      btnSubmitFormText.innerText = "Obrigado!";
      btnSubmitForm.classList.add("active");
    };
  },
});
