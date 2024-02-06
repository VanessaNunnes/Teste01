const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Qual é a medida do lado X? ', (X) => {
    readline.question('Qual é a medida do lado Y? ', (Y) => {
        readline.question('Qual é a medida do lado Z? ', (Z) => {
            console.log(" ");
            console.log(`Valores Informados: Lado X = ${X}, Lado Y = ${Y}, Lado Z = ${Z}`);

            function trianguloValido() {
                if ((X < Y + Z) || (Y < X + Z) || (Z < X + Y)) {
                    //Para construir um triângulo é necessário que a medida de qualquer um dos lados seja menor que a soma dos 
                    //outros dois lados.
                }
                else {
                    console.log("Triangulo Inválido");
                    process.exit();
                }
            };
            
            function tipoTriangulo() {
                if (X == Y && Y == Z) {
                    //Triângulo equilátero: Todos os lados e ângulos iguais. Concluímos que seus ângulos serão de 60°. 
                    console.log("A classificação do seu triângulo é: Triângulo equilátero");
                }
                else if (X == Y || Y == Z || X == Z) {
                    //Triângulo isósceles: dois lados iguais e os ângulos opostos a esses lados iguais. 
                    console.log("A classificação do seu triângulo é: Triângulo isósceles");
                }
                else if (X != Y && Y != Z) {
                    //Triângulo escaleno: Todos os lados e ângulos são diferentes. 
                    console.log("A classificação do seu triângulo é: Triângulo escaleno");
                }
            };
            
            trianguloValido();
            tipoTriangulo();
            readline.close();
        });
    });
});

