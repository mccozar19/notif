const unReadMessage = document.querySelectorAll(".unread");
const unRead = document.getElementById("notification");
const markAll = document.getElementById("mark-all");

unRead.innerText = unReadMessage.length;

unReadMessage.forEach((message) => {
  message.addEventListener("click", () => {
    message.classList.remove("unread");
    const newUnReadMessage = document.querySelectorAll(".unRead");
    unRead.innerText = newUnReadMessage.length;
  });
});

markAll.addEventListener("click", () => {
  unReadMessage.forEach((message) => {
    message.classList.remove("unread");
  });
  const newUnReadMessage = document.querySelectorAll(".unRead");
  unRead.innerText = newUnReadMessage.length;
});
