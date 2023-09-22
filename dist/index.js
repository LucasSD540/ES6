let Alunos = [{
  "nome": "Zé",
  "nota": 8
}, {
  "nome": "Lucas",
  "nota": 10
}, {
  "nome": "Matheus",
  "nota": 5
}];
function retornaAprovados() {
  const aprovados = Alunos.filter(aluno => aluno.nota >= 6);
  return aprovados;
}
console.log(retornaAprovados());