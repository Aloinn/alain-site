import { boot } from 'quasar/wrappers';

import { Plugin } from 'vue';
import { initializeApp, getApps } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import { getAnalytics } from 'firebase/analytics';

const install: Plugin = (app, options) => {
  if (getApps().length == 0) {
    const app = initializeApp(options);
    getAnalytics(app);
  }
};

export default boot(({ app }) => {
  app.use(install, {
    apiKey: 'AIzaSyDoXT1Cs2EfvlFDqVh6DOFud7FrOqht7G0',
    authDomain: 'alain-site.firebaseapp.com',
    projectId: 'alain-site',
    storageBucket: 'alain-site.appspot.com',
    messagingSenderId: '933687714650',
    appId: '1:933687714650:web:234f59a71fa29dd7a80963',
    measurementId: 'G-WP9ZSBNT8J',
  });
});
