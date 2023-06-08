// cria um novo objeto do tipo Date com as data atual
const dataAtual = new Date();

const diaAtual = String(dataAtual.getDate()).padStart(2, '0');
export const diaAtualSemZero = String(dataAtual.getDate());
const mesAtual = String(dataAtual.getMonth() + 1).padStart(2, '0');
export const anoAtual = String(dataAtual.getFullYear());

// cria um novo objeto com parametros de mes e ano atuais para selecionar o mes anterior
const mesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth() - 1, 1);

// nome do mes anterior em portugues brasileiro ex: "jul"
export const nomeMesAnterior = mesAnterior.toLocaleString('pt-BR', { month: 'short' }).slice(0, -1);
const numeroMesAnterior = String(mesAnterior.getMonth() + 1).padStart(2, '0');

export const dataAtualFormatado = diaAtual + '/' + mesAtual + '/' + anoAtual;

//nome da data atual com o mes anterior 
export const dataAtualMesAnterior = diaAtual + '/' + numeroMesAnterior + '/' + anoAtual; // continuacao do erro

// cria um novo objeto com parametros de data de nascimento
// o mes devera ser (mes - 1) pois o contador da data começa em 0
const dataDeNascimento = new Date(1998, 6, 21);

export const diaNascimento = String(dataDeNascimento.getDate()).padStart(2, '0');
export const mesNascimento = String(dataDeNascimento.toLocaleString('pt-BR', { month: 'short' })).slice(0, -1);
export const anoNascimento = String(dataDeNascimento.getFullYear());

export const dataNascimento = '21/07/1998';