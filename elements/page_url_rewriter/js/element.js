PlatformElement.extend({
    initialize: function() {
        let pusherButton = document.querySelector('#pusher');
    },

    events: {
        'click #pusher': this.pushState
    },

    pushState: function(evt) {
        //if('page/subpage.html' === window.history.state) return; // Don't add extra duplicate history
        let stateObj = {page: "subpage"};
        let title = 'Sub Page';
        let url = 'page/subpage.html';

        window.history.pushState(stateObj, title, url);
        console.log('User modified window.history, appended `page/subpage.html`');
    }
});
