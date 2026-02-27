# Angular

## Data Binding

### O que é Data Binding?

Data Binding é um mecanismo que permite a comunicação entre o componente e a view em Angular. Ele facilita a sincronização de dados entre o modelo (componente) e a interface do usuário (view). Existem quatro tipos principais de Data Binding em Angular:

1. **Interpolation (Interpolação)**: Permite a exibição de dados do componente na view usando a sintaxe `{{ }}`. Por exemplo, `{{ title }}` exibirá o valor da propriedade `title` do componente.

2. **Property Binding (Vinculação de Propriedades)**: Permite a vinculação de propriedades do componente a elementos HTML usando a sintaxe `[ ]`. Por exemplo, `[src]="imageUrl"` vincula a propriedade `imageUrl` do componente ao atributo `src` de uma tag `<img>`.

3. **Event Binding (Vinculação de Eventos)**: Permite a vinculação de funções de eventos do componente a elementos HTML usando a sintaxe `( )`. Por exemplo, `(click)="onButtonClick()"` vincula a função `onButtonClick` do componente ao evento `click` de um elemento HTML.

4. **Two-way Data Binding (Vinculação de Dados de Duas Ways)**: Permite a sincronização bidirecional de dados entre o componente e a view usando a sintaxe `[( )]`. Por exemplo, `[(ngModel)]="name"` vincula a propriedade `name` do componente a um campo de entrada, permitindo que as mudanças sejam refletidas em ambos os lados.

### Diretivas de Estrutura

As diretivas de estrutura em Angular são usadas para alterar a estrutura do DOM. As principais diretivas de estrutura são:

1. **If**: Permite a exibição condicional de elementos com base em uma expressão. Por exemplo:

```html
@if (isLoggedIn) {
  <p>Bem-vindo, usuário!</p>
} @else if {isAdmin} {
  <p>Bem-vindo, administrador!</p>
} else {
  <p>Por favor, faça login.</p>
}
```

2. **For**: Itera sobre uma coleção de itens e cria um novo elemento para cada item. Por exemplo:

```html
@for (let i = 0; i < items.length; i++) {
   <p>{{ items[i] }}</p>
}
```

3. **Switch**: Permite a exibição de elementos com base em uma expressão de switch. Por exemplo:

```html
@switch (userRole) {
  @case 'admin':
    <p>Bem-vindo, administrador!</p>
  @case 'user':
    <p>Bem-vindo, usuário!</p>
  @default:
	<p>Bem-vindo, visitante!</p>
}
```

## Pipes

Pipes são usados para transformar dados em Angular. Eles permitem que você formate ou transforme os dados antes de exibi-los na view. Alguns exemplos de pipes comuns incluem:

1. **DatePipe**: Formata datas. Por exemplo, `{{ today | date:'shortDate' }}` exibirá a data atual no formato curto.

2. **NumberPipe**: Formata números. Por exemplo, `{{ value | number:'1.2-2' }}` exibirá o valor com duas casas decimais.

3. **CurrencyPipe**: Formata valores monetários. Por exemplo, `{{ price | currency:'USD' }}` exibirá o preço formatado como moeda em dólares.

4. **UpperCasePipe**: Converte texto para maiúsculas. Por exemplo, `{{ name | uppercase }}` exibirá o nome em letras maiúsculas.

5. **LowerCasePipe**: Converte texto para minúsculas. Por exemplo, `{{ name | lowercase }}` exibirá o nome em letras minúsculas.

6. **Custom Pipes**: Você também pode criar seus próprios pipes personalizados para atender a necessidades específicas de formatação ou transformação de dados. Utilizando o comando `ng generate pipe nome-do-pipe`, você pode criar um pipe personalizado e implementá-lo de acordo com suas necessidades.
