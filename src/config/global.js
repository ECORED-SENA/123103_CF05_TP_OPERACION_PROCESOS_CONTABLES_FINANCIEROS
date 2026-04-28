export default {
  global: {
    Name: 'Registro contable, tributario y documental',
    Description:
      'Este componente formativo fortalece la capacidad para registrar información contable, tributaria y documental con criterio técnico, orden y cumplimiento normativo. Su desarrollo permite comprender cómo se originan las operaciones económicas en la organización, cómo se soportan y cómo se incorporan al sistema contable, con el fin de facilitar el control de la información, la generación de reportes confiables y la adecuada conservación de los soportes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Identificación de operaciones económicas y fuentes de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipología de las operaciones económicas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Fuentes de información asociadas a las operaciones',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Normativa contable, tributaria y requisitos legales aplicables al registro',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Normas de información financiera aplicables a las operaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Requisitos formales y legales de los soportes',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Estructura contable y políticas para el registro de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Plan de cuentas y estructura contable',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Codificación y uso de cuentas en el registro',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Políticas contables para el tratamiento uniforme de las operaciones',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ejecución del registro contable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Registro de asientos contables',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Registro de información en <em>software</em> contable',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Activo',
      significado:
        'bien o derecho que posee la organización y del que se espera obtener beneficios económicos futuros.',
    },
    {
      termino: 'Asiento contable',
      significado:
        'registro técnico de una operación económica en las cuentas correspondientes, aplicando el principio de partida doble.',
    },
    {
      termino: 'Comprobante de contabilidad',
      significado:
        'documento interno en el que se resume una operación económica y que sirve de base para su registro en libros o en el sistema contable.',
    },
    {
      termino: 'Cuenta contable',
      significado:
        'instrumento de clasificación que permite registrar, agrupar y controlar los hechos económicos según su naturaleza.',
    },
    {
      termino: 'Documento fuente',
      significado:
        'soporte original que evidencia la ocurrencia de una operación económica, como facturas, extractos, nóminas o recibos.',
    },
    {
      termino: 'Gasto',
      significado:
        'erogación asociada al funcionamiento de la organización que disminuye el resultado del período.',
    },
    {
      termino: 'Ingreso',
      significado:
        'valor que recibe o causa la organización por ventas de bienes, prestación de servicios u otras actividades.',
    },
    {
      termino: 'Inventario',
      significado:
        'bienes destinados a la venta o al consumo en el desarrollo de la operación de la organización.',
    },
    {
      termino: 'Libro auxiliar',
      significado:
        'registro detallado que amplía la información de una cuenta, un tercero o una operación específica.',
    },
    {
      termino: 'Pasivo',
      significado:
        'obligación presente a cargo de la organización, surgida de hechos pasados, cuyo pago se espera realizar en el futuro.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'valor residual de los activos de la organización después de deducir sus pasivos; representa los aportes y resultados acumulados.',
    },
    {
      termino: 'Soporte contable',
      significado:
        'documento que respalda, justifica y da trazabilidad al registro de una operación económica.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'posibilidad de seguir una operación desde su origen documental hasta su registro, consulta, control y conservación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Archivo General de la Nación Colombia. (2024, febrero 29). Acuerdo 001. ',
      link:
        'https://normativa.archivogeneral.gov.co/wp-content/uploads/2024/04/2024-02_29_AcuerdoAGN-FIRMADO.pdf',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1995). Ley 223 de 1995. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6968',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2005). Ley 962 de 2005. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=17004',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2009). Ley 1314 de 2009. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36833 ',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2015). Decreto 2420 de 2015. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2015). Decreto 2420 de 2015, Anexo 3: marco técnico normativo para preparadores de información financiera del grupo 3.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2023). Decreto 443 de 2023. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=205923',
    },
    {
      referencia:
        'Consejo de Estado. (2016). Sentencia 90064 (Rad. 25000-23-27-000-2012-90064-01). ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=71191',
    },
    {
      referencia:
        'Contaduría General de la Nación. (2007). La contabilidad y su utilidad en el sector público. ',
      link:
        'https://www.contaduria.gov.co/documents/20127/36276/La_contabilidad_y_su_utilidad.pdf',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales (DIAN). (2018, noviembre 19). Oficio 33532 de 2018. ',
      link:
        'https://normograma.dian.gov.co/dian/compilacion/docs/oficio_dian_33532_2018.htm',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales (DIAN). (s.f.). Abecé factura electrónica para compra de personas naturales. ',
      link:
        'https://www.dian.gov.co/impuestos/factura-electronica/Documents/Abece-FE-Comprador.pdf',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales (DIAN). (s.f.). Agente de retención del impuesto sobre las ventas. ',
      link:
        'https://www.dian.gov.co/impuestos/Autorretenedores/Paginas/Agente-de-Retencion-del-Impuesto-sobre-las-Ventas.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales (DIAN). (s.f.). Documento soporte adquisiciones a no obligados a facturar. ',
      link:
        'https://www.dian.gov.co/impuestos/Paginas/Sistema-de-Factura-Electronica/Documento-Soporte-Adquisiciones-No-Obligados.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales (DIAN). (s.f.). Documento soporte de pago de nómina electrónica. ',
      link:
        'https://www.dian.gov.co/impuestos/factura-electronica/Documents/Abece-documento-soporte-de-pago-nomina-electronica.pdf',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales (DIAN). (s.f.). Factura electrónica. ',
      link:
        'https://www.dian.gov.co/impuestos/factura-electronica/como-hacerlo/Paginas/para-los-compradores.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales (DIAN). (s.f.). ¿Qué es la factura electrónica? ',
      link:
        'https://micrositios.dian.gov.co/sistema-de-facturacion-electronica/',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1971, marzo 27). Decreto 410 de 1971. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1993). Decreto 2649 de 1993. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9863',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1993). Decreto 2650 de 1993. ',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1772403',
    },
    {
      referencia:
        'Superintendencia de Sociedades. (2014, julio). Guía práctica para elaborar el estado de situación financiera de apertura bajo NIIF para pymes. ',
      link:
        'https://www.supersociedades.gov.co/documents/80312/3818371/Guia-practica-05082014.pdf',
    },
    {
      referencia:
        'Unidad de Gestión Pensional y Parafiscales (UGPP). (s.f.). Abecé pago correcto empleadores. ',
      link:
        'https://www.ugpp.gov.co/sites/default/files/Parafiscales/ABECE-Pago-Correcto-Empleadores-V1.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
