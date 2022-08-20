const body = document.querySelector('body');
window.addEventListener("click", () => {
  const status = body.getAttribute("status");
  if (status === "false") {
    body.style.backgroundColor = 'red';
    body.setAttribute("status"."true");
  }
  else {
    body.style.backgroundColor = 'green';
    body.setAttribute("status"."false");
  }
});
