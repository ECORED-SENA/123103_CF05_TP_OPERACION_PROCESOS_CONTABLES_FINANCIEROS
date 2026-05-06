<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Estructura contable y políticas para el registro de la información
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="fade-right")
          p.mb-0 La estructura contable y las políticas para el registro de la información permiten llevar a la práctica los criterios técnicos revisados en los capítulos anteriores, ya que convierten el análisis de la operación económica en decisiones concretas de clasificación, codificación y registro. Su estudio es importante porque permite comprender que la contabilidad no se organiza de manera improvisada, sino a partir de una estructura de cuentas y de criterios institucionales que orientan el tratamiento uniforme de hechos similares.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img89.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img90.png', alt='').m-auto
      .col-xl
        .box___style_2(data-aos="fade-left")
          p.mb-0 En este sentido, el capítulo aborda la manera en que la organización dispone su plan de cuentas, define niveles de codificación y establece criterios para aplicar de forma consistente el registro de sus operaciones, de modo que la información pueda conservar orden, comparabilidad y utilidad para el control y la gestión.
    p.mb-0 La regulación contable colombiana, a partir de la Ley 1314 de 2009 y los marcos técnicos compilados en el Decreto 2420 de 2015, exige que la información financiera sea identificada, medida, clasificada y reconocida con criterios técnicos, lo que hace necesario traducir esos lineamientos en estructuras internas de aplicación.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Plan de cuentas y estructura contable
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p El plan de cuentas y la estructura contable permiten convertir el análisis del hecho económico en una organización práctica del registro. Después de identificar la operación, revisar su soporte y reconocer su incidencia contable o tributaria, la organización requiere una estructura que indique dónde ubicar cada partida y cómo mantener uniformidad en el registro.
        .box___style_3(data-aos="fade-right")
          p.mb-0 En este sentido, se explica cómo la información deja de estar dispersa y se organiza en cuentas, grupos y categorías que facilitan su control, consulta y posterior presentación. La Ley 1314 de 2009 y el Decreto 2420 de 2015 establecen que la información financiera debe permitir identificar, medir, clasificar, reconocer e informar operaciones económicas, mientras que el Código de Comercio exige correspondencia entre los asientos y los comprobantes.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img91.png', alt='').m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img21.svg" style="max-width: 60px").m-auto
      .col
        h3 Finalidad, estructura y clasificación de cuentas
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img92.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El plan de cuentas permite ubicar cada hecho económico en una cuenta coherente con su naturaleza. En la práctica, orienta decisiones como determinar si un bien se destina a la venta, al uso interno, si un valor corresponde a un ingreso, un préstamo o si un pago pertenece al período o a la cancelación de una obligación. Por tanto, no se trata de una lista teórica de cuentas, sino de una herramienta que organiza el registro y evita clasificaciones incorrectas.
    p.mb-5 Bajo NIIF para las pymes no existe un catálogo único obligatorio; sin embargo, en Colombia el Plan Único de Cuentas para Comerciantes se utiliza como referencia para comprender la estructura general del registro. Antes de detallar su aplicación, es necesario comprender cómo se organiza esta estructura por niveles:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img93.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Clase
            p.mb-0.text-center Identificada por el primer dígito, define el tipo general de cuenta.
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img93.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Grupo
            p.mb-0.text-center Representado por los dos primeros dígitos, agrupa cuentas similares.
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img93.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Cuenta
            p.mb-0.text-center Identificada con cuatro dígitos, especifica el concepto contable.
      .col-xl-3.col-md-9.mt-4(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img93.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Subcuenta
            p.mb-0.text-center Representada con seis dígitos, detalla el registro específico.
    p.mb-5 Esta organización responde a una lógica que va de lo general a lo específico y permite clasificar adecuadamente las operaciones. Además, las cuentas se agrupan según su naturaleza:
    .row.justify-content-center.mb-5
      .col-xl-10
        .row.justify-content-center.mb-3
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_9.h-100
              h4.text-center Clases 1, 2 y 3
              p.mb-0.text-center Cuentas del balance.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_9.h-100
              h4.text-center Clases 4, 5, 6 y 7
              p.mb-0.text-center Cuentas del estado de resultados.
          .col-xl-4.col-md-9(data-aos="zoom-in")
            .box___style_9.h-100
              h4.text-center Clases 8 y 9
              p.mb-0.text-center Cuentas de orden.
        .box___style_10(data-aos="flip-up").mb-3
          p.mb-0 Esta estructura facilita la coherencia en el registro y evita decisiones basadas en intuición. La siguiente tabla organiza las principales categorías contables y su contenido general:
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Estructura práctica de referencia del plan de cuentas
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Clase o grupo general
                th.ajuste-border-tabla.texto-left ¿Qué reúne?
                th.texto-left Ejemplo práctico
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Activos
                td.ajuste-border-tabla.texto-left Bienes y derechos de la organización
                td.texto-left Dinero en caja o bancos, mercancías para la venta, cuentas por cobrar, equipos de oficina
              tr
                td.ajuste-border-tabla.texto-left Pasivos
                td.ajuste-border-tabla.texto-left Obligaciones a cargo de la organización
                td.texto-left Deudas con proveedores, préstamos bancarios, obligaciones laborales
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Patrimonio
                td.ajuste-border-tabla.texto-left Aportes y resultados acumulados
                td.texto-left Capital social, utilidades retenidas
              tr
                td.ajuste-border-tabla.texto-left Ingresos
                td.ajuste-border-tabla.texto-left Valores obtenidos por la operación
                td.texto-left Venta de mercancías, prestación de servicios
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Gastos
                td.ajuste-border-tabla.texto-left Erogaciones necesarias para operar
                td.texto-left Papelería, energía, internet, arriendo
              tr
                td.ajuste-border-tabla.texto-left Costos
                td.ajuste-border-tabla.texto-left Valores asociados a la venta o producción
                td.texto-left Costo de mercancía vendida, materiales
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Cuentas de orden
                td.ajuste-border-tabla.texto-left Registros de control
                td.texto-left Garantías, contingencias
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Ejemplos de clasificación inicial
    p.mb-5 A continuación se presentan situaciones frecuentes que permiten comprender la clasificación de operaciones según su naturaleza económica:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Compra de cuadernos para venta
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué ocurrió?] La empresa adquiere bienes para comercializar. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Grupo donde se ubica inicialmente:] activos – inventarios. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Por qué?] Porque los cuadernos se compraron para la venta, no para consumo interno.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img94.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Compra de silla para uso administrativo
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué ocurrió?] La empresa adquiere un bien para usar durante varios períodos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Grupo donde se ubica inicialmente:] activos – propiedad, planta y equipo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Por qué?] Porque el bien apoya la operación y no está destinado a la venta.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img95.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Pago de internet
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué ocurrió?] La empresa cancela un servicio ya consumido. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Grupo donde se ubica inicialmente:] gastos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Por qué?] Porque corresponde a un consumo necesario del período.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img96.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Préstamo bancario
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué ocurrió?] Entra dinero, pero nace una deuda. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Grupo donde se ubica inicialmente:] activos y pasivos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Por qué?] Porque aumenta el efectivo y simultáneamente la obligación financiera.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img97.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Venta de mercancía
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué ocurrió?] La empresa entrega bienes y recibe dinero. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Grupo donde se ubica inicialmente:] ingresos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Por qué?] Porque se genera un valor por la actividad ordinaria de venta.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img98.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Pago a proveedor
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué ocurrió?] La empresa cancela una deuda pendiente. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Grupo donde se ubica inicialmente:] pasivos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Por qué?] Porque disminuye una obligación previamente reconocida.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img99.png', alt='' style="max-width: 500px").m-auto
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Ruta práctica para usar el plan de cuentas
    p.mb-5 Para aplicar correctamente el plan de cuentas en el registro contable, se propone la siguiente secuencia:
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_8(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Identificar qué ocurrió en la operación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Definir si el hecho genera un bien, derecho, obligación, ingreso, costo o gasto. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ubicar la operación en el grupo general correspondiente. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Seleccionar la cuenta y subcuenta adecuada. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Verificar la coherencia con el soporte y la naturaleza económica. 
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img100.jpg', alt='').m-auto
    p.mb-5 Esta secuencia permite mantener consistencia en el registro y fortalecer la calidad de la información contable.
    .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img21.svg" style="max-width: 60px").m-auto
      .col
        h3 Activos, pasivos y patrimonio
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fit___color_2(data-aos="fade-right")
          p.mb-0 En la práctica, una de las primeras decisiones del registro consiste en reconocer si la operación genera un activo, un pasivo o un movimiento en el patrimonio. Esta clasificación resulta fundamental, ya que permite ubicar correctamente el hecho económico antes de seleccionar la cuenta específica dentro del sistema contable.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img101.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img102.png', alt='').m-auto
      .col-xl
        .box___style_2(data-aos="fade-left")
          p.mb-0 En Colombia, el Decreto 2650 de 1993 mantiene una referencia didáctica al organizar la clase 1 como activos, la clase 2 como pasivos y la clase 3 como patrimonio, mientras que el Decreto 2649 de 1993 desarrolla normas relacionadas con estos elementos en la contabilidad general. En términos prácticos, un activo representa un bien o derecho de la organización, como el dinero en caja, cuentas por cobrar, mercancías o equipos. Un pasivo corresponde a una obligación, como deudas con proveedores, créditos bancarios u obligaciones laborales. Por su parte, el patrimonio refleja los aportes de los propietarios y los resultados acumulados.
    p.mb-5 Esta distinción permite comprender que no todos los ingresos de dinero constituyen ganancias, ni todas las adquisiciones corresponden a gastos, ni los aportes de socios se reconocen como ingresos operacionales. Antes de revisar los ejemplos, se presentan situaciones frecuentes que permiten interpretar la clasificación contable según la realidad económica:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img24.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Compra de computador para el área contable").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b ¿Qué se reconoce?] Un bien para uso permanente. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Clasificación inicial:] activo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Explicación práctica:] se registra como activo porque servirá en la operación durante más de un período.
          .row(titulo="Compra de mercancías para vender").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b ¿Qué se reconoce?] Un bien destinado a comercialización. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Clasificación inicial:] activo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Explicación práctica:] se reconoce como inventario, no como gasto, porque se espera obtener beneficio con su venta.
          .row(titulo="Recepción de préstamo bancario").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b ¿Qué se reconoce?] Entrada de dinero y nacimiento de una deuda. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Clasificación inicial:] activo y pasivo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Explicación práctica:] aumenta bancos, pero también surge una obligación con la entidad financiera.
          .row(titulo="Recepción de mercancía a crédito").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b ¿Qué se reconoce?] Una obligación pendiente de pago. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Clasificación inicial:] pasivo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Explicación práctica:] se reconoce una cuenta por pagar al proveedor.
          .row(titulo="Aporte de dinero por socio").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b ¿Qué se reconoce?] Un incremento en los recursos propios. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Clasificación inicial:] patrimonio. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Explicación práctica:] no se trata como ingreso, sino como aporte de capital.
          .row(titulo="Obtención de utilidad al cierre").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b ¿Qué se reconoce?] Resultado acumulado. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Clasificación inicial:] patrimonio. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Explicación práctica:] la utilidad hace parte del patrimonio de la organización.
    p.mb-5 Este análisis permite consolidar una base conceptual clara para continuar con la clasificación de ingresos, costos y gastos dentro del sistema contable.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img21.svg" style="max-width: 60px").m-auto
      .col
        h3 Ingresos, costos y gastos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p.mb-0 Otra decisión fundamental en el plan de cuentas consiste en diferenciar ingresos, costos y gastos, ya que estas partidas explican el resultado del período y permiten interpretar el desempeño económico de la organización. En la referencia tradicional del PUC para comerciantes, la clase 4 agrupa ingresos, la clase 5 gastos, la clase 6 costos de ventas y la clase 7 costos de producción u operación.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img104.jpg', alt='').m-auto
    .box___style_11(data-aos="zoom-in").mb-5
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img105.jpg', alt='').m-auto
        .col-xl
          p.fit___p_box Esta estructura permite comprender que no todo valor pagado corresponde a gasto y que no todo valor recibido constituye utilidad. En términos prácticos:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Los ingresos se originan cuando la empresa vende bienes o presta servicios y obtiene un valor a cambio. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Los costos se relacionan directamente con aquello que la empresa vende o produce. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Los gastos corresponden a consumos necesarios para el funcionamiento de la organización.
    p.mb-5 Esta diferenciación es clave, ya que una clasificación incorrecta afecta la calidad de la información contable. A continuación, se presentan situaciones frecuentes que permiten interpretar esta clasificación:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Venta de cuadernos
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué se reconoce?] Valor obtenido por la actividad comercial. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Clasificación inicial:] ingreso. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Explicación práctica:] la operación genera un valor por la venta realizada.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img106.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Entrega de cuadernos al cliente
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué se reconoce?]  Salida del bien vendido. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Clasificación inicial:] costo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Explicación práctica:] se reconoce el costo de la mercancía vendida, porque esos bienes ya no permanecen en inventario.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img107.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Pago de internet
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué se reconoce?]  Consumo necesario para operar. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Clasificación inicial:] gasto. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Explicación práctica:] no genera un bien para la venta ni un activo permanente; corresponde al funcionamiento del período.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img108.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Pago de papelería
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué se reconoce?]  Consumo interno. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Clasificación inicial:] gasto. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Explicación práctica:] el valor se asocia al funcionamiento y no a la venta de mercancías.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img109.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Servicio de alojamiento prestado
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué se reconoce?] Valor obtenido por la prestación del servicio. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Clasificación inicial:] ingreso. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Explicación práctica:] corresponde al resultado de la actividad ordinaria.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img110.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Uso de insumos para producir pan
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué se reconoce?]  Consumo asociado directamente a lo vendido. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Clasificación inicial:] costo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Explicación práctica:] los materiales se relacionan con la producción del bien que se comercializa.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img111.png', alt='' style="max-width: 500px").m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img21.svg" style="max-width: 60px").m-auto
      .col
        h3 Ruta práctica de clasificación
    p.mb-5 Para diferenciar ingresos, costos y gastos, se propone la siguiente secuencia de análisis:
    .row.justify-content-center.mb-5
      .col-xl-10
        .row.justify-content-center.mb-3
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_9.h-100
              p.text-center #[b ¿La operación genera dinero por venta o prestación de servicios?] 
              p.mb-0.text-center Si es así, corresponde a ingresos. 
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_9.h-100
              p.text-center #[b ¿La operación se relaciona directamente con el bien o servicio que se vende?] 
              p.mb-0.text-center En ese caso, corresponde a costos. 
          .col-xl-4.col-md-9(data-aos="zoom-in")
            .box___style_9.h-100
              p.text-center #[b ¿La operación corresponde al funcionamiento o sostenimiento de la organización?] 
              p.mb-0.text-center Entonces corresponde a gastos. 
        .box___style_10(data-aos="flip-up").mb-3
          p.mb-0 En síntesis, el plan de cuentas y la estructura contable permiten traducir el hecho económico en una clasificación ordenada dentro del registro. Esta base facilita distinguir entre activos, pasivos, patrimonio, ingresos, costos y gastos, evitando registros improcedentes y fortaleciendo la calidad de la información contable.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img21.svg" style="max-width: 60px").m-auto
      .col
        h3 Estructura de cuentas contables y codificación
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fit___color_2(data-aos="fade-right")
          p.mb-0 La estructura de cuentas contables y la codificación permiten llevar la clasificación general de las operaciones a un nivel más preciso de registro. Después de identificar si un hecho económico corresponde a un activo, pasivo, ingreso, costo o gasto, se requiere ubicarlo en una cuenta específica y, cuando aplique, en un nivel de mayor detalle.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img112.png', alt='').m-auto
    p.mb-5 Este proceso garantiza uniformidad en el registro, facilita la consulta de la información y fortalece el control de los movimientos contables. Como referencia didáctica en Colombia, el PUC para comerciantes organiza las cuentas por niveles codificados, aunque bajo NIIF para las pymes no existe un catálogo único obligatorio. La estructura se organiza de lo general a lo particular:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center El primer dígito representa la clase. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center Los dos primeros dígitos corresponden al grupo. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center Los cuatro primeros identifican la cuenta. 
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center Los seis primeros determinan la subcuenta. 
    p.mb-5 Además, las clases 1, 2 y 3 corresponden al balance; las clases 4, 5, 6 y 7 al estado de resultados; y las clases 8 y 9 a cuentas de orden. La siguiente tabla resume la estructura práctica que puede usar el aprendiz para entender cómo se organiza el plan de cuentas y cómo se pasa del hecho económico al registro contable.
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 2.
          span Estructura de cuentas contables y codificación
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Elemento de la estructura
                th.ajuste-border-tabla.texto-left Qué identifica
                th.ajuste-border-tabla.texto-left Longitud usual
                th.ajuste-border-tabla.texto-left Ejemplo
                th.texto-left Aplicación práctica
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Estructura de codificación
                td.ajuste-border-tabla.texto-left Orden jerárquico del plan de cuentas
                td.ajuste-border-tabla.texto-left Variable
                td.ajuste-border-tabla.texto-left 1 → 11 → 1105 → 110505
                td.texto-left Permite pasar de lo general a lo particular al momento de registrar
              tr
                td.ajuste-border-tabla.texto-left Nivel 1: clase
                td.ajuste-border-tabla.texto-left Categoría general de la cuenta
                td.ajuste-border-tabla.texto-left 1 dígito
                td.ajuste-border-tabla.texto-left 1 Activo
                td.texto-left Sirve para ubicar si la operación afecta activos, pasivos, patrimonio, ingresos, gastos, costos o cuentas de orden
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Nivel 2: grupo
                td.ajuste-border-tabla.texto-left Subdivisión de la clase
                td.ajuste-border-tabla.texto-left 2 dígitos
                td.ajuste-border-tabla.texto-left 11 Disponible
                td.texto-left Permite ubicar la operación en un bloque más concreto, por ejemplo caja, bancos, inventarios o proveedores
              tr
                td.ajuste-border-tabla.texto-left Cuenta detalle
                td.ajuste-border-tabla.texto-left Cuenta específica de registro
                td.ajuste-border-tabla.texto-left 4 dígitos
                td.ajuste-border-tabla.texto-left 1105 Caja
                td.texto-left Permite identificar el rubro concreto donde se reconocerá la operación
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Subcuenta
                td.ajuste-border-tabla.texto-left Mayor nivel de desagregación
                td.ajuste-border-tabla.texto-left 6 dígitos
                td.ajuste-border-tabla.texto-left 110505 Caja general
                td.texto-left Facilita el control específico del movimiento
              tr
                td.ajuste-border-tabla.texto-left Centro de costo
                td.ajuste-border-tabla.texto-left Área o proceso al que se asocia el movimiento
                td.ajuste-border-tabla.texto-left Código interno
                td.ajuste-border-tabla.texto-left ADM-01 Administración
                td.texto-left Mejora el control interno por áreas, sedes o procesos; no es una clase del PUC, sino una herramienta interna de control contable
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Aplicación
                td.ajuste-border-tabla.texto-left Uso de la estructura en operaciones reales
                td.ajuste-border-tabla ---
                td.ajuste-border-tabla.texto-left Compra de mercancías para vender
                td.texto-left La operación se clasifica, se codifica y luego se registra en la cuenta y subcuenta correspondiente
    .box___style_4.fit___color_1.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img20.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Clases y grupos del plan de cuentas
          p.mb-0 Se invita a leer el documento Clases y grupos del plan de cuentas, donde se aborda la estructura jerárquica del plan de cuentas en contabilidad, explicando cómo se organizan las clases (nivel 1) y los grupos (nivel 2) para clasificar las operaciones económicas. 
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/4_Clases_grupos_plan_cuentas.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Codificación y uso de cuentas en el registro
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fit___color_2(data-aos="fade-right")
          p.mb-0 La codificación permite pasar de la clasificación general de una operación a su ubicación concreta dentro del sistema contable. No es suficiente identificar si un hecho económico corresponde a un activo, pasivo, ingreso o gasto; también es necesario asignarle una cuenta y, cuando se requiera, una subcuenta que facilite su control y posterior consulta.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img113.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img114.png', alt='').m-auto
      .col-xl.mb-4.mb-lg-0
        p.mb-0 Como referencia didáctica en Colombia, el Plan Único de Cuentas organiza la información por niveles de clase, grupo, cuenta y subcuenta. La jurisprudencia del Consejo de Estado ha reiterado que el primer dígito representa la clase, los dos primeros el grupo, los cuatro primeros la cuenta y los seis primeros la subcuenta. A su vez, bajo NIIF para las pymes no existe un catálogo único obligatorio, por lo que cada entidad adapta su plan de cuentas según sus necesidades, manteniendo una lógica técnica de clasificación. Desde una perspectiva aplicada, la codificación se comprende como una secuencia lógica:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img93.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Identificar la naturaleza de la operación. 
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img93.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Ubicar el grupo general correspondiente. 
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img93.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Seleccionar la cuenta adecuada. 
      .col-xl-3.col-md-9.mt-4(data-aos="zoom-in")
        .box___style_7.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img93.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Definir la subcuenta o nivel de detalle requerido. 
    p.mb-5 En algunas organizaciones, este proceso se complementa con auxiliares o centros de costo, lo que permite identificar el origen del movimiento dentro de la estructura organizacional.
    .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img21.svg" style="max-width: 60px").m-auto
      .col
        h3 Ruta práctica de codificación de operaciones en el registro
    p.mb-5 A continuación, se presentan ejemplos que permiten comprender cómo una operación pasa de su interpretación económica a su ubicación contable específica:
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Compra de mercancías para vender
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Clasificación general:] activo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ruta de codificación:]  clase de activos, grupo de inventarios, cuenta de mercancías, subcuenta según línea de producto. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Aplicación práctica:] permite diferenciar mercancías para la venta de bienes para uso interno.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img115.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Compra de escritorio para oficina
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Clasificación general:] activo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ruta de codificación:]  clase de activos, grupo de propiedades, planta y equipo, cuenta de muebles y equipo, subcuenta según tipo de bien. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Aplicación práctica:] facilita separar activos de uso de inventarios o gastos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img116.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Pago a proveedor
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Clasificación general:] pasivo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ruta de codificación:]  clase de pasivos, grupo de cuentas por pagar, cuenta de proveedores, subcuenta por tercero, si aplica. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Aplicación práctica:] permite disminuir la obligación previamente reconocida.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img117.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Venta de mercancía al contado
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Clasificación general:] ingreso. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ruta de codificación:]  clase de ingresos, grupo de ventas, cuenta de venta de mercancías, auxiliar por línea o punto de venta. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Aplicación práctica:] facilita acumular ingresos y diferenciar su origen.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img118.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Pago de internet
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Clasificación general:] gasto. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ruta de codificación:]  clase de gastos, grupo de gastos operacionales, cuenta de servicios, subcuenta de internet o comunicaciones. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Aplicación práctica:] permite identificar un consumo del período.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img119.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Recepción de crédito bancario
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Clasificación general:] activo y pasivo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ruta de codificación:]  clase de activos, bancos; clase de pasivos, obligaciones financieras. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Aplicación práctica:] permite reconocer simultáneamente el ingreso de dinero y la obligación generada.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img120.png', alt='' style="max-width: 500px").m-auto
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Políticas contables para el tratamiento uniforme de las operaciones
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fit___color_2(data-aos="fade-right")
          p.mb-0 Las políticas contables permiten que operaciones semejantes se registren con criterios uniformes dentro de la organización. En la NIIF para las pymes, se entienden como los principios, bases, convenciones, reglas y procedimientos específicos adoptados para preparar y presentar los estados financieros.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img121.png', alt='').m-auto
    p.mb-5 Esto implica que, después de identificar el hecho económico y ubicarlo en una cuenta, se requieren criterios internos que orienten el tratamiento de situaciones repetitivas, evitando que el registro dependa de interpretaciones individuales. En la práctica, estas políticas permiten resolver decisiones frecuentes del registro. A continuación, se presentan algunos aspectos clave que orientan su aplicación:
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img122.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img123.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Reconocimiento de compras
                p.mb-0.text-center Permiten definir cuándo una compra se reconoce como inventario y cuándo como gasto.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img124.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tratamiento de activos
                p.mb-0.text-center Establecen cuándo un bien se reconoce como activo de uso.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img125.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Depreciación
                p.mb-0.text-center Definen criterios para el reconocimiento del desgaste de los activos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img126.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Devoluciones
                p.mb-0.text-center Determinan el manejo contable de devoluciones en ventas o compras.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img127.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Operaciones tributarias
                p.mb-0.text-center Orientan el tratamiento de hechos con incidencia fiscal.
        .row.justify-content-center.mb-5
          .col-xl-8
            .box___style_2(data-aos="flip-up")
              p.mb-0 Estas políticas deben aplicarse de forma uniforme a transacciones, sucesos y condiciones similares, y solo pueden modificarse cuando lo exija la norma o cuando se logre información más fiable y relevante.
        p.mb-5 Desde una perspectiva aplicada, el registro contable no depende únicamente del soporte o de la cuenta, sino también del criterio institucional vigente. Operaciones con características similares deben recibir tratamientos consistentes cuando responden a la misma realidad económica, mientras que situaciones diferentes requieren análisis particular. Las políticas contables cumplen, así, una función de articulación entre la norma general y la práctica cotidiana del registro.
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_8(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              p.fit___p_box Para que estas políticas cumplan su función, deben estar debidamente documentadas y formalizadas dentro de la organización. Esto implica que deben:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Estar consignadas en documentos institucionales. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Permitir su consulta y actualización. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Ser divulgadas entre quienes participan en el proceso contable. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Aplicarse de manera consistente en el registro. 
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img128.jpg', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .box___style_2.fit___box_2.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 Este proceso fortalece la unidad de criterio y permite que la información se construya sobre bases comunes y transparentes. En conjunto, la estructura contable y las políticas para el registro de la información permiten que los hechos económicos se transformen en registros ordenados, coherentes y útiles para el control y la gestión. A través del plan de cuentas, la clasificación de activos, pasivos, patrimonio, ingresos, costos y gastos, y la codificación de las operaciones, se comprende que el registro implica interpretar la naturaleza económica de cada hecho y ubicarlo correctamente dentro del sistema contable.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img129.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        .box___style_5.fit___box_5(data-aos="fade-right")
          p.mb-0 Esta base permite relacionar el hecho económico con la estructura interna que hace posible su registro, favoreciendo la trazabilidad, el control y la confiabilidad de la información. A partir de ello, el proceso continúa hacia el registro contable formal y la generación de reportes, donde estas decisiones se materializan en comprobantes, libros, auxiliares y saldos.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img130.jpg', alt='').m-auto
      .col-xl
        p.mb-0 Finalmente, la ejecución del registro contable corresponde al momento en que el hecho económico analizado, soportado y clasificado se incorpora de manera formal a la información de la organización. En esta fase, la operación deja de estar únicamente en los documentos soporte y pasa a expresarse en comprobantes, libros y sistemas de registro. En este sentido, el Código de Comercio exige correspondencia entre los asientos y los comprobantes, garantizando valor probatorio y trazabilidad documental.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
