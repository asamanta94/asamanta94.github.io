
$(function(){
    $("#element").typed({
        strings: ["Aritra Samanta"],
        typeSpeed: 50,
        callback: function resume_cb()
                    {
                        document.getElementById("element").innerHTML += " |";
                        $(function() {
                           $("#resume_id").typed({
                                strings: ["Resume"],
                                typeSpeed: 50
                            });
                        });
                    }
    });
});