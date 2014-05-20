$(function() {
  //VARIABLES
  var about     = $('#about')
  ,  home      = $('#home')
  ,  portfolio    = $('#portfolio')
  ,  contact    = $('#contact')
  ,   wrap     = $('.wrap')
  ,  portBtn    = $('#portBtn')
  ,  curNav    = home;
  
  showPage('home.html');

  //LISTERNERS
  about.on('click', function(e){
    //chillax bro
    e.preventDefault();
    //change page
    showPage('about.html');
    //change navstate
    manageNavState($(this));
  });
  
  home.on('click', function(e){
    e.preventDefault();
    showPage('home.html');
    manageNavState($(this));
  });

  contact.on('click', function(e){
    e.preventDefault();
    showPage('contact.html');
    manageNavState($(this));
  });
  
  
  $('.wrap').on('click', '#portBtn', function(e){
    e.preventDefault();
    showPage('portfolio.html');
    manageNavState($(portfolio));
  })
  
  portfolio.on('click', function(e){
    e.preventDefault();
    showPage('portfolio.html');
    manageNavState($(this));
  })

  $('.wrap').on('click', '.thumbnail', function(e){
    e.preventDefault();
    //alert('i have been clicked');
    var index = $(this).attr('data-index');
    index = parseInt(index);
    renderAndShowModal(myProjects[index]);
  })
  
  function renderAndShowModal(project) {
    projectModal.html(Mustache.render(frag, project));
    projectModal.modal();
  }
  
  
  
  function manageNavState(newActive) {
      curNav.removeClass('active');
      newActive.addClass('active');
      curNav = newActive;
      }
  
  //FUNCTIONS
  
  function showPage(stuff) {
    wrap.load(stuff);
  }

  // GALLERY
  var myProjects = [
    item1 = {
      image: 'appImage',
      full: 'appPdf',
      title: 'CLIQUE RESCUE',
      button: 'View Case Study',
      link: 'downloads/CliqueRescueCaseStudy.pdf'
    },
    item2 = {
      image: 'bsgImage',
      full: 'bsgFull',
      title: 'BATTLESTAR GALACTICA PROPAGANDA',
      button: 'View Presentation',
      link: 'BattlestarGalactica.html'
    },
    item3 = {
      image: 'forsakenImage',
      full: 'forsakenPdf',
      title: 'THE FORSAKEN BOOK WEBSITE DESIGN',
      button: 'View Case Study',
      link: 'downloads/ForsakenCaseStudy.pdf'
    },
    item4 = {
      image: 'infographicImage',
      full: 'infographicFull',
      title: 'COMIC CON INFOGRAPHIC',
      button: 'View Full Image',
      link: 'https://twitter.com/paintingemily/status/362412561234268161/photo/1'
    },
    item5 = {
      image: 'lilyImage',
      full: 'lilyFull',
      title: 'LILY ALLEN WEBSITE',
      button: 'View Site',
      link: 'LilyAllen/index.html'
    },
    item6 = {
      image: 'zeldaImage',
      full: 'zeldaFull',
      title: 'ZELDA MOVIE POSTER',
      button: 'View Full Image',
      link: 'https://twitter.com/paintingemily/status/370410024792629248/photo/1'
    }
  ];
    
  var frag =    '<div class="modal-header"> \
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> \
            <h3>{{title}}</h3> \
          </div> \
          <div class="modal-body"> \
            <div id="{{image}}"></div> \
            <a id="{{full}}" href="{{link}}" target="_blank">{{button}}</a> \
          </div>';
    
  // store a selector of the modal    
  var projectModal = $('#project-modal');
  
});