import { prompt, questionInt, questionFloat, question } from "readline-sync";
import { Conta } from "./src/model/Conta";
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export const main = () => {
  const contas: Conta[] = [];

  // Teste ContaCorrente
  const contacorrente: ContaCorrente = new ContaCorrente(
    12023656,
    422,
    1,
    "Musta Konde",
    75000,
    45000
  );
  contacorrente.visualizar();
  contacorrente.sacar(2000);
  contacorrente.visualizar();
  contacorrente.depositar(1000);
  contacorrente.visualizar();

  // TesteContaPoupanca
  const contapoupanca: ContaPoupanca = new ContaPoupanca(
    12023652,
    233,
    2,
    "Eden Junior",
    5000,
    70
  );
  contapoupanca.visualizar();
  contapoupanca.sacar(200);
  contapoupanca.visualizar();
  contapoupanca.depositar(1000);
  contapoupanca.visualizar();

  let opcao: number;
  while (true) {
    console.log(
      colors.bg.black,
      colors.fg.yellow,
      "******************************************************"
    );
    console.log("                                                  ");
    console.log("               KONDE BANK                         ");
    console.log("                                                  ");
    console.log("**************************************************");
    console.log("                                                  ");
    console.log("           1 - Criar Conta                        ");
    console.log("           2 - Listar todas as Contas             ");
    console.log("           3 - Buscar Conta por Numero            ");
    console.log("           4 - Atualizar Dados da Conta           ");
    console.log("           5 - Apagar Conta                       ");
    console.log("           6 - Sacar                              ");
    console.log("           7 - Depositar                          ");
    console.log("           8 - Transferir valores entre Contas    ");
    console.log("           9 - Sair                               ");
    console.log("                                                  ");
    console.log("                                                  ");
    console.log("**************************************************");
    console.log("                                                  ");

    opcao = questionInt("Entre com a opcao desejada: ");
    if (opcao == 9) {
      console.log(
        colors.fg.greenstrong,
        "\nKonde Bank - O seu Futuro começa aqui!"
      );
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
        const numero = questionInt("Numero da conta: ");
        const agencia = questionInt("Agencia: ");
        const tipo = questionInt("Tipo (1 - Corrente, 2 - Poupanca): ");
        const titular = question("Nome do titular: ");
        const saldo = questionFloat("Saldo inicial: ");

        keyPress();
        break;
      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n",
          colors.reset
        );

        contas.forEach((conta) => {
          conta.visualizar();
        });

        keyPress();
        break;
      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar dados da Conta - por número\n\n",
          colors.reset
        );
        const numConta = questionInt("Numero da conta : ");
        const conta = contas.find((conta) => conta.numero === numConta);

        conta
          ? conta.visualizar()
          : console.log("Número da conta não localizada");

        keyPress();
        break;
      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset
        );

        keyPress();
        break;
      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nApagar uma Conta\n\n",
          colors.reset
        );

        keyPress();
        break;
      case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

        keyPress();
        break;
      case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

        keyPress();
        break;
      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferência entre Contas\n\n",
          colors.reset
        );

        keyPress();
        break;
      default:
        console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

        keyPress();
        break;
    }
  }
};

export const sobre = (): void => {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: ");
  console.log("Eden Konde - edenk@genstudents.org");
  console.log("https://github.com/EdenKonde/conta_bancaria");
  console.log("*****************************************************");
};

export const keyPress = (): void => {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  prompt();
};

main();
