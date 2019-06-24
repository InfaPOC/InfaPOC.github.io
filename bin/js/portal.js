//alert("CONNECTED")
var bt=document.querySelectorAll("button");
var paraMigration=document.querySelector("#migration");
var paraHome=document.querySelector("#home");
var paraAccess=document.querySelector("#access");

function displayHome() {
 paraHome.style.display="block";
 paraMigration.style.display="none";
 paraAccess.style.display="none";
}

function displayMigration() {
 paraMigration.style.display="block";
 paraHome.style.display="none";
 paraAccess.style.display="none";
}

function displayAccess() {
 paraAccess.style.display="block";
 paraMigration.style.display="none";
 paraHome.style.display="none";

}

function loadPage() {
	paraMigration.style.display="none";
	paraHome.style.display="block";
	paraAccess.style.display="none";
}

loadPage();

bt[0].addEventListener("click",displayHome);
bt[1].addEventListener("click",displayMigration);
bt[2].addEventListener("click",displayAccess);