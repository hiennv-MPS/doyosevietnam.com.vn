$(document).ready(function() {
    $(".burger-icon").click(function() {
        if ($(".burger-icon").hasClass("not-active") == true) {
            $(".burger-icon").removeClass("not-active").addClass("active");
            $(".burger-icon span:first-child").addClass("burger-top");
            $(".burger-icon span:nth-child(2)").addClass("burger-mid").animate({ opacity: "-=1" });
            $(".burger-icon span:last-child").addClass("burger-bottom");
        } else if ($(".burger-icon").hasClass("active") == true) {
            $(".burger-icon").removeClass("active").addClass("not-active");
            $(".burger-icon span:first-child").removeClass("burger-top");
            $(".burger-icon span:nth-child(2)").removeClass("burger-mid").animate({ opacity: "+=1" });;
            $(".burger-icon span:last-child").removeClass("burger-bottom");
        }

        if ($(".menu").hasClass("hide") == true) {
            $(".menu").removeClass("hide").addClass("menu-show animate__animated animate__slideInLeft");
        } else if ($(".menu").hasClass("menu-show") == true) {
            $(".menu").removeClass("menu-show animate__animated animate__slideInLeft").addClass("hide");
        }
    })
})