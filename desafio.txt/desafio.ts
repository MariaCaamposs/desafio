
function validarData(dia, mes, ano) {
    
    const data = new Date(ano, mes - 1, dia); 

    if (
        data.getDate() === parseInt(dia) &&
        data.getMes() === mes - 1 &&
        data.getAnoTodo() === parseInt(ano)
    ) {
        return data.toLocaleDateString('pt-BR'); 
        
        return null;
    }
}


const dia = 31;
const mes = 6;
const ano = 2024;

const dataValidada = validarData(dia, mes, ano);
if (dataValidada) {
    console.log(`A data ${dataValidada} é válida.`);
} else {
    console.log('A data fornecida é inválida.');
}
