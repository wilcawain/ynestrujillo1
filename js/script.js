var pageW; // Sets the global variable for the page width
/* Get the page width and output to the DOM id of "PageWidth"
 */
function get_page_width() {
    pageW = $(document).width(); //In JQuery
    $("#PageWidth").html("Page Width: " + pageW + "px"); // In JQuery
}
/* Check for browser resize and re-run the get page with function
   to set the new width of the page.
*/
$(window).resize(function(){
    get_page_width();
    /* Check if the browsers width and if less than 401px
       hide the menu bar, and is larger than 400px show
       the menu bar
    */
    if(pageW <= 400) {
        $("#menuBar").fadeOut(330);
    }
    if(pageW >= 401) {
        $("#menuBar").fadeIn(200);
    }
});
/* Wait for the page to load and run the get page width function
   to set the value of the "pageW" global variable.
 */
$("document").ready(function(){
    get_page_width();
    });
