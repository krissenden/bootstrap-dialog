(function ($) {
   /*
    * A dialog made from bootstrap-modal and font-awesome
    *
    * @name     dialog
    * @param    config      { 
    *                         sTitle : "Title" ,            The title of the dialog
    *                         sSubTitle: "Sub title",       An optional subtitle
    *                         sMessage : "Message",         The message to show
    *                         bConfirm: false,              Show a confirm button
    *                         bBorderedIcon: true,          Place a border around the icon
    *                         sConfirmtext : "OK",          The text of the confirm button
    *                         sCloseText: "Close",          The text of the close button
    *                         sDialogType: "info",          The dialog type: valid type are 'info', 'question', 'warning', 'error', 'custom'
    *                         sCustomIcon: ''               The custom icon (bootstrap or font-awesome)
    *                       }
    * @param    callback     A function that runs if the when the confirm button is clicked
    *
    * @author   Kris Senden (kris.senden@skynet.be)
    *
    * @example  $("#dialog").dialog();
    * @example  $("#dialog").dialog({ sTitle: "Some title", sMessage: "A message");
    */
    $.fn.extend({
        //pass the options variable to the function
        dialog: function (options) {
            var defaults = {
                sTitle: 'Lorem ipsum',
                sSubTitle: '',
                sMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                bConfirm: false,
                bBorderedIcon: true,
                sConfirmText: "OK",
                sCloseText: "Close",
                sDialogType: "info",
                sCustomIcon: '',
                callback: null
            };

            var options = $.extend(defaults, options);
            var icon = "icon-info-sign";

            var html = '<div class="modal" id="confirmContainer">';
            html += '<div class="modal-header">';
            html += '<a class="close" data-dismiss="modal">×</a>';
            html += '<h4>' + options.sTitle + '</h4>';
            html += '</div>';
            html += '<div class="modal-body">';
            html += '<div class="media">';
            switch (options.sDialogType) {
                case "question":
                    icon = 'icon-question-sign';
                    break;
                case "warning":
                    icon = 'icon-warning-sign';
                    break;
                case "error":
                    icon = 'icon-exclamation-sign';
                    break;
                case "custom":
                    icon = options.sCustomIcon;
                    break;
                case "info":
                default:
                    icon = 'icon-info-sign';
                    break;
            }
            html += '<i class="' + icon + ' icon-4x pull-left ';
            if (options.bBorderedIcon) {
                html += 'icon-border';
            }
            html += '"></i>';
            html += '<div class="media-body">';
            if (options.sSubTitle != "") {
                html += '<h5 class="media-heading">';
                html += options.sSubTitle;
                html += '</h5>';
            }
            html += '<div class="media">';
            html += options.sMessage;
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '<div class="modal-footer">';
            if (options.bConfirm) {
                html += '<a href="#" class="btn btn-primary" id="confirmYesBtn">' + options.sConfirmText + '</a>';
            }
            html += '<a href="#" class="btn" data-dismiss="modal">' + options.sCloseText + '</a>';
            html += '</div>';
            html += '</div>';

            $(this).html(html);
            $(this).modal('show');
            var context = $(this);
            $('#confirmYesBtn', this).click(function () {
                if (options.callback != null)
                    options.callback();
                $(context).modal('hide');
            });
        }
    });

})(jQuery);
