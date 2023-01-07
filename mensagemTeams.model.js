exports.gerarMensagem = async (titulo, texto) => {
  let mensagem = {
    type: "message",
    attachments: [
      {
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
          type: "AdaptiveCard",
          version: "1.4",
          body: [
            {
              type: "TextBlock",
              size: "Medium",
              weight: "Bolder",
              text: `${titulo}`,
              wrap: true,
              color: "Attention",
            },
            {
              type: "TextBlock",
              text: `${texto}`,
              wrap: true,
            },
          ],
          actions: [],
        },
      },
    ],
  };

  return mensagem;
};
