import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";


@Component({
  selector:'app-header',
  standalone: true,
  imports: [RouterOutlet, TopMenuComponent,MainMenuComponent],
  // template:'<h3>Bhaskar Manna</h3>'
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent{

}
