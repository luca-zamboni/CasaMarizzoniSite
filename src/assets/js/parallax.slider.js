(function($) {

    $.fn.parallax = function(options) {

        var windowHeight = $(window).height();

        var settings = $.extend({
            speedParallax: 1
        }, options);

        var view = 1;
        if ($(window).width() < 990) {
            view = -1;
        } else {
            view = 1;
        }

        return this.each(function() {

            var $this = $(this);

            $(document).scroll(function() {

                var scrollTop = $(window).scrollTop();

                var offset = $this.offset().top;

                var height = $this.outerHeight();

                if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
                    return;
                }

                if ($(window).width() < 990) {
                    view = -1;
                } else {
                    view = 1;
                    var yBgPosition = -view * Math.round((offset - scrollTop) * settings.speedParallax);
                    $this.css('background-position', 'center ' + yBgPosition + 'px');
                }

            });
        });
    }



}(jQuery));

(function($) {

    $.fn.parallaxSlider = function(options) {

        function setText(text) {

            /*var item = $('.rotating-text');
            var item2 = $('.rotating-text div');
            var time = 0.7;
            setTimeout(function() {
                // text = text.split("").join("</span><span>");
                // text = "<span>" + text + "</span>";
                $('.slider-description').html(text);
            }, time * 1000);
            var tl = new TimelineLite();
            tl.to(item2, time, {
                width: "0%",
                paddingLeft: "0rem",
                paddingRight: "0rem"
            });
            tl.to(item2, time, {
                width: "100%",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                ease: Sine.easeOut
            });*/

        }

        var windowHeight = $(window).height();

        var settings = $.extend({
            speedParallax: 0.15,
            speedSlide: 1000
        }, options);

        var slider1 = $(this);
        var slider2 = slider1.clone();

        slider2.css({
            display: "none"
        });
        slider2.insertAfter(slider1);

        var images = Array();
        var desc = Array();
        var immm = $(this)[0].children;
        console.log(immm);
        for (var i = 0; i < $(this)[0].children.length; i++) {

            images.push($(this)[0].children[i].attr('src'));
            desc.push($(this)[0].children[i].attr('alt'));

        }
        //$(this)[0].children.each(function() {});


        slider1.css({
            backgroundImage: "url(" + images[0] + ")"
        });

        var text = desc[0];
        setText(text);


        var max = images.length;
        var i = 1;

        var slider = function() {
            if (i % 2 == 0) {
                cs = slider1;
                ncs = slider2;
            } else {
                cs = slider2;
                ncs = slider1;
            }

            cs.css({
                backgroundImage: "url(" + images[i % max] + ")"
            });

            setText(desc[i % max]);


            // $('.slider-description').html(text);

            cs.fadeIn(1000);
            ncs.fadeOut(1000);

            i++;
        }

        slider1.parallax(options);
        slider2.parallax(options);

        setInterval(slider, settings.speedSlide);
    }

}(jQuery));
