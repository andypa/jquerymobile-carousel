(function( $ ){
    $.fn.carousel = function(options) {
        var settings = {        
            'endless'   : true
        }

        return this.each(function() {
            var $this = $(this);            
            if(options) {
                $.extend(settings, options);
            }
            $this.wrap('<div class="carousel_holder" />');
            $this.addClass('carousel');
            $this.width($this.find('li').length*$(window).width()); 
            $this.find('img').width($(window).width());
            var width=$(window).width();
            $this.find('img').live('swipeleft', function(event, ui){
                var currentIndex = $this.find('li').index($(this).parent('li'));
                var count = $this.find('li').length;
                loadNext($this, currentIndex, count, width);                
            });  
            $this.find('img').live('swiperight', function(event, ui){
                var currentIndex = $this.find('li').index($(this).parent('li'));
                var count = $this.find('li').length;
                loadPrevious($this, currentIndex, count, width);                
            }); 
            function loadNext(el, currentIndex, count, width) {
                var translate = (currentIndex+1)*width;
                if(currentIndex+1 == count && settings.endless) { // Last one & endless
                    translate = 0;
                }
                if(currentIndex+1 == count && !settings.endless) {
                    return false;
                }
                if($(el).css('-moz-transform') || $(el).css('-webkit-transform') || $(el).css('-o-transform') || $(el).css('transform')) {
                    $(el).css('-webkit-transform', 'translate(-'+translate+'px,0)');    
                    $(el).css('-moz-transform', 'translate(-'+translate+'px,0)');    
                    $(el).css('-o-transform', 'translate(-'+translate+'px,0)');    
                    $(el).css('transform', 'translate(-'+translate+'px,0)');    
                } else {
                    $(el).animate({marginLeft: -translate});    
                }
            }
            function loadPrevious(el, currentIndex, count, width) {
                var translate = -((currentIndex-1)*width);
                if(currentIndex == 0 && settings.endless) { // First one & endless
                    var translate = -((count-1)*width);
                }
                
                if(currentIndex == 0 && !settings.endless) {
                    return false;
                }
               
                if($(el).css('-moz-transform') || $(el).css('-webkit-transform') || $(el).css('-o-transform') || $(el).css('transform')) {
                    $(el).css('-webkit-transform', 'translate('+translate+'px,0)');    
                    $(el).css('-moz-transform', 'translate('+translate+'px,0)');    
                    $(el).css('-o-transform', 'translate('+translate+'px,0)');    
                    $(el).css('-webkit-transform', 'translate('+translate+'px,0)');    
                    $(el).css('transform', 'translate('+translate+'px,0)');    
                } else {
                    $(el).animate({marginLeft: translate});    
                }
            }
        });       
    };
})( jQuery );