import model from './model';
import router from './router';
import view from './view';
import data from './data';

/**
  * Main app object
  *
  */
let app = {};

/**
 * init - Initialize the application
 *
 */
app.init = function() {
	model.init();
	router.init();
  view.init();
};

app.init();
