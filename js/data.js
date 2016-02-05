---
---
(function(){
    var players = [];
    var matrix = {};

    {% assign players = site.data.players | sort %}
    {% for player in players %}
    players.push("{{ player }}");
    matrix["{{ player }}"] = {};
    {% endfor %}

    var parseGame = function(p1, s1, p2, s2){
        matrix[p1][p2] = s1;
        matrix[p2][p1] = s2;
    };

    {% for game in site.data.games %}
    parseGame({% for player in game %}"{{player[0]}}", {{player[1]}}{% if forloop.index0 == 0%}, {% endif %}{% endfor %});
    {% endfor %}

    angular
        .module('Championship')
        .constant('INPUT', {players: players, matrix: matrix});
})();
