import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ApiResponse {
  name: string;
  fecha: string;
  time: string;
  autor: string;
  cantidad: string;
  suma: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  name: string;
  fecha: string;
  time: string;
  autor: string;
  cantidad: string;
  suma: string;

  constructor(private http: HttpClient) {
    this.name = "";
    this.fecha = "";
    this.time = "";
    this.autor = "";
    this.cantidad= "";
    this.suma = "";
   }
  ngOnInit(): void {
    this.getData();
  }
  
  getData() {
    this.http.get<ApiResponse>('http://192.168.80.25:30009/').subscribe(data => {
      this.autor = data.autor;
      this.cantidad = data.cantidad;
      this.suma = data.suma;
    });
      this.http.get<ApiResponse>('http://192.168.80.25:30010/').subscribe(data => {
      this.autor = data.autor;
      this.name = data.name;
      this.fecha = data.fecha;
      this.time = data.time;
    });
    
  }
  
}
