var data = {
  "ailments": {
    "stun": "images/icon_stun.png",
    "dragonblight": "images/icon_dragonblight.png",
    "waterblight": "images/icon_waterblight.png",
    "fireblight": "images/icon_fireblight.png",
    "defense_down": "images/icon_defense_down.png",
    "iceblight": "images/icon_iceblight.png",
    "effluvial_buildup": "images/icon_effluvial_buildup.png",
    "paralysis": "images/icon_paralysis.png",
    "blastblight": "images/icon_blastblight.png",
  },
  "elements": {
    "water": "images/icon_water.png",
    "thunder": "images/icon_thunder.png",
    "dragon": "images/icon_dragon.png",
    "fire": "images/icon_fire.png",
    "ice": "images/icon_ice.png",
    "stun": "images/icon_stun.png",
  },
  "monsters": [
    {
      "name": "Anjanath",
      "species": "brute",
      "elements": [
        {"name": "fire"}
      ],
      "ailments": [
        {"name": "fireblight"},
      ],
      "weakness": [
        {
          "name": "water",
          "level": 3
        },
        {
          "name": "thunder",
          "level": 2
        },
        {
          "name": "ice",
          "level": 2
        },
        {
          "name": "dragon",
          "level": 1
        }
      ],
      "resists": [
        {"name": "fire"}
      ],
      "locations": [
        "ancient_forest",
        "wildspire_waste"
      ],
      "tempered_level": 1,
      "icon": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-anjanath_icon.png",
      "weakness_pic": "images/anjanath_weakness.jpg",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Anjanath"
    },
    {
      "name": "Barroth",
      "species": "brute",
      "elements": [
      ],
      "ailments": [
        {"name": "waterblight"},
      ],
      "weakness": [
        {
          "name": "water",
          "condition": "with mud",
          "level": 3
        },
        {
          "name": "fire",
          "condition": "no mud",
          "level": 3
        },
        {
          "name": "ice",
          "level": 2
        }
      ],
      "resists": [
        {"name": "thunder"},
        {"name": "fire", "condition": "with mud"},
        {"name": "water", "condition": "no mud"},
      ],
      "locations": [
        "wildspire_waste"
      ],
      "tempered_level": 1,
      "icon": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/MHW-Barroth_Icon.png",
      "weakness_pic": "images/barroth_weakness.jpg",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Barroth"
    },
    {
      "name": "Bazelgeuse",
      "species": "flying",
      "elements": [
          {"name": "fire"}
      ],
      "ailments": [
        {"name": "fireblight"},
      ],
      "weakness": [
        {
          "name": "thunder",
          "level": 3
        },
        {
          "name": "dragon",
          "level": 3
        },
        {
          "name": "ice",
          "level": 2
        },
        {
          "name": "water",
          "level": 1
        }
      ],
      "resists": [
        {"name": "fire"},
      ],
      "locations": [
        "wildspire_waste"
      ],
      "tempered_level": 1,
      "weakness_pic": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/bazelgeuse_weaknesses-mhw.jpg",
      "icon": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-bazelgeuse_icon.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Bazelgeuse"
    },
    {
      "name": "Behemoth",
      "species": "elder",
      "elements": [
          {"name": "fire"},
          {"name": "thunder"}
      ],
      "ailments": [
        {"name": "bleeding"},
        {"name": "fireblight"},
        {"name": "thunderblight"},
      ],
      "weakness": [
        {
          "name": "dragon",
          "level": 3
        }
      ],
      "resists": [
        {"name": "thunder", "level": 1},
        {"name": "fire", "level": 1},
      ],
      "locations": [
        "wildspire_waste"
      ],
      "tempered_level": 1,
      "weakness_pic": "images/behemoth_weakness.jpg",
      "icon": "images/icon_behemoth.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Behemoth"
    },
    {
      "name": "Deviljho",
      "species": "brute",
      "elements": [
          {"name": "dragon"},
      ],
      "ailments": [
        {"name": "dragonblight"},
        {"name": "defense_down"},
        {"name": "fireblight"},
        {"name": "iceblight"},
        {"name": "waterblight"},
        {"name": "effluvial_buildup"},
      ],
      "weakness": [
        {
          "name": "thunder",
          "level": 3
        },
        {
          "name": "dragon",
          "level": 3
        },
        {
          "name": "fire",
          "level": 2
        },
        {
          "name": "water",
          "level": 2
        },
        {
          "name": "ice",
          "level": 1
        }
      ],
      "resists": [
      ],
      "locations": [
        "wildspire_waste"
      ],
      "tempered_level": 1,
      "weakness_pic": "images/deviljho_weakness.jpg",
      "icon": "images/icon_deviljho.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Deviljho"
    },
    {
      "name": "Diablos",
      "species": "flying",
      "elements": [
      ],
      "ailments": [
        {"name": "stun"},
      ],
      "weakness": [
        {
          "name": "ice",
          "level": 3
        },
        {
          "name": "dragon",
          "level": 2
        },
        {
          "name": "water",
          "level": 2
        },
        {
          "name": "thunder",
          "level": 1
        }
      ],
      "resists": [
        {"name": "fire"}
      ],
      "locations": [
        "wildspire_waste"
      ],
      "tempered_level": 1,
      "weakness_pic": "images/diablos_weakness.jpg",
      "icon": "images/icon_diablos.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Diablos"
    },
    {
      "name": "Dodogama",
      "species": "fanged",
      "elements": [
      ],
      "ailments": [
        {"name": "blastblight"},
      ],
      "weakness": [
        {
          "name": "thunder",
          "level": 3
        },
        {
          "name": "water",
          "level": 2
        },
        {
          "name": "ice",
          "level": 2
        },
        {
          "name": "dragon",
          "level": 1
        },
      ],
      "resists": [
        {"name": "fire"}
      ],
      "locations": [
        "wildspire_waste"
      ],
      "tempered_level": 1,
      "weakness_pic": "images/dodogama_weakness.jpg",
      "icon": "images/icon_dodogama.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Dodogama"
    },
    {
      "name": "Great Girros",
      "species": "fanged",
      "elements": [
      ],
      "ailments": [
        {"name": "paralysis"},
      ],
      "weakness": [
        {
          "name": "water",
          "level": 3
        },
        {
          "name": "fire",
          "level": 2
        },
        {
          "name": "ice",
          "level": 2
        },
      ],
      "resists": [
        {"name": "thunder"}
      ],
      "locations": [
        "rotten_vale"
      ],
      "tempered_level": 1,
      "weakness_pic": "images/great_girros_weakness.jpg",
      "icon": "images/icon_great_girros.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Great+Girros"
    },
    {
      "name": "Great Jagras",
      "species": "fanged",
      "elements": [
      ],
      "ailments": [
      ],
      "weakness": [
        {
          "name": "fire",
          "level": 3
        },
        {
          "name": "thunder",
          "level": 2
        },
        {
          "name": "ice",
          "level": 2
        },
      ],
      "resists": [
        {"name": "water"}
      ],
      "locations": [
        "ancient_forest"
      ],
      "tempered_level": 1,
      "weakness_pic": "images/great_jagras_weakness.jpg",
      "icon": "images/icon_great_jagras.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Great+Jagras"
    },
    {
      "name": "Jyuratodus",
      "species": "piscine",
      "elements": [
        {"name": "water"},
      ],
      "ailments": [
        {"name": "waterblight"},
      ],
      "weakness": [
        {
          "name": "thunder",
          "condition": "no mud",
          "level": 3
        },
        {
          "name": "water",
          "condition": "when mud",
          "level": 3
        },
      ],
      "resists": [
        {"name": "water"},
        {"name": "thunder"},
        {"name": "fire"},
      ],
      "locations": [
        "ancient_forest"
      ],
      "tempered_level": 1,
      "weakness_pic": "images/jyuratodus_weakness.jpg",
      "icon": "images/icon_jyuratodus.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Jyuratodus"
    },
    {
      "name": "Kirin",
      "species": "elder",
      "elements": [
        {"name": "thunder"},
      ],
      "ailments": [
        {"name": "thunderblight"},
      ],
      "weakness": [
        {
          "name": "fire",
          "level": 3
        },
        {
          "name": "water",
          "level": 2
        },
        {
          "name": "ice",
          "level": 2
        },
      ],
      "resists": [
        {"name": "thunder"},
        {"name": "paralysis"},
      ],
      "locations": [
        "coral_highlands"
      ],
      "tempered_level": 3,
      "weakness_pic": "images/kirin_weakness.jpg",
      "icon": "images/icon_kirin.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Kirin"
    },
    {
      "name": "Kulu-Ya-Ku",
      "species": "bird",
      "elements": [
      ],
      "ailments": [
      ],
      "weakness": [
        {
          "name": "water",
          "level": 3
        },
        {
          "name": "fire",
          "level": 2
        },
        {
          "name": "ice",
          "level": 2
        },
        {
          "name": "thunder",
          "level": 2
        },
        {
          "name": "dragon",
          "level": 2
        },
      ],
      "resists": [
      ],
      "locations": [
        "ancient_forest",
        "wildspire_waste",
      ],
      "tempered_level": 0,
      "weakness_pic": "images/kulu-ya-ku_weakness.jpg",
      "icon": "images/icon_kulu-ya-ku.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Kulu-Ya-Ku"
    }
  ]
};

function _set_monster(name) {
  for (var i = 0; i < data['monsters'].length; i++) {
   if (name === data['monsters'][i].name) {
     selected_monster = data['monsters'][i];
   }
  }
}

var selected_monster;

var app4 = new Vue({
  el: '#app',
  data: {
    selected_monster: selected_monster,
    monsters: data['monsters'],
    ailments: data['ailments'],
    elements: data['elements'],
  },
  methods: {
    set_monster: _set_monster,
  }
})
