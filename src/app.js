import Mustache from "mustache";
import "./components/main";

(function () {
  "use strict";

  var App = {
    /**
     * Função que inicia os métodos quando a página é carregada.
     * @method construct
     */
    construct: function () {
      this.helperLoaderPage();
      this.helperTemplate();
    },

    /**
     * Função que muda a cor da barra de navegação para voltar.
     * @method helperLoaderPage
     */
    helperLoaderPage: () => {},

    helperTemplate: () => {
      // const template = document.getElementById("template").innerHTML;
      // const rendered = Mustache.render(template, { name: "Braz Leonardo" });
      // document.getElementById("target").innerHTML = rendered;
    },
  };

  App.construct();
})();
