<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 El registro contable, tributario y documental permite comprender de qué manera los hechos económicos que ocurren en una organización se convierten en información estructurada, útil y verificable para su gestión. Su estudio busca que el aprendiz no se limite a diligenciar datos, sino que entienda el sentido técnico de cada registro, la relación que existe entre la operación realizada y el documento que la respalda, y la importancia de aplicar criterios de reconocimiento, clasificación y control. De esta manera, se fortalece una comprensión integral del proceso mediante el cual la información económica se organiza y se transforma en un insumo confiable para la administración, el seguimiento de las actividades y el cumplimiento de las obligaciones institucionales.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A lo largo de este proceso formativo, el aprendiz desarrolla capacidades para interpretar las operaciones económicas que se presentan en el entorno organizacional, distinguir las fuentes de información que les dan origen y establecer el tratamiento que corresponde según la naturaleza de cada hecho. También aprende a relacionar las operaciones con las cuentas apropiadas, a verificar las condiciones formales y legales de los soportes, a definir secuencias de registro y a realizar asientos de manera ordenada y coherente. Este recorrido le permite comprender que registrar no es una acción aislada, sino una práctica técnica que exige análisis, precisión, criterio normativo y cuidado en el manejo de la información.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="fade-right")
          p.mb-0 Su importancia radica en que un adecuado tratamiento de la información contable, tributaria y documental contribuye a la transparencia de los procesos, favorece el control interno y mejora la calidad de los reportes que sirven de base para la revisión, el seguimiento y la toma de decisiones. 
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img2.svg', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-0
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/intro/img3.svg', alt='').m-auto
      .col-xl
        .box___style_2(data-aos="fade-left")
          p.mb-0 Además, permite que la información conserve trazabilidad desde el momento en que se origina hasta su incorporación en libros, documentos fuente o sistemas informáticos, garantizando respaldo y posibilidad de verificación. Así, el aprendiz consolida bases para actuar con responsabilidad en el registro, proteger los soportes físicos y digitales y aportar a una gestión organizada, confiable y ajustada a las disposiciones vigentes.

</template>

<script>
export default {
  name: 'Introduccion',
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
