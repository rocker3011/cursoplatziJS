# Platzom

Platzom es un idioma inventado para la practica
[Curso de fundamentos de JS](https://platzi.com/js)

## Descripcion del idioma :

- Si termina con "ar" se quitan esas letras
- si inicia con Z , se le a;ade "pe"  al final
- si la palabra traducida tiene 10 o mas letras, debe partir a la mitad
y colocar un guion en el medio
- por ultimo, si la palabra original es un palindromo, ninguna regla anterior aplica y se devuelve la misma palabra intercalando mayusculas y minusculas.

## Instalacion:
```
npm install platzom 
```

## Uso

```
import platzom from 'platzom'

platzom("Programar") // Program
platzom("Zorro") //Zorrope
platozm("Zarpar") //Zarppe
platzom("abecedario") //Abece-dario
platzom("ana") // AnA
```

##Creditos

- [Rodolfo Miquilarena](https://facebook.com/Rodolfo)

## Licencia

[MIT](https://opensource.org/licenses/MIT)