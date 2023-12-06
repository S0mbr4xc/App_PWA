import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  paginas =[
    {titulo: 'Inicio', path: 'paginas/inicio'},
    {titulo: 'Ingresar tarea', path: 'paginas/form'},
    {titulo: 'Tareas', path: 'paginas/tareas'}
  ]
}
