<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Identificación de operaciones económicas y fuentes de información
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="fade-right")
          p.mb-0 Comprender las operaciones económicas y las fuentes de información que las respaldan es el punto de partida para realizar un registro contable, tributario y documental técnicamente adecuado. Antes de codificar, elaborar asientos o ingresar datos en un software, es necesario reconocer qué hecho económico ocurrió, qué impacto tiene en la organización y cuál es el documento que demuestra su existencia. Esta comprensión fortalece el análisis, reduce errores de clasificación y permite que la información registrada sea verificable, útil para el control interno y coherente con las disposiciones que regulan la contabilidad y la conservación de los soportes en Colombia (Decreto 410, 1971).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img1.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Tipología de las operaciones económicas
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p La tipología de las operaciones económicas permite reconocer los hechos que ocurren en la organización y la forma en que afectan sus recursos, obligaciones, resultados y soportes documentales. Este análisis resulta fundamental, dado que el registro contable inicia en la correcta interpretación del hecho económico que da origen a la información, y no en su registro en libros o en sistemas de información.
        .box___style_3(data-aos="fade-right")
          p.mb-0 En Colombia, la regulación contable establece que las normas de contabilidad e información financiera permiten identificar, medir, clasificar, reconocer, interpretar e informar las operaciones económicas. A su vez, el Código de Comercio dispone que en los libros deben registrarse, en orden cronológico, las operaciones mercantiles y aquellas que puedan influir en el patrimonio del comerciante (Ley 1314 de 2009).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img2.png', alt='').m-auto
    p.mb-5 La tipología de las operaciones económicas se relaciona con la calidad del registro contable, la trazabilidad de la información y la clasificación de operaciones con efectos contables y tributarios simultáneos. A continuación, se presentan ejemplos de operaciones económicas junto con su efecto económico inicial y el documento que normalmente las respalda: 
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Compra
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ejemplo:] adquisición de mercancías a crédito para la venta. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Efecto económico inicial:] incrementa inventarios y puede generar una cuenta por pagar. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Documento que normalmente la respalda:] factura de venta del proveedor o documento soporte.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img4.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Venta
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ejemplo:] venta de mercancías al cliente con pago a 30 días. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Efecto económico inicial:] genera ingreso y derecho de cobro. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Documento que normalmente la respalda:] factura de venta emitida al cliente.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img5.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Financiera
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ejemplo:] pago de cuota de préstamo bancario. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Efecto económico inicial:] disminuye efectivo y reduce obligación financiera; puede reconocer intereses.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Documento que normalmente la respalda:] extracto bancario, comprobante de pago.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Laboral
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ejemplo:] pago mensual de nómina.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Efecto económico inicial:] reconoce gasto y salida de efectivo u obligación por pagar. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Documento que normalmente la respalda:] nómina, desprendibles, planillas y comprobantes.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tributaria
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ejemplo:] declaración y pago de retención en la fuente. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Efecto económico inicial:] cancela obligación tributaria previamente causada. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Documento que normalmente la respalda:] formulario, recibo oficial de pago, soporte bancario.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ajuste contable
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ejemplo:] reconocimiento de depreciación del equipo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Efecto económico inicial:] aumenta gasto y disminuye valor en libros del activo por depreciación acumulada. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Documento que normalmente la respalda:] cálculo interno, política contable y comprobante.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img9.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Especial
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ejemplo:] devolución en ventas por mercancía defectuosa. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Efecto económico inicial:] disminuye ingreso o cuenta por cobrar y ajusta inventarios o costo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Documento que normalmente la respalda:] nota crédito y soporte de devolución.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img10.png', alt='' style="max-width: 500px").m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img21.svg" style="max-width: 60px").m-auto
      .col
        h3 Operaciones de compra y venta
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.mb-3(data-aos="fade-right")
          p.mb-0 Las operaciones de compra y venta son de las más frecuentes dentro de una organización y constituyen una base para el registro contable. En una compra, la entidad adquiere bienes o servicios para su funcionamiento, comercialización o transformación; en una venta, entrega bienes o presta servicios con la expectativa de recibir efectivo u otro beneficio económico. Desde el punto de vista del registro, ambas operaciones exigen identificar el soporte, el tercero involucrado, la fecha, el concepto, el valor y la forma en que la transacción afecta las cuentas de la organización. En Colombia, los libros deben guardar debida correspondencia con los comprobantes de las cuentas, y la factura o el documento soporte cumplen una función esencial para sustentar la transacción (Decreto 410 de 1971).
        p.mb-0 En la práctica, el análisis de una compra o una venta implica la identificación de elementos clave para el registro: el hecho económico, las partes involucradas, el documento soporte, los bienes o servicios intercambiados, el valor reconocido, la presencia de impuestos y las cuentas afectadas. El registro contable se fundamenta en la interpretación de la operación económica y su conversión en información organizada y verificable.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img11.png', alt='').m-auto
    p.mb-5 Este análisis permite establecer si la transacción genera inventarios, gastos, ingresos, cuentas por pagar o cuentas por cobrar, así como identificar el tipo de soporte, ya sea factura de venta o documento soporte cuando el proveedor no está obligado a facturar (Ley 1314 de 2009). Para estructurar el análisis de estas operaciones, se presenta la siguiente ruta práctica:
    .fondo___carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img13.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text A. Identificar el hecho económico
            p.mb-0.text-center Determinar si la organización compró un bien o servicio, o si realizó una venta.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img14.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text B.	Revisar el soporte
            p.mb-0.text-center Verificar si existe factura, cuenta de cobro, documento soporte, nota débito, nota crédito u otro documento válido.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img15.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text C.	Reconocer el efecto de la operación
            p.mb-0.text-center Establecer si aumenta un activo, disminuye efectivo, genera ingreso, origina una obligación o produce un derecho de cobro.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img16.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text D.	Relacionar la operación con cuentas contables
            p.mb-0.text-center Definir qué cuentas podrían utilizarse según la naturaleza de la transacción.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img17.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text E.	Confirmar la trazabilidad
            p.mb-0.text-center Asegurar que la operación pueda seguirse desde el soporte hasta el libro o el sistema contable.
        p.mb-5 A continuación, se presentan situaciones frecuentes que permiten aplicar este análisis en contextos reales:
        .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
          .col-xl-6.col-md-10.tarjeta.color-acento-contenido.text-white.p-5.mb-4.mb-lg-0
            .row.d-flex.align-items-end.mb-4
              .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img18.svg', alt='' style="max-width: 100px")
            h2 Situación  1 
            p La organización compra papelería por $ 500.000 más IVA, con pago a crédito a 30 días.
            p #[b Desarrollo]
            p.mb-0 Se trata de una compra de bienes para el funcionamiento. Existe una obligación pendiente con el proveedor y un soporte que respalda la adquisición. Factura de venta del proveedor. Puede aumentar el gasto o inventario de insumos, reconocer el impuesto correspondiente y generar una cuenta por pagar.
          .col-xl-6.col-md-10.tarjeta.color-primario.p-5
            .row.d-flex.align-items-end.mb-4
              .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img19.svg', alt='' style="max-width: 100px")
            h2 Situación 2
            p La organización vende mercancía por $ 1.190.000, IVA incluido, y el cliente paga por transferencia bancaria.
            p #[b Desarrollo]
            p.mb-0 Se trata de una venta de bienes con ingreso para la organización y entrada inmediata de efectivo o dinero en bancos. Factura de venta emitida al cliente y comprobante bancario. Puede reconocer ingreso por venta, impuesto generado y aumento en bancos.
    .box___style_4.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img20.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Ejercicio de aplicación y resolución contable de una operación de compra
          p.mb-0 Se invita a leer el documento, donde se aborda el análisis y resolución contable de una operación de compra de insumos administrativos con pago parcial.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/1_Ejercicio_aplicacion_resolucion_contable_operacion_compra.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img21.svg" style="max-width: 60px").m-auto
      .col
        h3 Operaciones financieras, laborales y tributarias
    p.mb-5 Se expone a continuación un pódcast orientado al análisis de las operaciones financieras, laborales y tributarias, enfatizando su impacto en el registro contable y en el cumplimiento de las disposiciones normativas vigentes.
    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img22.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Operaciones financieras, laborales y tributarias"
              :audio="require('@/assets/componentes/audios/Operaciones_financieras_laborales_tributarias.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/img23.png" ).m-auto
    p.mb-5 A continuación, se presentan situaciones frecuentes en las que se integra la lectura de la operación, su soporte y su efecto en el registro:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img24.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Situación 1").ajuste-cajaAcordion
            p.mb-3 La organización recibe un crédito bancario por $ 20.000.000 consignado en su cuenta corriente. 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Lectura de la operación:] se trata de una operación financiera porque ingresa dinero al banco y surge una obligación con la entidad financiera. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Soporte principal:] contrato o pagaré, comprobante de desembolso y extracto bancario. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Posible efecto en el registro:] aumenta bancos y se reconoce una obligación financiera por pagar.
          .row(titulo="Situación 2").ajuste-cajaAcordion
            p.mb-3 La organización liquida y paga la nómina mensual de sus trabajadores. 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Lectura de la operación:] se trata de una operación laboral porque se reconocen valores devengados, deducciones y pagos derivados de la relación de trabajo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Soporte principal:] nómina, documento soporte de pago de nómina electrónica y comprobante bancario.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Posible efecto en el registro:] puede reconocerse gasto de personal, obligaciones asociadas y salida de efectivo o bancos.
          .row(titulo="Situación 3").ajuste-cajaAcordion
            p.mb-3 La organización presenta y paga la retención en la fuente del período. 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Lectura de la operación:] se trata de una operación tributaria porque extingue una obligación fiscal previamente reconocida. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Soporte principal:] formulario oficial, recibo de pago y soporte bancario. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Posible efecto en el registro:] disminuye bancos y cancela la obligación tributaria correspondiente.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img21.svg" style="max-width: 60px").m-auto
      .col
        h3 Ajustes contables y operaciones especiales 
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="fade-right")
          p.mb-0 Los ajustes contables y las operaciones especiales requieren una lectura analítica, dado que no siempre se originan en una compra, una venta o un pago inmediato, sino en la necesidad de actualizar, corregir o reconocer efectos económicos que deben reflejarse en la información contable. En esta categoría se incluyen, por ejemplo, la depreciación de activos, la amortización, el reconocimiento de contingencias probables, las correcciones derivadas de devoluciones, la venta de activos usados y otras transacciones efectuadas fuera del curso ordinario del negocio.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img25.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_5(data-aos="fade-right")
          p.mb-0 Su identificación adecuada permite que los registros representen la situación económica de la organización y mantengan correspondencia con los soportes y comprobantes respectivos. El Decreto 2649 de 1993 establece que las cuentas por cobrar originadas en transacciones efectuadas fuera del curso ordinario del negocio deben registrarse por separado; además, dispone que la contribución de las propiedades, planta y equipo a la generación del ingreso se reconozca mediante depreciación, y que las contingencias probables de pérdida se reconozcan cuando puedan estimarse razonablemente (Decreto 2649 de 1993).
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img26.jpg', alt='').m-auto
      .col-xl
        figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/temas/img27.svg', alt='' style="max-width: 85px")
        p.mb-0 Desde una perspectiva operativa, estas transacciones pueden originarse en cálculos internos, políticas contables, conciliaciones o evaluaciones técnicas realizadas al cierre de un período. Para su registro, se requiere identificar el hecho económico que se actualiza, la razón del reconocimiento, el soporte interno que lo respalda y el efecto sobre activos, pasivos, ingresos o gastos.
    p.mb-5 Este tipo de operaciones incluye situaciones como la pérdida de valor de una cuenta por cobrar, la depreciación de un activo, devoluciones en ventas o la venta de activos utilizados por la entidad, las cuales inciden en la trazabilidad y en la calidad de la información contable. Para estructurar este análisis, se presenta la siguiente ruta práctica:
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Paso 1
              p.mb-0 Identificar la razón del registro. Establecer si se trata de actualizar valores, reconocer desgaste, corregir una situación, registrar una contingencia o reconocer una operación no habitual.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img28.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img29.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Paso 2
              p.mb-0 Verificar el soporte. Revisar si existe comprobante interno, cálculo técnico, nota crédito, acta, certificación, conciliación o documento equivalente.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Paso 3
              p.mb-0 Determinar el efecto económico. Analizar si el ajuste incrementa un gasto, disminuye un activo, modifica un ingreso o reconoce una obligación.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img30.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img31.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Paso 4
              p.mb-0 Relacionar el hecho con las cuentas. Definir qué cuentas intervienen según la naturaleza del ajuste u operación especial.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Paso 5
              p.mb-0 Confirmar la trazabilidad. Verificar que el ajuste pueda seguirse desde su soporte hasta el comprobante y el libro correspondiente.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img32.png', alt='' style="width: 300px").m-auto
    p.mb-5 A continuación, se presentan situaciones que permiten integrar la lectura de la operación, su soporte y su efecto en el registro:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img33.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Situación 1").ajuste-cajaAcordion
            p.mb-3 Al cierre del mes se reconoce la depreciación de un computador usado en labores administrativas. 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Lectura de la operación:] se trata de un ajuste contable porque reconoce el desgaste del activo por su uso y el paso del tiempo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Soporte principal:] cálculo de depreciación, política contable y comprobante interno. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Posible efecto en el registro:] puede aumentar el gasto por depreciación y acumular la depreciación del activo.
          .row(titulo="Situación 2").ajuste-cajaAcordion
            p.mb-3 Un cliente devuelve mercancía vendida por presentar defectos.
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Lectura de la operación:] se trata de una operación especial asociada a una venta ya registrada, por lo que exige corregir o disminuir el efecto inicial de la transacción. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Soporte principal:] nota crédito, soporte de devolución y documento de ingreso de mercancía. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Posible efecto en el registro:] puede disminuir ingresos, ajustar cuentas por cobrar o efectivo y modificar inventarios o costo de ventas.
          .row(titulo="Situación 3").ajuste-cajaAcordion
            p.mb-3 La organización vende un mueble de oficina que ya no utiliza. 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Lectura de la operación:] se trata de una operación especial porque corresponde a la disposición de un activo usado y no a la actividad ordinaria de venta de mercancías. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Soporte principal:] factura o documento de venta, acta interna y soporte de pago. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Posible efecto en el registro:] puede disminuir el activo, reconocer ingreso por venta del bien y registrar utilidad o pérdida según su valor en libros.
    .box___style_4.fit___color_1.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img20.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Ejercicio de aplicación y análisis de ajustes contables y operaciones especiales
          p.mb-0 Se invita a leer el documento, donde se aborda el análisis de ajustes contables y operaciones especiales a partir de situaciones prácticas como la depreciación de activos y el reconocimiento de indemnizaciones. 
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/2_Ejercicio_aplicacion_analisis_ajustes_contables_operaciones_especiales.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Fuentes de información asociadas a las operaciones
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="fade-right")
          p.mb-0 La identificación de las fuentes de información asociadas a cada operación forma parte del proceso de registro contable, tributario y documental, ya que permite establecer el origen de los datos que sustentan el hecho económico y el documento que respalda su incorporación al sistema contable. Esta revisión se relaciona con la trazabilidad, la confiabilidad del registro y los procesos de verificación, en la medida en que la contabilidad debe guardar correspondencia con sus comprobantes y con los soportes que evidencian la operación. En Colombia, el Código de Comercio dispone que los libros y registros contables deben ajustarse a las normas sobre la materia y que debe existir correspondencia entre los asientos y los comprobantes, mientras que el régimen contable exige que los comprobantes respalden cronológicamente las operaciones registradas (Decreto 410 de 1971).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img34.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img35.png', alt='').m-auto
      .col-xl.mb-4.mb-lg-0
        p.mb-0 Una operación económica se registra cuando existe información suficiente para identificarla, interpretarla y sustentarla. En este apartado se analizan las fuentes internas y externas, la función de los documentos soporte y su relación con operaciones como compras, ventas, pagos laborales y obligaciones tributarias. Asimismo, se considera el origen de la información, ya sea proveniente de la organización o de terceros, y las condiciones mínimas que deben cumplir los documentos para respaldar el registro.
    .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img21.svg" style="max-width: 60px").m-auto
      .col
        h3 Fuentes internas, fuentes externas y documentos soporte
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_3(data-aos="fade-right")
          p.mb-0 Las fuentes de información corresponden al origen de los datos que permiten conocer, verificar y registrar una operación económica. Estas fuentes se clasifican en internas y externas. Las internas se generan dentro de la organización como resultado de sus procesos administrativos, contables, financieros o de control; entre ellas se encuentran comprobantes internos, nóminas, relaciones de caja, notas de contabilidad, conciliaciones y formatos de autorización. Las externas provienen de terceros y respaldan hechos que afectan a la organización desde fuera de su estructura operativa, como facturas de proveedores, extractos bancarios, certificados, contratos, formularios oficiales o documentos expedidos por entidades públicas y privadas. Ambas fuentes se complementan y permiten reconstruir el hecho económico objeto de registro (Decreto 410 de 1971).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img36.png', alt='').m-auto
    p.mb-5 El documento soporte constituye la evidencia que respalda el reconocimiento de la transacción y establece la relación entre la operación y la fuente de información. En operaciones realizadas con proveedores no obligados a facturar, la DIAN dispone la generación del documento soporte para sustentar costos, deducciones o impuestos descontables. De igual forma, en el ámbito laboral, el documento soporte de pago de nómina electrónica respalda los pagos o abonos en cuenta derivados de la relación laboral.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img37.png', alt='').m-auto
      .col-xl
        .box___style_2(data-aos="fade-left")
          p.mb-0 El soporte documental también se relaciona con la validez del tratamiento contable y tributario de las operaciones, en tanto respalda su reconocimiento y registro conforme a la normativa aplicable. En este sentido, la identificación de la fuente de información y del documento soporte correspondiente forma parte del proceso previo al registro contable (DIAN). A continuación, se presentan situaciones en las que se relacionan la operación, las fuentes de información y el documento soporte correspondiente:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img33.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Situación 1").ajuste-cajaAcordion
            p.mb-3  La organización compra elementos de aseo para uso administrativo a crédito. 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Fuente interna:] solicitud de compra, orden interna de adquisición y comprobante de recepción. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Fuente externa:] factura del proveedor. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Documento soporte principal:] factura de venta del proveedor o documento soporte, según corresponda.
          .row(titulo="Situación 2").ajuste-cajaAcordion
            p.mb-3 La organización paga la nómina mensual del personal.
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Fuente interna:] liquidación de nómina, autorización de pago y comprobante contable interno. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Fuente externa:] validación DIAN del documento soporte de nómina electrónica y soporte bancario.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Documento soporte principal:] documento soporte de pago de nómina electrónica.
          .row(titulo="Situación 3").ajuste-cajaAcordion
            p.mb-3 La organización recibe un crédito consignado en su cuenta bancaria. 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Fuente interna:] solicitud interna del crédito, autorización y registro de tesorería. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Fuente externa:] contrato o pagaré, comprobante del desembolso y extracto bancario. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Documento soporte principal:] extracto bancario y documento del crédito.
          .row(titulo="Situación 4").ajuste-cajaAcordion
            p.mb-3 La organización paga una obligación tributaria del período. 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Fuente interna:] relación interna de impuestos por pagar y comprobante de egreso. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Fuente externa:] formulario oficial y constancia bancaria de pago.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Documento soporte principal:] formulario tributario y soporte de pago. 
    .box___style_6.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img39.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Hablemos del Documento Soporte - DIAN
          p.mb-0 Como apoyo para fortalecer la comprensión de este tema, se recomienda al aprendiz revisar el video Hablemos del Documento Soporte, publicado por la DIAN.  
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="('https://www.youtube.com/watch?v=WHDlLJ-QK6A')" target="_blank" type="website")
            span Ver video
            i.fas.fa-link
    .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img21.svg" style="max-width: 60px").m-auto
      .col
        h3 Facturas, extractos bancarios, nóminas y soportes tributarios
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_3(data-aos="fade-right")
          p.mb-0 Las facturas, los extractos bancarios, las nóminas y los soportes tributarios constituyen evidencias documentales de uso frecuente en el registro de las operaciones económicas, en tanto permiten identificar el hecho ocurrido, las partes involucradas, la fecha de la transacción y su valor. Cada uno cumple una función específica dentro del proceso contable: la factura respalda la venta o adquisición de bienes y servicios; el extracto bancario refleja los movimientos de fondos; la nómina evidencia pagos y deducciones derivados de la relación laboral; y los soportes tributarios sustentan declaraciones, retenciones y pagos efectuados ante la administración tributaria. Esta diferenciación permite relacionar cada operación con su documento correspondiente y mantener la trazabilidad del registro (DIAN).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img40.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img41.png', alt='').m-auto
      .col-xl
        p.mb-0 El valor de estos documentos radica en la información que aportan para el análisis de las operaciones. La DIAN establece que la factura electrónica tiene la misma validez legal que la factura en papel y constituye soporte de transacciones de venta de bienes y servicios; asimismo, los adquirentes que requieran soportar costos, deducciones o impuestos descontables deben exigir factura electrónica validada previamente por la DIAN. De igual forma, el documento soporte de pago de nómina electrónica respalda fiscalmente los costos y deducciones asociados a pagos laborales, mientras que el documento soporte en adquisiciones con no obligados a facturar permite respaldar compras de bienes o servicios cuando el proveedor no expide factura electrónica.
    p.mb-5 En el caso de los extractos bancarios, la Superintendencia Financiera establece la obligación de las entidades financieras de suministrar extractos o estados de cuenta que reflejen fielmente el movimiento de los recursos, lo que los convierte en una fuente externa relevante para la verificación de ingresos, pagos, consignaciones, débitos y transferencias (DIAN).
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .box___style_2.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 En el proceso contable, estos documentos permiten identificar la operación que respaldan, la información relevante que contienen y el efecto económico que representan. La factura se asocia con registros de compra o venta; el extracto bancario con movimientos de efectivo y equivalentes; la nómina con el reconocimiento de obligaciones laborales; y los soportes tributarios con la causación o pago de obligaciones fiscales.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img42.png', alt='').m-auto
    p.mb-5 El análisis de estos documentos se integra al proceso de clasificación, codificación y registro de las operaciones, en correspondencia con los principios de trazabilidad y soporte documental. A continuación, se presentan ejemplos de aplicación de estos documentos en el proceso contable:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Factura electrónica
                p La organización vende equipos de oficina por $ 4.760.000 a crédito a un cliente.
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué permite verificar?:] identifica al vendedor y al adquirente, la fecha, la descripción de los bienes, el valor de la operación, la forma de pago y, si aplica, el IVA. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Utilidad inicial en el registro:] sirve para reconocer el ingreso, el impuesto generado y la cuenta por cobrar.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img43.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Extracto bancario
                p El banco registra una consignación de $ 8.500.000 correspondiente al desembolso de un crédito. 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué permite verificar?:] permite verificar el ingreso de recursos a la cuenta y la fecha en que se hizo efectivo el movimiento. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Utilidad inicial en el registro:] sirve para reconocer el aumento en bancos y la obligación financiera.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img44.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Documento soporte de nómina electrónica
                p La organización paga la nómina mensual de sus trabajadores por $ 12.400.000. 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué permite verificar?:] permite identificar valores devengados, deducciones, valor neto y beneficiarios del pago. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Utilidad inicial en el registro:] sirve para reconocer gasto de personal, obligaciones asociadas y salida de efectivo o bancos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img45.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Soporte tributario
                p La organización presenta y paga la retención en la fuente del período mediante formulario y recibo oficial de pago. 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b ¿Qué permite verificar?:] permite verificar el concepto tributario, el valor pagado y la fecha de cumplimiento de la obligación. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Utilidad inicial en el registro:] sirve para cancelar la obligación tributaria y evidenciar su pago.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img46.png', alt='' style="max-width: 500px").m-auto
    .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img21.svg" style="max-width: 60px").m-auto
      .col
        h3 Ejercicio de aplicación y análisis de documentos soporte en operaciones contables
    p Una organización realiza tres operaciones durante la misma semana. En la primera, adquiere repuestos para mantenimiento con un proveedor obligado a facturar. En la segunda, el banco debita automáticamente la cuota mensual de un préstamo. En la tercera, se transmite el documento soporte de pago de nómina electrónica correspondiente al mes. A partir de estas situaciones, el aprendiz debe determinar cuál documento principal respalda cada operación, qué información debe revisar en cada caso y qué efecto inicial podría generar cada una en el registro contable.
    p.mb-5 Para orientar el análisis de cada situación, se presenta la siguiente estructura:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img33.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Situación 1").ajuste-cajaAcordion
            p.mb-3 La organización adquiere repuestos para mantenimiento con un proveedor obligado a facturar. 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Documento principal:] factura electrónica. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Información a revisar:] valor, fecha, partes intervinientes y concepto. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Efecto inicial en el registro: ] correspondiente y una cuenta por pagar.
          .row(titulo="Situación 2").ajuste-cajaAcordion
            p.mb-3  El banco debita automáticamente la cuota mensual de un préstamo.  
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Documento principal:] extracto bancario. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Información a revisar:] valor debitado, fecha del movimiento y concepto asociado al crédito. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Efecto inicial en el registro: ] puede disminuir bancos y reducir la obligación financiera, reconociendo, si aplica, intereses.
          .row(titulo="Situación 3").ajuste-cajaAcordion
            p.mb-3 Se transmite el documento soporte de pago de nómina electrónica correspondiente al mes. 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Documento principal:] documento soporte de pago de nómina electrónica. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Información a revisar:] valores devengados, deducciones y valor neto pagado. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Efecto inicial en el registro: ] puede reconocer gasto de personal, obligaciones asociadas y salida de efectivo o bancos.
    p.mb-5 Este ejercicio permite evidenciar que no todas las operaciones se interpretan con el mismo documento y que la calidad del registro depende, en buena medida, de seleccionar y analizar correctamente la fuente documental correspondiente.
    .box___style_6.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img39.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 ¿Cómo puedo empezar a facturar electrónicamente?
          p.mb-0  Como apoyo a este tema, se recomienda revisar el video ¿Cómo puedo empezar a facturar electrónicamente?, ya que permite comprender la factura electrónica como soporte del registro contable y tributario.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="('https://youtu.be/D5QtUUuwaSk?si=hhIcziuc5q2KBJJp')" target="_blank" type="website")
            span Ver video
            i.fas.fa-link
    .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img21.svg" style="max-width: 60px").m-auto
      .col
        h3 Relación entre operación económica, soporte y fuente de información
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_3(data-aos="fade-right")
          p.mb-0 La relación entre operación económica, soporte y fuente de información constituye una base técnica del registro contable, en la medida en que establece que toda transacción incorporada a los libros o a los sistemas de información debe contar con una evidencia que la respalde y con una fuente que permita verificar sus datos. El Código de Comercio exige la correspondencia entre los asientos de los libros y los comprobantes de las cuentas, y el Decreto 2649 de 1993 dispone que los comprobantes de contabilidad deben guardar relación con los registros consignados en los libros auxiliares y en los libros donde se registran cronológicamente las operaciones. En este sentido, el registro contable se fundamenta en la existencia de información suficiente y verificable que sustente el hecho económico.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img47.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img48.png', alt='').m-auto
      .col-xl
        p.mb-0 La operación económica corresponde al hecho que genera un efecto patrimonial, financiero, laboral o tributario; el soporte es el documento que evidencia la ocurrencia de la operación; y la fuente de información es el origen de los datos que permiten describirla, comprobarla y registrarla. En algunos casos, la fuente y el soporte coinciden en un mismo documento, como ocurre con la factura electrónica; en otros, la información se complementa mediante documentos internos y externos, como sucede cuando una compra se analiza a partir de la orden interna, la factura del proveedor y el comprobante de recibido. La DIAN establece que la factura electrónica constituye soporte tributario de las transacciones de venta de bienes y servicios, que el documento soporte en adquisiciones con no obligados a facturar respalda compras en dichas condiciones, y que el documento soporte de pago de nómina electrónica sustenta fiscalmente los costos y deducciones asociados a la nómina.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .box___style_2.fit___box_2.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 La relación entre estos elementos permite evitar inconsistencias en el registro contable, tales como la incorporación de operaciones sin sustento suficiente, la inadecuada identificación de la fuente de información o el uso de documentos que no corresponden con la naturaleza del hecho económico. En el proceso de registro, se requiere identificar el hecho ocurrido, el documento que lo respalda, la información contenida en dicho documento y su suficiencia para determinar el tercero, la fecha, el concepto, el valor y el efecto inicial en las cuentas. Este análisis se integra al principio de trazabilidad y a la calidad del registro contable, al vincular el hecho económico con su respaldo documental y con el origen de la información que sustenta su reconocimiento (Decreto 410 de 1971). A continuación, se presentan ejemplos que integran la operación, el soporte y la fuente de información en el proceso de registro:
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img49.png', alt='').m-auto
    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in").mb-5
      .row(titulo="Compra de servicios de mantenimiento a un proveedor no obligado a facturar").ajuste-cajaAcordion
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Soporte principal:]  documento soporte en adquisiciones con no obligados a expedir factura. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Fuente de información para el registro:] documento generado por el adquirente, orden de servicio y constancia de recibido.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Lectura aplicada:] la operación corresponde a una compra; el soporte acredita la adquisición y suministra datos para reconocer el costo o gasto y la obligación de pago.
      .row(titulo="Venta de mercancía a crédito").ajuste-cajaAcordion
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Soporte principal:]  factura electrónica de venta. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Fuente de información para el registro:] factura validada, pedido del cliente y condiciones de pago. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Lectura aplicada:] la operación corresponde a una venta; la factura permite identificar el ingreso, el impuesto generado y la cuenta por cobrar.
      .row(titulo="Pago de nómina mensual").ajuste-cajaAcordion
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Soporte principal:]  documento soporte de pago de nómina electrónica.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Fuente de información para el registro:] liquidación de nómina, documento transmitido y comprobante bancario.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Lectura aplicada:] la operación corresponde a un hecho laboral; la información permite reconocer devengados, deducciones y valor neto pagado.
      .row(titulo="Pago de retención en la fuente").ajuste-cajaAcordion
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Soporte principal:] formulario y recibo oficial de pago.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Fuente de información para el registro:] declaración tributaria, soporte bancario y relación interna de obligaciones.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Lectura aplicada:] la operación corresponde al cumplimiento de una obligación tributaria; el soporte permite verificar el concepto, el valor pagado y la cancelación del pasivo.
      .row(titulo="Abono bancario por desembolso de crédito").ajuste-cajaAcordion
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Soporte principal:]  extracto bancario y documento del préstamo. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Fuente de información para el registro:] extracto, contrato o pagaré y autorización interna.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Lectura aplicada:] la operación corresponde a un hecho financiero; la información permite reconocer la entrada de recursos y la obligación financiera adquirida.
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img50.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En síntesis, identificar las operaciones económicas y reconocer las fuentes de información que las respaldan constituye una base indispensable para el registro contable, tributario y documental. Este análisis permite comprender que cada hecho económico debe interpretarse a partir de su naturaleza, de los documentos que lo soportan y de la información que suministran las fuentes internas y externas. Cuando esta relación se establece con claridad, el proceso de registro adquiere mayor coherencia, trazabilidad y confiabilidad, y se facilita la posterior clasificación, codificación y documentación de las operaciones dentro de la organización.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
