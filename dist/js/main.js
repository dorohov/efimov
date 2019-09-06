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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFBhZGRpbmdzKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJy5pcy0tYy1wbCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcuaXMtLWMtcHInLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0MTAwUGVyOiAnLmlzLS1oMTAwJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFkZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmJhcl9faW5uZXInKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgKyAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKVxyXG5cclxuICAgICAgICAgICAgJChjbGFzc2VzLnBhZGRpbmdMZWZ0KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5wYWRkaW5nUmlnaHQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5oZWlnaHQxMDBQZXIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtICcgKyBoZWlnaHQgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFBhZGRpbmdzKClcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0UGFkZGluZ3MoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5hbmNob3InKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKVxyXG4gICAgICAgICAgICB2YXIgYWlkID0gX3RoaXMuYXR0cihcImhyZWZcIik7XHJcbiAgICAgICAgICAgIGlmKCFhaWQpIHtcclxuICAgICAgICAgICAgICAgIGFpZCA9IF90aGlzLmRhdGEoJ3RhcmdldCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKGFpZCkub2Zmc2V0KCkudG9wIC0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCl9LCdzbG93Jyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBfZWxlbWVudHMgPSB7XHJcbiAgICAgICAgICAgIG1vYmlsZV9idG46ICcubmF2YmFyX19tb2JpbGUgYnV0dG9uJyxcclxuICAgICAgICAgICAgY29udGFpbmVyOiAnLm5hdmJhcicsXHJcbiAgICAgICAgICAgIG1vYmlsZV9tZW51OiAnLm5hdmJhcl9fYXNpZGUnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgX2NsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgIG9wZW46ICdpcy0tb3BlbicsXHJcbiAgICAgICAgICAgIGFjdGl2ZV9idG46ICdpcy1hY3RpdmUnLFxyXG4gICAgICAgICAgICBib2R5X25hdmJhcjogJ2lzLS1uYXZiYXInXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuTWVudSgpIHtcclxuICAgICAgICAgICAgJChfZWxlbWVudHMubW9iaWxlX21lbnUpLmFkZENsYXNzKF9jbGFzc2VzLm9wZW4pXHJcbiAgICAgICAgICAgICQoX2VsZW1lbnRzLm1vYmlsZV9idG4pLmFkZENsYXNzKF9jbGFzc2VzLmFjdGl2ZV9idG4pXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhfY2xhc3Nlcy5ib2R5X25hdmJhcilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcclxuICAgICAgICAgICAgJChfZWxlbWVudHMubW9iaWxlX21lbnUpLnJlbW92ZUNsYXNzKF9jbGFzc2VzLm9wZW4pXHJcbiAgICAgICAgICAgICQoX2VsZW1lbnRzLm1vYmlsZV9idG4pLnJlbW92ZUNsYXNzKF9jbGFzc2VzLmFjdGl2ZV9idG4pXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhfY2xhc3Nlcy5ib2R5X25hdmJhcilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XHJcbiAgICAgICAgICAgIGlmKCQoX2VsZW1lbnRzLm1vYmlsZV9tZW51KS5oYXNDbGFzcyhfY2xhc3Nlcy5vcGVuKSkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VNZW51KClcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3Blbk1lbnUoYGApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldE5hdmJhclBvc2l0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgbmF2YmFySGVpZ2h0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KClcclxuXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogbmF2YmFySGVpZ2h0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXROYXZiYXJEZWZhdWx0TW9kZShoZWlnaHQpIHtcclxuICAgICAgICAgICAgaWYoaGVpZ2h0ID4gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkpIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLXNjcm9sbCcpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLXNjcm9sbCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE5hdmJhclBvc2l0aW9uKClcclxuICAgICAgICBzZXROYXZiYXJEZWZhdWx0TW9kZSgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSlcclxuXHJcbiAgICAgICAgJChfZWxlbWVudHMubW9iaWxlX2J0bikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnUoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldE5hdmJhclBvc2l0aW9uKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldE5hdmJhckRlZmF1bHRNb2RlKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyJdfQ==
