import { Component, OnInit } from '@angular/core';
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
export class FibonaciPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
