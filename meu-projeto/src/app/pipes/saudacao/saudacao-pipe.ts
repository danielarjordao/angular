import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saudacao',
})
export class SaudacaoPipe implements PipeTransform {
  transform(nome: string): string {
    const horaAtual = new Date().getHours();

    if (horaAtual < 12) {
      return `Bom dia, ${nome}!`;
    } else if (horaAtual < 18) {
      return `Boa tarde, ${nome}!`;
    } else {
      return `Boa noite, ${nome}!`;
    }
  }
}
