import { prompt, questionInt, questionFloat, question } from "readline-sync";
import { Conta } from "./src/model/Conta";
import { colors } from "./src/util/Colors";

export const main = () => {
  const contas: Conta[] = [];

  // Teste
  const conta1: Conta = new Conta(1, 123, 1, "Eden", 100200);
  const conta2: Conta = new Conta(2, 456, 1, "Konde", 200200);
  conta1.visualizar();
  conta1.sacar(10500);
  conta1.visualizar();
  conta2.depositar(5000);
  conta2.visualizar();

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

        const novaConta = new Conta(numero, agencia, tipo, titular, saldo);
        contas.push(novaConta);

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
