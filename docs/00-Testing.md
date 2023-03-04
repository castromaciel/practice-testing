# Testing!

Testing de caja negra, por que dentro de lo que es el frontend, se pueden probar muuuchas cosas.

## Que es el unit test?

Son pruebas unitarias. Que es lo que vamos a probar?
En los tests de caja negra, se prueba la logica de negocio.

Hay que hacer pruebas unitarias tanto en el front como en el back.

Beneficios de los unit tests: 

- Reducir la necesidad de codigo o pruebas manuales.
- Mejorar la calidad de codigo.
- Nos permite tener un correcto mantenimiento del codigo 
- El unit testing es una buenna inversion de tiempo.
- SE EJECUTA ANTES DE SUBIR A GIT || Bitbucket

## Prioritarios

- Mocks
- Caja negra
- Happy path
- Sad Path
- Arquitectura -> Testing

### Mocks

Un mock es tratar de cambiar como funciona una propiedad o una funcionalidad, a un ambiente controlado.

**Variable**
```js
const user = ??

const userMock = "castromaciellr'
```

**Método**
```js
const suma = (var1, var2) => var1 + var2

const sumaMock = () => 2
```

> "Siempre devuelve lo que esperamos"

Recomendacion: crear mock de los endpoints

```js
const login = async (email, password) => await postLogin(email, password)

const loginMock = async (email, password) => await Promise.resolve(true)
                                          => await Promise.reject(error)
```

### Caja negra

Simple diagrama de flujo

```mermaid
stateDiagram
  direction LR
  [*] --> Input
  Input --> dark_box
  state dark_box {
    direction LR
    ******************
  }
  dark_box --> Output
  Output --> [*]
```

Caso real

```mermaid
stateDiagram
  direction LR
  [*] --> mocks
  mocks --> dark_box
  state dark_box {
    direction LR
    methods
  }
  dark_box --> result
  result --> [*]
```

> El resultado tiene que ser igual a un resultado esperado
