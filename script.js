function scrolltosection(Id){
    var elementid=document.getElementById(Id);
    elementid.scrollIntoView({ behavior: 'smooth' });
}


function openLink(url){
     window.location.href=url;
}