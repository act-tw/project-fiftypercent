$(function() {
    QueryString("true") === "true" && (function() {
    	$("form[name='formSc']").css("display","inline");
    	$("form[name='formSc']").appendTo($("#middle_option"));
    	$("form[name='formSc']").find(">img,>a").appendTo($("#footer_wrapper"));
    	$("form[name='formSc']").find(">span:first").css("margin-left",10);
    	

    	console.log("true");
    }());
});