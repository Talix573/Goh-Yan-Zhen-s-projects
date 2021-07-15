$(document).ready(function() {
	var idcount = 0;
	$("#customerform").submit(function(event) {
		event.preventDefault();
		idcount++;
		var Surname = $("#surname").val();
		var Name = $("#name").val();
		var Gender = $("#gender:checked").val();
		var Address = $("#address").val();
		var Email = $("#email").val();
		var Phone = $("#phone").val();
		var errorFree = true;
		
		var alphaReg = /^[A-Za-z\s]+$/;
		if (Surname == "" || !(alphaReg.test(Surname))) {
			errorFree = false;
			$("#surname_msg").show();
		}
		else {
			$("#surname_msg").hide();
		}
		
		if (Name == "" || !(alphaReg.test(Name))) {
			errorFree = false;
			$("#name_msg").show();
		}
		else {
			$("#name_msg").hide();
		}
		
		if (Gender == "") {
			errorFree = false;
			$("#gender_msg").show();
		}
		else {
			$("#gender_msg").hide();
		}
		
		if (Address == "") {
			errorFree = false;
			$("#address_msg").show();
		}
		else {
			$("#address_msg").hide();
		}
		
		if (Email == "") {
			errorFree = false;
			$("#email_msg").show();
		}
		else {
			$("#email_msg").hide();
		}
		
		if (Phone == "") {
			errorFree = false;
			$("#phone_msg").show();
		}
		else {
			$("#phone_msg").hide();
		}
		
		if (errorFree){
		$("#tblData tbody").append("<tr><td>" + idcount + "</td>" + "<td>" + Surname + "</td>" + "<td>" + Name + "</td>" + "<td>" + Gender + "</td>" + "<td>" + Address + "<td>" + Email + "</td>" + "<td>" + Phone + "</td>" + "</td>" + "<td><button class='btnEdit'>Edit</button>" + "<button class='btnDelete'>Delete</button></td></tr>");
			
		$(".btnEdit").bind("click", Edit);
		$(".btnDelete").bind("click", Delete);
		}
	});

function Edit() {
	var par = $(this).parent().parent();
	var tdlSurname = par.children("td:nth-child(2)");
	var tdName = par.children("td:nth-child(3)");
	var tdGender = par.children("td:nth-child(4)");
	var tdAddress = par.children("td:nth-child(5)");
	var tdEmail = par.children("td:nth-child(6)");
	var tdPhone = par.children("td:nth-child(7)");
	var tdButtons = par.children("td:nth-child(8)");
	
	tdlSurname.html("<input type='text' value='" +
		tdlSurname.html() + "'>");
	tdName.html("<input type='text' value='" +
		tdName.html() + "'>");
	tdGender.html("<input type='text' value='" +
		tdGender.html() + "'>");
	tdAddress.html("<input type='text' value='" +
		tdAddress.html() + "'>");
	tdEmail.html("<input type='text' value='" +
		tdEmail.html() + "'>");
	tdPhone.html("<input type='text' value='" +
		tdPhone.html() + "'>");
	tdButtons.html("<button class='btnSave'>Save</button>");
	
	$(".btnSave").bind("click", Save);
	$(".btnDelete").bind("click", Delete);
}
	
function Save() {
	var par = $(this).parent().parent();
	var tdSurname = par.children("td:nth-child(2)");
	var tdName = par.children("td:nth-child(3)");
	var tdGender = par.children("td:nth-child(4)");
	var tdAddress = par.children("td:nth-child(5)");
	var tdEmail = par.children("td:nth-child(6)");
	var tdPhone = par.children("td:nth-child(7)");
	var tdButtons = par.children("td:nth-child(8)");
	
	tdSurname.html(tdSurname.children("input[type=text]").val());
	tdName.html(tdName.children("input[type=text]").val());
	tdGender.html(tdGender.children("input[type=text]").val());
	tdAddress.html(tdAddress.children("input[type=text]").val());
	tdEmail.html(tdEmail.children("input[type=text]").val());
	tdPhone.html(tdPhone.children("input[type=text]").val());
	tdButtons.html("<button class='btnEdit'>Edit</button>" + "<button class='btnDelete'>Delete</button>");
	$(".btnEdit").bind("click", Edit);
	$(".btnDelete").bind("click", Delete);
}
	
function Delete() {
	var par = $(this).parent().parent();
	par.remove();
}

});