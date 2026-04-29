import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Social } from './pages/social/social';
import { Ressume } from './pages/ressume/ressume';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'skills',component:Skills},
    {path:'projects',component:Projects},
    {path:'social',component:Social},
    {path:'ressume',component:Ressume},
    {path:'contact',component:Contact}
];
