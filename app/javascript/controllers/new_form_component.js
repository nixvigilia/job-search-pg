import { store } from "../store";
import { Controller } from "stimulus";
import Vue from "vue";

const NewFormComponent = (component) =>
  class extends Controller {
    static targets = ["mount"];

    connect() {
      const el = this.mountTarget;

      window.jobForm = new Vue({
        el,
        render: (h) => h(component),
        data: store,
      });

      window.paymentConfig = {
        stripeKey: document.querySelector("meta[name='stripe-public-key']")
          .content,
      };
    }
  };

export default NewFormComponent;
