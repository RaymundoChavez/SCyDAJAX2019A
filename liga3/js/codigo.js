$(function(){
	var config={

		func:function(resp){
			if(resp!=0 && edad){
				$.liga('table').load();
			}
		}
	}
	$('form').liga('AJAX');
});