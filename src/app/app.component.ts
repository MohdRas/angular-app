import { Component } from "@angular/core";

@Component({
  selector : 'pm-root',
  template : `
  <div>
      <h1>{{pageTitle}}</h1>
      <div> <pm-products></pm-products></div>
  </div>`
})

// Angular compiler compiles, HTML templates and Components to Javascript code
export class AppComponent {
  pageTitle = 'Acme Product Management';
}