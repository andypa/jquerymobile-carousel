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
            //$this.height($this.find('li:first img').height());
            $this.find('img').live('click', function(event, ui){
                var currentIndex = $this.find('li').index($(this).parent('li'));
                var count = $this.find('li').length;
                loadNext($this, currentIndex, count, width);
                /*
                if($this.find('li').length > 1) {
                    if(settings.endless) { // endless

                        if(nextIndex == count) { // last element
                            $this.animate({
                                marginLeft: '0'
                            });   

                        } else {
                            $this.animate({
                                marginLeft: '-='+width
                            });   

                        }
                    } else {
                        if(nextIndex < count) { // last element
                            $this.animate({
                                marginLeft: '-='+width
                            });   
                        }
                    }    
                }*/
            });  
            
            function loadNext(el, currentIndex, count, width) {
                var translate = (currentIndex+1)*width;
                if(currentIndex+1 == count) {
                    translate = 0;
                }
                console.log($(el).css('-webkit-transform'));
                $(el).css('-webkit-transform', 'translate(-'+translate+'px,0)');
            }
            /*
            $this.find('img').live('swiperight', function(event, ui){
                var currentIndex = $this.find('li').index($(this).parent('li'));
                var previousIndex = currentIndex-1;
                console.log(previousIndex);
                var count = $this.find('li').length;
                if($this.find('li').length > 1) {
                    if(settings.endless) { // endless
                        console.log(count*200);                        
                        if(previousIndex < 0) { // first element
                            $this.animate({
                                marginLeft: '-'+((count-1)*200)
                            });   

                        } else {
                            $this.animate({
                                marginLeft: '+='+width
                            });   
                        }
                    } else {
                        if(previousIndex >= 0) { // last element
                            $this.animate({
                                marginLeft: '+='+width
                            });   
                        }
                    }    
                }
            }); */               
        });       
    };
})( jQuery );