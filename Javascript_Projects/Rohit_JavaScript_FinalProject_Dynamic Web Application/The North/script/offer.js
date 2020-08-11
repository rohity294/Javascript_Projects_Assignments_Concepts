$(document).ready(function() {
            $.getJSON("json/offer.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#offer").append(
                            "<tr><td><img src=\"" + value.image + "\"/ width=\"200\"></td>" +
                            "<td> " + value.full_name + "</td>" +
                            "<td> " + value.title + "</td>" +
                            "<td>" + value.tag_line + "</td></tr>"
                        );
                    });
                });
            });
        });

