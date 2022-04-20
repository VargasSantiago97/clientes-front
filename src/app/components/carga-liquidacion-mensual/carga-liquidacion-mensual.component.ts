import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-carga-liquidacion-mensual',
  templateUrl: './carga-liquidacion-mensual.component.html',
  styleUrls: ['./carga-liquidacion-mensual.component.css']
})
export class CargaLiquidacionMensualComponent implements OnInit {

  idCliente: any;
  idPeriodo: any;

  aliasCliente : string = '';
  cuitCliente : string = '';

  aCopiar : any = {};



  observacionesCliente : string = '';

  fecha : any;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idCliente = params.get('idCliente');
      this.idPeriodo = params.get('idPeriodo');
    });


    this.aliasCliente = 'Vargas, Santiago Manuel';
    this.cuitCliente = '20-40500364-4';

    this.aCopiar = {
      cuit : '20405003644',
      afip : '0407Santiago',
      atp : 'ClaveATP',
      cuitGuion : '20-40500364-4'
    }

    this.observacionesCliente = '...\n...\n...';

    this.fecha = new Date('Wed Apr 15 2022 01:02:36 GMT-0300');
    console.log(this.fecha)

  }

  copiarAlPortapapeles(aCopiar:any){
    var txtArea = document.createElement("textarea");
    txtArea.id = 'txt';
    txtArea.style.position = 'fixed';
    txtArea.style.top = '0';
    txtArea.style.left="0";
    txtArea.style.opacity = '0';
    txtArea.value = this.aCopiar[aCopiar];
    document.body.appendChild(txtArea);
    txtArea.select();
  
    try {
      var successful = document.execCommand('copy');
    } catch (err) {
      alert('Error al copiar')
    }
    document.body.removeChild(txtArea);
    return false;
  }



}
