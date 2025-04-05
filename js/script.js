/* ============================================== */
/* PRELOADER */
/* ============================================== */

$(window).on('load', function() {
    $('.preloader').delay(500).fadeOut('slow');
});

/* ============================================== */
/* LAZY-LOAD */
/* ============================================== */

const observer = lozad();
observer.observe();

/* ============================================== */
/* IMAGE MOBILE */
/* ============================================== */

function cambiarImagen() {
    const imagenes = [
        { id: "img_duda", srcDesktop: "./images/hero/hero.jpg", srcMobile: "./images/hero/hero_mobile.webp" }
    ];

    const isMobile = window.innerWidth < 768;

    imagenes.forEach(img => {
        const elemento = document.getElementById(img.id);
        if (elemento) {
            elemento.src = isMobile ? img.srcMobile : img.srcDesktop;
        }
    });
}

// Ejecutar al cargar la página
cambiarImagen();

// Escuchar cambios de tamaño en la ventana
window.addEventListener("resize", cambiarImagen);

/* ============================================== */
/* MENU HAMBURGUER */
/* ============================================== */

if (document.documentElement.clientWidth < 1080) {
    $('.hamburguer').click(function() {
        $('.navigation ul').toggleClass('active');
        $(this).toggleClass("active");
    });
    $('.navigation a').click(function(){
        $('.navigation ul').toggleClass('active');
        $('.hamburguer').toggleClass("active");
    });
}

/* ============================================== */
/* NAVIGATION */
/* ============================================== */

$(document).ready(function () {
    // NAVIGATION
    var sections = $('.anchor');
    var nav = $('nav .navigation');
    var nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        
        sections.each(function() {
            var top = $(this).parent().offset().top - nav_height;
            var bottom = top + $(this).parent().outerHeight();
        
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');
                
                $(this).addClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this);
        var id = $el.attr('href');

        // Recalcular la altura de la navegación en cada clic
        var nav_height = nav.outerHeight();
        
        $('html, body').stop().animate({
            scrollTop: $(id).offset().top - nav_height
        }, 500, 'swing'); // Puedes cambiar 'swing' a 'linear' si prefieres

        return false;
    });

    // NUMBER ANCHOR
    $(".anchor").each(function(index) {
        $(this).attr("id", "anchor" + (index + 1));
    });

    // MENU GO (evitar scroll en tabs)
    $('a[href*="#"]:not([href="#"])').click(function(e) {
        // Si el enlace pertenece a una pestaña, no ejecutar el scroll
        if ($(this).closest(".tabs").length) return;

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {
                var nav_height = $('nav .navigation').outerHeight();

                $('html, body').stop().animate({
                    scrollTop: target.offset().top - nav_height
                }, 500, 'swing');

                return false;
            }
        }
    });

});

/* ============================================== */
/* MENU-TABS */
/* ============================================== */

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tabs a");
  const tabGroups = document.querySelectorAll(".tabgroup > div");

  // Ocultar todos los contenidos excepto el primero
  tabGroups.forEach((tabContent, index) => {
    if (index === 0) {
      tabContent.classList.add("active");
    } else {
      tabContent.classList.remove("active");
    }
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      const tabgroupId = this.closest(".tabs").dataset.tabgroup;
      const tabgroup = document.getElementById(tabgroupId);
      const target = document.querySelector(this.getAttribute("href"));

      if (!target) return;

      this.closest("ul").querySelectorAll("a").forEach((otherTab) => {
        otherTab.classList.remove("active");
      });

      tabgroup.querySelectorAll("div").forEach((content) => {
        content.classList.remove("active");
      });

      this.classList.add("active");
      target.classList.add("active");
    });
  });
});



/* ============================================== */
/* BANNER */
/* ============================================== */

$(document).ready(function() {
    $('.about ul').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    });

    $('.banner ul').slick({
        dots: true,
          infinite: true,
          speed: 500,
          fade: true,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: 'linear'
    });
});

/* ============================================== */
/* IDIOMA */
/* ============================================== */

document.addEventListener("click", (e) => {
    const lanOptions = document.querySelector(".lan"),
        lanLink = document.querySelector(".btn-lan");

    if (e.target.closest(".btn-lan")) {
        lanOptions.classList.toggle("active");
        lanLink.classList.toggle("open");
    } else if (!e.target.closest(".lan") && lanOptions.classList.contains("active")) {
        lanOptions.classList.remove("active");
        lanLink.classList.remove("open");
    }
});

/* ============================================== */
/* EFFECT MENU */
/* ============================================== */

$(function() {
    function checkWidth() {
        if (jQuery(window).width() > 768) {
            jQuery(window).scroll(function() {
                if (jQuery(window).scrollTop() > 1) {
                    jQuery("nav").addClass("effect");
                } else {
                    jQuery("nav").removeClass("effect");
                }
            });
        } else {
            jQuery("nav").removeClass("effect");
        }
    }
    checkWidth();
    jQuery(window).resize(checkWidth);
});

/* ============================================== */
/* TEXTAREA */
/* ============================================== */

autosize(document.getElementById("autosize_client"));

/* ============================================== */
/* MODAL */
/* ============================================== */

// Función para abrir el modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('open'); // Muestra el modal
        document.body.classList.add('no-scroll'); // Bloquea el scroll
    }
}

// Función para cerrar el modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('open'); // Oculta el modal
        checkModalsOpen(); // Verifica si hay otros modales abiertos
    }
}

// Función para verificar si hay modales abiertos y desbloquear el scroll
function checkModalsOpen() {
    var openModals = document.querySelectorAll('.modal.open');
    if (openModals.length === 0) {
        document.body.classList.remove('no-scroll'); // Reactiva el scroll
    }
}

// Función para cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
};



