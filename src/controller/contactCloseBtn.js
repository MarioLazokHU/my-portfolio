export function contactCloseBtn(){
  const contact = document.querySelector("#contact")
  const close = document.querySelector(".close")
  close.addEventListener("click",()=>{
    contact.classList.remove("nohidden")
    contact.classList.add("hidden")
  })
}