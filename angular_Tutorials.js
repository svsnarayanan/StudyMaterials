Reaact vs Angular ::

- React provides virtual DOM
- Angular provides 2 way binding
- packaging is strong in react 
- Angular is javascript framework, which allows us to create reactive single page applications
- URL's are different, but the customer experience is very reactive


TypeScript in 5 Minutes: http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
The full TypeScript Handbook: http://www.typescriptlang.org/docs/handbook/basic-types.html
More about the CLI: https://cli.angular.io/
Most important => The CLI documentation: https://github.com/angular/angular-cli/wiki
Need more insights into Angular? Check out the official docs: https://angular.io/docs

Steps to set-up ::

1) sudo npm install -g @angular/cli@latest
2) ng new my-sample-app
3) go to that folder my-sample-app
4) ng serve
5) npm install --save bootstrap@3 // to download bootstrap css
6) To kill the port number access, sudo lsof -t -i tcp:4200 | xargs kill -9

Now angular app is ready to run, here is the URL ::  http://localhost:4200/

Directives, those are extended html attributes 


How its getting rendering the content from app component ?

- Index.html has the refernce of <app-root>
- main.ts imports the modules
- app.modules.ts (bootstrapped) has the reference of the exact modules to be loaded 
- Creating a complex modules into different simple, re-usuable components


Create components using CLI 

ng generate component <<component name >>
eg :: ng g c servers 

Components, 

Data-Binding
 String interpolation  - if you need to print something, then use this string interpolation
 Property Binding - if you want to change the property of a DOM element, then use this property binding concept
 Event binding
 Two way binding  - 

Directives ::
It gives directions to DOM 
*ngIf
ngStyle//similar to doing inline style
ngClass // applying class dynamically, this is the right approach,




