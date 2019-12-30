var data = {
  "selected_monster": '',
  "ailments": {
    "stun": "images/icon_stun.png",
    "dragonblight": "images/icon_dragonblight.png",
    "waterblight": "images/icon_waterblight.png",
    "fireblight": "images/icon_fireblight.png",
    "defense_down": "images/icon_defense_down.png",
    "iceblight": "images/icon_iceblight.png",
    "thunderblight": "images/icon_thunderblight.png",
    "effluvial_buildup": "images/icon_effluvial_buildup.png",
    "paralysis": "images/icon_paralysis.png",
    "blastblight": "images/icon_blastblight.png",
    "bleeding": "images/icon_bleeding.png",
    "poison": "images/icon_poison.png",
    "sleep": "images/icon_sleep.png",
  },
  "elements": {
    "poison": "images/icon_poison.png",
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
      "name": "Black Diablos",
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
          "name": "water",
          "level": 2
        }
      ],
      "resists": [
        {"name": "fire"},
        {"name": "dragon"}
      ],
      "locations": [
        "wildspire_waste"
      ],
      "tempered_level": 2,
      "weakness_pic": "images/black_diablos_weakness.jpg",
      "icon": "images/icon_black_diablos.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Black+Diablos"
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
    },
    {
      "name": "Kulve Taroth",
      "species": "elder",
      "elements": [
        {"name": "fire"}
      ],
      "ailments": [
        {"name": "fireblight"}
      ],
      "weakness": [
        {
          "name": "ice",
          "level": 3
        },
        {
          "name": "water",
          "level": 2
        },
        {
          "name": "dragon",
          "level": 2
        },
      ],
      "resists": [
        {"name": "thunder"},
        {"name": "fire"},
      ],
      "locations": [
        "caverns_of_el_dorado",
      ],
      "tempered_level": 0,
      "weakness_pic": "images/kulve_taroth_weakness.jpg",
      "icon": "images/icon_kulve_taroth.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Kulve+Taroth"
    },
    {
      "name": "Kushala Daora",
      "species": "elder",
      "elements": [
      ],
      "ailments": [
        {"name": "stun"}
      ],
      "weakness": [
        {
          "name": "thunder",
          "level": 3
        },
        {
          "name": "dragon",
          "level": 2
        },
      ],
      "resists": [
        {"name": "water"},
        {"name": "ice"},
      ],
      "locations": [
        "ancient_forest",
        "elders_recess",
      ],
      "tempered_level": 0,
      "weakness_pic": "images/kushala_daora_weakness.jpg",
      "icon": "images/icon_kushala_daora.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Kushala+Daora"
    },
    {
      "name": "Lavasioth",
      "species": "piscine",
      "elements": [
        {"name": "fire"}
      ],
      "ailments": [
        {"name": "fireblight"}
      ],
      "weakness": [
        {
          "name": "water",
          "condition": "not hardened",
          "level": 3
        },
        {
          "name": "water",
          "condition": "hardened",
          "level": 2
        },
        {
          "name": "thunder",
          "condition": "not hardened",
          "level": 2
        },
        {
          "name": "ice",
          "condition": "not hardened",
          "level": 2
        },
      ],
      "resists": [
        {"name": "fire"},
        {"name": "thunder"},
        {"name": "ice"},
      ],
      "locations": [
        "elders_recess",
      ],
      "tempered_level": 2,
      "weakness_pic": "images/lavasioth_weakness.jpg",
      "icon": "images/icon_lavasioth.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Lavasioth"
    },
    {
      "name": "Legiana",
      "species": "flying",
      "elements": [
        {"name": "ice"}
      ],
      "ailments": [
        {"name": "iceblight"}
      ],
      "weakness": [
        {
          "name": "thunder",
          "level": 3
        },
        {
          "name": "fire",
          "level": 2
        },
      ],
      "resists": [
        {"name": "ice"},
      ],
      "locations": [
        "coral_highlands",
        "rotten_vale",
      ],
      "tempered_level": 2,
      "weakness_pic": "images/legiana_weakness.jpg",
      "icon": "images/icon_legiana.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Legiana"
    },
    {
      "name": "Lunastra",
      "species": "elder",
      "elements": [
        {"name": "fire"}
      ],
      "ailments": [
        {"name": "fireblight"}
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
      ],
      "resists": [
        {"name": "fire"},
      ],
      "locations": [
        "elders_recess",
      ],
      "tempered_level": 0,
      "weakness_pic": "images/lunastra_weakness.jpg",
      "icon": "images/icon_lunastra.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Lunastra"
    },
    {
      "name": "Nergigante",
      "species": "elder",
      "elements": [
      ],
      "ailments": [
      ],
      "weakness": [
        {
          "name": "thunder",
          "level": 3
        },
        {
          "name": "dragon",
          "level": 2
        },
      ],
      "resists": [
      ],
      "locations": [
        "elders_recess",
      ],
      "tempered_level": 3,
      "weakness_pic": "images/nergigante_weakness.jpg",
      "icon": "images/icon_nergigante.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Nergigante"
    },
    {
      "name": "Odogaron",
      "species": "fanged",
      "elements": [
      ],
      "ailments": [
        {"name": "bleeding"}
      ],
      "weakness": [
        {
          "name": "ice",
          "level": 3
        },
        {
          "name": "thunder",
          "level": 2
        },
      ],
      "resists": [
          {"name": "dragon"},
          {"name": "fire"},
          {"name": "water"},
      ],
      "locations": [
        "coral_highlands",
        "rotten_vale",
      ],
      "tempered_level": 2,
      "weakness_pic": "images/odogaron_weakness.jpg",
      "icon": "images/icon_odogaron.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Odogaron"
    },
    {
      "name": "Paolumu",
      "species": "flying",
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
      ],
      "resists": [
        {"name": "water"}
      ],
      "locations": [
        "coral_highlands",
      ],
      "tempered_level": 1,
      "weakness_pic": "images/paolumu_weakness.jpg",
      "icon": "images/icon_paolumu.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Paolumu"
    },
    {
      "name": "Pukei-Pukei",
      "species": "bird",
      "elements": [
      ],
      "ailments": [
        {"name": "poison"}
      ],
      "weakness": [
        {
          "name": "thunder",
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
          {"name": "water"}
      ],
      "locations": [
        "ancient_forest",
      ],
      "tempered_level": 1,
      "weakness_pic": "images/pukei-pukei_weakness.jpg",
      "icon": "images/icon_pukei-pukei.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Pukei-Pukei"
    },
    {
      "name": "Radobaan",
      "species": "brute",
      "elements": [
      ],
      "ailments": [
        {"name": "sleep"}
      ],
      "weakness": [
        {
          "name": "dragon",
          "level": 3
        },
        {
          "name": "ice",
          "level": 2
        },
      ],
      "resists": [
      ],
      "locations": [
        "rotten_vale",
      ],
      "tempered_level": 1,
      "weakness_pic": "images/radobaan_weakness.jpg",
      "icon": "images/icon_radobaan.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Radobaan"
    },
    {
      "name": "Rathalos",
      "species": "flying",
      "elements": [
        {"name": "fire"}
      ],
      "ailments": [
        {"name": "fireblight"},
        {"name": "poison"},
        {"name": "stun"},
      ],
      "weakness": [
        {
          "name": "dragon",
          "level": 3
        },
        {
          "name": "thunder",
          "level": 2
        },
        {
          "name": "water",
          "level": 1
        },
        {
          "name": "ice",
          "level": 1
        },
      ],
      "resists": [
        {"name": "fire"}
      ],
      "locations": [
        "ancient_forest",
        "elders_recess",
      ],
      "tempered_level": 2,
      "weakness_pic": "images/rathalos_weakness.jpg",
      "icon": "images/icon_rathalos.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Rathalos"
    },
    {
      "name": "Azure Rathalos",
      "species": "flying",
      "elements": [
        {"name": "fire"}
      ],
      "ailments": [
        {"name": "fireblight"},
        {"name": "poison"},
        {"name": "stun"},
      ],
      "weakness": [
        {
          "name": "dragon",
          "level": 3
        },
        {
          "name": "ice",
          "level": 2
        },
        {
          "name": "thunder",
          "level": 1
        },
        {
          "name": "water",
          "level": 1
        },
      ],
      "resists": [
        {"name": "fire"}
      ],
      "locations": [
        "ancient_forest",
        "elders_recess",
      ],
      "tempered_level": 2,
      "weakness_pic": "images/azure_rathalos_weakness.jpg",
      "icon": "images/icon_azure_rathalos.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Azure+Rathalos"
    },
    {
      "name": "Rathian",
      "species": "flying",
      "elements": [
        {"name": "fire"}
      ],
      "ailments": [
        {"name": "fireblight"},
        {"name": "poison"},
      ],
      "weakness": [
        {
          "name": "dragon",
          "level": 3
        },
        {
          "name": "thunder",
          "level": 2
        },
      ],
      "resists": [
        {"name": "fire"}
      ],
      "locations": [
        "ancient_forest",
        "wildspire_waste",
      ],
      "tempered_level": 1,
      "weakness_pic": "images/rathian_weakness.jpg",
      "icon": "images/icon_rathian.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Rathian"
    },
    {
      "name": "Pink Rathian",
      "species": "flying",
      "elements": [
        {"name": "fire"}
      ],
      "ailments": [
        {"name": "fireblight"},
        {"name": "poison"},
      ],
      "weakness": [
        {
          "name": "dragon",
          "level": 3
        },
        {
          "name": "thunder",
          "level": 2
        },
      ],
      "resists": [
        {"name": "fire"}
      ],
      "locations": [
        "wildspire_waste",
        "coral_highlands",
      ],
      "tempered_level": 2,
      "weakness_pic": "images/pink_rathian_weakness.jpg",
      "icon": "images/icon_pink_rathian.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Pink+Rathian"
    },
    {
      "name": "Teostra",
      "species": "elder",
      "elements": [
        {"name": "fire"}
      ],
      "ailments": [
        {"name": "fireblight"},
        {"name": "blastblight"},
      ],
      "weakness": [
        {
          "name": "water",
          "level": 3
        },
        {
          "name": "ice",
          "level": 3
        },
      ],
      "resists": [
        {"name": "fire"}
      ],
      "locations": [
        "wildspire_waste",
        "elders_recess",
      ],
      "tempered_level": 2,
      "weakness_pic": "images/teostra_weakness.jpg",
      "icon": "images/icon_teostra.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Teostra"
    },
    {
      "name": "Tobi-Kadachi",
      "species": "fanged",
      "elements": [
        {"name": "thunder"}
      ],
      "ailments": [
        {"name": "thunderblight"},
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
        "ancient_forest",
      ],
      "tempered_level": 2,
      "weakness_pic": "images/tobi-kadachi_weakness.jpg",
      "icon": "images/icon_tobi-kadachi.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Tobi-Kadachi"
    },
    {
      "name": "Tzitzi-Ya-Ku",
      "species": "bird",
      "elements": [
      ],
      "ailments": [
        {"name": "stun"},
      ],
      "weakness": [
        {
          "name": "thunder",
          "level": 3
        },
        {
          "name": "ice",
          "level": 3
        },
        {
          "name": "water",
          "level": 2
        },
        {
          "name": "fire",
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
        "coral_highlands",
      ],
      "tempered_level": 0,
      "weakness_pic": "images/tzitzi-ya-ku_weakness.jpg",
      "icon": "images/icon_tzitzi-ya-ku.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Tzitzi-Ya-Ku"
    },
    {
      "name": "Uragaan",
      "species": "brute",
      "elements": [
        {"name": "fire"}
      ],
      "ailments": [
        {"name": "sleep"},
        {"name": "fireblight"},
      ],
      "weakness": [
        {
          "name": "water",
          "level": 3
        },
        {
          "name": "ice",
          "level": 2
        },
        {
          "name": "dragon",
          "level": 2
        },
      ],
      "resists": [
        {"name": "fire"}
      ],
      "locations": [
        "elders_recess",
      ],
      "tempered_level": 2,
      "weakness_pic": "images/uragaan_weakness.jpg",
      "icon": "images/icon_uragaan.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Uragaan"
    },
    {
      "name": "Vaal Hazak",
      "species": "elder",
      "elements": [
      ],
      "ailments": [
        {"name": "effluvial_buildup"},
      ],
      "weakness": [
        {
          "name": "fire",
          "level": 3
        },
        {
          "name": "dragon",
          "level": 3
        },
      ],
      "resists": [
        {"name": "water"}
      ],
      "locations": [
        "rotten_vale",
      ],
      "tempered_level": 2,
      "weakness_pic": "images/vaal_hazak_weakness.jpg",
      "icon": "images/icon_vaal_hazak.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Vaal+Hazak"
    },
    {
      "name": "Blackveil Vaal Hazak",
      "species": "elder",
      "elements": [
      ],
      "ailments": [
        {"name": "effluvial_buildup"},
      ],
      "weakness": [
        {
          "name": "fire",
          "level": 2
        },
        {
          "name": "dragon",
          "level": 2
        },
        {
          "name": "ice",
          "level": 1
        },
        {
          "name": "thunder",
          "level": 1
        },
      ],
      "resists": [
        {"name": "water"}
      ],
      "locations": [
        "ancient_forest",
        "rotten_vale",
      ],
      "tempered_level": 2,
      "weakness_pic": "images/blackveil_vaal_hazak_weakness.jpg",
      "icon": "images/icon_blackveil_vaal_hazak.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Blackveil+Vaal+Hazak"
    },
    {
      "name": "Xeno'jiiva",
      "species": "elder",
      "elements": [
        {"name": "fire"},
        {"name": "dragon"},
      ],
      "ailments": [
        {"name": "fireblight"},
        {"name": "dragonblight"},
      ],
      "weakness": [
        {
          "name": "poison",
          "level": 3
        },
        {
          "name": "thunder",
          "level": 2
        },
        {
          "name": "water",
          "level": 2
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
          "name": "dragon",
          "level": 2
        },
      ],
      "resists": [
        {"name": "sleep"}
      ],
      "locations": [
        "elders_recess",
      ],
      "tempered_level": 3,
      "weakness_pic": "images/xenojiiva_weakness.jpg",
      "icon": "images/icon_xenojiiva.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Xeno'jiiva"
    },
    {
      "name": "Zorah Magdaros",
      "species": "elder",
      "elements": [
        {"name": "fire"}
      ],
      "ailments": [
        {"name": "fireblight"},
      ],
      "weakness": [
        {
          "name": "dragon",
          "level": 3
        },
        {
          "name": "water",
          "level": 3
        },
      ],
      "resists": [
        {"name": "fire"}
      ],
      "locations": [
      ],
      "tempered_level": 3,
      "weakness_pic": "images/zorah_magdaros_weakness.jpg",
      "icon": "images/icon_zorah_magdaros.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Zorah+Magdaros"
    },
    {
      "name": "Ancient Leshen",
      "species": "elder",
      "elements": [
      ],
      "ailments": [
        {"name": "bleeding"},
      ],
      "weakness": [
        {
          "name": "fire",
          "level": 3
        },
        {
          "name": "dragon",
          "level": 2
        },
        {
          "name": "thunder",
          "level": 2
        },
        {
          "name": "ice",
          "level": 1
        },
      ],
      "resists": [
        {"name": "water"},
        {"name": "sleep"},
      ],
      "locations": [
        "ancient_forest",
      ],
      "tempered_level": 2,
      "weakness_pic": "images/ancient_leshen_weakness.jpg",
      "icon": "images/icon_ancient_leshen.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Ancient+Leshen"
    },
    {
      "name": "Leshen",
      "species": "flying",
      "elements": [
        {"name": "fire"}
      ],
      "ailments": [
        {"name": "bleeding"},
      ],
      "weakness": [
        {
          "name": "fire",
          "level": 3
        },
        {
          "name": "dragon",
          "level": 2
        },
        {
          "name": "thunder",
          "level": 2
        },
      ],
      "resists": [
        {"name": "water"},
        {"name": "sleep"}
      ],
      "locations": [
        "ancient_forest",
      ],
      "tempered_level": 2,
      "weakness_pic": "images/leshen_weakness.jpg",
      "icon": "images/icon_leshen.png",
      "wiki_link": "https://monsterhunterworld.wiki.fextralife.com/Leshen"
    },


  ]
};

var app = new Vue({
  el: '#app',
  data: data,
  methods: {
    set_monster: function (name) {
      for (var i = 0; i < data.monsters.length; i++) {
       if (name === data.monsters[i].name) {
         this.selected_monster = data.monsters[i];
         history.pushState(null, null, '#' + name);
         window.scrollTo(0, 0);
         return;
       }
      }
      this.selected_monster = '';
      history.pushState(null, null, '#');
    },
  }
});

if (window.location.hash) {
  app.set_monster(window.location.hash.slice(1))
}

window.onpopstate = function() {
  if (window.location.hash) {
    app.set_monster(window.location.hash.slice(1));
  } else {
    app.set_monster('');
  }
};
