<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Cuestionario de verificación sobre registro contable, tributario y documental',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar y afianzar la comprensión de los fundamentos del registro contable, tributario y documental mediante un cuestionario de selección múltiple, para que el aprendiz relacione la identificación de operaciones, las fuentes de información, la normativa aplicable, la clasificación, la codificación, el registro, el control de la información y la conservación documental con situaciones propias del entorno organizacional.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la diferencia principal entre un documento fuente y un comprobante de contabilidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El documento fuente es interno y el comprobante es emitido por un tercero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El comprobante solo se usa para el IVA, mientras que el documento fuente es para la renta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No hay diferencia, ambos términos significan lo mismo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El documento fuente evidencia la ocurrencia de la operación, mientras que el comprobante resume la operación internamente para su registro.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Si una empresa vende un mueble de oficina usado que ya no necesita, ¿qué tipo de operación económica está realizando?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Operación de compra y venta ordinaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Operación especial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Operación laboral.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Operación financiera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué documento se debe utilizar para respaldar una compra cuando el proveedor no está obligado a facturar?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El documento soporte en adquisiciones con no obligados a facturar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una nota crédito.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un extracto bancario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El documento soporte de pago de nómina electrónica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Si una organización recibe un crédito bancario y el dinero ingresa a su cuenta, ¿cómo se clasifica inicialmente el efecto de esta operación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta un ingreso y disminuye un pasivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumenta un pasivo y disminuye el patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumenta un activo y aumenta un pasivo simultáneamente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumenta un costo y disminuye un activo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cómo se debe clasificar y registrar el pago mensual del servicio de internet de las oficinas de la empresa?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como un costo de ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Como un activo diferido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Como una cuenta de orden.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Como un gasto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Según la estructura de codificación contable utilizada como referencia (PUC), ¿qué indican los primeros cuatro dígitos de un código?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La clase.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cuenta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El grupo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La subcuenta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la función tributaria principal del documento soporte de pago de nómina electrónica?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Respaldar fiscalmente los costos y deducciones derivados de los pagos laborales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustentar los ingresos por ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calcular la retención en la fuente de los proveedores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Declarar el IVA descontable bimestralmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué libro contable permite seguir la secuencia de los hechos económicos en estricto orden temporal?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Libro auxiliar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Libro mayor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Libro diario.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Libro de inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el propósito principal del libro mayor en el registro contable?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mostrar el detalle individual de los pagos a un proveedor específico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar la asistencia y los turnos de los empleados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar únicamente las operaciones que tienen incidencia en el IVA.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Resumir los movimientos de cada cuenta y mostrar su saldo acumulado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'En el contexto de los requisitos formales, ¿a qué se refiere la "trazabilidad documental"?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'A la capacidad de reconstruir el recorrido del soporte desde su recepción hasta su archivo y uso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Al cálculo de los impuestos que genera una factura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'A la firma digital del contador público en los estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'A la impresión obligatoria de todos los documentos electrónicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la finalidad de implementar políticas contables dentro de una organización?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir las sanciones para los empleados que lleguen tarde.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permitir que operaciones semejantes se registren con criterios uniformes y consistentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Establecer el calendario tributario del año siguiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar el uso del software contable por registros manuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'De acuerdo con la DIAN, si una empresa ya es responsable del IVA, ¿qué determina el umbral de 92.000 UVT?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Si la empresa debe pagar o no el impuesto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Si la empresa se considera gran contribuyente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La periodicidad con la que se debe declarar (bimestral o cuatrimestral).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La tarifa de retención en la fuente aplicable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es el propósito de realizar un ajuste contable, como reconocer la depreciación de un equipo, al finalizar el mes?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actualizar el valor del activo y reconocer el desgaste como gasto del período.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evadir el pago de impuestos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dar de baja un equipo que fue comprado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar una compra de contado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué reporte se debe generar para verificar si los registros del período mantienen el equilibrio contable entre débitos y créditos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El reporte de cartera por edades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La declaración de renta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El libro auxiliar de bancos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La balanza de comprobación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Si el área de cobranza necesita saber rápidamente qué clientes tienen facturas vencidas a 30, 60 y 90 días, ¿qué reporte especial debería consultar?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuentas por pagar por vencimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cartera por edades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Movimientos atípicos por cuenta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reporte de diferencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Según la normativa comercial vigente (Ley 962 de 2005), ¿por cuánto tiempo deben conservarse los libros y papeles contables del comerciante?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '10 años.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '3 años.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '5 años.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '20 años.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Dentro de los criterios técnicos para las operaciones, ¿qué significa el concepto de "medir"?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Establecer si un hecho económico debe registrarse.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ubicar la operación en la categoría que le corresponde (activo, pasivo, etc.).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar con qué valor monetario se incorpora la operación al registro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Archivar el soporte en su carpeta correspondiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Una factura de venta de un proveedor y un extracto del banco se consideran:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comprobantes internos de contabilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fuentes de información internas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Políticas contables de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fuentes de información externas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Más allá de servir para digitar datos, ¿cuál es uno de los beneficios clave de utilizar un software contable moderno?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar la necesidad de guardar los documentos fuente originales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Apoyar el control del proceso mediante validaciones, seguimiento de cambios y generación ágil de reportes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar que la empresa tenga que pagar impuestos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente el criterio técnico del contador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Al iniciar un nuevo ciclo contable, el proceso de dar continuidad a los saldos de cuentas permanentes (como bancos, inventarios y proveedores) se conoce como:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cierre contable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ajuste por inflación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Balanza de comprobación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reapertura contable.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
