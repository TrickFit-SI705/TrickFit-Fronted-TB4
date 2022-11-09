import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/model/plan';
import { PlanService } from 'src/app/service/plan.service';

@Component({
  selector: 'app-plan-buscar',
  templateUrl: './plan-buscar.component.html',
  styleUrls: ['./plan-buscar.component.css']
})
export class PlanBuscarComponent implements OnInit {

  constructor(private planService: PlanService) { }

  ngOnInit(): void {
  }
  buscarnombre(e: any) {
    let array: Plan[] = [];
    this.planService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombrePlan.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.planService.setLista(array);
    })
  }
  

}
