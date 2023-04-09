Drupal.behaviors.viewsScrollOff = {
    attach: function () {
        Drupal.AjaxCommands.prototype.viewsScrollTop = null;
    }
};
