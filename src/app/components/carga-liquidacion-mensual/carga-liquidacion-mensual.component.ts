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


  displayModalRetencion: boolean = false;

  uploadedFiles: any[] = [{name: 'previo', size:'10'}];


  selectedAgente : any = [];

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
          idTipo: 1,
          retenciones: [
            {
              id: 1,
              idAgente: 1,
              monto: 1000
            },
            {
              id: 2,
              idAgente: 2,
              monto: 2000
            }
          ]
        },
        {
          id : 2,
          idTipo: 5,
          retenciones: [
            {
              id: 3,
              idAgente: 2,
              monto: 1002
            },
            {
              id: 4,
              idAgente: 3,
              monto: 2002
            }
          ]
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
        name: 'Nuevo Banco del Chaco - NBCH - 20405003644',
        code: 1, 
        cuit: 20405003644,

        id : 1,
        alias : 'NBCH',
        razonSocial : 'Nuevo Banco del Chaco',
      },
      {
        name: 'Banco Nacion Argentina - BNA - 20405003644',
        code: 2, 
        cuit: 20405003644,

        id : 2,
        alias : 'BNA',
        razonSocial : 'Banco Nacion Argentina',
      },
      {
        name: 'Otra RZ - Otra - 20405003644',
        code: 3, 
        cuit: 20405003644,

        id : 3,
        alias : 'Otra',
        razonSocial : 'Otra RZ',
      }
    ];
  }

  insertarAgentesEnTipos(){
    //ASIGNAMOS A LA VARIABLE agentesEnTipos CADA TIPO DE RETENCION, Y DENTRO LOS AGENTES QUE TRABAJAN CON ESTE TIPO DE RET.

/*     this.tiposRetenciones.map((e:any, pos: any)=>{
      e['agentes'] = []

      this.agentesRetencion.map((ent:any) => {
        if(ent.tipoRetencion == e.id){
          e['agentes'].push(ent);
        }
      })

      this.agentesEnTipos.push(e);
    })
 */



  }

  agregarRetencion(idd:any){
    let idTipo = idd;
    let idAgente = this.selectedAgente.id;

    //cargar en tipo de retencion, y crearla si no existe
    this.datosLiquidacion.retenciones.map((e:any)=>{
      if(e.id==idTipo){

      }
    })

    this.displayModalRetencion = false;

  }

  eliminarRetencion(idTipo:any, idAgente:any){
    this.datosLiquidacion.retenciones.map((e:any)=>{
      if(e.id==idTipo){
        e.retenciones.map((f:any, pos:number)=>{
          if(f.id==idAgente){
            e.retenciones.splice(pos, 1);
          }
        })
      }
    })
  }


  obtenerAliasAgente(idd:any){
    let aliasDevolver = 'No-Alias';
    this.agentesRetencion.map((e:any) => {
      if(e.id==parseInt(idd) ){
        aliasDevolver = e.alias;
      }
    })
    return aliasDevolver;
  }
  obtenerAliasTipo(idd:any){
    let aliasDevolver = 'No-Alias';
    this.tiposRetenciones.map((e:any) => {
      if(e.id==parseInt(idd) ){
        aliasDevolver = e.alias;
      }
    })
    return aliasDevolver;
  }




















  //OTROS
  calcularFacturacionTotal(){
    console.log(this.agentesEnTipos)
  }

  agregarRet(){
    console.log(this.datosLiquidacion)
  }

  onUpload(event:any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
  }

  showModalRetencionDialog(){
    this.selectedAgente = [];
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
