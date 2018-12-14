// JavaScript Document

(function() {
	"use strict";
	
	document.addEventListener('DOMContentLoaded', function(){

		var vTime= document.getElementById('myTime');
		var vDay = document.getElementById('myToday');

		setInterval(updateTime, 1000);
		
		function updateTime(){
			var d = new Date();

			var myHours = d.getHours();
			var myMinutes = d.getMinutes();
			var myDay = d.getDate();
			var myMonth = formatMonth( d.getMonth() );
			var ampm = 'AM';


			if (myHours > 12 ){
				myHours -=  12;
				ampm = 'PM';
			}
			else if(myHours === 0 ){
				myHours = 12;
			}

			if (myMinutes < 10 ){
				myMinutes = '0' + myMinutes;
			}
			var sepClass = '' ;

			if ((d.getSeconds() % 2 ) === 1) {
				sepClass = 'trans' ;
			}

			var sep = '<span class="' + sepClass + '"> : </span>';

			vDay.innerHTML = myMonth + ' ' + myDay;

			vTime.innerHTML = myHours + sep + myMinutes + sep + d.getSeconds() + ' '  + ampm;
		}

	});


	function formatMonth(m){

		m = parseInt(m, 10);

		if (m< 0 ) {
			m = 0;
		}
		else if (m > 11){
			m = 11;
		}

		var monthName =[ 'JANUARY', 
				'FEBRUARY', 
				'MARCH', 
				'APRIL' , 
				'MAY', 
				'JUNE', 
				'JULY', 
				'AUGUST', 
				'SEPTEMBER',
		     	'OCTOBER', 
		     	'NOVEMBER', 
		     	'DECEMBER'
		     ];
				
		return monthName[m];

	}


	




})();