// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'My App',
	dialog: {
		title: 'My App',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		{
		path: '/info2/',
    	url: 'info2.html',
    	name: 'info2',
  		},
		{
		path: '/promociones/',
    	url: 'promociones.html',
    	name: 'promociones',
  		}
	,
		{
		path: '/profile/',
    	url: 'profile.html',
    	name: 'profile',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

