import AWS from 'aws-sdk';

// Configure as credenciais da AWS
AWS.config.update({
  region: 'us-west-2',  // Certifique-se de que a região está correta
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const comprehend = new AWS.Comprehend();

export const getTermExplanationFromAWS = async (term) => {
  try {
    const params = {
      TextList: [term],
      LanguageCode: 'pt' // Certifique-se de que o idioma está correto
    };

    // Faz a chamada ao serviço AWS Comprehend
    const response = await comprehend.batchDetectKeyPhrases(params).promise();
    console.log('AWS Access Key:', process.env.REACT_APP_AWS_ACCESS_KEY_ID);
    console.log('AWS Secret Key:', process.env.REACT_APP_AWS_SECRET_ACCESS_KEY);

    // Retorna a explicação do termo
    if (response && response.ResultList && response.ResultList[0] && response.ResultList[0].KeyPhrases) {
      return response.ResultList[0].KeyPhrases[0].Text || `Explicação para o termo: ${term}`;
    } else {
      return 'Nenhuma explicação encontrada.';
    }
  } catch (error) {
    console.error('Erro ao obter explicação da AWS:', error);
    return 'Não foi possível obter a explicação no momento.';
  }
};
