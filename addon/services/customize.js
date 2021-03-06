import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({

  darkMode: false,
  smartUpdate: false,
  theme: computed('darkMode', function() {
    return this.get('darkMode') ? 'solarized dark' : 'default';
  }),

  toggleDarkMode() {
    let dm = this.get('darkMode');
    this.set('darkMode', !dm);
    if(dm) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  }

});
