const input_field = document.getElementById("input_field");
const add_btn = document.getElementById("add_btn");
const list_container = document.getElementById("list-container");

add_btn.addEventListener("click", () => {
  let getInputValue = input_field.value;

  if (getInputValue == "") {
    alert("please input a text");
  } else {
    let li = document.createElement("li");
    li.classList.add("item");

    li.innerHTML = `${getInputValue} <i class="fa-solid fa-trash"></i>`;
    list_container.appendChild(li);
    input_field.value = "";

    li.querySelector("i").addEventListener("click", () => {
      li.remove();
    });
  }
});

input_field.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    add_btn.click();
  }
});
