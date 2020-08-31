$(document).ready(function () {

    // Preloader
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#goToTop').fadeIn('slow');
        } else {
            $('#goToTop').fadeOut('slow');
        }
    });
    $('#goToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 0, 'easeInOutExpo');
        return false;
    });
    // transform: translate3d(0px, -1px, 0px)
    $(document).on("mouseover", ".sr-card", function () {
        $(this).addClass('shadow')
        $(this).css({
            '-webkit-transform': 'translate3d(0px, -5px, 0px)',
            '-moz-transform': 'translate3d(0px, -5px, 0px)',
            '-ms-transform': 'translate3d(0px, -5px, 0px)',
            '-o-transform': 'translate3d(0px, -5px, 0px)',
            'transform': 'translate3d(0px, -5px, 0px)'
        });
    });
    $(document).on("mouseout", ".sr-card", function () {
        $(this).removeClass('shadow')
        $(this).css({
            '-webkit-transform': 'translate3d(0px, 0px, 0px)',
            '-moz-transform': 'translate3d(0px, 0px, 0px)',
            '-ms-transform': 'translate3d(0px, 0px, 0px)',
            '-o-transform': 'translate3d(0px, 0px, 0px)',
            'transform': 'translate3d(0px, 0px, 0px)'
        });
    });

    function setProductDetailsHeight(params) {
        var winwid = window.innerWidth;
        if (winwid >= 992) {
            var productImgHeight = $(".product-img").height() + "px";
            $('.product-details').css({ 'max-height': productImgHeight });
        } else {
            $('.product-details').css({ 'max-height': 'initial !important' });
        }
    }
    setProductDetailsHeight();
    $(window).on("resize", () => {
        setProductDetailsHeight();
    });

    $(document).on("click", ".addToFav", function (e) {
        // $(this).children('i').removeClass("far");
        $(this).children('i').toggleClass("fas");
    });


    // Chatbot
    // $(".chatbotBtn").on("click", () => {
    //     $('body').toggleClass('overflow-hidden')
    // })
    // $("#closeChatbot").on("click", () => {
    //     $('body').toggleClass('overflow-hidden')
    // })



    // chatting
    function userMsg(message) {
        var userMsgUpperHtml = '<div class="w-100"><div class="media user-msg ml-auto"><div class="media-body"><div class="bg-primary animated fadeIn rounded py-2 px-3 shadow-sm mb-2"><p class="text-small mb-0 text-white">';
        var userMsgLowerHtml = '</div></div></div ></div>';
        return userMsgUpperHtml + message + userMsgLowerHtml;
    }
    var id = 0
    function botMsg(message) {
        // disabling user send button
        $("#sendMsgBtn").addClass('disabled');

        id++;
        let msgId = `botMsg${id}`

        // loading Animation
        var LoadAnimation = '<div class="bg-primary text-white shadow-sm rounded py-2 px-3 mb-2 typing-animation "><div id="wave"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div>';

        // div outer content
        var botMsgUpperHtml = '<div class="w-100 mb-3"><div class="media bot-msg mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle" /><div class="media-body ml-3" id="' + msgId + '">';
        var botMsgLowerHtml = '</div></div></div>';

        // appending outer div
        $(".chat-box").append(botMsgUpperHtml + botMsgLowerHtml);

        // appending animation
        $(`#${msgId}`).append(LoadAnimation);

        // appending all the messages
        setTimeout(() => {
            for (let msg = 0; msg < message.length; msg++) {
                const element = message[msg];
                setTimeout(() => {
                    var str = '<div class="bg-primary text-white animated fadeInUp shadow-sm rounded py-2 px-3 mb-2"><p class="text-small mb-0">' + element + '</p></div>';
                    $(".typing-animation").fadeOut('slow');
                    $(".typing-animation").remove();
                    $(`#${msgId}`).append(str);

                    setTimeout(() => {
                        // re-enabling user's send Button
                        $("#sendMsgBtn").removeClass('disabled');
                    }, (message.length * 1500));

                }, (msg + 1) * 1500);

            }
        }, 1000);

    }

    // calling The Function
    var chatStarted = false;
    $(".chatbotBtn").on("click", () => {
        // Bot Message
        if (chatStarted != true) {
            botMsg(['Hello Friend', 'I\'m Kallu Bhaiya', 'From RoyalsGroup24. Let\'s Talk..!', 'What\'s Your Name?']);
            chatStarted = true;
        }

        // User Message
        var userReply;
        $("#sendMsgBtn").on("click", () => {
            if ($("#userMessage").val()) {

                $(".chat-box").append(userMsg($("#userMessage").val()));
                userReply = $("#userMessage").val();

                $("#userMessage").val('');

                botMsg([`Welcome ${userReply}..!!`, `Which Type Of Property You're Looking For ${userReply.split(" ")[0]}?`]);
            }
        })

    });
});
