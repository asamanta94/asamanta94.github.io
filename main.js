
$(function(){
    $("#element").typed({
        strings: ["Aritra Samanta"],
        typeSpeed: 50,
        callback: function resume_cb()
                    {
                        $(function() {
                           $("#resume_id").typed({
                                strings: ["Resume"],
                                typeSpeed: 50
                            });
                        });
                    }
    });
});