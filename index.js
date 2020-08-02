// Base a ser utilizada
const alunosDaEscola = [{nome:"Henrique",notas:[],cursos:[],faltas:5},
                        {nome:"Edson",notas:[],cursos:[],faltas:2},
                        {nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
                        {nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
                        {nome:"Carlos",notas:[],cursos:[],faltas:0},
                        {nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// Implementação
// Início da Função para adicionar um novo aluno à escola
function adicionarAluno(novoAluno){
    for (let i = 0; i < alunosDaEscola.length; i++){ // Início loop de verificação
        if (novoAluno == alunosDaEscola[i].nome){ // Verifica se o aluno já está matriculado na escola
          return console.log("Aluno já cadastrado na escola!");// Retorno caso o aluno seja encontrado
        };
    }; // Fim do loop de verificação
    
    if (typeof novoAluno === "string" && novoAluno != ""){
        alunosDaEscola.push({nome: novoAluno, notas:[], cursos: [], faltas:0}); // Adiciona o aluno caso o aluno não esteja matriculado na escola
        return console.log("Aluno cadastrado com sucesso!");
    } else{
        return console.log("Não foi possível cadastrar o aluno, verifique as informações e tente novamente."); //Caso haja algum erro na hora de cadastrar o aluno
    };
}; // Fim da Função

// Início da função para listar os alunos cadastrados na escola
function listarAlunos(){
    for(let i = 0; i < alunosDaEscola.length; i++){ // Loop para percorrer por todo o array de alunos
        console.log(alunosDaEscola[i].nome); // Imprimi o nome do aluno
    };
}; // Fim da função

// Início da função para buscar um determinado aluno
function buscarAluno(nomeDoAluno){
    for (let i = 0; i < alunosDaEscola.length; i++){ // Loop para percorrer por todo o array de alunos
        if (nomeDoAluno == alunosDaEscola[i].nome){ // Verificação se o que a função recebe condiz com algum dado do array
            return console.log("O aluno " + nomeDoAluno + " está cadastrado na escola!"); // Avisa que o aluno foi encontrado
        };
    };
    return console.log("O aluno " + nomeDoAluno + " não está cadastrado na escola! " + "\n" + "Verifique se a informção está correta e tente novamente."); // Avisa caso o aluno não esteja cadastrado
}; // Fim da função

// Início da função para matricular um aluno
function matricularALuno(aluno, curso){
    for (let i = 0; i < alunosDaEscola.length; i++){ // Loop para percorrer por todo o array de alunos
        if (aluno == alunosDaEscola[i].nome){ // Verifica se o aluno está cadastrado na escola
            alunosDaEscola[i].cursos.push({nomeDoCurso: curso, dataMatricula: new Date}); // Matricula o aluno em algum curso da escola
            return console.log("Aluno matirculado com sucesso!");
        };
    };
    return console.log("Impossível matricular o aluno!")   
}; // Fim da função

// Início da função aplicar falta à um aluno
function aplicarFalta (aluno){
    for (let i = 0; i < alunosDaEscola.length; i++){
        if (aluno == alunosDaEscola[i].nome && alunosDaEscola[i].cursos != 0){ // Verifica se o aluno está cadastrado e matriculado em algum curso
            alunosDaEscola[i].faltas += 1; // Aplica a falta
            return console.log("Falta aplicada ao aluno " + aluno + " com sucesso!");
        };
    };
    return console.log("O Aluno " + aluno + " não encontrado ou não está matriculado em algum curso!" + "\n" + "Por favor, verifique as informações e tente novamente!"); // Caso algum erro ocorra
}; // Fim da função

// Início da função aplicar nota à um aluno
function aplicarNota(aluno, nota){ // Implementar
    for (let i = 0; i < alunosDaEscola.length; i++){
        if (aluno == alunosDaEscola[i].nome && alunosDaEscola[i].cursos != 0){ // Verifica se o aluno está cadastrado e matriculado em algum curso
            alunosDaEscola[i].notas.push(nota); // Adiciona a nota do aluno
            return console.log("Nota aplicada ao aluno " + aluno + " com sucesso!");
        };
    };
    return console.log("O Aluno " + aluno + " não encontrado ou não está matriculado em algum curso!" + "\n" + "Por favor, verifique as informações e tente novamente!"); // Caso algum erro ocorra
}; // Fim da função

// Função para aprovar ou não um aluno
function aprovarAluno(aluno){
    let somaDasNotas = 0; // Variável que vai armazenar a soma das notas
    let quantidadeDeNotas = 0; // Variável que vai armazenar a quantidade de notas deum determinado aluno
    let mediaDasNotas = 0; // Média final das notas (soma das notas / total de notas)
    let numerosDeFaltas = 0; // Armazena o número de faltas de um aluno
    for (let i = 0; i < alunosDaEscola.length; i++){
        if (aluno == alunosDaEscola[i].nome && alunosDaEscola[i].cursos != 0){ // Verifica se o aluno está cadastrado e matriculado em algum curso
            for (let x = 0; x < alunosDaEscola[i].notas.length; x++){ // Percorre o array de notas de um determinado aluno
                somaDasNotas += alunosDaEscola[i].notas[x]; // Soma as notas
                quantidadeDeNotas += 1; // Armazena a quantidade de notas, cada iteração do for é igual a uma nota
                numerosDeFaltas = alunosDaEscola[i].faltas; // Recebe o total de faltas de um aluno
            };
        };
    };    
    mediaDasNotas =somaDasNotas / quantidadeDeNotas; // Calcula a média final do aluno
    if (mediaDasNotas >= 7 && numerosDeFaltas <= 3){ // Verifica se o aluno têm média suficiente e se não ultrapassou a quantidade de faltas
        return console.log("O aluno " + aluno + " foi aprovado!"); // Retorna a aprovação do aluno
    } else {
        console.log("O aluno " + aluno + " não atingiu o necessário para aprovação!"); // Retorna a reprovação do aluno
    };
}; // Fim da função