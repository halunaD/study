var countQuest = 0;
var plus = 0;
var test_start = 0;
//Масив запитань
var questions = ["Розмір графа - це","Петлі - це ребра, які ","У повному графі ","Дерево - це граф,"];	
//Масиви відповідей
var number1 = ["його довжина і ширина","з'єднують вершину саму з собою","кількість вершин дорівнює кількості ребер","у якого є одна головна вершина"];	
var number2 = ["кількість його вершин","охоплюють декілька вершин","кожну пару вершин поєднує ребро","у якого кількість ребер дорівнює кількості вершин"];	
var number3 = ["кількість його ребер","мають напрямок","ребер удвічі більше ніж вершин", "який не містить циклів та є зв'язним"];
var answer=[0,0,0];
function check(num){
		

		if(num == 0){ 
			
			document.getElementById('area').style.display='block'; //
			document.getElementById('start').style.display='none';
			document.getElementById('end').style.display='block';
			document.getElementById('question').innerHTML=questions[countQuest];
			document.getElementById('labelRadio1').innerHTML=number1[countQuest];
			document.getElementById('labelRadio2').innerHTML=number2[countQuest];
			document.getElementById('labelRadio3').innerHTML=number3[countQuest];
		}

		if (num==1) {
			answer[0]++;
			// alert(answer);
		}
		if (num==2) {
			answer[1]++;
			// alert(answer);
		}	
		if (num==3) {
			answer[2]++;
			// alert(answer);
		}		
		if (num==4) {
			if ((countQuest==0)&(answer[1]==1)){
				plus++;
			}
			if ((countQuest==1)&(answer[0]==1)){
				plus++;
			}
			if ((countQuest==2)&(answer[1]==1)){
				plus++;
			}
			if ((countQuest==3)&(answer[2]==1)){
				plus++;
			}
			// очистка радіобатонів
			var uncheck=document.getElementsByTagName('input');
			for(var i=0;i<uncheck.length;i++)
			 {
			  if(uncheck[i].type=='radio')
			  {
			   uncheck[i].checked=false;
			  }
			}
			//очистка масиву відповідей
			for(var i=0;i<answer.length;i++){
				answer[i]=0;
				// var idd='customRadio';
				// idd+=i+1;
				// document.getElementById(idd).style.check=none;

			}

			countQuest++;
			document.getElementById('question').innerHTML=questions[countQuest];
			document.getElementById('labelRadio1').innerHTML=number1[countQuest];
			document.getElementById('labelRadio2').innerHTML=number2[countQuest];
			document.getElementById('labelRadio3').innerHTML=number3[countQuest];	

		 }
		if (countQuest==questions.length) {
			document.getElementById('area').style.display='none'; 
			alert("Ви відповіли правильно на "+plus+" питань");
		}
							
						
		
		
		
	}
	
