#include <stdio.h>
#include <math.h>
#include <stdlib.h>

int main(){
    system("clear");

    int num;
    float raiz, quadrada;

    printf("Digite um número: ");
    scanf("%d", &num);

    quadrada = pow(num,2);
    raiz = sqrt(num);

    printf("Numero: %d\nQuadrada: %.1f\nRaiz: %.1f", num, quadrada, raiz);
    
    return 0;
}