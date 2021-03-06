'use strict';

/**
 * @ngdoc function
 * @name nielResumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nielResumeApp
 */
angular.module('nielResumeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.myTitle = 'Desarrollo Web y Soluciones IT';

    $scope.education = [
    	{
    		time: '1995 - 2006',
    		title: 'Bachillerato',
    		description: '',
    		place: 'U.E. Colegio Champagnat',
    		location: 'Caracas, Venezuela'
    	},
    	{
    		time: '2007 - 2011',
    		title: 'Lic. en Computación',
    		description: 'Promedio: 16.01, Tesis Mención Honorífica',
    		place: 'Universidad Nueva Esparta',
    		location: 'Caracas, Venezuela'
    	},
    	    	{
    		time: '2013',
    		title: 'Cisco CCNA',
    		description: 'Conocimientos base de Redes, Configuración de Router y Switch',
    		place: 'Softtrain Servicios Educativos',
    		location: 'Caracas, Venezuela'
    	}
    ];

    $scope.jobs = [
		{
			time: '2009 - 2011',
			title: 'Analista Programador',
			description: 'Desarrollo en lenguajes PHP, JS, HTML, CSS y SQL. Utilización de PHP Zend Framework. Administración de Servidores GNU/Linux',
			place: 'Universidad Nueva Esparta',
			location: 'Caracas, Venezuela'
		},
		{
			time: '2011 - 2014',
			title: 'Dir. Desarrollo Tecnológico',
			description: 'Planificación y Ejecución de nuevos módulos, levantamiento de información acerca de los procesos de la institución, automatización de procesos, dirección de un equipo de trabajo de 5 programadores, mantenimeinto de la plataforma tecnológica y asesoramiento en el área de tecnológias',
			place: 'Universidad Nueva Esparta',
			location: 'Caracas, Venezuela'
		},
		{
			time: '2011 - 2012',
			title: 'Profesor Instructor',
			description: 'Programación IV: dirigida a la Programación Orientada a Objetos con lenguaje Java y uso del Android SDK. Programación VII: desarrollo de aplicaciones web avanzado, con el uso de lenguaje PHP, CSS y JS, incorporando el uso de librerías y frameworks como Zend y Laravel.',
			place: 'Universidad Nueva Esparta',
			location: 'Caracas, Venezuela'
		},
		{
			time: '2015 Actual',
			title: 'Programador Senior',
			description: 'Lider del equipo de Programación. Utilización de lenguaje PHP, CSS y JS. Uso de Frameworks Laravel y CodeIgniter. Admistración de Servidores y Bases de Datos. Programación del App para IOS en Lenguaje Swift',
			place: 'OnRecords C.A.',
			location: 'Caracas, Venezuela'
		}
    ];

    $scope.skills = [
		{
			time: '2009',
			title: 'Desarrollo Web',
			langs: ['PHP', 'CSS', 'JS', 'HTML'],
			description: 'Elaboracion de aplicaciones de alto rendimiento, con cortos tiempo de respuesta, utilización del framework Laravel empleando las mejores prácticas para el backend de la aplicación y uso de librerías como JQuery, JQuery UI, AngularJS, Bootstrap, Coffescript, Sass, PhaserJS y Handlebars para lo que es el frontend',
			amount: 9
		},
		{
			time: '2009',
			title: 'Creación y Manejo de DB',
			langs: ['SQL', 'PL/SQL'],
			description: 'Uso de los manejadores PostgreSQL, MySQL y SQLServer. haciendo mayor enfásis en PostgreSQL con la contrucción de DB, empleando técnicas de normalización a fin de crear modelos óptimos ajustados a la información que se requiere almacenar, elaboración de consultas complejas en cortos plazos de tiempo, creación de rutinas avanzadas adaptadas a los diferentes requerimientos de la institución y mantenimiento de los servidores a fin de ofrecer el mejor servicio',
			amount: 8
		},
		{
			time: '2009',
			title: 'Administración de S.O.',
			langs: ['MacOSX', 'GNU/Linux'],
			description: 'Uso de las distribuciónes Ubuntu, Debian, Arch, Fedora y Centos, desde la instalación empleando las póliticas de seguridad pertinentes al servicio ofrecido, pasando por la configuración de servicios Apache y SSH, monitoreo constante de recursos, hasta el mantemiento y actualización con el fin de ofrecer el mejor servicio a los usuarios finales.',
			amount: 9
		},
		{
			time: null,
			title: 'Workflow',
			langs: ['Git', 'VIM', 'MacOSX', 'Vagrant', 'SSH', 'Docker'],
			description: 'Me enfoco en mejorar constantemente mi entorno de desarrollo utilizando controladores de versiones como GIT, interfaces de desarrollo adaptables como VIM, mayormente utilizó MacOSX por la comodidad y poder al usuario que brinda, Vagrant con la finalidad de crear entornos virtuales de prueba con la mayor similitud al entorno real y SSH para la administración de servidores',
			amount: 9
		},
		{
			time: null,
			title: 'Aplicaciónes Mobile',
			langs: ['Swift'],
			description: 'Con en anuncio del nuevo lenguaje de parte de Apple, despertó mi interes en aprender esta nueva herramienta. Desde el 2014 se me asignó un proyecto a realizar para la plataforma IOS y utilicé está oportunidad para ahondar más en el lenguaje.',
			amount: 5
		},
		{
			time: null,
			title: 'Varios',
			langs: ['Yeoman', 'Android SDK', 'NodeJS', 'Python', 'GO', 'PhaserJS', 'Java', 'ShellScript', 'Photoshop', 'Illustrator', 'Gimp', 'Blender', 'Arduino', 'ElasticSearch'],
			description: 'Aun cuando no forman parte de mi trabajo diario, me gusta estar al día en lo que pasa en el mundo del desarrollo, aprendiendo nuevos lenguajes y probando diferentes librerías. Por otro lado me gusta aprender a utilizar herramientas de diseño y modelado, aun cuando mi formación en estas es un poco básica.',
			amount: 9
		}
    ];
  });
