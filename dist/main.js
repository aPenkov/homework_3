/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game-process/index.js":
/*!***********************************!*\
  !*** ./src/game-process/index.js ***!
  \***********************************/
/*! exports provided: initGame, changePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initGame\", function() { return initGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changePlayer\", function() { return changePlayer; });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ \"./src/models/index.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ \"./src/view/index.js\");\n\r\n\r\n\r\nfunction initGame(gameState) {\r\n  const namePlayer1 = prompt('Кто  будет играть первым?');\r\n  const namePlayer2 = prompt('А вторым?');\r\n  const player1 = new _models__WEBPACK_IMPORTED_MODULE_0__[\"Gamer\"](namePlayer1,0);\r\n  const player2 = new _models__WEBPACK_IMPORTED_MODULE_0__[\"Gamer\"](namePlayer2,1);\r\n  gameState.playersList = [player1, player2];\r\n  document.querySelector('#name-0').textContent = player1.name;\r\n  document.querySelector('#name-1').textContent = player2.name;\r\n\r\n  document.querySelector('#current-0').textContent = 0;\r\n  document.querySelector('#current-1').textContent = 0;\r\n  document.querySelector('#score-0').textContent = 0;\r\n  document.querySelector('#score-1').textContent = 0;\r\n  gameState.scoresForWin = +document.getElementById('input-limit').value || 100\r\n\r\n  // diceElement_1.style.display = 'none';\r\n  // diceElement_2.style.display = 'none';\r\n  Object(_view__WEBPACK_IMPORTED_MODULE_1__[\"hideDice\"])();\r\n  gameState.scores = [0, 0];\r\n  gameState.currentScore = 0;\r\n}\r\n\r\nfunction changePlayer(gameState) {\r\n  gameState.currentScore = 0;\r\n  document.getElementById('current-'+gameState.activePlayerId).textContent = 0;\r\n  document.querySelector(`.player-${gameState.activePlayerId}-panel`).classList.toggle('active');\r\n  gameState.activePlayerId = +!gameState.activePlayerId;\r\n  // diceElement_1.style.display = 'none';\r\n  // diceElement_2.style.display = 'none';\r\n  Object(_view__WEBPACK_IMPORTED_MODULE_1__[\"hideDice\"])()\r\n  document.querySelector(`.player-${gameState.activePlayerId}-panel`).classList.toggle('active');\r\n}\r\n\n\n//# sourceURL=webpack:///./src/game-process/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-process */ \"./src/game-process/index.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view/index.js\");\n/*\r\nGAME RULES:\r\n\r\n- The game has 2 playersList, playing in rounds\r\n- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score\r\n- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn\r\n- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn\r\n- The first player to reach 100 points on GLOBAL score wins the game\r\n\r\n*/\r\n\r\n\r\n\r\n\r\nconst RESET_VALUE = 2;\r\n\r\nconst gameState = {\r\n  scores: [0, 0],\r\n  currentScore: 0,\r\n  playersList: [],\r\n  activePlayerId: 0,\r\n  scoresForWin: 100,\r\n}\r\n\r\nObject(_game_process__WEBPACK_IMPORTED_MODULE_0__[\"initGame\"])(gameState);\r\n\r\ndocument.querySelector('.btn-roll').addEventListener('click', function() {\r\n  let dice_1 = Math.floor(Math.random() * 6) + 1;\r\n  let dice_2 = Math.floor(Math.random() * 6) + 1;\r\n\r\n  Object(_view__WEBPACK_IMPORTED_MODULE_1__[\"loadDiceImage\"])(dice_1, dice_2);\r\n  Object(_view__WEBPACK_IMPORTED_MODULE_1__[\"displayDice\"])();\r\n\r\n  if (dice_1 !== RESET_VALUE && dice_2 !== RESET_VALUE && dice_1 !== dice_2) {\r\n    gameState.currentScore += dice_1 + dice_2;\r\n    document.getElementById('current-'+gameState.activePlayerId).textContent = gameState.currentScore;\r\n    if (gameState.scores[gameState.activePlayerId] + gameState.currentScore >= gameState.scoresForWin) {\r\n      if (!!localStorage.getItem(gameState.playersList[gameState.activePlayerId].name)) {\r\n        let winCount = (+localStorage.getItem(gameState.playersList[gameState.activePlayerId].name)+1);\r\n        localStorage.setItem(gameState.playersList[gameState.activePlayerId].name, winCount);\r\n      }else {\r\n        localStorage.setItem(gameState.playersList[gameState.activePlayerId].name, 1)\r\n      }\r\n      alert(`Player ${gameState.playersList[gameState.activePlayerId].name} won!!!`);\r\n    }\r\n    \r\n  } else {\r\n    Object(_game_process__WEBPACK_IMPORTED_MODULE_0__[\"changePlayer\"])(gameState);\r\n  }\r\n});\r\n\r\ndocument.querySelector('.btn-hold').addEventListener('click', function() {\r\n  gameState.scores[gameState.activePlayerId] += gameState.currentScore;\r\n  document.querySelector(`#score-${gameState.activePlayerId}`).textContent = gameState.scores[gameState.activePlayerId];\r\n  Object(_game_process__WEBPACK_IMPORTED_MODULE_0__[\"changePlayer\"])(gameState);\r\n});\r\n\r\n\r\ndocument.querySelector('.btn-new').addEventListener('click', function() {\r\n  Object(_game_process__WEBPACK_IMPORTED_MODULE_0__[\"initGame\"])(gameState);\r\n});\r\n\r\ndocument.querySelector('.btn-winners').addEventListener('click', function() {\r\n  let winnersList = ''\r\n  Object.keys(localStorage).sort((key, prevKey) => { \r\n    return (+localStorage.getItem(prevKey) - +localStorage.getItem(key)) }).forEach((el) => {\r\n      winnersList +=`${el} : ${localStorage.getItem(el)}\\n`\r\n    })\r\n  alert(winnersList)\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! exports provided: Gamer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Gamer\", function() { return Gamer; });\nfunction Gamer(name,id) {\r\n  this.score = 0;\r\n  this.name = name;\r\n  this.id = id;\r\n\r\n  this.getScore = () =>{\r\n    return this.score;\r\n  }\r\n\r\n  this.setScore = (score) => {\r\n    this.score += score;\r\n    return this.score;\r\n  }\r\n  this.resetScore = () => {\r\n    this.score = 0\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/models/index.js?");

/***/ }),

/***/ "./src/view/index.js":
/*!***************************!*\
  !*** ./src/view/index.js ***!
  \***************************/
/*! exports provided: hideDice, displayDice, loadDiceImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideDice\", function() { return hideDice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayDice\", function() { return displayDice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadDiceImage\", function() { return loadDiceImage; });\nconst diceElement_1 = document.querySelector('#dice_1');\r\nconst diceElement_2 = document.querySelector('#dice_2');\r\n\r\nfunction hideDice(){\r\n  diceElement_1.style.display = 'none';\r\n  diceElement_2.style.display = 'none';\r\n}\r\n\r\nfunction displayDice() {\r\n  diceElement_1.style.display = 'block';\r\n  diceElement_2.style.display = 'block';\r\n}\r\n\r\nfunction loadDiceImage(dice_1, dice_2) {\r\n  diceElement_1.src = `dice-${dice_1}.png`;\r\n  diceElement_2.src = `dice-${dice_2}.png`;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/view/index.js?");

/***/ })

/******/ });