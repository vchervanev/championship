---
---
(function(){
    var players = [];
    var matrix = {};
    var stats = {};

    {% assign players = site.data.players | sort %}
    {% for player in players %}
    players.push("{{ player }}");
    matrix["{{ player }}"] = {};
    stats["{{ player }}"] = { played: 0, win: 0, loss: 0, score: 0, miss: 0 };

    {% endfor %}

    var parseGame = function(p1, s1, p2, s2){
        if (matrix[p1] == null || matrix[p2] == null){
            return;
        }

        matrix[p1][p2] = s1;
        matrix[p2][p1] = s2;

        stats[p1].played++;
        stats[p1].score += s1;
        stats[p1].miss += s2;

        stats[p2].played++;
        stats[p2].score += s2;
        stats[p2].miss += s1;

        if (s1 > s2) {
            stats[p1].win++;
            stats[p2].loss++;
        } else {
            stats[p2].win++;
            stats[p1].loss++;
        }
    };

    {% for game in site.data.games %}
    parseGame({% for player in game %}"{{player[0]}}", {{player[1]}}{% if forloop.index0 == 0%}, {% endif %}{% endfor %});
    {% endfor %}

    angular
        .module('Championship')
        .constant('INPUT', {players: players, matrix: matrix, stats: stats});
})();
