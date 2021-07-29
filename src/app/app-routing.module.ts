import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';


const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'education' , component: EducationComponent},
  {path: 'experience' , component: ExperienceComponent},
  {path: 'projects' , component: ProjectsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
