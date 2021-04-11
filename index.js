 function showData(){
    event.preventDefault();
    var country=document.getElementById("country-name").value;
    var fromDate=document.getElementById("fromDate").value;
    var endDate=document.getElementById("endDate").value;

    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var deaths=document.getElementById("deaths");

    /* code for checking if input field values are empty or not */
    if(country=='' || fromDate=='' || endDate=='')
    alert("Please enter value. You can't leave this field empty.");

    else
    {   
        /* covid19 Api */
        var url="https://api.covid19api.com/country/"+country+"?from="+fromDate+"T00:00:00Z&to="+endDate+"T00:00:00Z";

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            var length=res.length;
            var index=length-1;

            var confirmCase=res[index].Confirmed;
            var activeCase=res[index].Active;
            var deathCase=res[index].Deaths;

            confirmed.innerHTML=confirmCase;
            active.innerHTML=activeCase;
            deaths.innerHTML=deathCase;

            document.getElementById("res").style.display="block";
            
        })
    }
}
