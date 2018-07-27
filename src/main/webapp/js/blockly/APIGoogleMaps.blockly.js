window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.APIGoogleMaps = window.blockly.js.blockly.APIGoogleMaps
		|| {};

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.APIGoogleMaps.AutoCompletarSaida = function() {

	var item, saida, destino;
	this.cronapi.maps.createAutoComplete("inputSaida", 'address',
			this.cronapi.maps.createLatLngBounds(this.cronapi.maps
					.createLatLngPoint('-13.0183736\n', '-38.5480934'),
					this.cronapi.maps.createLatLngPoint('-12.7513579',
							'-38.1534927')), 'true', '', function(sender_item) {
				item = sender_item;
				this.cronapi.screen.createScopeVariable('saida', item);
			}.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.APIGoogleMaps.GeraRota = function() {

	var item, saida, destino;
	destino = this.cronapi.screen.getScopeVariable('destino');
	saida = this.cronapi.screen.getScopeVariable('saida');
	this.cronapi.maps.directionRoute(this.cronapi.maps.createRequestDirection(
			this.cronapi.maps.createLatLngPoint(this.cronapi.maps
					.getPropertyFromAutoComplete(destino, 'latitude'),
					this.cronapi.maps.getPropertyFromAutoComplete(destino,
							'longitude')), this.cronapi.maps.createLatLngPoint(
					this.cronapi.maps.getPropertyFromAutoComplete(saida,
							'latitude'), this.cronapi.maps
							.getPropertyFromAutoComplete(saida, 'longitude')),
			'DRIVING', null), function(sender_item) {
		item = sender_item;
		this.cronapi.maps.drawRoute("map9826", item,
				'{\"preserveViewport\": false}', function(sender_item) {
					item = sender_item;
				}.bind(this));
	}.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.APIGoogleMaps.AutoCompletarDestino = function() {

	var item, saida, destino;
	this.cronapi.maps.createAutoComplete("inputDestino", 'address',
			this.cronapi.maps.createLatLngBounds(this.cronapi.maps
					.createLatLngPoint('-13.0183736\n', '-38.5480934'),
					this.cronapi.maps.createLatLngPoint('-12.7513579',
							'-38.1534927')), 'true', '', function(sender_item) {
				item = sender_item;
				this.cronapi.screen.createScopeVariable('destino', item);
			}.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.APIGoogleMaps.Adicionar_marcador = function() {

	var item, saida, destino;
	this.cronapi.maps
			.createMarker(
					"map9826",
					'cronappId',
					'Sede CronApp',
					this.cronapi.maps.createLatLngPoint('-12.9992582',
							'-38.4690056'),
					'../views/logged/img/logo-cronapp.png',
					'<h2 style=\"text-align: center;\">Sede do Cronapp em Salvador</h2>\n<h3 style=\"text-align: center;\"><a href=\"https://www.cronapp.io\" target=\"blank\"> https://www.cronapp.io </a></h3>',
					'');
}

/**
 * APIGoogleMaps
 */
window.blockly.js.blockly.APIGoogleMaps.Executar = function() {

	var item, saida, destino;
	if (!this.cronapi.maps.isInitialized("map9826")) {
		this.cronapi.maps.init("map9826", 'roadmap', this.cronapi.maps
				.createLatLngPoint('-23.553994', '-46.6600004\n'), '16',
				function(sender_item) {
					item = sender_item;
					this.blockly.js.blockly.APIGoogleMaps.AutoCompletarSaida();
					this.blockly.js.blockly.APIGoogleMaps
							.AutoCompletarDestino();
					this.blockly.js.blockly.APIGoogleMaps.Adicionar_marcador();
					this.blockly.js.blockly.APIGoogleMaps.Adiciona_circulo();
				}.bind(this));
	}
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.APIGoogleMaps.Adiciona_circulo = function() {

	var item, saida, destino;
	this.cronapi.maps.drawCircle("map9826", 'IdCirculo', this.cronapi.maps
			.createLatLngPoint('-12.9992582', '-38.4690056'), '400', 'gray',
			'black', '0.4', '');
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.APIGoogleMaps.DesenhaRetangulo = function() {

	var item, saida, destino;
	this.cronapi.maps.drawRectangle("map9826", 'ret', this.cronapi.maps
			.createLatLngBounds(this.cronapi.maps.createLatLngPoint(
					'-13.0183736', '-38.5480934'), this.cronapi.maps
					.createLatLngPoint('-12.7513579', '-38.1534927')), '',
			'black', '', '');
}
