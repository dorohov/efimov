(function($) {
    "use strict"
    $(function() {
        
        function setPaddings() {

            var classes = {
                paddingLeft: '.is--c-pl',
                paddingRight: '.is--c-pr',
                height100Per: '.is--h100'
            }

            var padding = document.getElementsByClassName('navbar__inner')[0].getBoundingClientRect()
            var height = $('.navbar').innerHeight() + $('.footer').innerHeight()

            $(classes.paddingLeft).css({
                paddingLeft: padding.left + 30
            })
            $(classes.paddingRight).css({
                paddingRight: padding.left + 30
            })
            $(classes.height100Per).css({
                minHeight: 'calc(100vh - ' + height + 'px)'
            })
            $('main').css({
                minHeight: 'calc(100vh - ' + height + 'px)'
            })

        }

        setPaddings()

        $(window).resize(function() {
            setPaddings()
        })

        $('.anchor').on('click', function(e) {
            e.preventDefault();
            var _this = $(this)
            var aid = _this.attr("href");
            if(!aid) {
                aid = _this.data('target')
            }
            $('html,body').animate({scrollTop: $(aid).offset().top - $('.navbar').innerHeight()},'slow');
        })

        $('.sreviews__list__inner').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '',
            nextArrow: '',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        autoplay: true,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true
                    }
                }
            ]
        })
        
    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [53.020841, 36.143697],
            zoom: 17,
            controls: []
        })

        // myMap.geoObjects
        //     .add(new ymaps.Placemark([52.853721, 37.438554], {
        //         balloonContent: '303620, Орловская область, Новодеревеньковский район, п. Хомутово, ул. Строительная, 13'
        //     }, {
        //         preset: 'islands#icon',
        //         iconColor: '#0095b6'
        //     }))
    }


    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {
        
        var _elements = {
            mobile_btn: '.navbar__mobile button',
            container: '.navbar',
            mobile_menu: '.navbar__aside'
        }

        var _classes = {
            open: 'is--open',
            active_btn: 'is-active',
            body_navbar: 'is--navbar'
        }

        function openMenu() {
            $(_elements.mobile_menu).addClass(_classes.open)
            $(_elements.mobile_btn).addClass(_classes.active_btn)
            $('body').addClass(_classes.body_navbar)
        }

        function closeMenu() {
            $(_elements.mobile_menu).removeClass(_classes.open)
            $(_elements.mobile_btn).removeClass(_classes.active_btn)
            $('body').removeClass(_classes.body_navbar)
        }

        function toggleMenu() {
            if($(_elements.mobile_menu).hasClass(_classes.open)) {
                closeMenu()
            }else {
                openMenu(``)
            }
        }

        function setNavbarPosition() {
            var navbarHeight = $('.navbar').innerHeight()

            $('body').css({
                paddingTop: navbarHeight
            })
        }

        function setNavbarDefaultMode(height) {
            if(height > $('.navbar').innerHeight()) {
                $('.navbar').addClass('is--scroll')
            }else {
                $('.navbar').removeClass('is--scroll')
            }
        }

        setNavbarPosition()
        setNavbarDefaultMode($(document).scrollTop())

        $(_elements.mobile_btn).on('click', function() {
            toggleMenu()
        })

        $(window).resize(function() {
            setNavbarPosition()
        })

        $(document).scroll(function() {
            setNavbarDefaultMode($(document).scrollTop())
        })
        
    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtYXAuanMiLCJuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0UGFkZGluZ3MoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnLmlzLS1jLXBsJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJy5pcy0tYy1wcicsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQxMDBQZXI6ICcuaXMtLWgxMDAnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwYWRkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2YmFyX19pbm5lcicpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSArICQoJy5mb290ZXInKS5pbm5lckhlaWdodCgpXHJcblxyXG4gICAgICAgICAgICAkKGNsYXNzZXMucGFkZGluZ0xlZnQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZy5sZWZ0ICsgMzBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChjbGFzc2VzLnBhZGRpbmdSaWdodCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZy5sZWZ0ICsgMzBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChjbGFzc2VzLmhlaWdodDEwMFBlcikuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgaGVpZ2h0ICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UGFkZGluZ3MoKVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRQYWRkaW5ncygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmFuY2hvcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIHZhciBhaWQgPSBfdGhpcy5hdHRyKFwiaHJlZlwiKTtcclxuICAgICAgICAgICAgaWYoIWFpZCkge1xyXG4gICAgICAgICAgICAgICAgYWlkID0gX3RoaXMuZGF0YSgndGFyZ2V0JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoYWlkKS5vZmZzZXQoKS50b3AgLSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKX0sJ3Nsb3cnKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuc3Jldmlld3NfX2xpc3RfX2lubmVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcnLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcclxuICAgICAgICAgICAgY2VudGVyOiBbNTMuMDIwODQxLCAzNi4xNDM2OTddLFxyXG4gICAgICAgICAgICB6b29tOiAxNyxcclxuICAgICAgICAgICAgY29udHJvbHM6IFtdXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gbXlNYXAuZ2VvT2JqZWN0c1xyXG4gICAgICAgIC8vICAgICAuYWRkKG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUyLjg1MzcyMSwgMzcuNDM4NTU0XSwge1xyXG4gICAgICAgIC8vICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICczMDM2MjAsINCe0YDQu9C+0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0J3QvtCy0L7QtNC10YDQtdCy0LXQvdGM0LrQvtCy0YHQutC40Lkg0YDQsNC50L7QvSwg0L8uINCl0L7QvNGD0YLQvtCy0L4sINGD0LsuINCh0YLRgNC+0LjRgtC10LvRjNC90LDRjywgMTMnXHJcbiAgICAgICAgLy8gICAgIH0sIHtcclxuICAgICAgICAvLyAgICAgICAgIHByZXNldDogJ2lzbGFuZHMjaWNvbicsXHJcbiAgICAgICAgLy8gICAgICAgICBpY29uQ29sb3I6ICcjMDA5NWI2J1xyXG4gICAgICAgIC8vICAgICB9KSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIF9lbGVtZW50cyA9IHtcclxuICAgICAgICAgICAgbW9iaWxlX2J0bjogJy5uYXZiYXJfX21vYmlsZSBidXR0b24nLFxyXG4gICAgICAgICAgICBjb250YWluZXI6ICcubmF2YmFyJyxcclxuICAgICAgICAgICAgbW9iaWxlX21lbnU6ICcubmF2YmFyX19hc2lkZSdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBfY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgb3BlbjogJ2lzLS1vcGVuJyxcclxuICAgICAgICAgICAgYWN0aXZlX2J0bjogJ2lzLWFjdGl2ZScsXHJcbiAgICAgICAgICAgIGJvZHlfbmF2YmFyOiAnaXMtLW5hdmJhcidcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG4gICAgICAgICAgICAkKF9lbGVtZW50cy5tb2JpbGVfbWVudSkuYWRkQ2xhc3MoX2NsYXNzZXMub3BlbilcclxuICAgICAgICAgICAgJChfZWxlbWVudHMubW9iaWxlX2J0bikuYWRkQ2xhc3MoX2NsYXNzZXMuYWN0aXZlX2J0bilcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKF9jbGFzc2VzLmJvZHlfbmF2YmFyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xyXG4gICAgICAgICAgICAkKF9lbGVtZW50cy5tb2JpbGVfbWVudSkucmVtb3ZlQ2xhc3MoX2NsYXNzZXMub3BlbilcclxuICAgICAgICAgICAgJChfZWxlbWVudHMubW9iaWxlX2J0bikucmVtb3ZlQ2xhc3MoX2NsYXNzZXMuYWN0aXZlX2J0bilcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKF9jbGFzc2VzLmJvZHlfbmF2YmFyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcclxuICAgICAgICAgICAgaWYoJChfZWxlbWVudHMubW9iaWxlX21lbnUpLmhhc0NsYXNzKF9jbGFzc2VzLm9wZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZU1lbnUoKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuTWVudShgYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0TmF2YmFyUG9zaXRpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBuYXZiYXJIZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKVxyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBuYXZiYXJIZWlnaHRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldE5hdmJhckRlZmF1bHRNb2RlKGhlaWdodCkge1xyXG4gICAgICAgICAgICBpZihoZWlnaHQgPiAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLmFkZENsYXNzKCdpcy0tc2Nyb2xsJylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tc2Nyb2xsJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TmF2YmFyUG9zaXRpb24oKVxyXG4gICAgICAgIHNldE5hdmJhckRlZmF1bHRNb2RlKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKVxyXG5cclxuICAgICAgICAkKF9lbGVtZW50cy5tb2JpbGVfYnRuKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdG9nZ2xlTWVudSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0TmF2YmFyUG9zaXRpb24oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0TmF2YmFyRGVmYXVsdE1vZGUoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
