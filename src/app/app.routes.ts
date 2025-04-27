import { Route } from '@angular/router';
import { AboutMeComponent }    from './about-me/about-me.component';
import { SkillsComponent }     from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Route[] = [
  { path: 'about-me',   component: AboutMeComponent   },
  { path: 'skills',     component: SkillsComponent    },
  { path: 'experience', component: ExperienceComponent},
  { path: '', redirectTo: 'about-me', pathMatch: 'full' }
];
