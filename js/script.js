// Вариант на JQuery;

var ball = $('.ball');
var field = $('.field');

// Функция для получения рандомного значения координат по оси Y (для мяча);
function getRandomCoordsY(min, max) {
	min = Math.ceil(0);
	max = Math.floor(field.height());
	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается;
}


//Обработчик, который отслеживает событие click;
ball.on('click', function () {	
	
	var coordsY = getRandomCoordsY(); //Координатиа перемещениния меча по оси Y;
	var coordsX =  Math.floor(field.width());  //Координатиа перемещениния меча по оси X;

	// Вычисляем координаты для перемещения мяча;
	var ballCoords = {
	  top: coordsY + ball.height()/2, // ball.height()/2 - определяем середину по высоте элемента;
	  left: coordsX + ball.width()/2 // ball.width()/2 - определяем середину по ширине элемента;		
	};

	// console.log(ballCoords.top, ballCoords.left); 
	
	// запрещаем пересекать верхнюю границу поля
	if (ballCoords.top < 0) ballCoords.top = 0;

	// запрещаем пересекать левую границу поля
	if (ballCoords.left < 0) ballCoords.left = 0;


	// запрещаем пересекать правую границу поля
	if (ballCoords.left + ball.width() > field.width()) {
	  ballCoords.left = field.width() - ball.width();
	}

	// запрещаем пересекать нижнюю границу поля
	if (ballCoords.top + ball.height() > field.height()) {
	  ballCoords.top = field.height() - ball.height();
	}


	// Если мяч на левой стороне поля, то переместить мяч на правую сторону;
	if (ball.css('left') == '0px') {
		ball.animate({
			left: ballCoords.left,
			top: ballCoords.top
		}, 600, 'linear', goal);
	} 
	// Если мяч на правой стороне поля, то переместить мяч на левую сторону;
	else {
		ball.animate({
			left: 0,
			top: ballCoords.top
		}, 600, 'linear', goal);
	}

});



// Функция проверки поподания мяча в ворота;
function goal() {

	// коодринаты ворот слева (относительно поля);
	// var posXLeft = Math.floor(field.width()*0.05); 

	// коодринаты ворот справа (относительно поля);
	// var posXRight = Math.floor(field.width() - field.width()*0.05); 
	
	// высота ворот (относительно поля);
	var heightGate = Math.floor(field.height()/2 - field.height()*0.30); 
	
	// коодринаты ворот сверху (относительно поля);
	var posY = Math.floor(field.height()/2  - field.height()/2*0.15); 
	// коодринаты ворот снизу (относительно поля);
	var posY2 = posY + heightGate; 


	console.log( 'y=[' + posY + '] y2=[' + posY2 + ']'); // выводим координаты ворот;
	

	// коодринаты мяча (относительно поля);
	var posBall = Math.floor(ball.offset().top);	
	console.log (posBall); // выводим координаты мяча;

	
	// если мяч находит в воротах, то выводим 'Gooooooool!!!'
	if ( posBall > posY && posBall < posY2 ) {
		// console.log( 'y=[' + posY + '] y2=[' + posY2 + ']'); // выводим координаты ворот;
		// console.log (posBall); // выводим координаты мяча;
		alert ('Gooooooool!!!');
	}

}







// // Вариант на JavaScript;

// var ball = document.querySelector('.ball');
// var field = document.querySelector('.field');

// // Функция для получения рандомного значения координат по оси Y (для мяча);
// function getRandomCoordsY(min, max) {
// 	min = Math.ceil(0);
// 	max = Math.floor(field.clientHeight);
// 	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается;
// }

// // Обработчик, который отслеживает событие click;
// ball.onclick = function(event) {
	
// 	var coordsY = getRandomCoordsY(); //Координатиа перемещениния меча по оси Y;
// 	var coordsX =  field.clientWidth; //Координатиа перемещениния меча по оси X;

// 	// мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
// 	// таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
// 	let ballCoords = {
// 	  top: coordsY + ball.clientHeight/2, // clientHeight/2 - определяем середину по высоте элемента;
// 	  left: coordsX + ball.clientWidth/2 // clientWidth/2 - определяем середину по ширине элемента;
// 	};

// 	console.log(ballCoords.top, ballCoords.left);

// 	// запрещаем пересекать верхнюю границу поля
// 	if (ballCoords.top < 0) ballCoords.top = 0;

// 	// запрещаем пересекать левую границу поля
// 	if (ballCoords.left < 0) ballCoords.left = 0;


// 	// запрещаем пересекать правую границу поля
// 	if (ballCoords.left + ball.clientWidth > field.clientWidth) {
// 	  ballCoords.left = field.clientWidth - ball.clientWidth;
// 	}

// 	// запрещаем пересекать нижнюю границу поля
// 	if (ballCoords.top + ball.clientHeight > field.clientHeight) {
// 	  ballCoords.top = field.clientHeight - ball.clientHeight;
// 	}

// 	// Функция перемещения мяча с одного края поля на другой край футбольного поля;
// 	function getCoords() {

// 		// debugger // Проблема перевого клика (при впервом клике почему-то функция не видит, что у мяча установлен 'left:0' и переходит к выполнению else);
		
// 		// Если мяч на левой стороне поля, то переместить мяч на правую сторону;		
// 		// if(ball.style.left == ball.offsetLeft) {
// 		if(ball.offsetLeft = '0px') {
// 			ball.style.left = ballCoords.left + 'px';
// 			ball.style.top = ballCoords.top + 'px';	
// 		}
// 		// Если мяч на правой стороне поля, то переместить мяч на левую сторону;
// 		else {
// 			ball.style.left = 0 + 'px';
// 			ball.style.top = ballCoords.top + 'px';	
// 		}		
// 		console.log(ball.offsetLeft);
// 	}

// 	getCoords();	

// }