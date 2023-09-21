const addBtn = document.querySelector("#addBtn");
const toDoContainer = document.querySelector(".toDoContainer");
const textToDo = document.querySelector("#textToDo");
const clearBtn = document.querySelector("#clearBtn");
addBtn.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  if (textToDo.value) {
    toDoContainer.appendChild(paragraph);
    paragraph.textContent = textToDo.value.trim();

    paragraph.classList.add("paragraph-style");
    textToDo.value = "";
    paragraph.addEventListener("click", function () {
      paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener("dblclick", function () {
      toDoContainer.removeChild(paragraph);
    });
  }
});
clearBtn.addEventListener("click", function () {
  toDoContainer.remove();
});
