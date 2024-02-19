import { insertDate, phoneNumberFormatter, sendTickBlue } from "../entities/ApiSendZap.js";

const save = document.getElementById("save");
const phone = document.getElementById("tel");
const date = document.getElementById("date");
const time = document.getElementById("time");
const urlImage = document.getElementById("urlimage");
const DDIPhone = phone.dataset.prefixo;

save.addEventListener("click", () => {
  const entries = {
    date: insertDate(date.value, time.value),
    phone: DDIPhone + phoneNumberFormatter(phone.value),
    image: urlImage.value
  }

  console.log(entries);
  const currentDate = new Date();
  const inputDate = entries.date;

  const horaAtual = `${currentDate.getHours()}${currentDate.getMinutes()}`
  const horaAgendada = `${inputDate.getHours()}${inputDate.getMinutes()}`

  const value = (horaAgendada - horaAtual) * 60;
  let secounds = value;
  const interval = setInterval(() => {
    secounds--
    console.clear();
    console.log(secounds);
    secounds <= 0 ? clearInterval(interval) : "";
    secounds === 0 ? console.log("Mensagem enviada com sucesso!") : "";
  }, 1000);
  sendTickBlue(entries.date, entries.phone, entries.image);
})


