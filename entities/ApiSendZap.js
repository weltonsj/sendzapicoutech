function phoneNumberFormatter(phone) {
  if (phone) {
    let regex = ""
    const newTel = () => {
      phone.match(/[0-9]/gm).forEach(num => {
        regex += num
      })
    };
    newTel();
    const newRegex = regex[2] === "9" ? regex.replace("9", "") : "";
    return newRegex;
  }
  return ""
};

function insertDate(insertDate, insertHour) {
  const date = new Date(`${insertDate}T${insertHour}`);
  return date;
};

const list = [
  {
    msg1:
      `*Prezado cliente*, Gostaríamos de lembrá-lo que sua assinatura em nosso app *vence amanhã dia 19/01*, renove até a data para continuar aproveitando todo conteúdo disponível em sua casa.\n\nPara renovar sua assinatura no valor de *R$ 30,00* é bem simples, efetue o pagamento usando uma das alternativas abaixo.\n\n*Chave pix* financeiro@icoutech.com\n\nOu\n\n*Cartão de crédito* http://mpago.la/2pLXzL1\n\nA renovação do serviço ocorrera dentro de *24h* logo após a confirmação do pagamento.\n\nAgradecemos a sua confiança e ficamos à disposição para qualquer dúvida ou suporte que precise.\n\n*Obs: No cartão de crédito será cobrado uma taxa extra de R$1,99*\n\nAtenciosamente, Equipe de atendimento *Icoutech*.`,
  }
]

function sendTickBlue(schedulingDate, phone, urlImage) {
  return fetch("https://api.blueticks.co/messages",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        apiKey: "qNRVF0x1cByvQfrL13o8xDsxhSklYEBV",
        to: phone,
        message: list[0].msg1,
        asset: {
          url: (urlImage),
          type: "image/png",
        },
        dueDate: schedulingDate,
      }),
    }
  )
};

export { insertDate, sendTickBlue, phoneNumberFormatter };