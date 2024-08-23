import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'dashboard',
    loadComponent:() => import('./dashboard/home/home.component') ,
    children:[
        {
            path:'home-view',
            loadComponent: () => import('./dashboard/dashboard.component')
        },
        { path:'lista-tienda',
            loadComponent: ()=> import('./tiendas/tiendas.component') 
         },
         {
            path:'',
            redirectTo:'home-view',
            pathMatch:'full',
         }

    ]
        
  
  },

 

 {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
 }
 
 
];
