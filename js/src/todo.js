;( function () {
	
	$(document).keyup( function( e ) {
		
		if ( e.keyCode == 13 ){
			var value = $("#todo").val();
			
			if ( value.trim() != "" ){
			
				var $li = '<li class="list-items"><span class="left nochecked"></span><span class="context">' + value + '</span><span class="right"></span></li>';
				$("ul.todo-list").append($li);
				$("#todo").val("");
				$("#todo1 .handle").addClass("show");
				getLength();
			}
		} else {
			return false;
		}
	});
	
	function getLength (){
		var length = $("li.list-items span.left.nochecked").length;
		$("#todo1 .handle .left span.count").text( length );
	}
	
	$("ul.todo-list").on( "click", "span.left", function(){
		
		if ( $(this).hasClass("nochecked") ){
			$(this).removeClass("nochecked").addClass("checked");
			$(this).parent("li").addClass("middleLine");
		} else {
			$(this).removeClass("checked").addClass("nochecked");
			$(this).parent("li").removeClass("middleLine");
		}
		getLength();
		
	}).on( "click", "span.right", function(){
		
		$(this).parent("li.list-items").remove();
		var length = $("li.list-items").length;
		if ( length == 0 ){
			$("#todo1 .handle").removeClass("show");
		}
		getLength();
	})
	
	$(".handle").on("click", "div.right span",function ( e ) {
		
		$(".handle div.right span").removeClass("show");
		if ( !$(this).hasClass("show") ){
			$(this).addClass("show");
		}
		
		switch( e.target.id ) {
			case "all" :
				$("li.list-items").show();
				break;
			case "active" :
				$("li.list-items").show();
				$("li.list-items span.checked").parent("li").hide();
				break;
			case "completed" :
				$("li.list-items").show();
				$("li.list-items span.nochecked").parent("li").hide();
				break;
			default : 
				break;
		}
	})
	
	
})();

import React from 'react';
import ReactDOM from 'react-dom';
debugger
class TodoList extends React.Component {
	
}
