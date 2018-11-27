---
title: "Tipos de datos y operaciones Bitwise"
subTitle: Operaciones Bitwise
category: "CP III"
cover: bitwise.png
---

Aunque los conceptos mencionados en este módulo sean básicos estas lecciones están enfocadas a personas que tengan un conocimiento previo en programación y estén familiarizadas con la sintaxis de C++.

# Lección I: “Tipos de datos en C++ y Operaciones Bitwise”

Este apartado estará enfocado en los tipos de datos que soporta C++, incluyendo la capacidad de cada uno de estos tipos y además las operaciones a nivel de bits (operaciones bitwise) que soportan algunos de ellos más comúnmente conocidos como máscaras de bits.

## Tipos de datos:

Si bien es cierto que la capacidad de los datos depende en gran parte del compilador que usemos, podemos fijar un estándar suponiendo que usamos el compilador más común hoy por hoy. La familia de compiladores de GNU/G++ con el estándar del 2011 el cual ya viene incluido por defecto en los sistemas operativos tipo UNIX como lo son Linux y MacOS, ampliamente conocidos.

<center>

| Nombre             | Bits |               Dominio                |
| ------------------ | :--: | :----------------------------------: |
| char               |  8   |           Caracteres ASCII           |
| short              |  16  |       -(2^16-1) <= x <= 2^16-1       |
| unsigned short     |  16  |            0 <= x <= 2^16            |
| int                |  32  |       -(2^32-1) <= x <= 2^32-1       |
| unsigned int       |  32  |            0 <= x <= 2^32            |
| long long          |  64  |       -(2^64-1) <= x <= 2^64-1       |
| unsigned long long |  64  |            0 <= x <= 264             |
| double             |  64  |  2.23\*10^-308 <= x <= 1.79\*10^308  |
| long double        |  80  | 3.37\*10^-4932 <= x <= 1.18\*10^4932 |

</center>
</br>

Algunos tipos de datos se obviaron como los booleanos y los flotantes no se mencionaron debido a su falta de precisión.

## Máscaras de bits:

Se conoce como máscaras de bits a los tipos de datos enteros como son short, int, y long long tanto los signed como los unsigned, ya que estos datos soportan operaciones a nivel de bits de manera eficiente. Podemos definir las operaciones bitwise como operar directamente sobre la representación binaria de los datos que almacenan nuestras variables de tipo entero sean cualquiera de los tres tipos mencionados anteriormente.

Por ejemplo podemos definir el siguiente dato.

```C
int a = 3;
```

Nuestra variable “a” será representada en memoria como

```asm
00000000000000000000000000000011
```

Las operaciones bitwise que nos ofrece C++ sobre este tipo de datos son las siguientes:

1.  Negación y corrimientos:

    1.  `(a<<i) = 00000000000000000000000000000110`, esta operación equivale a multiplicar nuestro número por `2^i` donde i es igual a la cantidad de desplazamientos hacia la izquierda que hagamos, para este caso en particular nuestro i fue igual a 1.
    2.  `(a>>i) = 00000000000000000000000000000001`, esta operación equivale a dividir nuestro número entre `2^i` donde i es igual a la cantidad de desplazamientos hacia la derecha que hagamos, para este caso en particular nuestro i fue igual a 1.
    3.  `~(a) = 11111111111111111111111111111100` , niega los bits de nuestro número.

2.  Operaciones bitwise entre dos máscaras de bits de igual tamaño!!! (recomendado):

    1.  `(a & b):`

    ```
        a    -> 00000000000000000000000000000011
        b    -> 00000000000000000000000000000010
    --------------------------------------------
        (a & b) -> 00000000000000000000000000000010
    ```

    2.  `(a | b):`

    ```
        a    -> 00000000000000000000000000000011
        b    -> 00000000000000000000000000000010
    --------------------------------------------
        (a | b) -> 00000000000000000000000000000011
    ```

    3.  `(a ^ b):` xor

    ```
        a    -> 00000000000000000000000000000011
        b    -> 00000000000000000000000000000010
    --------------------------------------------
        (a ^ b) -> 00000000000000000000000000000001
    ```

3.  Manipulando máscaras de bits:

    1.  Encender el j-th bit usando la operación OR (|) `S |= (1 << j)`

    ```
    S = 34 (base 10) = 100010 (base 2)
    j = 3, 1 << j    = 001000 <- 1 desplazado 3 posiciones izq
                        ------ OR
    S = 42 (base 10) = 101010 (base 2) // 42 nuevo valor de S
    ```

    2.  Chequear si el j-th bit está encendido usando la operación AND (&) `T = S & (1 << j)`.

        Si T = 0 entonces el j-th bit está apagado

        Si T != 0 entonces el j-th bit está encendido

    ```
    S = 42 (base 10) = 101010 (base 2)
    j = 3, (1 << j)  = 001000 <- 1 desplazado 3 posiciones izq
                       ------ AND
    T = 8 (base 10)  = 001000 (base 2) -> no cero, el 3rd bit está encendido.
    ```

    ***

    ```
    S = 42 (base 10) = 101010 (base 2)
    j = 2, (1 << j)  = 000100 <- 1 desplazado 2 posiciones izq
                       ------ AND
    T = 8 (base 10)  = 000000 (base 2) -> cero, el 2rd bit está apagado.
    ```

    3.  Apagar el j-th bit usando la operación AND (&) `S &= ~(1 << j)`.

    ```
    S = 42 (base 10) = 101010 (base 2)
    j = 1, ~(1 << j) = 111101 <- ~ operación bitwise NOT
                       ------ AND
    S = 40 (base 10) = 101000 (base 2) // 40 nuevo valor de S
    ```

    4.  Hacer un toggle sobre el j-th bit usando la operación XOR (^) `S ^= (1 << j)`.

    ```
    S = 40 (base 10) = 101000 (base 2)
    j = 2, (1 << j)  = 000100 <- 1 desplazado 2 posiciones izq
                       ------ XOR
    S = 44 (base 10) = 101100 (base 2) // 44 nuevo valor de S
    ```

    ***

    ```
    S = 40 (base 10) = 101000 (base 2)
    j = 3, (1 << j)  = 001000 <- 1 desplazado 3 posiciones izq
                       ------ XOR
    S = 32 (base 10) = 100000 (base 2) // 32 nuevo valor de S
    ```

    5.  Obtener el valor del bit menos significativo LSB (least significant bit) o el primer bit encendido al lado derecho usaremos la siguiente operación bitwise `T = (S & (-S))`.

    ```
     S =  40 (base 10) = 000...000101000 (32 bits, base 2)
    -S = -40 (base 10) = 111...111011000 (complemento A2)
                         --------------- AND
     T =  8  (base 10) = 000...000001000 // el tercer bit es el primer bit que está encendido por la derecha
    ```

    6.  Encender n bits, para esto usamos `S = (1 << n) - 1` tener cuidado puede ocasionar un overflow si no tenemos en cuenta la talla de nuestra máscara de bits.

    Ejemplo para n = 3

    ```
    S + 1 = 8 (base 10) = 1000 <- 1 desplazado 3 posiciones izq
                             1
                          ---- -
    S     = 7 (base 10) =  111 (base 2)
    ```

    ***

    Ejemplo para n = 5

    ```
    S + 1 = 32 (base 10) = 100000 <- 1 desplazado 5 veces izq
                                1
                           ------ -
    S     = 31 (base 10) =  11111 (base 2)
    ```

    7.  Multiplicación y división de manera eficiente a base de corrimientos

    ```
    S                  = 34 (base 10) =  100010 (base 2)
    S = S << 1 = S * 2 = 68 (base 10) = 1000100 (base 2)
    S = S >> 2 = S / 4 = 17 (base 10) =   10001 (base 2)
    S = S >> 1 = S / 2 = 8  (base 10) =    1000 (base 2) <- LSB
    ```

## Ejercicios de practica

- [Coding Exercise](http://coj.uci.cu/24h/problem.xhtml?pid=3796)
- [Rotations](http://coj.uci.cu/24h/problem.xhtml?pid=3804)
- [Acarrear o no acarrear](https://www.urionlinejudge.com.br/judge/es/problems/view/1026)
