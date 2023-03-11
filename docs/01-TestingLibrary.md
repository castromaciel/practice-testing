# Testing library

React testing library introduce una nueva API cuyos principales métodos son _**render**_ y _**screen**_. Con render podemos montar un componente de la forma habitual en React y con el singleton screen podemos leer lo que hay en él. Está centrado en el usuario

Javascript -> Testing Framework

Typescript -> Testing Library

Podemos introducir testing a cualquiera de estos frameworks.
Cambia el paradigma de hacer unit testing, esto es por que ahora los tests estan centrados en la interaccion que tiene el usuario para/con nuestros components.

Caracteristicas: 

- Ignora detalles de implementación
- Consulta el _**DOM**_

## Glosario del testing:

### describe

Consulta todos los test que describen el comportamiento que debe tener nuestro elemento a probar.

### Mock

Un mock es tratar de controlar lo que son variables y metodos con lo que nosotros esperamos. Por ejemplo si nosotros llamamos al login, esperamos una respuesta con informacion del usuario que esta iniciando.
Esta informacion es dinamica. por ello es que podemos generar un mock, que lo que hace es controlar este resultado.

```tsx
const mockedUser = {
  name: 'castromaciel',
  email: 'castromaciel@gmail.com'
}
```

### afterEach

Logica que se ejecuta luego de cada test, especial para volver a inicializar los mocks de prueba a sus valores iniciales.

```tsx
afterEach(jest.clearAllMocks)
```

### beforeEach

Se ejecuta antes de cada test. Recomendado para preparar funcionalidades que se reutilizan entre cada test.

```tsx
beforeEach(() => {
  render(<Login />)
})
```

## Estructura con jest

```tsx
// describe el comportamiento del elemento
describe('Componente', () => {
  // a quien describimos

  beforeEach(() => {
    // antes de cada test
  })

  afterEach(() => {
    // despues de cada test
  })

  // describe que debe hacer
  it('Hacer algo', () => {
    // logica del test
  })
})
```

```tsx
describe('Login', () => {
  let renderInstance;
  const mockedUser = {
    name: 'castromaciel',
    email: 'castromaciel@gmail.com'
  };

  beforeEach(() => {
    renderInstance = render(<Login />);
  })

  afterEach(jest.clearAllMocks)

  it('should render login', () => {
    expect(renderInstance).toBeTruthy();
  })
})
```

## Mindset Testing library

```mermaid
stateDiagram
  testing: Testing library
  do: Crea HTML
  add: Agerga elemento a probar
  direction LR
    testing --> do
    do --> add
```

### Importante !!

Para que el testing se realice correctamente

- Atomicidad
- Cada componente debe ocuparse de una única lógica
- Componentes reutilizables
- Componentes que no requieran de otros

> Esto nos facilitará el testing

### Snapshot del DOM

![Snapshot del DOM](01-SnapshotDom.png)

#### Como accedemos al snapshot? 

Importar el metodo **screen** de la librería.

## Tipos de queries
