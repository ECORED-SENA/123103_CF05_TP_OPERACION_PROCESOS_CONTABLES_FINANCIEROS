<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Estructura contable y políticas para el registro de la información
    

    
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Plan de cuentas y estructura contable



      
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Codificación y uso de cuentas en el registro




    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Políticas contables para el tratamiento uniforme de las operaciones





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
