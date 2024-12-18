import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Fac1Component } from './fac1/fac1.component';
import { Fac2Component } from './fac2/fac2.component';
import { FacultyComponent } from './faculty/faculty.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent, title:"Home Page"},
    {path:"about", component:AboutComponent, title:"About Page"},
    {path:"contact", component:ContactComponent, title:"Contact Page"},
    {path:"faculty", component:FacultyComponent, 
        children:[
            {path:"fac1", component:Fac1Component},
            {path:"fac2", component:Fac2Component},
        ]
    }
];
