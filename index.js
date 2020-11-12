$(function(){
	console.log("jQuery is ready!")


function clickRandome()
{
	console.log("кнопка нажата, интервал остановлен");
	clearinterval(interval);
}

function clickTransit()
{
	let name = $(".name-feild").val();
	let lastName = $(".lastname-feild").val();

	console.log(name);
	console.log(lastName);

	$.ajax({
		url:"https://file:///D:/Загрузки/OpenServer/domains/localhost/index.html/echo.php",
		async: true,
		method: "POST",
		data:{
			"name": name,
			"lastName": lastName
		},
		dataType: "json",

	}).done(function(response){
			console.log('fail');
			console.log(response);

	}).done(function(response){
			console.log('success');
			console.log(response);
		});
}

function changeTestSize(newSize)
{
	let p = document.querySelector(".adc p");
	p.style.fontSize = newSize + "px";
}

function main()
{
	let helloH1 = document.getElementById("hello");

	let button = document.createElement("button");
	$(button).html("Отправить");

	document.body.appendChild(button);

	console.log(button);
	$(button).on("click", clickTransit);



	let a = ["Первый", "Второй", "Третий", "Четвёртый", "Пятый", "Шестой"];
	let b =
	{
		property: "value"
	};

	let arr = [
	{
		name: "Vasy",
		lastname: "Ivanov"
	},
	{
		name: "Vasy",
		lastname: "Ivanov"
	},
	{
		name: "Vasy",
		lastname: "Ivanov"
	},
	{
		name: "Vasy",
		lastname: "Ivanov"
	},
	{
		name: "Vasy",
		lastname: "Ivanov"
	},
	{
		name: "Vasy",
		lastname: "Ivanov"
	}
	];


	//<p>Первый</p>;
	//<p>Второй</p>;
	//<p>Третий</p>;

/*
	for (let i = 0; i < arr.length; i++)
	{
		let p = document.createElement("p");
		p.innerHTML = arr[i].name + " " + arr[i].lastname;
		document.body.appendChild(p);
	}
*/

	function aa(element)
	{
		let p = document.createElement("p");
		p.innerHTML = element.name + " " + element.lastname;
		document.body.appendChild(p);
	}
	arr.forEach(aa);





}



main();

});