---
---
(function(){
    var players = [];
    var ids = {};
    var games = [];
    {% for player in site.data.players %}
    players.push("{{ player }}");
    ids["{{ player }}"] = {{forloop.index0}};
    {% endfor %}

    {% for game in site.data.games %}
    var info = [];
    {% for participant in game %}
    info.push({
        player_id: ids["{{participant[0]}}"],
        score: {{participant[1]}}
    });
    {% endfor %}
    games.push(info);
    {% endfor %}

    angular
        .module('Championship')
        .constant('INPUT', {players: players, ids: ids, games: games});
})();
