import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [NgbNavConfig], // add NgbNavConfig to the component providers

})
export class HomeComponent {
  constructor(config: NgbNavConfig,private router: Router) {
		// customize default values of navs used by this component tree
		config.destroyOnHide = false;
		config.roles = false;
	}
  goTo(){
    this.router.navigate(['/formEvent']);

  }
}
