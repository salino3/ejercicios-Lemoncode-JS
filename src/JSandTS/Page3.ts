// 5. Slot Machine

// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos
// insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente
// se irá incrementando conforme vayamos jugando.

// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres
// booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los
// tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

//* "Congratulations!!!. You won <número de monedas> coins!!";
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

//* "Good luck next time!!";
// Ejemplo de uso // coinsEarned

interface ToolsRuleta {
  ruletaStatus?: boolean;
  ruletaCode?: number;
};

class Ruleta implements ToolsRuleta {
  ruletaCode: number;
  ruletaStatus: boolean;
  this: any;

  constructor(ruletaCode: number, ruletaStatus: boolean = false) {
    this.ruletaStatus = ruletaStatus;
    this.ruletaCode = ruletaCode;
  };

  Status() {
    let casualNum: number = Math.floor(Math.random() * 2) + 1;
    // console.log(casualNum);
    if (casualNum === 1) {
      return (this.ruletaStatus = true);
    } else {
      return (this.ruletaStatus = false);
    };
  };

  Message() {
    this.Status();
    console.log(
      "the ruleta " + this.ruletaCode + " has the value: " + this.ruletaStatus
    );
  }
};

let ruleta1 = new Ruleta(1);
let ruleta2 = new Ruleta(2);
let ruleta3 = new Ruleta(3);
let ruleta4 = new Ruleta(4);
let ruleta5 = new Ruleta(5);
let ruleta6 = new Ruleta(6);

class SlothMachine {
  ruletas: Ruleta[];
  coinsEarneds: number;

  constructor(ruletas: Ruleta[], coinsEarneds: number = 0) {
    this.ruletas = ruletas;
    this.coinsEarneds = coinsEarneds;
  };

  Play() {

    this.coinsEarneds++;

    let r1 = this.ruletas[0].Status();
    let r2 = this.ruletas[1].Status();
    let r3 = this.ruletas[2].Status();

    console.log(this.coinsEarneds);
    if (
      this.ruletas[0].ruletaStatus &&
      this.ruletas[1].ruletaStatus &&
      this.ruletas[2].ruletaStatus
    ) {
      console.log(
        `the slot machine values are ${r1} - ${r2} - ${r3}; Congratulations!!!. You won ${this.coinsEarneds} coins!!`
      );
      this.coinsEarneds = 0;
    } else {
      console.log(
        `the slot machine values are ${r1} - ${r2} - ${r3}; Good luck next time!!`
      );
    }
  }
};

const machine1 = new SlothMachine([ruleta1, ruleta2, ruleta3]);
const machine2 = new SlothMachine([ruleta4, ruleta5, ruleta6]);

// machine1.Play();

machine2.Play();
machine2.Play();
machine2.Play();
machine2.Play();
machine2.Play();
