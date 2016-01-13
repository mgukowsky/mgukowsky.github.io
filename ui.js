(function(){
	var $navAnchors = $("a.nav"), $navAbout = $("#nav-about"), $navProjects = $("#nav-projects"), 
	$navResume = $("#nav-resume"), $navContact = $("nav-contact"), $activeNav = $navAbout,
	dstAbout = document.getElementById("about-dialog"), 
	dstProjects = document.getElementById("projects-dialog"),
	dstResume = document.getElementById("resume-dialog"),
	dstContact = document.getElementById("contact-dialog");

	// // Ensures scroll only fires at most 60 times per second
	// // https://developer.mozilla.org/en-US/docs/Web/Events/scroll
	// (function() {
 //    var throttle = function(type, name, obj) {
 //        obj = obj || window;
 //        var running = false;
 //        var func = function() {
 //            if (running) { return; }
 //            running = true;
 //            requestAnimationFrame(function() {
 //                obj.dispatchEvent(new CustomEvent(name));
 //                running = false;
 //            });
 //        };
 //        obj.addEventListener(type, func);
 //    };

 //    /* init - you can init any event */
 //    throttle ("scroll", "optimizedScroll");
	// })();

	// window.addEventListener("optimizedScroll", function() {
	// 	var loc = $(window).scrollTop();
    
	// 	if(loc < $(dstProjects).offset().top){
	// 		$activeNav.removeClass("active");
	// 		$activeNav = $navAbout;
	// 		$activeNav.addClass("active");
	// 	} else if(loc < $(dstResume).offset().top){
	// 		$activeNav.removeClass("active");
	// 		$activeNav = $navProjects;
	// 		$activeNav.addClass("active");
	// 	} else if(loc < $(dstContact).offset().top){
	// 		$activeNav.removeClass("active");
	// 		$activeNav = $navResume;
	// 		$activeNav.addClass("active");
	// 	} else {
	// 		$activeNav.removeClass("active");
	// 		$activeNav = $navContact;
	// 		$activeNav.addClass("active");
	// 	}

	// });

	//$navAbout.addClass("active");

	$.each($navAnchors, function(idx, el){
		el = $(el);
		el.on("click", function(event){
			var dst;

			event.preventDefault();
			event.stopPropagation();
			var $targetEl = $(event.currentTarget);

			switch(event.currentTarget.id){

				case "nav-about":
					dst = dstAbout;
					break;

				case "nav-projects":
					dst = dstProjects;
					break;

				case "nav-resume":
					dst = dstResume;
					break;

				default:
					dst = dstContact;
					break;
			}

			dst.scrollIntoView();
		})
	})

})();