var MODEL = (function() {
  var _showAlert = function(buttonName) {
    alert("This Button is" + buttonName);
  };

  var _getHome = function(callback) {
    let text = `<h1>Home</h1> <br> <img src="/images/leading.jpg"/> <br> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>`;

    return callback(text);
  };

  var _getAbout = function(callback) {
    let text = `<h1>About</h1> <br> <img src="/images/japan-tour-01.jpg"/> <br> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>`;

    return callback(text);
  };

  var _getProducts = function(callback) {
    let text = `<h1>Text</h1> <br> <img src="/images/japan-tour-02.jpg"/> <br> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>`;

    return callback(text);
  };

  var _getTour = function(callback) {
    let text = `<h1>Tour</h1> <br> <img src="/images/japan-tour-03.jpg"/> <br> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>`;

    return callback(text);
  };

  return {
    showAlert: _showAlert,
    getHome: _getHome,
    getAbout: _getAbout,
    getProducts: _getProducts,
    getTour: _getTour
  };
})();
