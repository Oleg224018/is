import type { App } from 'vue';

import UiButton from './components/UiButton.vue';
import UiInput from './components/UiInput.vue';
import UiField from './components/UiField.vue';
import UiSelect from './components/UiSelect.vue';

export {
  UiButton,
  UiInput,
  UiField,
  UiSelect,
};

export default {
  install(app: App) {
    app.component('UiButton', UiButton);
    app.component('UiInput', UiInput);
    app.component('UiField', UiField);
    app.component('UiSelect', UiSelect);
  },
};