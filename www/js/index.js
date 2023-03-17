
document.addEventListener('deviceready', onDeviceReady, false);

function calcularSalarioLiquido(salarioBruto) {
    const vSalario = 0;
    const vResultado = 0;
    const vSalLiquido = 0;
    const calculo_INSS = 0;
    const calculo_IR = 0;
    const nDependentes = 0;

    // Calculos de desconto do inss
    if(vSalario <= 1100.00) //1º calculo
    {
    calculo_INSS = vSalario * 0.075;
    }
    else
        if(vSalario >= 1100.01 && vSalario <= 2203.48) // 2º Calculo
        {
        calculo_INSS = vSalario * 0.09;
        }
        else
            if(vSalario >= 2203.49 && vSalario <= 3305.22) // 3º Calculo
            {
            calculo_INSS = vSalario * 0.12;
            }
            else
                if(vSalario >= 3305.23 && vSalario <= 6433.57) // 4º Calculo
                {
                calculo_INSS - vSalario * 0.14;
                }
         //Calculo Imposto de Renda   
    calculo_IR = (vSalario - (nDependentes * 189.59));

    if (calculo_IR <= 1903.98)
        {
        vResultado = 0;
        }
        else
            if (calculo_IR >= 1903.08 &&  calculo_IR <= 2826.65)
            {
                vResultado = calculo_IR * 0.075;
            }
            else
                if (calculo_IR >= 2826.65  &&  calculo_IR <= 3751.05)
                {
                    vResultado = calculo_IR * 0.15;
                }
                else
                    if (calculo_IR >= 3751.05  &&  calculo_IR <= 4664.68)
                    {
                        vResultado = calculo_IR * 0.275;
                    }

    vSalLiquido = vSalario - vResultado - calculo_INSS; // Calculo resultado final

                printf( "\nSeu desconto de Inss é: %.2f\n\n", calculo_INSS);

                printf( "O valor pago para Imposto do renda é de: %.2f\n\n", vResultado);

                printf( "Seu sálario final ficou no valor: %.2f\n\n", vSalLiquido);
}

function limparInputs() {
    document.getElementById('salario-bruto').value = '';
    document.getElementById('descontos').value = '';
    document.getElementById('dependentes').value = '';
}

  