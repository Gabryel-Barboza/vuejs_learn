<!--Mixins são usados na Options API para permitir a exportação de código não reativo, por exemplo, no objeto exportado em componentes, não é possível acessar variáveis não reativas (fora de data())
Isso torna-se um limitador na modularização de código-->
<!--Para isso, surgiu a Composition API como nova metodologia de criação de componentes.
No entanto, usando a Options API é preciso usar Mixins-->
<script>
export default {
  methods: {
    calculateDiscount() {
      console.log('Lógica de cálculo de desconto...');
    },
  },
};
</script>
<!--O real problema de mixins é que tudo desse objeto é injetado em componentes, logo para aplicações maiores se torna um problema a grande quantidade de propriedades extras.
Ainda, os métodos presentes no mixin podem ser substituídos no componente e causar alguma falha, caso o desenvolvedor não conheça os métodos-->
