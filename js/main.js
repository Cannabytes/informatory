function ajq(href, params, scs) {
    $.ajax({
        url: href,
        xhrFields: {
            withCredentials: false
        },
        method: 'post',
        data: params,
        dataType: 'json',
        crossDomain: true,
        processData: true,
        contentType: 'application/x-www-form-urlencoded',
		success: scs 
    });
}

$(document).on("click", "#openDir", function () {
	let params = {
        path: $(this).data("path"),
    };
	ajq('/open/directory', params, function(data) {});
});


function dataLoading(){
	let params = {};
	ajq('/info', params, function(data) {
		if (data.downloading==false){
			window.close(); 
		}
	});
}