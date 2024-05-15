const addProduct = () => {
  const input = document.querySelector("input");
  const addedTask = input.value;

  const ul = document.querySelector("ul")
  const li = document.createElement("li");
  li.innerHTML = "<input type='checkbox'></input> " + addedTask
  ul.appendChild(li)
};
