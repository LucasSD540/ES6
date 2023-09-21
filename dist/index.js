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
  const aprovados = [];
  for (let i = 0; i < Alunos.length; i++) {
    if (Alunos[i].nota >= 6) {
      aprovados.push(Alunos[i]);
    }
  }
  return aprovados;
}
console.log(retornaAprovados());