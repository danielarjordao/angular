import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SaudacaoPipe } from '../pipes/saudacao/saudacao-pipe';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule, SaudacaoPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  titulo: string = 'Meu Projeto';
  logotipo: string = 'logo.png';
  nome: string = '';
  isLogado: boolean = false;
  tipo: string = 'admin';
  nomes: string[] = ['Ana', 'Maria', 'João'];
  cidade: string = 'Florianópolis';
  hoje: Date = new Date();
  Clicar() {
    alert('Botão clicado!');
  }
}

