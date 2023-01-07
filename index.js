const modeloMensagemTeams = require("./mensagemTeams.model");
const axios = require("axios").default;

exports.handler = async (event, context) => {
  try {
    let body = JSON.parse(event.body);

    if (!body.titulo) throw "O título é obrigatório";
    if (!body.mensagem) throw "A mensagem é obrigatória";

    const mensagemEnviarTeams = await modeloMensagemTeams.gerarMensagem(
      body.titulo,
      body.mensagem
    );

    await axios.post(process.env.HOOK_TEAMS, mensagemEnviarTeams);

    return {
      statusCode: 200,
      body: JSON.stringify({ mensagem: "Mensagem enviada com sucesso" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error }),
    };
  }
};
