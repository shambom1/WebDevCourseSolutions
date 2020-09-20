(function() {
    var names = ['Shambo', 'Samayeta', 'Raj', 'Mouli', 'Jambo', 'Jamayeta', 'Jaj', 'Jouli'];
    for (var i = 0; i < names.length; i++) {
        var isj = names[i].charAt(0);
        if (isj === 'J') {
            gb(names[i])
        }
        else {
            hello(names[i])
        }
    }
})();