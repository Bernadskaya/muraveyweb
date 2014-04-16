/**
 * Created by nevada on 25.03.14.
 */

// divider for InsideFortuna.html.twig
$(document).ready(function($){

    var divs = $('div.divider'),
        k = 0,
        cntInGroup = 3; // по сколько элементов в группе

    divs.each(function(i){
        if(i % cntInGroup == 0){
            k++;
        }
        $(this).addClass('tmp' + k);
    });

    for(i = 1; i <= divs.length + 1 / cntInGroup; i++)
    {
        $('.tmp' + i).wrapAll('<div class="row"></div>');
    }

});
//end divider

// hover effect for InsideFortuna.html.twig
$(document).ready(function($){

    var fortune = $('div.fortune-incl');

    fortune.each(function(){
        var d = $(this).height();
        var h = $('h2',this).height();
        var clear_h = (d) - (h);
        $('p, ul', this).addClass("hidden");
        $('.thumbnail', this).css("height",clear_h +"px");

        $(this).hover(
            function () {
                $('h2', this).hide();
                $('p, ul', this).removeClass("hidden");
                $('p, ul', this).fadeIn(300);
            },
            function () {
                $('p, ul', this).hide();
                $('h2', this).fadeIn(300);
            })
    });

});