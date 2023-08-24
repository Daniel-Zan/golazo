import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-fibonaci',
  templateUrl: './fibonaci.page.html',
  styleUrls: ['./fibonaci.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FibonaciPage {
  public fibonacciNumbers: number[] = [];

  constructor() {}

  ionViewDidEnter() {
    this.calculateFibonacciSeries(200);
  }

  calculateFibonacciSeries(n: number) {
    let a = 0;
    let b = 1;
    this.fibonacciNumbers = [a, b];
    
    for (let i = 2; i < n; i++) {
      const next = a + b;
      this.fibonacciNumbers.push(next);
      a = b;
      b = next;
    }
  }
}


