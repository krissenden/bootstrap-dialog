(function ($) {
   /*
    * A dialog made from bootstrap-modal
    *
    * @name     dialog
    * @param    config      { 
    *                         sTitle : "Title" ,            The title of the dialog
    *                         sMessage : "Message",         The message to show
    *                         bConfirm: false,              Show a confirm button
    *                         sConfirmtext : "OK",          The text of the confirm button
    *                         sCloseText: "Close",          The text of the close button
    *                         sDialogType: "info",          The dialog type: valid type are 'info', 'question', 'warning', 'error', 'custom'
    *                         sCustomIcon: ''               The custom icon (bootstrap or font-awesome)
    *                         callback                      Callback to be executed when confirm button is clicked     
    *                       }
    *
    * @example  $("#dialog").dialog();
    * @example  $("#dialog").dialog({ sTitle: "Some title", sMessage: "A message");
    */
    $.fn.extend({
        //pass the options variable to the function
        bootstrapDialog: function(options) {
            var defaults = {
                sTitle: 'Lorem ipsum',
                sMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                bConfirm: false,
                sConfirmText: "OK",
                sCloseText: "Close",
                sDialogType: "info",
                sCustomIcon: '',
                callback: null
            };

            options = $.extend(defaults, options);
            var icon = "glypicon-info-sign";

            //var html = '<div class="modal fade" id="confirmContainer">';
            var html = '<div class="modal-dialog">';
            html += '<div class="modal-content">';
            html += '<div class="modal-header">';
            html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
            html += '<h4 class="modal-title">' + options.sTitle + '</h4>';
            html += '</div>';
            html += '<div class="modal-body">';
            html += '<div class="media">';
            switch (options.sDialogType) {
            case "question":
                icon = 'glyphicon-question-sign';
                break;
            case "warning":
                icon = 'glyphicon-warning-sign';
                break;
            case "error":
                icon = 'glyphicon-exclamation-sign';
                break;
            case "custom":
                icon = options.sCustomIcon;
                break;
            case "info":
            default:
                icon = 'glyphicon-info-sign';
                break;
            }
            html += '<span class="glyphicon ' + icon + ' glyphicon-2x pull-left"></span>';
            html += '<div class="media-body">';
            html += '<p>' + options.sMessage + '</p>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '<div class="modal-footer">';
            html += '<button type="button" class="btn btn-default" data-dismiss="modal">' + options.sCloseText + '</button>';
            html += '<button id="confirmButton" type="button" class="btn btn-primary">' + options.sConfirmText + '</button>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            //html += '</div>';

            $(this).html(html);

            $(this).modal('show');

            var context = $(this);

            $('#confirmButton', this).click(function () {
                if (options.callback != null)
                    options.callback();
                $(context).modal('hide');
            });
        }
    });
})(jQuery);
