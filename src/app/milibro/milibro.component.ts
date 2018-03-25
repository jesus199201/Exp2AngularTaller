import { Component, OnInit } from '@angular/core';
import {Libros} from '../libros';
import {LIBROS} from '../arraylibros';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-milibro',
  templateUrl: './milibro.component.html',
  styleUrls: ['./milibro.component.css']
})
export class MilibroComponent implements OnInit {

  Listado = LIBROS;
  selectedLibros: Libros;


  constructor() { }

  ngOnInit() {
  }

  onSelect(libros: Libros): void{

  this.selectedLibros = libros;
  
  }

}
