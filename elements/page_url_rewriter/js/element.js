PlatformElement.extend({
    initialize: function() {
        let pusherButton = document.querySelector('#pusher');
        console.log('Current state: ', window.history.state);
    },

    events: {
        'click #pusher': 'pushState'
    },

    pushState: function(evt) {
        console.log('Button Click Event!');
        //if('page/subpage.html' === window.history.state) return; // Don't add extra duplicate history
        let stateObj = {page: "subpage"};
        let title = 'Sub Page';
        let url = 'page/subpage.html';

        window.history.pushState(stateObj, title, url);
        return console.log('User modified window.history, appended `page/subpage.html`');
    }
});
