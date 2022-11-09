import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Recetaalimento } from './model/recetaalimento';
import { AlimentoCreaeditaComponent } from './page/alimento/alimento-creaedita/alimento-creaedita.component';
import { AlimentoComponent } from './page/alimento/alimento.component';
import { BancoCreaeditaComponent } from './page/banco/banco-creaedita/banco-creaedita.component';
import { BancoComponent } from './page/banco/banco.component';
import { CitaCreaeditaComponent } from './page/cita/cita-creaedita/cita-creaedita.component';
import { CitaComponent } from './page/cita/cita.component';
import { DietaCreaeditaComponent } from './page/dieta/dieta-creaedita/dieta-creaedita.component';
import { DietaComponent } from './page/dieta/dieta.component';
import { DietarecetaCreaeditaComponent } from './page/dietareceta/dietareceta-creaedita/dietareceta-creaedita.component';
import { DietarecetaComponent } from './page/dietareceta/dietareceta.component';
import { EjercicioCreaeditaComponent } from './page/ejercicio/ejercicio-creaedita/ejercicio-creaedita.component';
import { EjercicioComponent } from './page/ejercicio/ejercicio.component';
import { PlanCreaeditaComponent } from './page/plan/plan-creaedita/plan-creaedita.component';
import { PlanComponent } from './page/plan/plan.component';
import { PreguntaCreaeditaComponent } from './page/pregunta/pregunta-creaedita/pregunta-creaedita.component';
import { PreguntaComponent } from './page/pregunta/pregunta.component';
import { RecetaCreaeditaComponent } from './page/receta/receta-creaedita/receta-creaedita.component';
import { RecetaComponent } from './page/receta/receta.component';
import { RecetaalimentoCreaeditaComponent } from './page/recetaalimento/recetaalimento-creaedita/recetaalimento-creaedita.component';
import { RecetaalimentoComponent } from './page/recetaalimento/recetaalimento.component';
import { RutinaCreaeditaComponent } from './page/rutina/rutina-creaedita/rutina-creaedita.component';
import { RutinaComponent } from './page/rutina/rutina.component';
import { RutinaejercicioCreaeditaComponent } from './page/rutinaejercicio/rutinaejercicio-creaedita/rutinaejercicio-creaedita.component';
import { RutinaejercicioComponent } from './page/rutinaejercicio/rutinaejercicio.component';
import { SuscripcionCreaeditaComponent } from './page/suscripcion/suscripcion-creaedita/suscripcion-creaedita.component';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { TarjetaCreaeditaComponent } from './page/tarjeta/tarjeta-creaedita/tarjeta-creaedita.component';
import { TarjetaComponent } from './page/tarjeta/tarjeta.component';
import { TipousuarioCreaeditaComponent } from './page/tipousuario/tipousuario-creaedita/tipousuario-creaedita.component';
import { TipousuarioComponent } from './page/tipousuario/tipousuario.component';
import { UsuarioCreaeditaComponent } from './page/usuario/usuario-creaedita/usuario-creaedita.component';
import { UsuarioComponent } from './page/usuario/usuario.component';

const routes: Routes = [
  {
    path: 'alimentos', component: AlimentoComponent, 
    children: [
      { path: 'nuevo', component: AlimentoCreaeditaComponent}, 
      { path: 'edicion/:id', component: AlimentoCreaeditaComponent } ],
  },
  {
    path: 'usuarios',
    component: UsuarioComponent,
    children: [
      { path: 'nuevo', component: UsuarioCreaeditaComponent },
      { path: 'edicion/:id', component: UsuarioCreaeditaComponent }
  ]
  },
  {
    path: 'preguntas',
    component: PreguntaComponent,
    children: [
      { path: 'nuevo', component: PreguntaCreaeditaComponent },
      { path: 'edicion/:id', component: PreguntaCreaeditaComponent }
  ]
  },
  {
    path: 'planes',
    component: PlanComponent,
    children: [
      { path: 'nuevo', component: PlanCreaeditaComponent},
      { path: 'edicion/:id', component: PlanCreaeditaComponent }
    ]
  },
  {
    path: 'recetas',
    component: RecetaComponent,
    children: [
      { path: 'nuevo', component: RecetaCreaeditaComponent},
      { path: 'edicion/:id', component: RecetaCreaeditaComponent }
    ]
  },
  {
    path: 'ejercicios',
    component: EjercicioComponent,
    children: [
      { path: 'nuevo', component: EjercicioCreaeditaComponent},
      { path: 'edicion/:id', component: EjercicioCreaeditaComponent }
    ]
  },
  {
    path: 'bancos',
    component: BancoComponent,
    children: [
      { path: 'nuevo', component: BancoCreaeditaComponent},
      { path: 'edicion/:id', component: BancoCreaeditaComponent }
    ]
  },
  {
    path: 'citas',
    component: CitaComponent,
    children: [ 
      { path: 'nuevo', component: CitaCreaeditaComponent },
      { path: 'edicion/:id', component: CitaCreaeditaComponent}
    ]
  },
  {
    path: 'suscripciones',
    component: SuscripcionComponent,
    children: [ 
      { path: 'nuevo', component: SuscripcionCreaeditaComponent },
      { path: 'edicion/:id', component: SuscripcionCreaeditaComponent}
    ]
  },
  {
    path: 'tipo_usuarios',
    component: TipousuarioComponent,
   children: [
    { path: 'nuevo', component: TipousuarioCreaeditaComponent},
    { path: 'edicion/:id', component: TipousuarioCreaeditaComponent }
  ]
  },
  {
    path:'rutinas', 
    component: RutinaComponent,
    children: [ 
      { path: 'nuevo', component: RutinaCreaeditaComponent },
      { path: 'edicion/:id', component: RutinaCreaeditaComponent}
    ],
  },
  {
    path:'rutina_ejercicios', 
    component: RutinaejercicioComponent,
    children: [ 
      { path: 'nuevo', component: RutinaejercicioCreaeditaComponent },
      { path: 'edicion/:id', component: RutinaejercicioCreaeditaComponent}
    ],
  },
  {
    path:'dietas', 
    component: DietaComponent,
    children: [
      { path: 'nuevo', component: DietaCreaeditaComponent },
      { path: 'edicion/:id', component: DietaCreaeditaComponent }
  ]
  },
  {
    path:'dieta_recetas', 
    component: DietarecetaComponent,
    children: [
      { path: 'nuevo', component: DietarecetaCreaeditaComponent },
      { path: 'edicion/:id', component: DietarecetaCreaeditaComponent }
  ]
  },
  {
    path:'tarjetas', 
    component: TarjetaComponent,
    children: [
      { path: 'nuevo', component: TarjetaCreaeditaComponent },
      { path: 'edicion/:id', component: TarjetaCreaeditaComponent }
  ]
  },
  {
    path:'receta_alimentos', 
    component: RecetaalimentoComponent,
    children: [
      { path: 'nuevo', component: RecetaalimentoCreaeditaComponent },
      { path: 'edicion/:id', component: RecetaalimentoCreaeditaComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
