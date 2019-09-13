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

        $('form').parsley()

        var phoneInputs = document.getElementById('in-phone');

        new IMask(
            phoneInputs, {
            mask: '+{7}(900)000-00-00'
        });

        $('.anchor').on('click', function(e) {
            e.preventDefault();
            var _this = $(this)
            var aid = _this.attr("href");
            if(!aid) {
                aid = _this.data('target')
            }
            $('html,body').animate({scrollTop: $(aid).offset().top - $('.navbar').innerHeight()},'slow');
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
function openModal(modalID) {
    $(modalID).modal({
        fadeDuration: 100,
        showClose: false,
    })
}

(function($) {
    "use strict"
    $(function() {

        $('a.modal-open').on('click', function(e) {
            e.preventDefault()
            var thisModalId = $(this).attr('href')
            openModal(thisModalId)
            return false;
        })

        // openModal('#modal_form')

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
            if(height > 10) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtYXAuanMiLCJtb2RhbHMuanMiLCJuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzZXRQYWRkaW5ncygpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcuaXMtLWMtcGwnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnLmlzLS1jLXByJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDEwMFBlcjogJy5pcy0taDEwMCdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZiYXJfX2lubmVyJylbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpICsgJCgnLmZvb3RlcicpLmlubmVySGVpZ2h0KClcclxuXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5wYWRkaW5nTGVmdCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nLmxlZnQgKyAzMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKGNsYXNzZXMucGFkZGluZ1JpZ2h0KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nLmxlZnQgKyAzMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKGNsYXNzZXMuaGVpZ2h0MTAwUGVyKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtICcgKyBoZWlnaHQgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgaGVpZ2h0ICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRQYWRkaW5ncygpXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldFBhZGRpbmdzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYW5jaG9yJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcylcclxuICAgICAgICAgICAgdmFyIGFpZCA9IF90aGlzLmF0dHIoXCJocmVmXCIpO1xyXG4gICAgICAgICAgICBpZighYWlkKSB7XHJcbiAgICAgICAgICAgICAgICBhaWQgPSBfdGhpcy5kYXRhKCd0YXJnZXQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChhaWQpLm9mZnNldCgpLnRvcCAtICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpfSwnc2xvdycpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5zcmV2aWV3c19fbGlzdF9faW5uZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJycsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJycsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCdmb3JtJykucGFyc2xleSgpXHJcblxyXG4gICAgICAgIHZhciBwaG9uZUlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbi1waG9uZScpO1xyXG5cclxuICAgICAgICBuZXcgSU1hc2soXHJcbiAgICAgICAgICAgIHBob25lSW5wdXRzLCB7XHJcbiAgICAgICAgICAgIG1hc2s6ICcrezd9KDkwMCkwMDAtMDAtMDAnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5hbmNob3InKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKVxyXG4gICAgICAgICAgICB2YXIgYWlkID0gX3RoaXMuYXR0cihcImhyZWZcIik7XHJcbiAgICAgICAgICAgIGlmKCFhaWQpIHtcclxuICAgICAgICAgICAgICAgIGFpZCA9IF90aGlzLmRhdGEoJ3RhcmdldCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKGFpZCkub2Zmc2V0KCkudG9wIC0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCl9LCdzbG93Jyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcclxuICAgICAgICAgICAgY2VudGVyOiBbNTMuMDIwODQxLCAzNi4xNDM2OTddLFxyXG4gICAgICAgICAgICB6b29tOiAxNyxcclxuICAgICAgICAgICAgY29udHJvbHM6IFtdXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gbXlNYXAuZ2VvT2JqZWN0c1xyXG4gICAgICAgIC8vICAgICAuYWRkKG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUyLjg1MzcyMSwgMzcuNDM4NTU0XSwge1xyXG4gICAgICAgIC8vICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICczMDM2MjAsINCe0YDQu9C+0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0J3QvtCy0L7QtNC10YDQtdCy0LXQvdGM0LrQvtCy0YHQutC40Lkg0YDQsNC50L7QvSwg0L8uINCl0L7QvNGD0YLQvtCy0L4sINGD0LsuINCh0YLRgNC+0LjRgtC10LvRjNC90LDRjywgMTMnXHJcbiAgICAgICAgLy8gICAgIH0sIHtcclxuICAgICAgICAvLyAgICAgICAgIHByZXNldDogJ2lzbGFuZHMjaWNvbicsXHJcbiAgICAgICAgLy8gICAgICAgICBpY29uQ29sb3I6ICcjMDA5NWI2J1xyXG4gICAgICAgIC8vICAgICB9KSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWxJRCkge1xyXG4gICAgJChtb2RhbElEKS5tb2RhbCh7XHJcbiAgICAgICAgZmFkZUR1cmF0aW9uOiAxMDAsXHJcbiAgICAgICAgc2hvd0Nsb3NlOiBmYWxzZSxcclxuICAgIH0pXHJcbn1cclxuXHJcbihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnYS5tb2RhbC1vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgdmFyIHRoaXNNb2RhbElkID0gJCh0aGlzKS5hdHRyKCdocmVmJylcclxuICAgICAgICAgICAgb3Blbk1vZGFsKHRoaXNNb2RhbElkKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gb3Blbk1vZGFsKCcjbW9kYWxfZm9ybScpXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIF9lbGVtZW50cyA9IHtcclxuICAgICAgICAgICAgbW9iaWxlX2J0bjogJy5uYXZiYXJfX21vYmlsZSBidXR0b24nLFxyXG4gICAgICAgICAgICBjb250YWluZXI6ICcubmF2YmFyJyxcclxuICAgICAgICAgICAgbW9iaWxlX21lbnU6ICcubmF2YmFyX19hc2lkZSdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBfY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgb3BlbjogJ2lzLS1vcGVuJyxcclxuICAgICAgICAgICAgYWN0aXZlX2J0bjogJ2lzLWFjdGl2ZScsXHJcbiAgICAgICAgICAgIGJvZHlfbmF2YmFyOiAnaXMtLW5hdmJhcidcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG4gICAgICAgICAgICAkKF9lbGVtZW50cy5tb2JpbGVfbWVudSkuYWRkQ2xhc3MoX2NsYXNzZXMub3BlbilcclxuICAgICAgICAgICAgJChfZWxlbWVudHMubW9iaWxlX2J0bikuYWRkQ2xhc3MoX2NsYXNzZXMuYWN0aXZlX2J0bilcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKF9jbGFzc2VzLmJvZHlfbmF2YmFyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xyXG4gICAgICAgICAgICAkKF9lbGVtZW50cy5tb2JpbGVfbWVudSkucmVtb3ZlQ2xhc3MoX2NsYXNzZXMub3BlbilcclxuICAgICAgICAgICAgJChfZWxlbWVudHMubW9iaWxlX2J0bikucmVtb3ZlQ2xhc3MoX2NsYXNzZXMuYWN0aXZlX2J0bilcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKF9jbGFzc2VzLmJvZHlfbmF2YmFyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcclxuICAgICAgICAgICAgaWYoJChfZWxlbWVudHMubW9iaWxlX21lbnUpLmhhc0NsYXNzKF9jbGFzc2VzLm9wZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZU1lbnUoKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuTWVudShgYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0TmF2YmFyUG9zaXRpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBuYXZiYXJIZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKVxyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBuYXZiYXJIZWlnaHRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldE5hdmJhckRlZmF1bHRNb2RlKGhlaWdodCkge1xyXG4gICAgICAgICAgICBpZihoZWlnaHQgPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLmFkZENsYXNzKCdpcy0tc2Nyb2xsJylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tc2Nyb2xsJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TmF2YmFyUG9zaXRpb24oKVxyXG4gICAgICAgIHNldE5hdmJhckRlZmF1bHRNb2RlKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKVxyXG5cclxuICAgICAgICAkKF9lbGVtZW50cy5tb2JpbGVfYnRuKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdG9nZ2xlTWVudSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0TmF2YmFyUG9zaXRpb24oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0TmF2YmFyRGVmYXVsdE1vZGUoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
