// Вариант на JQuery;

var ball = $('.ball');
var field = $('.field');


//Обработчик, который отслеживает событие click;
ball.on('click', function () {
	
	// Вычисляем координаты границ поля;

	// добавляем пол высоты мяча, чтобы мяч не заходил за верхний край поля;
	var fieldTop = Math.floor(field.offset().top + ball.height()/2); 
	// вычетаем высоту мяча (пол высоты снизу, пол высоты отнимаем из fieldTop), чтобы мяч не заходил за нижний край поля;
	var fieldBottom = Math.floor(field.height() - fieldTop - ball.height()/2);

	// var fieldTop = Math.floor(field.offset().top); 	
	// var fieldBottom = Math.floor(fieldTop + field.height());
	var fieldLeft = Math.floor(field.offset().left);
	var fieldRight = Math.floor(fieldLeft + field.width());

	console.log( fieldTop, fieldBottom, fieldLeft, fieldRight); // выводим координаты поля;


	
	// Генерируем рандомное значения координат по оси Y (для мяча);
	function random() {
		var rand = Math.floor(fieldTop + Math.random() * (fieldBottom + 1 - fieldTop))
		return rand;
	}


	var randomCordsY = random(); //Координата перемещениния меча по оси Y;
	console.log(randomCordsY); // выводим координаты перемещениния меча по оси Y;



	// Вычисляем координаты для перемещения мяча;
	var ballCoords = {	
		//Вот при таких параметах мяч перемещается строго между верхней и нижней границами поля;
		// top: field.height() - ball.height(), // по высоте поля;

		top:  randomCordsY, // по высоте поля;
		left: field.width() - ball.width() // по ширине поля;	
	};



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
	
	// высота ворот (относительно поля);	
	var heightGate = Math.floor(field.height()/2 - field.height()*0.3); 	
	// коодринаты ворот сверху (относительно поля);
	var posY = Math.floor(field.height()/2  - field.height()/2*0.25); 
	// коодринаты ворот снизу (относительно поля);
	var posY2 = posY + heightGate; 


	console.log( 'y=[' + posY + '] y2=[' + posY2 + ']'); // выводим координаты ворот;
	

	// коодринаты мяча (относительно поля);
	var posBall = Math.floor(ball.offset().top);	
	console.log (posBall); // выводим координаты мяча;

	
	// если мяч находит в воротах, то выводим 'Gooooooool!!!'
	if ( posBall > posY && posBall < posY2 ) {		
		setTimeout(() => alert('Gooooooool!!!'), 100); // Выводим alert с небольшой задержкой, чтобы мяч не прерывал движения; 
		// alert ('Gooooooool!!!');
	}

}
