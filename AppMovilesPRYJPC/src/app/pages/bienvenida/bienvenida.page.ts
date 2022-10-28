import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  constructor(
    private activeroute: ActivatedRoute
    , private router: Router
  ) { }

  ingresarLogin(): void{
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
