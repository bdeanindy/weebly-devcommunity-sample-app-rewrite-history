PlatformElement.extend({
    initialize: function() {
        let pusherButton = document.querySelector('#pusher');
        let hasherButton = document.querySelector('#hasher');
        
        // If the page is loaded with a hash, display the right stuff
        if(window.location.hash) {
            console.log('We have a hash!');
            if('#myCategoryId' === window.location.hash) {
                console.log('Ooh, and it matches our category, we should display the category contents now');
                document.querySelector('#categoryContent').style.display = block;
            }
        }
        console.log('Current state: ', window.history.state);
    },

    events: {
        'click #pusher': 'pushState',
        'click #hasher': 'hashState'
    },

    pushState: function(evt) {
        console.log('Change History Button Click Event!');
        //if('page/subpage.html' === window.history.state) return; // Don't add extra duplicate history
        let stateObj = {page: "subpage"};
        let title = 'Sub Page';
        let url = 'page/subpage.html';

        window.history.pushState(stateObj, title, url);
        return console.log('User modified window.history, appended `page/subpage.html`');
    },


    hashState: function(evt) {
        console.log('Append Hash History Button Click Event!');
        let stateObj = {category: "myCategoryId"};
        let title = 'Shop - Some Category Display Title';
        let url = 'shop.html#myCategoryId';

        window.history.pushState(stateObj, title, url);
        return console.log('New state: ', window.history.state);
    }
});
