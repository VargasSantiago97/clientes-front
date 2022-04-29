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



  datosPrincipalesCliente : any;

  botonesCopiar : any;

  datosLiquidacion : any;
  datosLiquidacionAnterior : any;

  //RETENCIONES
  tiposRetenciones : any;
  agentesRetencion : any;

  agentesEnTipos : any = [];


  displayModalRetencion: boolean = true;

  uploadedFiles: any[] = [{name: 'previo', size:'10'}];

  groupedCities : any;
  selectedCountries : any;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idCliente = params.get('idCliente');
      this.idPeriodo = params.get('idPeriodo');
    });


    this.buscarDatosPrincipalesCliente();
    this.buscarBotonesCopiar();
    this.buscarDatosLiquidacion();
    this.buscarDatosLiquidacionAnterior();

    //RETENCIONES
    this.buscarTipoRetenciones();
    this.buscarAgentesRetencion();

    this.insertarAgentesEnTipos();

    this.groupedCities = [
      {
          label: 'Germany', value: 'de', 
          items: [
              {label: 'Berlin', value: 'Berlin'},
              {label: 'Frankfurt', value: 'Frankfurt'},
              {label: 'Hamburg', value: 'Hamburg'},
              {label: 'Munich', value: 'Munich'}
          ]
      },
      {
          label: 'USA', value: 'us', 
          items: [
              {label: 'Chicago', value: 'Chicago'},
              {label: 'Los Angeles', value: 'Los Angeles'},
              {label: 'New York', value: 'New York'},
              {label: 'San Francisco', value: 'San Francisco'}
          ]
      },
      {
          label: 'Japan', value: 'jp', 
          items: [
              {label: 'Kyoto', value: 'Kyoto'},
              {label: 'Osaka', value: 'Osaka'},
              {label: 'Tokyo', value: 'Tokyo'},
              {label: 'Yokohama', value: 'Yokohama'}
          ]
      }
  ];


  }

  buscarDatosPrincipalesCliente(){
    this.datosPrincipalesCliente = {
      alias : 'Vargas, Santiago Manuel',
      cuit : '20-40500364-4',
      dirCarpeta : '/Vargas Santiago Manuel',
      observacionesDetalle : '..'
    }
  }
  buscarBotonesCopiar(){
    this.botonesCopiar = [
      {
        color : 'warning',
        alias : 'CUIT',
        click : '20405003644',
        dblclick : '20-40500364-4'
      },
      {
        color : 'primary',
        alias : 'AFIP',
        click : 'ClaveAFIP',
        dblclick : 'ClaveAFIP'
      },
      {
        color : 'success',
        alias : 'ATP',
        click : 'ClaveATP',
        dblclick : 'ClaveATP'
      }
    ]
  }
  buscarDatosLiquidacion(){
    this.datosLiquidacion = {
      fecha : new Date('Wed Apr 15 2022 01:02:36 GMT-0300'), //PENDIENTE - Definir formato
      monotributo : {
        categoria : 'A',
        cur : '123321',
        impuesto : 123,
        sipa : 23234,
        obraSocial : 345,
        adherentes : 3,
        total : 12222
      },
      actividades:[
        {
          codigo : 11222,
          alias : 'Ser Per',
          descripcion : 'Servicios Personales N.C.P.',
          monto : 0,
        },
        {
          codigo : 222,
          alias : 'Ser Per2',
          descripcion : 'Servicios Personales N.C.P.2',
          monto : 2,
        }
      ],
      facturacion : 999.2,
      retenciones : [
        {
          id : 1,
          idAgente : 1,
        },
      ]
    }
  }
  buscarDatosLiquidacionAnterior(){
    this.datosLiquidacionAnterior = {
      fecha : new Date('Wed Apr 15 2022 01:02:36 GMT-0300'), //PENDIENTE - Definir formato
      actividades:[
        {
          codigo : 112220,
          alias : 'Ser Per',
          descripcion : 'Servicios Personales N.C.P.',
          monto : 333,
        },
        {
          codigo : 2220,
          alias : 'Ser Per2',
          descripcion : 'Servicios Personales N.C.P.2',
          monto : 3330,
        }
      ],
      facturacion : 999.3,
    }
  }




  //RETENCIONES
  buscarTipoRetenciones(){
    this.tiposRetenciones = [
      {
        id : 1,
        alias : 'Sircreb',
        descripcion : 'Retenciones bancarias',
        plataforma : 'AFIP'
      },
      {
        id : 2,
        alias : 'Sircar',
        descripcion : 'Retenciones tarjetas',
        plataforma : 'AFIP'
      },
      {
        id : 3,
        alias : 'Sirtac RET',
        descripcion : 'Retenciones varias',
        plataforma : 'AFIP'
      },
      {
        id : 4,
        alias : 'Sirtac PER',
        descripcion : 'Percepciones varias',
        plataforma : 'AFIP'
      },
      {
        id : 5,
        alias : 'ATP Ret',
        descripcion : 'Retenciones ATP',
        plataforma : 'ATP'
      },
      {
        id : 6,
        alias : 'ATP Per',
        descripcion : 'Percepciones ATP',
        plataforma : 'ATP'
      }
    ];

  }
  buscarAgentesRetencion(){
    this.agentesRetencion = [
      {
        id : 1,
        alias : 'NBCH',
        razonSocial : 'Nuevo Banco del Chaco S.A.',
        cuit : 30670157799,
        tipoRetencion : 1
      },
      {
        id : 2,
        alias : 'NBCH',
        razonSocial : 'Nuevo Banco del Chaco S.A.',
        cuit : 30670157799,
        tipoRetencion : 2
      },
      {
        id : 3,
        alias : 'BNA',
        razonSocial : 'Banco Nacion Argentina',
        cuit : 30500010912,
        tipoRetencion : 1
      },
      {
        id : 4,
        alias : 'Otra',
        razonSocial : 'Otra',
        cuit : 1,
        tipoRetencion : 1
      },
      {
        id : 5,
        alias : 'Otra',
        razonSocial : 'Otra',
        cuit : 1,
        tipoRetencion : 2
      },
      {
        id : 6,
        alias : 'Otra',
        razonSocial : 'Otra',
        cuit : 1,
        tipoRetencion : 3
      },
      {
        id : 7,
        alias : 'Otra',
        razonSocial : 'Otra',
        cuit : 1,
        tipoRetencion : 4
      },
      {
        id : 8,
        alias : 'Otra',
        razonSocial : 'Otra',
        cuit : 1,
        tipoRetencion : 5
      },
      {
        id : 9,
        alias : 'Otra',
        razonSocial : 'Otra',
        cuit : 1,
        tipoRetencion : 6
      }
    ]
  }

  insertarAgentesEnTipos(){
    //ASIGNAMOS A LA VARIABLE agentesEnTipos CADA TIPO DE RETENCION, Y DENTRO LOS AGENTES QUE TRABAJAN CON ESTE TIPO DE RET.

    this.tiposRetenciones.map((e:any, pos: any)=>{
      e['agentes'] = []

      this.agentesRetencion.map((ent:any) => {
        if(ent.tipoRetencion == e.id){
          e['agentes'].push(ent);
        }
      })

      this.agentesEnTipos.push(e);
    })




  }





















  //OTROS
  calcularFacturacionTotal(){
    console.log(this.agentesEnTipos)
  }

  agregarRet(){
    alert('Agregar ret');
  }

  onUpload(event:any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
  }

  showModalDialog(){
    this.displayModalRetencion = true;
  }



  //HELPERS

  formatoMoneda(entrada: any){
    let valor = parseFloat(entrada);
    return valor.toLocaleString('es-AR', {style:'currency', currency:'ARS'});
  }

  
  copiarAlPortapapeles(entrada: string){
    var txtArea = document.createElement("textarea");
    txtArea.id = 'txtCopiar';
    txtArea.style.position = 'fixed';
    txtArea.style.top = '0';
    txtArea.style.left="0";
    txtArea.style.opacity = '0';
    txtArea.value = entrada;
    document.body.appendChild(txtArea);
    txtArea.select();
  
    try {
      document.execCommand('copy');
    } catch (err) {
      alert('Error al copiar')
    }
    document.body.removeChild(txtArea);
    return false;
  }


  slog(){
    console.log('sasd')
  }
}
