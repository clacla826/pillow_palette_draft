$(function() {

    var pillow = {
        size: '',
        filling: '',
        pattern: '',
    };

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });



    console.log('1: ', pillow);

    $('.pillowSize a').on('click', function() {
        var choice = $(this).attr('data-size');
        pillow.size = choice;
        console.log('2: ', pillow);
    })

    $('.pillowFilling a').on('click', function() {
        var choice = $(this).attr('data-filling');
        pillow.filling = choice;
        console.log('2: ', pillow);
    })

    //listen for click event
    $('.pillowPattern a').on('click', function() {
        var choice = $(this).attr('data-pattern');
        pillow.pattern = choice;
        console.log('3: ', pillow);
        //Make 2 functions happening in one click event
        //1. Store data-pattern on the object
        //2. Place the image of  selected pillow size 
        //   with the selected pattern        
        addData()
        placePatternOnStep4();
    })

    function addData() {
        console.log('2: ', pillow);
        //declare final pillow
        var finalPillow = pillow;
        console.log('final pillow: ', finalPillow);

        //place the final pillow pattern on Step4
        var finalPattern = pillow.pattern;
        console.log('final pattern:', finalPattern);
    }

    function placePatternOnStep4() {
        console.log('user picked final pattern and placing now!');
        
        var pillowBlank1 = '<map name="mapPattern1" class= "mappattern" id="mapPt1"><area class="p1P1" data-panel:"panel 1" alt="" title="" href="#Pt1Pn1Swatches" shape="poly" coords="472,41,290,645,219,648,148,654,107,660,55,674,26,679,22,673,22,660,33,615,44,531,48,333,48,208,34,175,31,132,31,118,26,94,13,44,11,26,19,18,60,23,95,34,146,38,227,44,381,45,423,46" /><area alt="" title="" href="https://github.com/guradamawang/pillow_palette" shape="poly" coords="499,38,560,32,616,22,650,15,665,17,667,29,653,58,647,89,639,203,638,312,643,360,642,401,386,332,476,41,387,335,476,43" /><area alt="" title="" href="http://learnlayout.com/position.html" shape="poly" coords="385,337,291,647,441,642,519,645,606,659,666,666,680,662,669,626,657,605,656,569,651,515,643,466,639,430,642,403" /><img class="pillowPlayImg" src="images/Step4/white_pillow_with_patterns/Pattern1.png" alt="" usemap="#mapPattern1" /></map>';
        var pillowBlank2 = '<map name="mapPattern2" class= "mappattern" id="mapPt2"><area class="p2P1" data-panel:"panel 1" alt="" title="" href="#Pt1Pn1Swatches" shape="poly" coords="232,48,165,43,140,39,116,39,94,37,72,29,46,23,29,21,19,20,12,29,12,43,17,71,28,108,30,118,32,148,35,179,43,197,48,211,46,222,45,259,48,299,48,344,48,405,46,436,46,480,44,509,43,541,38,578,36,599,29,617,28,631,23,650,19,664,21,678,34,681,60,675,109,661,170,656,220,652,277,646,318,647,354,649,407,647,446,643,466,643" /><area alt="" title="" href="https://www.google.com" shape="poly" coords="536,33,331,299,466,645,514,646,561,650,597,659,644,666,667,669,674,666,679,655,676,644,660,607,655,593,657,573,659,546,652,511,648,486,643,452,641,417,644,384,644,347,640,313,636,263,641,193,647,165,648,106,650,67,661,45,668,31,666,20,660,13,636,18,611,23,579,30" /><area alt="" title="" href="https://www.youtube.com" shape="poly" coords="533,33,500,38,464,46,437,46,410,48,387,49,355,46,318,44,280,46,252,46,234,46,331,297" /><img class="pillowPlayImg" src="images/Step4/white_pillow_with_patterns/Pattern2.png" alt="" usemap="#mapPattern2" /></map>';
        var pillowBlank3 = '<map name="mapPattern3" class= "mappattern" id="mapPt3"><area class="p3P1" data-panel:"panel 1" alt="" title="" href="#" shape="poly" coords="225,43,157,39,112,36,89,33,48,21,24,18,14,21,9,32,18,68,29,111,31,126,33,166,41,193,47,208,45,243,47,287,48,348,47,426,46,470,44,530,39,575,31,611,28,631,21,654,18,669,21,677,35,680,64,673,99,663,148,655,189,654,226,651" /><area alt="" title="" href="#" shape="poly" coords="227,44,258,45,285,44,312,42,338,43,367,46,392,46,436,46,453,44,453,642,445,643,423,645,409,647,395,645,385,648,371,649,356,647,336,647,319,645,305,644,290,644,271,646,256,647,240,650,228,652" /><area alt="" title="" href="#" shape="poly" coords="455,46,477,42,518,35,549,32,588,28,617,22,647,15,657,14,663,17,667,25,665,36,658,51,652,63,648,67,648,99,646,131,646,156,643,179,640,196,637,217,637,246,633,259,637,283,640,315,639,333,644,351,643,391,641,415,640,435,643,457,647,479,649,499,654,523,656,540,657,555,656,567,654,582,655,596,655,603,666,620,673,639,677,654,675,665,667,667,653,667,633,664,617,661,594,658,576,654,553,650,524,646,501,645,472,643,462,643,453,644" /><img class="pillowPlayImg" src="images/Step4/white_pillow_with_patterns/Pattern3.png" alt="" usemap="#mapPattern3" /></map>';

        if (pillow.pattern === 'pattern 1') {
            $('.pillowPlayImg').html(pillowBlank1);
        } else if (pillow.pattern === 'pattern 2') {
            $('.pillowPlayImg').html(pillowBlank2);
        } else if (pillow.pattern === 'pattern 3') {
            $('.pillowPlayImg').html(pillowBlank3);
        };

        console.log('Pattern just placed!');

        //Confirm the panel user picks and display swatches regarding to that panel
        //I'm having a trouble with this part. Can't figure out why data panel is undefined T-T
        $('area').on('click', function() {
            var panel = $(this).attr('data-panel');
            console.log(panel); //This part is not working :'(
            console.log("panel clicked!!!");
            placePanelSwatches();
        });
/*
        function placePanelSwatches() {

        }   if panel is 1 then place panel1 swatches

*/


    }






});
/*      $(".pillowPlayImg").attr($(".pattern1Step4", "images/Step4_2/play_0027_Pt1_pillow.png"));*/
