window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Bloco = window.blockly.js.blockly.Bloco || {};

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Bloco.directionRoute = function() {

	var item, var1;
	this.cronapi.maps.directionRoute(this.cronapi.maps.createRequestDirection(
			this.cronapi.maps.createLatLngPoint('-12.999405', '-38.468792'),
			this.cronapi.maps.createLatLngPoint('-12.9793872', '-38.4641323'),
			'BICYCLING', null), function(sender_item) {
		item = sender_item;
		this.cronapi.maps.renderDirection("map", item,
				'{\"preserveViewport\": false}', function(sender_item) {
					item = sender_item;
					this.cronapi.screen.notify('success', 'RENDERIZOU');
				}.bind(this));
	}.bind(this));
}

/**
 * Bloco
 */
window.blockly.js.blockly.Bloco.criarMapa = function() {

	var item, var1;
	this.cronapi.maps.init("map", 'roadmap', this.cronapi.maps
			.createLatLngPoint('-12.999405', '-38.468792'), '18', function(
			sender_item) {
		item = sender_item;
		this.blockly.js.blockly.Bloco.criar_Marcador_CronApp();
		this.blockly.js.blockly.Bloco.criarAutoCompletar();
		this.blockly.js.blockly.Bloco.drawPolygon();
	}.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Bloco.criar_Marcador_CronApp = function() {

	var item, var1;
	this.cronapi.maps
			.createMarker(
					"map",
					'CronApp',
					'CronApp',
					this.cronapi.maps.createLatLngPoint('-12.999405',
							'-38.468792'),
					'/img/cronapp.png',
					'<h1>Sede do Cronapp em Salvador </h1><br/><h3><a href=\"https://www.cronapp.io\" target=\"blank\"> https://www.cronapp.io </a></h3>',
					'');
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Bloco.criarAutoCompletar = function() {

	var item, var1;
	this.cronapi.maps.createAutoComplete("input", 'establishment',
			this.cronapi.maps.createLatLngBounds(this.cronapi.maps
					.createLatLngPoint('-12.9973492', '-12.9973492'),
					this.cronapi.maps.createLatLngPoint('-12.9673492',
							'-13.0073492')), 'true', '', function(sender_item) {
				item = sender_item;
				this.blockly.js.blockly.Bloco.centralizar_mapa(item);
			}.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Bloco.drawRectangle = function() {

	var item, var1;
	this.cronapi.maps.drawRectangle("map", 'myRect', this.cronapi.maps
			.createLatLngBounds(this.cronapi.maps.createLatLngPoint(
					'-12.9952347', '-38.4744789'), this.cronapi.maps
					.createLatLngPoint('-12.999405', '-38.468792')), '',
			'black', '0.4', '');
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Bloco.desenhar_Circulo = function() {

	var item, var1;
	this.cronapi.maps.drawCircle("map", 'myCricle', this.cronapi.maps
			.createLatLngPoint('-12.999405', '-38.468792'), '200', 'blue',
			'white', '0.5', '');
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Bloco.geocode = function() {

	var item, var1;
	this.cronapi.maps.geocoder('Paseo', this.cronapi.maps.createLatLngBounds(
			this.cronapi.maps.createLatLngPoint('-12.9994138', '-38.4757761'),
			this.cronapi.maps.createLatLngPoint('-12.9887882', '-38.4573871')),
			null, function(sender_item) {
				item = sender_item;
				var1 = item[0];
				this.cronapi.screen.notify('success', [
						this.cronapi.maps.getPropertyFroGeocoder(var1,
								'latitude'),
						this.cronapi.maps.getPropertyFroGeocoder(var1,
								'longitude')]);
			}.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Bloco.drawPolygon = function() {

	var item, var1;
	this.cronapi.maps.drawPolygon("map", 'myPolygon', [
			this.cronapi.maps.createLatLngPoint('-12.9952347', '-38.4744789'),
			this.cronapi.maps.createLatLngPoint('-12.999405', '-38.468792'),
			this.cronapi.maps.createLatLngPoint('-12.999405', '-38.448792'),
			this.cronapi.maps.createLatLngPoint('-12.979405', '-38.448792')],
			'gray', '0.5', 'red', '0.8', '');
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Bloco.centralizar_mapa = function(item) {

	var item, var1;
	this.cronapi.maps.centralizeMap("map", this.cronapi.maps
			.getPropertyFromAutoComplete(item, 'latitude'), this.cronapi.maps
			.getPropertyFromAutoComplete(item, 'longitude'));
	this.cronapi.maps.createMarker("map", 'meuMarcador', this.cronapi.maps
			.getPropertyFromAutoComplete(item, 'addressName'),
			this.cronapi.maps.createLatLngPoint(this.cronapi.maps
					.getPropertyFromAutoComplete(item, 'latitude'),
					this.cronapi.maps.getPropertyFromAutoComplete(item,
							'longitude')), '', this.cronapi.maps
					.getPropertyFromAutoComplete(item, 'addressName'), '');
	this.cronapi.screen.notify('success', this.cronapi.maps
			.getPropertyFromMarker("map", 'meuMarcador', 'title'));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Bloco.drawLine = function() {

	var item, var1;
	this.cronapi.maps.drawLine("map", 'myLine', [
			this.cronapi.maps.createLatLngPoint('-12.9952347', '-38.4744789'),
			this.cronapi.maps.createLatLngPoint('-12.999405', '-38.468792'),
			this.cronapi.maps.createLatLngPoint('-12.999405', '-38.448792'),
			this.cronapi.maps.createLatLngPoint('-12.979405', '-38.448792')],
			'', '0.8', '');
}
