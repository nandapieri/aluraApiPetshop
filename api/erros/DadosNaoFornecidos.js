class DadosNaoFornecidos extends Error {
  constructor() {
    super('Não foram fornecidos dados válidos para atualizar')
    this.name = 'DadosNaoFornecidos'
    this.idErro = 2
  }
}

module.exports = DadosNaoFornecidos
