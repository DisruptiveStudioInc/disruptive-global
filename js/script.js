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

/* ============================================== */
/* SPHERE */
/* ============================================== */

var w = c.width = window.innerWidth,
        h = c.height = window.innerHeight,
        ctx = c.getContext( '2d' ),
        
        opts = {
            
            range: 200,
            baseConnections: 3,
            addedConnections: 5,
            baseSize: 5,
            minSize: 1,
            dataToConnectionSize: .4,
            sizeMultiplier: .7,
            allowedDist: 40,
            baseDist: 40,
            addedDist: 30,
            connectionAttempts: 100,
            
            dataToConnections: 1,
            baseSpeed: .01,
            addedSpeed: .01,
            baseGlowSpeed: .01,
            addedGlowSpeed: .01,
            
            rotVelX: .003,
            rotVelY: .002,
            
            repaintColor: '#000',
            connectionColor: 'black',
            rootColor: '#6A37FF',
            endColor: '#6A37FF',
            dataColor: '#fff',
            
            wireframeWidth: .1,
            wireframeColor: '#88f',
            
            depth: 250,
            focalLength: 280,
            vanishPoint: {
                x: w / 2,
                y: h / 2
            }
        },
        
        squareRange = opts.range * opts.range,
        squareAllowed = opts.allowedDist * opts.allowedDist,
        mostDistant = opts.depth + opts.range,
        sinX = sinY = 0,
        cosX = cosY = 0,
        
        connections = [],
        toDevelop = [],
        data = [],
        all = [],
        tick = 0,
        totalProb = 0,
        
        animating = false,
        
        Tau = Math.PI * 2;

ctx.fillStyle = '#222';
ctx.fillRect( 0, 0, w, h );
ctx.fillStyle = '#ccc';
ctx.font = '50px Verdana';
ctx.fillText( 'Calculating Nodes', w / 2 - ctx.measureText( 'Calculating Nodes' ).width / 2, h / 2 - 15 );

window.setTimeout( init, 4 ); // to render the loading screen

function init(){
    
    connections.length = 0;
    data.length = 0;
    all.length = 0;
    toDevelop.length = 0;
    
    var connection = new Connection( 0, 0, 0, opts.baseSize );
    connection.step = Connection.rootStep;
    connections.push( connection );
    all.push( connection );
    connection.link();
    
    while( toDevelop.length > 0 ){
    
        toDevelop[ 0 ].link();
        toDevelop.shift();
    }
    
    if( !animating ){
        animating = true;
        anim();
    }
}
function Connection( x, y, z, size ){
    
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    
    this.screen = {};
    
    this.links = [];
    this.probabilities = [];
    this.isEnd = false;
    
    this.glowSpeed = opts.baseGlowSpeed + opts.addedGlowSpeed * Math.random();
}
Connection.prototype.link = function(){
    
    if( this.size < opts.minSize )
        return this.isEnd = true;
    
    var links = [],
            connectionsNum = opts.baseConnections + Math.random() * opts.addedConnections |0,
            attempt = opts.connectionAttempts,
            
            alpha, beta, len,
            cosA, sinA, cosB, sinB,
            pos = {},
            passedExisting, passedBuffered;
    
    while( links.length < connectionsNum && --attempt > 0 ){
        
        alpha = Math.random() * Math.PI;
        beta = Math.random() * Tau;
        len = opts.baseDist + opts.addedDist * Math.random();
        
        cosA = Math.cos( alpha );
        sinA = Math.sin( alpha );
        cosB = Math.cos( beta );
        sinB = Math.sin( beta );
        
        pos.x = this.x + len * cosA * sinB;
        pos.y = this.y + len * sinA * sinB;
        pos.z = this.z + len *        cosB;
        
        if( pos.x*pos.x + pos.y*pos.y + pos.z*pos.z < squareRange ){
        
            passedExisting = true;
            passedBuffered = true;
            for( var i = 0; i < connections.length; ++i )
                if( squareDist( pos, connections[ i ] ) < squareAllowed )
                    passedExisting = false;

            if( passedExisting )
                for( var i = 0; i < links.length; ++i )
                    if( squareDist( pos, links[ i ] ) < squareAllowed )
                        passedBuffered = false;

            if( passedExisting && passedBuffered )
                links.push( { x: pos.x, y: pos.y, z: pos.z } );
            
        }
        
    }
    
    if( links.length === 0 )
        this.isEnd = true;
    else {
        for( var i = 0; i < links.length; ++i ){
            
            var pos = links[ i ],
                    connection = new Connection( pos.x, pos.y, pos.z, this.size * opts.sizeMultiplier );
            
            this.links[ i ] = connection;
            all.push( connection );
            connections.push( connection );
        }
        for( var i = 0; i < this.links.length; ++i )
            toDevelop.push( this.links[ i ] );
    }
}
Connection.prototype.step = function(){
    
    this.setScreen();
    this.screen.color = ( this.isEnd ? opts.endColor : opts.connectionColor ).replace( 'light', 30 + ( ( tick * this.glowSpeed ) % 30 ) ).replace( 'alp', .2 + ( 1 - this.screen.z / mostDistant ) * .8 );
    
    for( var i = 0; i < this.links.length; ++i ){
        ctx.moveTo( this.screen.x, this.screen.y );
        ctx.lineTo( this.links[ i ].screen.x, this.links[ i ].screen.y );
    }
}
Connection.rootStep = function(){
    this.setScreen();
    this.screen.color = opts.rootColor.replace( 'light', 30 + ( ( tick * this.glowSpeed ) % 30 ) ).replace( 'alp', ( 1 - this.screen.z / mostDistant ) * .8 );
    
    for( var i = 0; i < this.links.length; ++i ){
        ctx.moveTo( this.screen.x, this.screen.y );
        ctx.lineTo( this.links[ i ].screen.x, this.links[ i ].screen.y );
    }
}
Connection.prototype.draw = function(){
    ctx.fillStyle = this.screen.color;
    ctx.beginPath();
    ctx.arc( this.screen.x, this.screen.y, this.screen.scale * this.size, 0, Tau );
    ctx.fill();
}
function Data( connection ){
    
    this.glowSpeed = opts.baseGlowSpeed + opts.addedGlowSpeed * Math.random();
    this.speed = opts.baseSpeed + opts.addedSpeed * Math.random();
    
    this.screen = {};
    
    this.setConnection( connection );
}
Data.prototype.reset = function(){
    
    this.setConnection( connections[ 0 ] );
    this.ended = 2;
}
Data.prototype.step = function(){
    
    this.proportion += this.speed;
    
    if( this.proportion < 1 ){
        this.x = this.ox + this.dx * this.proportion;
        this.y = this.oy + this.dy * this.proportion;
        this.z = this.oz + this.dz * this.proportion;
        this.size = ( this.os + this.ds * this.proportion ) * opts.dataToConnectionSize;
    } else 
        this.setConnection( this.nextConnection );
    
    this.screen.lastX = this.screen.x;
    this.screen.lastY = this.screen.y;
    this.setScreen();
    this.screen.color = opts.dataColor.replace( 'light', 40 + ( ( tick * this.glowSpeed ) % 50 ) ).replace( 'alp', .2 + ( 1 - this.screen.z / mostDistant ) * .6 );
    
}
Data.prototype.draw = function(){
    
    if( this.ended )
        return --this.ended; // not sre why the thing lasts 2 frames, but it does
    
    ctx.beginPath();
    ctx.strokeStyle = this.screen.color;
    ctx.lineWidth = this.size * this.screen.scale;
    ctx.moveTo( this.screen.lastX, this.screen.lastY );
    ctx.lineTo( this.screen.x, this.screen.y );
    ctx.stroke();
}
Data.prototype.setConnection = function( connection ){
    
    if( connection.isEnd )
        this.reset();
    
    else {
        
        this.connection = connection;
        this.nextConnection = connection.links[ connection.links.length * Math.random() |0 ];
        
        this.ox = connection.x; // original coordinates
        this.oy = connection.y;
        this.oz = connection.z;
        this.os = connection.size; // base size
        
        this.nx = this.nextConnection.x; // new
        this.ny = this.nextConnection.y;
        this.nz = this.nextConnection.z;
        this.ns = this.nextConnection.size;
        
        this.dx = this.nx - this.ox; // delta
        this.dy = this.ny - this.oy;
        this.dz = this.nz - this.oz;
        this.ds = this.ns - this.os;
        
        this.proportion = 0;
    }
}
Connection.prototype.setScreen = Data.prototype.setScreen = function(){
    
    var x = this.x,
            y = this.y,
            z = this.z;
    
    // apply rotation on X axis
    var Y = y;
    y = y * cosX - z * sinX;
    z = z * cosX + Y * sinX;
    
    // rot on Y
    var Z = z;
    z = z * cosY - x * sinY;
    x = x * cosY + Z * sinY;
    
    this.screen.z = z;
    
    // translate on Z
    z += opts.depth;
    
    this.screen.scale = opts.focalLength / z;
    this.screen.x = opts.vanishPoint.x + x * this.screen.scale;
    this.screen.y = opts.vanishPoint.y + y * this.screen.scale;
    
}
function squareDist( a, b ){
    
    var x = b.x - a.x,
            y = b.y - a.y,
            z = b.z - a.z;
    
    return x*x + y*y + z*z;
}

function anim(){
    
    window.requestAnimationFrame( anim );
    
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = opts.repaintColor;
    ctx.fillRect( 0, 0, w, h );
    
    ++tick;
    
    var rotX = tick * opts.rotVelX,
            rotY = tick * opts.rotVelY;
    
    cosX = Math.cos( rotX );
    sinX = Math.sin( rotX );
    cosY = Math.cos( rotY );
    sinY = Math.sin( rotY );
    
    if( data.length < connections.length * opts.dataToConnections ){
        var datum = new Data( connections[ 0 ] );
        data.push( datum );
        all.push( datum );
    }
    
    ctx.globalCompositeOperation = 'lighter';
    ctx.beginPath();
    ctx.lineWidth = opts.wireframeWidth;
    ctx.strokeStyle = opts.wireframeColor;
    all.map( function( item ){ item.step(); } );
    ctx.stroke();
    ctx.globalCompositeOperation = 'source-over';
    all.sort( function( a, b ){ return b.screen.z - a.screen.z } );
    all.map( function( item ){ item.draw(); } );
    
    /*ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.arc( opts.vanishPoint.x, opts.vanishPoint.y, opts.range * opts.focalLength / opts.depth, 0, Tau );
    ctx.stroke();*/
}

window.addEventListener( 'resize', function(){
    
    opts.vanishPoint.x = ( w = c.width = window.innerWidth ) / 2;
    opts.vanishPoint.y = ( h = c.height = window.innerHeight ) / 2;
    ctx.fillRect( 0, 0, w, h );
});
window.addEventListener( 'click', init );



