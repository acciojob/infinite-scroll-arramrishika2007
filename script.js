//your code here!
const list = document.getElementById("infi-list");

let count = 1;

function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = `List Item ${count++}`;
    list.appendChild(li);
  }
}

// Initial 10 items
addItems(10);

// Infinite scrolling
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});
