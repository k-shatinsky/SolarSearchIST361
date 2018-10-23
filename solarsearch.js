function search(userText){
    $( "p:contains('" + userText + "')" ).css( "display", "flex" );
}

function light(){
    $( "html" ).css( "background-color", "#eee8d5");
    $( "html" ).toggleClass( "light", true );
    $( "html" ).toggleClass( "dark", false );
}

function dark(){
    $( "html" ).css( "background-color", "#002b36");
    $( "html" ).toggleClass( "dark", true );
    $( "html" ).toggleClass( "light", false );
}