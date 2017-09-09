const _ = require('lodash');
const fs = require('fs');

//cca2 country list
const cca2 = ["AF","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BA","BW","BV","BR","IO","VG","BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX","CC","CO","KM","CK","CR","HR","CU","CW","CY","CZ","CD","DK","DJ","DM","DO","EC","EG","SV","GQ","ER","EE","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY","HT","HM","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","CI","JM","JP","JE","JO","KZ","KE","KI","XK","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MK","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","NC","NZ","NI","NE","NG","NU","NF","KP","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","CG","RO","RU","RW","RE","BL","KN","LC","MF","PM","VC","WS","SM","SA","SN","RS","SC","SL","SG","SX","SK","SI","SB","SO","ZA","GS","KR","SS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","ST","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UM","VI","UY","UZ","VU","VA","VE","VN","WF","EH","YE","ZM","ZW","AX"];
console.log(cca2.length); //248
//complete country list
const cca2Countries = {
    "AF": {
        "currency": "AFN",
        "callingCode": "93",
        "flag": "flag-af",
        "name": {
            "common": "Afghanistan",
            "cym": "Affganistan",
            "deu": "Afghanistan",
            "fra": "Afghanistan",
            "hrv": "Afganistan",
            "ita": "Afghanistan",
            "jpn": "アフガニスタン",
            "nld": "Afghanistan",
            "por": "Afeganistão",
            "rus": "Афганистан",
            "spa": "Afganistán",
            "svk": "Afganistan",
            "fin": "Afganistan",
            "zho": "阿富汗"
        }
    },
    "AL": {
        "currency": "ALL",
        "callingCode": "355",
        "flag": "flag-al",
        "name": {
            "common": "Albania",
            "cym": "Albania",
            "deu": "Albanien",
            "fra": "Albanie",
            "hrv": "Albanija",
            "ita": "Albania",
            "jpn": "アルバニア",
            "nld": "Albanië",
            "por": "Albânia",
            "rus": "Албания",
            "spa": "Albania",
            "svk": "Albánsko",
            "fin": "Albania",
            "zho": "阿尔巴尼亚"
        }
    },
    "DZ": {
        "currency": "DZD",
        "callingCode": "213",
        "flag": "flag-dz",
        "name": {
            "common": "Algeria",
            "cym": "Algeria",
            "deu": "Algerien",
            "fra": "Algérie",
            "hrv": "Alžir",
            "ita": "Algeria",
            "jpn": "アルジェリア",
            "nld": "Algerije",
            "por": "Argélia",
            "rus": "Алжир",
            "spa": "Argelia",
            "svk": "Alžírsko",
            "fin": "Algeria",
            "zho": "阿尔及利亚"
        }
    },
    "AS": {
        "currency": "USD",
        "callingCode": "1684",
        "flag": "flag-as",
        "name": {
            "common": "American Samoa",
            "deu": "Amerikanisch-Samoa",
            "fra": "Samoa américaines",
            "hrv": "Američka Samoa",
            "ita": "Samoa Americane",
            "jpn": "アメリカ領サモア",
            "nld": "Amerikaans Samoa",
            "por": "Samoa Americana",
            "rus": "Американское Самоа",
            "spa": "Samoa Americana",
            "svk": "Americká Samoa",
            "fin": "Amerikan Samoa",
            "zho": "美属萨摩亚"
        }
    },
    "AD": {
        "currency": "EUR",
        "callingCode": "376",
        "flag": "flag-ad",
        "name": {
            "common": "Andorra",
            "cym": "Andorra",
            "deu": "Andorra",
            "fra": "Andorre",
            "hrv": "Andora",
            "ita": "Andorra",
            "jpn": "アンドラ",
            "nld": "Andorra",
            "por": "Andorra",
            "rus": "Андорра",
            "spa": "Andorra",
            "svk": "Andorra",
            "fin": "Andorra",
            "zho": "安道尔"
        }
    },
    "AO": {
        "currency": "AOA",
        "callingCode": "244",
        "flag": "flag-ao",
        "name": {
            "common": "Angola",
            "cym": "Angola",
            "deu": "Angola",
            "fra": "Angola",
            "hrv": "Angola",
            "ita": "Angola",
            "jpn": "アンゴラ",
            "nld": "Angola",
            "por": "Angola",
            "rus": "Ангола",
            "spa": "Angola",
            "svk": "Angola",
            "fin": "Angola",
            "zho": "安哥拉"
        }
    },
    "AI": {
        "currency": "XCD",
        "callingCode": "1264",
        "flag": "flag-ai",
        "name": {
            "common": "Anguilla",
            "deu": "Anguilla",
            "fra": "Anguilla",
            "hrv": "Angvila",
            "ita": "Anguilla",
            "jpn": "アンギラ",
            "nld": "Anguilla",
            "por": "Anguilla",
            "rus": "Ангилья",
            "spa": "Anguilla",
            "svk": "Anguilla",
            "fin": "Anguilla",
            "zho": "安圭拉"
        }
    },
    "AQ": {
        "flag": "flag-aq",
        "name": {
            "common": "Antarctica",
            "cym": "Antarctica",
            "deu": "Antarktis",
            "fra": "Antarctique",
            "hrv": "Antarktika",
            "ita": "Antartide",
            "jpn": "南極",
            "nld": "Antarctica",
            "por": "Antártida",
            "rus": "Антарктида",
            "spa": "Antártida",
            "svk": "Antarktída",
            "fin": "Etelämanner",
            "zho": "南极洲"
        }
    },
    "AG": {
        "currency": "XCD",
        "callingCode": "1268",
        "flag": "flag-ag",
        "name": {
            "common": "Antigua and Barbuda",
            "cym": "Antigwa a Barbiwda",
            "deu": "Antigua und Barbuda",
            "fra": "Antigua-et-Barbuda",
            "hrv": "Antigva i Barbuda",
            "ita": "Antigua e Barbuda",
            "jpn": "アンティグア・バーブーダ",
            "nld": "Antigua en Barbuda",
            "por": "Antígua e Barbuda",
            "rus": "Антигуа и Барбуда",
            "spa": "Antigua y Barbuda",
            "svk": "Antigua a Barbuda",
            "fin": "Antigua ja Barbuda",
            "zho": "安提瓜和巴布达"
        }
    },
    "AR": {
        "currency": "ARS",
        "callingCode": "54",
        "flag": "flag-ar",
        "name": {
            "common": "Argentina",
            "cym": "Ariannin",
            "deu": "Argentinien",
            "fra": "Argentine",
            "hrv": "Argentina",
            "ita": "Argentina",
            "jpn": "アルゼンチン",
            "nld": "Argentinië",
            "por": "Argentina",
            "rus": "Аргентина",
            "spa": "Argentina",
            "svk": "Argentína",
            "fin": "Argentiina",
            "zho": "阿根廷"
        }
    },
    "AM": {
        "currency": "AMD",
        "callingCode": "374",
        "flag": "flag-am",
        "name": {
            "common": "Armenia",
            "cym": "Armenia",
            "deu": "Armenien",
            "fra": "Arménie",
            "hrv": "Armenija",
            "ita": "Armenia",
            "jpn": "アルメニア",
            "nld": "Armenië",
            "por": "Arménia",
            "rus": "Армения",
            "spa": "Armenia",
            "svk": "Arménsko",
            "fin": "Armenia",
            "zho": "亚美尼亚"
        }
    },
    "AW": {
        "currency": "AWG",
        "callingCode": "297",
        "flag": "flag-aw",
        "name": {
            "common": "Aruba",
            "deu": "Aruba",
            "fra": "Aruba",
            "hrv": "Aruba",
            "ita": "Aruba",
            "jpn": "アルバ",
            "nld": "Aruba",
            "por": "Aruba",
            "rus": "Аруба",
            "spa": "Aruba",
            "svk": "Aruba",
            "fin": "Aruba",
            "zho": "阿鲁巴"
        }
    },
    "AU": {
        "currency": "AUD",
        "callingCode": "61",
        "flag": "flag-au",
        "name": {
            "common": "Australia",
            "cym": "Awstralia",
            "deu": "Australien",
            "fra": "Australie",
            "hrv": "Australija",
            "ita": "Australia",
            "jpn": "オーストラリア",
            "nld": "Australië",
            "por": "Austrália",
            "rus": "Австралия",
            "spa": "Australia",
            "svk": "Austrália",
            "fin": "Australia",
            "zho": "澳大利亚"
        }
    },
    "AT": {
        "currency": "EUR",
        "callingCode": "43",
        "flag": "flag-at",
        "name": {
            "common": "Austria",
            "cym": "Awstria",
            "deu": "Österreich",
            "fra": "Autriche",
            "hrv": "Austrija",
            "ita": "Austria",
            "jpn": "オーストリア",
            "nld": "Oostenrijk",
            "por": "Áustria",
            "rus": "Австрия",
            "spa": "Austria",
            "svk": "Rakúsko",
            "fin": "Itävalta",
            "zho": "奥地利"
        }
    },
    "AZ": {
        "currency": "AZN",
        "callingCode": "994",
        "flag": "flag-az",
        "name": {
            "common": "Azerbaijan",
            "cym": "Aserbaijan",
            "deu": "Aserbaidschan",
            "fra": "Azerbaïdjan",
            "hrv": "Azerbajdžan",
            "ita": "Azerbaijan",
            "jpn": "アゼルバイジャン",
            "nld": "Azerbeidzjan",
            "por": "Azerbeijão",
            "rus": "Азербайджан",
            "spa": "Azerbaiyán",
            "svk": "Azerbajǆan",
            "fin": "Azerbaidzan",
            "zho": "阿塞拜疆"
        }
    },
    "BS": {
        "currency": "BSD",
        "callingCode": "1242",
        "flag": "flag-bs",
        "name": {
            "common": "Bahamas",
            "cym": "Bahamas",
            "deu": "Bahamas",
            "fra": "Bahamas",
            "hrv": "Bahami",
            "ita": "Bahamas",
            "jpn": "バハマ",
            "nld": "Bahama’s",
            "por": "Bahamas",
            "rus": "Багамские Острова",
            "spa": "Bahamas",
            "svk": "Bahamy",
            "fin": "Bahamasaaret",
            "zho": "巴哈马"
        }
    },
    "BH": {
        "currency": "BHD",
        "callingCode": "973",
        "flag": "flag-bh",
        "name": {
            "common": "Bahrain",
            "cym": "Bahrain",
            "deu": "Bahrain",
            "fra": "Bahreïn",
            "hrv": "Bahrein",
            "ita": "Bahrein",
            "jpn": "バーレーン",
            "nld": "Bahrein",
            "por": "Bahrein",
            "rus": "Бахрейн",
            "spa": "Bahrein",
            "svk": "Bahrajn",
            "fin": "Bahrain",
            "zho": "巴林"
        }
    },
    "BD": {
        "currency": "BDT",
        "callingCode": "880",
        "flag": "flag-bd",
        "name": {
            "common": "Bangladesh",
            "cym": "Bangladesh",
            "deu": "Bangladesch",
            "fra": "Bangladesh",
            "hrv": "Bangladeš",
            "ita": "Bangladesh",
            "jpn": "バングラデシュ",
            "nld": "Bangladesh",
            "por": "Bangladesh",
            "rus": "Бангладеш",
            "spa": "Bangladesh",
            "svk": "Bangladéš",
            "fin": "Bangladesh",
            "zho": "孟加拉国"
        }
    },
    "BB": {
        "currency": "BBD",
        "callingCode": "1246",
        "flag": "flag-bb",
        "name": {
            "common": "Barbados",
            "cym": "Barbados",
            "deu": "Barbados",
            "fra": "Barbade",
            "hrv": "Barbados",
            "ita": "Barbados",
            "jpn": "バルバドス",
            "nld": "Barbados",
            "por": "Barbados",
            "rus": "Барбадос",
            "spa": "Barbados",
            "svk": "Barbados",
            "fin": "Barbados",
            "zho": "巴巴多斯"
        }
    },
    "BY": {
        "currency": "BYR",
        "callingCode": "375",
        "flag": "flag-by",
        "name": {
            "common": "Belarus",
            "cym": "Belarws",
            "deu": "Weißrussland",
            "fra": "Biélorussie",
            "hrv": "Bjelorusija",
            "ita": "Bielorussia",
            "jpn": "ベラルーシ",
            "nld": "Wit-Rusland",
            "por": "Bielorússia",
            "rus": "Белоруссия",
            "spa": "Bielorrusia",
            "svk": "Bielorusko",
            "fin": "Valko-Venäjä",
            "zho": "白俄罗斯"
        }
    },
    "BE": {
        "currency": "EUR",
        "callingCode": "32",
        "flag": "flag-be",
        "name": {
            "common": "Belgium",
            "cym": "Gwlad Belg",
            "deu": "Belgien",
            "fra": "Belgique",
            "hrv": "Belgija",
            "ita": "Belgio",
            "jpn": "ベルギー",
            "nld": "België",
            "por": "Bélgica",
            "rus": "Бельгия",
            "spa": "Bélgica",
            "svk": "Belgicko",
            "fin": "Belgia",
            "zho": "比利时"
        }
    },
    "BZ": {
        "currency": "BZD",
        "callingCode": "501",
        "flag": "flag-bz",
        "name": {
            "common": "Belize",
            "cym": "Belize",
            "deu": "Belize",
            "fra": "Belize",
            "hrv": "Belize",
            "ita": "Belize",
            "jpn": "ベリーズ",
            "nld": "Belize",
            "por": "Belize",
            "rus": "Белиз",
            "spa": "Belice",
            "svk": "Belize",
            "fin": "Belize",
            "zho": "伯利兹"
        }
    },
    "BJ": {
        "currency": "XOF",
        "callingCode": "229",
        "flag": "flag-bj",
        "name": {
            "common": "Benin",
            "cym": "Benin",
            "deu": "Benin",
            "fra": "Bénin",
            "hrv": "Benin",
            "ita": "Benin",
            "jpn": "ベナン",
            "nld": "Benin",
            "por": "Benin",
            "rus": "Бенин",
            "spa": "Benín",
            "svk": "Benin",
            "fin": "Benin",
            "zho": "贝宁"
        }
    },
    "BM": {
        "currency": "BMD",
        "callingCode": "1441",
        "flag": "flag-bm",
        "name": {
            "common": "Bermuda",
            "cym": "Bermiwda",
            "deu": "Bermuda",
            "fra": "Bermudes",
            "hrv": "Bermudi",
            "ita": "Bermuda",
            "jpn": "バミューダ",
            "nld": "Bermuda",
            "por": "Bermudas",
            "rus": "Бермудские Острова",
            "spa": "Bermudas",
            "svk": "Bermudy",
            "fin": "Bermuda",
            "zho": "百慕大"
        }
    },
    "BT": {
        "currency": "BTN",
        "callingCode": "975",
        "flag": "flag-bt",
        "name": {
            "common": "Bhutan",
            "cym": "Bhwtan",
            "deu": "Bhutan",
            "fra": "Bhoutan",
            "hrv": "Butan",
            "ita": "Bhutan",
            "jpn": "ブータン",
            "nld": "Bhutan",
            "por": "Butão",
            "rus": "Бутан",
            "spa": "Bután",
            "svk": "Bhután",
            "fin": "Bhutan",
            "zho": "不丹"
        }
    },
    "BO": {
        "currency": "BOB",
        "callingCode": "591",
        "flag": "flag-bo",
        "name": {
            "common": "Bolivia",
            "cym": "Bolifia",
            "deu": "Bolivien",
            "fra": "Bolivie",
            "hrv": "Bolivija",
            "ita": "Bolivia",
            "jpn": "ボリビア多民族国",
            "nld": "Bolivia",
            "por": "Bolívia",
            "rus": "Боливия",
            "spa": "Bolivia",
            "svk": "Bolívija",
            "fin": "Bolivia",
            "zho": "玻利维亚"
        }
    },
    "BA": {
        "currency": "BAM",
        "callingCode": "387",
        "flag": "flag-ba",
        "name": {
            "common": "Bosnia and Herzegovina",
            "cym": "Bosnia a Hercegovina",
            "deu": "Bosnien und Herzegowina",
            "fra": "Bosnie-Herzégovine",
            "hrv": "Bosna i Hercegovina",
            "ita": "Bosnia ed Erzegovina",
            "jpn": "ボスニア・ヘルツェゴビナ",
            "nld": "Bosnië en Herzegovina",
            "por": "Bósnia e Herzegovina",
            "rus": "Босния и Герцеговина",
            "spa": "Bosnia y Herzegovina",
            "svk": "Bosna a Hercegovina",
            "fin": "Bosnia ja Hertsegovina",
            "zho": "波斯尼亚和黑塞哥维那"
        }
    },
    "BW": {
        "currency": "BWP",
        "callingCode": "267",
        "flag": "flag-bw",
        "name": {
            "common": "Botswana",
            "deu": "Botswana",
            "fra": "Botswana",
            "hrv": "Bocvana",
            "ita": "Botswana",
            "jpn": "ボツワナ",
            "nld": "Botswana",
            "por": "Botswana",
            "rus": "Ботсвана",
            "spa": "Botswana",
            "svk": "Botswana",
            "fin": "Botswana",
            "zho": "博茨瓦纳"
        }
    },
    "BV": {
        "currency": "NOK",
        "flag": "flag-bv",
        "name": {
            "common": "Bouvet Island",
            "deu": "Bouvetinsel",
            "fra": "Île Bouvet",
            "hrv": "Otok Bouvet",
            "ita": "Isola Bouvet",
            "jpn": "ブーベ島",
            "nld": "Bouveteiland",
            "por": "Ilha Bouvet",
            "rus": "Остров Буве",
            "spa": "Isla Bouvet",
            "svk": "Bouvetov ostrov",
            "fin": "Bouvet'nsaari",
            "zho": "布维岛"
        }
    },
    "BR": {
        "currency": "BRL",
        "callingCode": "55",
        "flag": "flag-br",
        "name": {
            "common": "Brazil",
            "cym": "Brasil",
            "deu": "Brasilien",
            "fra": "Brésil",
            "hrv": "Brazil",
            "ita": "Brasile",
            "jpn": "ブラジル",
            "nld": "Brazilië",
            "por": "Brasil",
            "rus": "Бразилия",
            "spa": "Brasil",
            "svk": "Brazília",
            "fin": "Brasilia",
            "zho": "巴西"
        }
    },
    "IO": {
        "currency": "USD",
        "callingCode": "246",
        "flag": "flag-io",
        "name": {
            "common": "British Indian Ocean Territory",
            "cym": "Tiriogaeth Brydeinig Cefnfor India",
            "deu": "Britisches Territorium im Indischen Ozean",
            "fra": "Territoire britannique de l'océan Indien",
            "hrv": "Britanski Indijskooceanski teritorij",
            "ita": "Territorio britannico dell'oceano indiano",
            "jpn": "イギリス領インド洋地域",
            "nld": "Britse Gebieden in de Indische Oceaan",
            "por": "Território Britânico do Oceano Índico",
            "rus": "Британская территория в Индийском океане",
            "spa": "Territorio Británico del Océano Índico",
            "svk": "Britské indickooceánske územie",
            "fin": "Brittiläinen Intian valtameren alue",
            "zho": "英属印度洋领地"
        }
    },
    "VG": {
        "currency": "USD",
        "callingCode": "1284",
        "flag": "flag-vg",
        "name": {
            "common": "British Virgin Islands",
            "deu": "Britische Jungferninseln",
            "fra": "Îles Vierges britanniques",
            "hrv": "Britanski Djevičanski Otoci",
            "ita": "Isole Vergini Britanniche",
            "jpn": "イギリス領ヴァージン諸島",
            "nld": "Britse Maagdeneilanden",
            "por": "Ilhas Virgens",
            "rus": "Британские Виргинские острова",
            "spa": "Islas Vírgenes del Reino Unido",
            "svk": "Panenské ostrovy",
            "fin": "Neitsytsaaret",
            "zho": "英属维尔京群岛"
        }
    },
    "BN": {
        "currency": "BND",
        "callingCode": "673",
        "flag": "flag-bn",
        "name": {
            "common": "Brunei",
            "cym": "Brunei",
            "deu": "Brunei",
            "fra": "Brunei",
            "hrv": "Brunej",
            "ita": "Brunei",
            "jpn": "ブルネイ・ダルサラーム",
            "nld": "Brunei",
            "por": "Brunei",
            "rus": "Бруней",
            "spa": "Brunei",
            "svk": "Brunej",
            "fin": "Brunei",
            "zho": "文莱"
        }
    },
    "BG": {
        "currency": "BGN",
        "callingCode": "359",
        "flag": "flag-bg",
        "name": {
            "common": "Bulgaria",
            "cym": "Bwlgaria",
            "deu": "Bulgarien",
            "fra": "Bulgarie",
            "hrv": "Bugarska",
            "ita": "Bulgaria",
            "jpn": "ブルガリア",
            "nld": "Bulgarije",
            "por": "Bulgária",
            "rus": "Болгария",
            "spa": "Bulgaria",
            "svk": "Bulharsko",
            "fin": "Bulgaria",
            "zho": "保加利亚"
        }
    },
    "BF": {
        "currency": "XOF",
        "callingCode": "226",
        "flag": "flag-bf",
        "name": {
            "common": "Burkina Faso",
            "cym": "Burkina Faso",
            "deu": "Burkina Faso",
            "fra": "Burkina Faso",
            "hrv": "Burkina Faso",
            "ita": "Burkina Faso",
            "jpn": "ブルキナファソ",
            "nld": "Burkina Faso",
            "por": "Burkina Faso",
            "rus": "Буркина-Фасо",
            "spa": "Burkina Faso",
            "svk": "Burkina Faso",
            "fin": "Burkina Faso",
            "zho": "布基纳法索"
        }
    },
    "BI": {
        "currency": "BIF",
        "callingCode": "257",
        "flag": "flag-bi",
        "name": {
            "common": "Burundi",
            "cym": "Bwrwndi",
            "deu": "Burundi",
            "fra": "Burundi",
            "hrv": "Burundi",
            "ita": "Burundi",
            "jpn": "ブルンジ",
            "nld": "Burundi",
            "por": "Burundi",
            "rus": "Бурунди",
            "spa": "Burundi",
            "svk": "Burundi",
            "fin": "Burundi",
            "zho": "布隆迪"
        }
    },
    "KH": {
        "currency": "KHR",
        "callingCode": "855",
        "flag": "flag-kh",
        "name": {
            "common": "Cambodia",
            "cym": "Cambodia",
            "deu": "Kambodscha",
            "fra": "Cambodge",
            "hrv": "Kambodža",
            "ita": "Cambogia",
            "jpn": "カンボジア",
            "nld": "Cambodja",
            "por": "Camboja",
            "rus": "Камбоджа",
            "spa": "Camboya",
            "svk": "Kamboǆa",
            "fin": "Kambodža",
            "zho": "柬埔寨"
        }
    },
    "CM": {
        "currency": "XAF",
        "callingCode": "237",
        "flag": "flag-cm",
        "name": {
            "common": "Cameroon",
            "cym": "Camerŵn",
            "deu": "Kamerun",
            "fra": "Cameroun",
            "hrv": "Kamerun",
            "ita": "Camerun",
            "jpn": "カメルーン",
            "nld": "Kameroen",
            "por": "Camarões",
            "rus": "Камерун",
            "spa": "Camerún",
            "svk": "Kamerun",
            "fin": "Kamerun",
            "zho": "喀麦隆"
        }
    },
    "CA": {
        "currency": "CAD",
        "callingCode": "1",
        "flag": "flag-ca",
        "name": {
            "common": "Canada",
            "cym": "Canada",
            "deu": "Kanada",
            "fra": "Canada",
            "hrv": "Kanada",
            "ita": "Canada",
            "jpn": "カナダ",
            "nld": "Canada",
            "por": "Canadá",
            "rus": "Канада",
            "spa": "Canadá",
            "svk": "Kanada",
            "fin": "Kanada",
            "zho": "加拿大"
        }
    },
    "CV": {
        "currency": "CVE",
        "callingCode": "238",
        "flag": "flag-cv",
        "name": {
            "common": "Cape Verde",
            "cym": "Cape Verde",
            "deu": "Kap Verde",
            "fra": "Îles du Cap-Vert",
            "hrv": "Zelenortska Republika",
            "ita": "Capo Verde",
            "jpn": "カーボベルデ",
            "nld": "Kaapverdië",
            "por": "Cabo Verde",
            "rus": "Кабо-Верде",
            "spa": "Cabo Verde",
            "svk": "Kapverdy",
            "fin": "Kap Verde",
            "zho": "佛得角"
        }
    },
    "KY": {
        "currency": "KYD",
        "callingCode": "1345",
        "flag": "flag-ky",
        "name": {
            "common": "Cayman Islands",
            "cym": "Ynysoedd_Cayman",
            "deu": "Kaimaninseln",
            "fra": "Îles Caïmans",
            "hrv": "Kajmanski otoci",
            "ita": "Isole Cayman",
            "jpn": "ケイマン諸島",
            "nld": "Caymaneilanden",
            "por": "Ilhas Caimão",
            "rus": "Каймановы острова",
            "spa": "Islas Caimán",
            "svk": "Kajmanie ostrovy",
            "fin": "Caymansaaret",
            "zho": "开曼群岛"
        }
    },
    "CF": {
        "currency": "XAF",
        "callingCode": "236",
        "flag": "flag-cf",
        "name": {
            "common": "Central African Republic",
            "cym": "Gweriniaeth Canolbarth Affrica",
            "deu": "Zentralafrikanische Republik",
            "fra": "République centrafricaine",
            "hrv": "Srednjoafrička Republika",
            "ita": "Repubblica Centrafricana",
            "jpn": "中央アフリカ共和国",
            "nld": "Centraal-Afrikaanse Republiek",
            "por": "República Centro-Africana",
            "rus": "Центральноафриканская Республика",
            "spa": "República Centroafricana",
            "svk": "Stredoafrická republika",
            "fin": "Keski-Afrikan tasavalta",
            "zho": "中非共和国"
        }
    },
    "TD": {
        "currency": "XAF",
        "callingCode": "235",
        "flag": "flag-td",
        "name": {
            "common": "Chad",
            "cym": "Tsiad",
            "deu": "Tschad",
            "fra": "Tchad",
            "hrv": "Čad",
            "ita": "Ciad",
            "jpn": "チャド",
            "nld": "Tsjaad",
            "por": "Chade",
            "rus": "Чад",
            "spa": "Chad",
            "svk": "Čad",
            "fin": "Tšad",
            "zho": "乍得"
        }
    },
    "CL": {
        "currency": "CLF",
        "callingCode": "56",
        "flag": "flag-cl",
        "name": {
            "common": "Chile",
            "cym": "Chile",
            "deu": "Chile",
            "fra": "Chili",
            "hrv": "Čile",
            "ita": "Cile",
            "jpn": "チリ",
            "nld": "Chili",
            "por": "Chile",
            "rus": "Чили",
            "spa": "Chile",
            "svk": "Čile",
            "fin": "Chile",
            "zho": "智利"
        }
    },
    "CN": {
        "currency": "CNY",
        "callingCode": "86",
        "flag": "flag-cn",
        "name": {
            "common": "China",
            "cym": "Tsieina",
            "deu": "China",
            "fra": "Chine",
            "hrv": "Kina",
            "ita": "Cina",
            "jpn": "中国",
            "nld": "China",
            "por": "China",
            "rus": "Китай",
            "spa": "China",
            "svk": "Čína",
            "fin": "Kiina"
        }
    },
    "CX": {
        "currency": "AUD",
        "callingCode": "61",
        "flag": "flag-cx",
        "name": {
            "common": "Christmas Island",
            "cym": "Ynys y Nadolig",
            "deu": "Weihnachtsinsel",
            "fra": "Île Christmas",
            "hrv": "Božićni otok",
            "ita": "Isola di Natale",
            "jpn": "クリスマス島",
            "nld": "Christmaseiland",
            "por": "Ilha do Natal",
            "rus": "Остров Рождества",
            "spa": "Isla de Navidad",
            "svk": "Vianočnú ostrov",
            "fin": "Joulusaari",
            "zho": "圣诞岛"
        }
    },
    "CC": {
        "currency": "AUD",
        "callingCode": "61",
        "flag": "flag-cc",
        "name": {
            "common": "Cocos (Keeling) Islands",
            "cym": "Ynysoedd Cocos",
            "deu": "Kokosinseln",
            "fra": "Îles Cocos",
            "hrv": "Kokosovi Otoci",
            "ita": "Isole Cocos e Keeling",
            "jpn": "ココス（キーリング）諸島",
            "nld": "Cocoseilanden",
            "por": "Ilhas Cocos (Keeling)",
            "rus": "Кокосовые острова",
            "spa": "Islas Cocos o Islas Keeling",
            "svk": "Kokosové ostrovy",
            "fin": "Kookossaaret",
            "zho": "科科斯"
        }
    },
    "CO": {
        "currency": "COP",
        "callingCode": "57",
        "flag": "flag-co",
        "name": {
            "common": "Colombia",
            "cym": "Colombia",
            "deu": "Kolumbien",
            "fra": "Colombie",
            "hrv": "Kolumbija",
            "ita": "Colombia",
            "jpn": "コロンビア",
            "nld": "Colombia",
            "por": "Colômbia",
            "rus": "Колумбия",
            "spa": "Colombia",
            "svk": "Kolumbia",
            "fin": "Kolumbia",
            "zho": "哥伦比亚"
        }
    },
    "KM": {
        "currency": "KMF",
        "callingCode": "269",
        "flag": "flag-km",
        "name": {
            "common": "Comoros",
            "cym": "Comoros",
            "deu": "Union der Komoren",
            "fra": "Comores",
            "hrv": "Komori",
            "ita": "Comore",
            "jpn": "コモロ",
            "nld": "Comoren",
            "por": "Comores",
            "rus": "Коморы",
            "spa": "Comoras",
            "svk": "Komory",
            "fin": "Komorit",
            "zho": "科摩罗"
        }
    },
    "CK": {
        "currency": "NZD",
        "callingCode": "682",
        "flag": "flag-ck",
        "name": {
            "common": "Cook Islands",
            "cym": "Ynysoedd Cook",
            "deu": "Cookinseln",
            "fra": "Îles Cook",
            "hrv": "Cookovo Otočje",
            "ita": "Isole Cook",
            "jpn": "クック諸島",
            "nld": "Cookeilanden",
            "por": "Ilhas Cook",
            "rus": "Острова Кука",
            "spa": "Islas Cook",
            "svk": "Cookove ostrovy",
            "fin": "Cookinsaaret",
            "zho": "库克群岛"
        }
    },
    "CR": {
        "currency": "CRC",
        "callingCode": "506",
        "flag": "flag-cr",
        "name": {
            "common": "Costa Rica",
            "cym": "Costa Rica",
            "deu": "Costa Rica",
            "fra": "Costa Rica",
            "hrv": "Kostarika",
            "ita": "Costa Rica",
            "jpn": "コスタリカ",
            "nld": "Costa Rica",
            "por": "Costa Rica",
            "rus": "Коста-Рика",
            "spa": "Costa Rica",
            "svk": "Kostarika",
            "fin": "Costa Rica",
            "zho": "哥斯达黎加"
        }
    },
    "HR": {
        "currency": "HRK",
        "callingCode": "385",
        "flag": "flag-hr",
        "name": {
            "common": "Croatia",
            "cym": "Croatia",
            "deu": "Kroatien",
            "fra": "Croatie",
            "hrv": "Hrvatska",
            "ita": "Croazia",
            "jpn": "クロアチア",
            "nld": "Kroatië",
            "por": "Croácia",
            "rus": "Хорватия",
            "spa": "Croacia",
            "svk": "Chorvátsko",
            "fin": "Kroatia",
            "zho": "克罗地亚"
        }
    },
    "CU": {
        "currency": "CUC",
        "callingCode": "53",
        "flag": "flag-cu",
        "name": {
            "common": "Cuba",
            "cym": "Ciwba",
            "deu": "Kuba",
            "fra": "Cuba",
            "hrv": "Kuba",
            "ita": "Cuba",
            "jpn": "キューバ",
            "nld": "Cuba",
            "por": "Cuba",
            "rus": "Куба",
            "spa": "Cuba",
            "svk": "Kuba",
            "fin": "Kuuba",
            "zho": "古巴"
        }
    },
    "CW": {
        "currency": "ANG",
        "callingCode": "5999",
        "flag": "flag-cw",
        "name": {
            "common": "Curaçao",
            "deu": "Curaçao",
            "fra": "Curaçao",
            "nld": "Curaçao",
            "por": "ilha da Curação",
            "rus": "Кюрасао",
            "spa": "Curazao",
            "svk": "CuraÇao",
            "fin": "Curaçao",
            "zho": "库拉索"
        }
    },
    "CY": {
        "currency": "EUR",
        "callingCode": "357",
        "flag": "flag-cy",
        "name": {
            "common": "Cyprus",
            "cym": "Cyprus",
            "deu": "Zypern",
            "fra": "Chypre",
            "hrv": "Cipar",
            "ita": "Cipro",
            "jpn": "キプロス",
            "nld": "Cyprus",
            "por": "Chipre",
            "rus": "Кипр",
            "spa": "Chipre",
            "svk": "Cyprus",
            "fin": "Kypros",
            "zho": "塞浦路斯"
        }
    },
    "CZ": {
        "currency": "CZK",
        "callingCode": "420",
        "flag": "flag-cz",
        "name": {
            "common": "Czech Republic",
            "cym": "Y Weriniaeth Tsiec",
            "deu": "Tschechische Republik",
            "fra": "République tchèque",
            "hrv": "Češka",
            "ita": "Repubblica Ceca",
            "jpn": "チェコ",
            "nld": "Tsjechië",
            "por": "República Checa",
            "rus": "Чехия",
            "spa": "República Checa",
            "svk": "Česko",
            "fin": "Tšekki",
            "zho": "捷克"
        }
    },
    "CD": {
        "currency": "CDF",
        "callingCode": "243",
        "flag": "flag-cd",
        "name": {
            "common": "DR Congo",
            "cym": "Gweriniaeth Ddemocrataidd Congo",
            "deu": "Kongo (Dem. Rep.)",
            "fra": "Congo (Rép. dém.)",
            "hrv": "Kongo, Demokratska Republika",
            "ita": "Congo (Rep. Dem.)",
            "jpn": "コンゴ民主共和国",
            "nld": "Congo (DRC)",
            "por": "República Democrática do Congo",
            "rus": "Демократическая Республика Конго",
            "spa": "Congo (Rep. Dem.)",
            "svk": "Kongo",
            "fin": "Kongon demokraattinen tasavalta",
            "zho": "民主刚果"
        }
    },
    "DK": {
        "currency": "DKK",
        "callingCode": "45",
        "flag": "flag-dk",
        "name": {
            "common": "Denmark",
            "cym": "Denmarc",
            "deu": "Dänemark",
            "fra": "Danemark",
            "hrv": "Danska",
            "ita": "Danimarca",
            "jpn": "デンマーク",
            "nld": "Denemarken",
            "por": "Dinamarca",
            "rus": "Дания",
            "spa": "Dinamarca",
            "svk": "Dánsko",
            "fin": "Tanska",
            "zho": "丹麦"
        }
    },
    "DJ": {
        "currency": "DJF",
        "callingCode": "253",
        "flag": "flag-dj",
        "name": {
            "common": "Djibouti",
            "cym": "Djibouti",
            "deu": "Dschibuti",
            "fra": "Djibouti",
            "hrv": "Džibuti",
            "ita": "Gibuti",
            "jpn": "ジブチ",
            "nld": "Djibouti",
            "por": "Djibouti",
            "rus": "Джибути",
            "spa": "Djibouti",
            "svk": "ǅibutsko",
            "fin": "Dijibouti",
            "zho": "吉布提"
        }
    },
    "DM": {
        "currency": "XCD",
        "callingCode": "1767",
        "flag": "flag-dm",
        "name": {
            "common": "Dominica",
            "cym": "Dominica",
            "deu": "Dominica",
            "fra": "Dominique",
            "hrv": "Dominika",
            "ita": "Dominica",
            "jpn": "ドミニカ国",
            "nld": "Dominica",
            "por": "Dominica",
            "rus": "Доминика",
            "spa": "Dominica",
            "svk": "Dominika",
            "fin": "Dominica",
            "zho": "多米尼加"
        }
    },
    "DO": {
        "currency": "DOP",
        "callingCode": "1809",
        "flag": "flag-do",
        "name": {
            "common": "Dominican Republic",
            "cym": "Gweriniaeth_Dominica",
            "deu": "Dominikanische Republik",
            "fra": "République dominicaine",
            "hrv": "Dominikanska Republika",
            "ita": "Repubblica Dominicana",
            "jpn": "ドミニカ共和国",
            "nld": "Dominicaanse Republiek",
            "por": "República Dominicana",
            "rus": "Доминиканская Республика",
            "spa": "República Dominicana",
            "svk": "Dominikánska republika",
            "fin": "Dominikaaninen tasavalta",
            "zho": "多明尼加"
        }
    },
    "EC": {
        "currency": "USD",
        "callingCode": "593",
        "flag": "flag-ec",
        "name": {
            "common": "Ecuador",
            "cym": "Ecwador",
            "deu": "Ecuador",
            "fra": "Équateur",
            "hrv": "Ekvador",
            "ita": "Ecuador",
            "jpn": "エクアドル",
            "nld": "Ecuador",
            "por": "Equador",
            "rus": "Эквадор",
            "spa": "Ecuador",
            "svk": "Ekvádor",
            "fin": "Ecuador",
            "zho": "厄瓜多尔"
        }
    },
    "EG": {
        "currency": "EGP",
        "callingCode": "20",
        "flag": "flag-eg",
        "name": {
            "common": "Egypt",
            "cym": "Yr Aifft",
            "deu": "Ägypten",
            "fra": "Égypte",
            "hrv": "Egipat",
            "ita": "Egitto",
            "jpn": "エジプト",
            "nld": "Egypte",
            "por": "Egito",
            "rus": "Египет",
            "spa": "Egipto",
            "svk": "Egypt",
            "fin": "Egypti",
            "zho": "埃及"
        }
    },
    "SV": {
        "currency": "SVC",
        "callingCode": "503",
        "flag": "flag-sv",
        "name": {
            "common": "El Salvador",
            "cym": "El Salvador",
            "deu": "El Salvador",
            "fra": "Salvador",
            "hrv": "Salvador",
            "ita": "El Salvador",
            "jpn": "エルサルバドル",
            "nld": "El Salvador",
            "por": "El Salvador",
            "rus": "Сальвадор",
            "spa": "El Salvador",
            "svk": "Salvádor",
            "fin": "El Salvador",
            "zho": "萨尔瓦多"
        }
    },
    "GQ": {
        "currency": "XAF",
        "callingCode": "240",
        "flag": "flag-gq",
        "name": {
            "common": "Equatorial Guinea",
            "cym": "Gini Gyhydeddol",
            "deu": "Äquatorialguinea",
            "fra": "Guinée équatoriale",
            "hrv": "Ekvatorijalna Gvineja",
            "ita": "Guinea Equatoriale",
            "jpn": "赤道ギニア",
            "nld": "Equatoriaal-Guinea",
            "por": "Guiné Equatorial",
            "rus": "Экваториальная Гвинея",
            "spa": "Guinea Ecuatorial",
            "svk": "Rovníková Guinea",
            "fin": "Päiväntasaajan Guinea",
            "zho": "赤道几内亚"
        }
    },
    "ER": {
        "currency": "ERN",
        "callingCode": "291",
        "flag": "flag-er",
        "name": {
            "common": "Eritrea",
            "cym": "Eritrea",
            "deu": "Eritrea",
            "fra": "Érythrée",
            "hrv": "Eritreja",
            "ita": "Eritrea",
            "jpn": "エリトリア",
            "nld": "Eritrea",
            "por": "Eritreia",
            "rus": "Эритрея",
            "spa": "Eritrea",
            "svk": "Eritrea",
            "fin": "Eritrea",
            "zho": "厄立特里亚"
        }
    },
    "EE": {
        "currency": "EUR",
        "callingCode": "372",
        "flag": "flag-ee",
        "name": {
            "common": "Estonia",
            "cym": "Estonia",
            "deu": "Estland",
            "fra": "Estonie",
            "hrv": "Estonija",
            "ita": "Estonia",
            "jpn": "エストニア",
            "nld": "Estland",
            "por": "Estónia",
            "rus": "Эстония",
            "spa": "Estonia",
            "svk": "Estónsko",
            "fin": "Viro",
            "zho": "爱沙尼亚"
        }
    },
    "ET": {
        "currency": "ETB",
        "callingCode": "251",
        "flag": "flag-et",
        "name": {
            "common": "Ethiopia",
            "cym": "Ethiopia",
            "deu": "Äthiopien",
            "fra": "Éthiopie",
            "hrv": "Etiopija",
            "ita": "Etiopia",
            "jpn": "エチオピア",
            "nld": "Ethiopië",
            "por": "Etiópia",
            "rus": "Эфиопия",
            "spa": "Etiopía",
            "svk": "Etiópia",
            "fin": "Etiopia",
            "zho": "埃塞俄比亚"
        }
    },
    "FK": {
        "currency": "FKP",
        "callingCode": "500",
        "flag": "flag-fk",
        "name": {
            "common": "Falkland Islands",
            "deu": "Falklandinseln",
            "fra": "Îles Malouines",
            "hrv": "Falklandski Otoci",
            "ita": "Isole Falkland o Isole Malvine",
            "jpn": "フォークランド（マルビナス）諸島",
            "nld": "Falklandeilanden",
            "por": "Ilhas Malvinas",
            "rus": "Фолклендские острова",
            "spa": "Islas Malvinas",
            "svk": "Falklandy",
            "fin": "Falkandinsaaret",
            "zho": "福克兰群岛"
        }
    },
    "FO": {
        "currency": "DKK",
        "callingCode": "298",
        "flag": "flag-fo",
        "name": {
            "common": "Faroe Islands",
            "deu": "Färöer-Inseln",
            "fra": "Îles Féroé",
            "hrv": "Farski Otoci",
            "ita": "Isole Far Oer",
            "jpn": "フェロー諸島",
            "nld": "Faeröer",
            "por": "Ilhas Faroé",
            "rus": "Фарерские острова",
            "spa": "Islas Faroe",
            "svk": "Faerské ostrovy",
            "fin": "Färsaaret",
            "zho": "法罗群岛"
        }
    },
    "FJ": {
        "currency": "FJD",
        "callingCode": "679",
        "flag": "flag-fj",
        "name": {
            "common": "Fiji",
            "deu": "Fidschi",
            "fra": "Fidji",
            "hrv": "Fiđi",
            "ita": "Figi",
            "jpn": "フィジー",
            "nld": "Fiji",
            "por": "Fiji",
            "rus": "Фиджи",
            "spa": "Fiyi",
            "svk": "Fiǆi",
            "fin": "Fidži",
            "zho": "斐济"
        }
    },
    "FI": {
        "currency": "EUR",
        "callingCode": "358",
        "flag": "flag-fi",
        "name": {
            "common": "Finland",
            "deu": "Finnland",
            "fra": "Finlande",
            "hrv": "Finska",
            "ita": "Finlandia",
            "jpn": "フィンランド",
            "nld": "Finland",
            "por": "Finlândia",
            "rus": "Финляндия",
            "spa": "Finlandia",
            "svk": "Fínsko",
            "fin": "Suomi",
            "zho": "芬兰"
        }
    },
    "FR": {
        "currency": "EUR",
        "callingCode": "33",
        "flag": "flag-fr",
        "name": {
            "common": "France",
            "deu": "Frankreich",
            "fra": "France",
            "hrv": "Francuska",
            "ita": "Francia",
            "jpn": "フランス",
            "nld": "Frankrijk",
            "por": "França",
            "rus": "Франция",
            "spa": "Francia",
            "svk": "Francúzsko",
            "fin": "Ranska",
            "zho": "法国"
        }
    },
    "GF": {
        "currency": "EUR",
        "callingCode": "594",
        "flag": "flag-gf",
        "name": {
            "common": "French Guiana",
            "deu": "Französisch Guyana",
            "fra": "Guyane",
            "hrv": "Francuska Gvajana",
            "ita": "Guyana francese",
            "jpn": "フランス領ギアナ",
            "nld": "Frans-Guyana",
            "por": "Guiana Francesa",
            "rus": "Французская Гвиана",
            "spa": "Guayana Francesa",
            "svk": "Guyana",
            "fin": "Ranskan Guayana",
            "zho": "法属圭亚那"
        }
    },
    "PF": {
        "currency": "XPF",
        "callingCode": "689",
        "flag": "flag-pf",
        "name": {
            "common": "French Polynesia",
            "deu": "Französisch-Polynesien",
            "fra": "Polynésie française",
            "hrv": "Francuska Polinezija",
            "ita": "Polinesia Francese",
            "jpn": "フランス領ポリネシア",
            "nld": "Frans-Polynesië",
            "por": "Polinésia Francesa",
            "rus": "Французская Полинезия",
            "spa": "Polinesia Francesa",
            "svk": "Francúzska Polynézia",
            "fin": "Ranskan Polynesia",
            "zho": "法属波利尼西亚"
        }
    },
    "TF": {
        "currency": "EUR",
        "flag": "flag-tf",
        "name": {
            "common": "French Southern and Antarctic Lands",
            "deu": "Französische Süd-und Antarktisgebiete",
            "fra": "Terres australes et antarctiques françaises",
            "hrv": "Francuski južni i antarktički teritoriji",
            "ita": "Territori Francesi del Sud",
            "jpn": "フランス領南方・南極地域",
            "nld": "Franse Gebieden in de zuidelijke Indische Oceaan",
            "por": "Terras Austrais e Antárticas Francesas",
            "rus": "Французские Южные и Антарктические территории",
            "spa": "Tierras Australes y Antárticas Francesas",
            "svk": "Francúzske juŽné a antarktické územia",
            "fin": "Ranskan eteläiset ja antarktiset alueet",
            "zho": "法国南部和南极土地"
        }
    },
    "GA": {
        "currency": "XAF",
        "callingCode": "241",
        "flag": "flag-ga",
        "name": {
            "common": "Gabon",
            "deu": "Gabun",
            "fra": "Gabon",
            "hrv": "Gabon",
            "ita": "Gabon",
            "jpn": "ガボン",
            "nld": "Gabon",
            "por": "Gabão",
            "rus": "Габон",
            "spa": "Gabón",
            "svk": "Gabon",
            "fin": "Gabon",
            "zho": "加蓬"
        }
    },
    "GM": {
        "currency": "GMD",
        "callingCode": "220",
        "flag": "flag-gm",
        "name": {
            "common": "Gambia",
            "deu": "Gambia",
            "fra": "Gambie",
            "hrv": "Gambija",
            "ita": "Gambia",
            "jpn": "ガンビア",
            "nld": "Gambia",
            "por": "Gâmbia",
            "rus": "Гамбия",
            "spa": "Gambia",
            "svk": "Gambia",
            "fin": "Gambia",
            "zho": "冈比亚"
        }
    },
    "GE": {
        "currency": "GEL",
        "callingCode": "995",
        "flag": "flag-ge",
        "name": {
            "common": "Georgia",
            "deu": "Georgien",
            "fra": "Géorgie",
            "hrv": "Gruzija",
            "ita": "Georgia",
            "jpn": "グルジア",
            "nld": "Georgië",
            "por": "Geórgia",
            "rus": "Грузия",
            "spa": "Georgia",
            "svk": "Gruzínsko",
            "fin": "Georgia",
            "zho": "格鲁吉亚"
        }
    },
    "DE": {
        "currency": "EUR",
        "callingCode": "49",
        "flag": "flag-de",
        "name": {
            "common": "Germany",
            "deu": "Deutschland",
            "fra": "Allemagne",
            "hrv": "Njemačka",
            "ita": "Germania",
            "jpn": "ドイツ",
            "nld": "Duitsland",
            "por": "Alemanha",
            "rus": "Германия",
            "spa": "Alemania",
            "svk": "Nemecko",
            "fin": "Saksa",
            "zho": "德国"
        }
    },
    "GH": {
        "currency": "GHS",
        "callingCode": "233",
        "flag": "flag-gh",
        "name": {
            "common": "Ghana",
            "deu": "Ghana",
            "fra": "Ghana",
            "hrv": "Gana",
            "ita": "Ghana",
            "jpn": "ガーナ",
            "nld": "Ghana",
            "por": "Gana",
            "rus": "Гана",
            "spa": "Ghana",
            "svk": "Ghana",
            "fin": "Ghana",
            "zho": "加纳"
        }
    },
    "GI": {
        "currency": "GIP",
        "callingCode": "350",
        "flag": "flag-gi",
        "name": {
            "common": "Gibraltar",
            "deu": "Gibraltar",
            "fra": "Gibraltar",
            "hrv": "Gibraltar",
            "ita": "Gibilterra",
            "jpn": "ジブラルタル",
            "nld": "Gibraltar",
            "por": "Gibraltar",
            "rus": "Гибралтар",
            "spa": "Gibraltar",
            "svk": "Gibraltár",
            "fin": "Gibraltar",
            "zho": "直布罗陀"
        }
    },
    "GR": {
        "currency": "EUR",
        "callingCode": "30",
        "flag": "flag-gr",
        "name": {
            "common": "Greece",
            "deu": "Griechenland",
            "fra": "Grèce",
            "hrv": "Grčka",
            "ita": "Grecia",
            "jpn": "ギリシャ",
            "nld": "Griekenland",
            "por": "Grécia",
            "rus": "Греция",
            "spa": "Grecia",
            "svk": "Greécko",
            "fin": "Kreikka",
            "zho": "希腊"
        }
    },
    "GL": {
        "currency": "DKK",
        "callingCode": "299",
        "flag": "flag-gl",
        "name": {
            "common": "Greenland",
            "deu": "Grönland",
            "fra": "Groenland",
            "hrv": "Grenland",
            "ita": "Groenlandia",
            "jpn": "グリーンランド",
            "nld": "Groenland",
            "por": "Gronelândia",
            "rus": "Гренландия",
            "spa": "Groenlandia",
            "svk": "Grónsko",
            "fin": "Groönlanti",
            "zho": "格陵兰"
        }
    },
    "GD": {
        "currency": "XCD",
        "callingCode": "1473",
        "flag": "flag-gd",
        "name": {
            "common": "Grenada",
            "deu": "Grenada",
            "fra": "Grenade",
            "hrv": "Grenada",
            "ita": "Grenada",
            "jpn": "グレナダ",
            "nld": "Grenada",
            "por": "Granada",
            "rus": "Гренада",
            "spa": "Grenada",
            "svk": "Grenada",
            "fin": "Grenada",
            "zho": "格林纳达"
        }
    },
    "GP": {
        "currency": "EUR",
        "callingCode": "590",
        "flag": "flag-gp",
        "name": {
            "common": "Guadeloupe",
            "deu": "Guadeloupe",
            "fra": "Guadeloupe",
            "hrv": "Gvadalupa",
            "ita": "Guadeloupa",
            "jpn": "グアドループ",
            "nld": "Guadeloupe",
            "por": "Guadalupe",
            "rus": "Гваделупа",
            "spa": "Guadalupe",
            "svk": "Guadeloupe",
            "fin": "Guadeloupe",
            "zho": "瓜德罗普岛"
        }
    },
    "GU": {
        "currency": "USD",
        "callingCode": "1671",
        "flag": "flag-gu",
        "name": {
            "common": "Guam",
            "deu": "Guam",
            "fra": "Guam",
            "hrv": "Guam",
            "ita": "Guam",
            "jpn": "グアム",
            "nld": "Guam",
            "por": "Guam",
            "rus": "Гуам",
            "spa": "Guam",
            "svk": "Guam",
            "fin": "Guam",
            "zho": "关岛"
        }
    },
    "GT": {
        "currency": "GTQ",
        "callingCode": "502",
        "flag": "flag-gt",
        "name": {
            "common": "Guatemala",
            "deu": "Guatemala",
            "fra": "Guatemala",
            "hrv": "Gvatemala",
            "ita": "Guatemala",
            "jpn": "グアテマラ",
            "nld": "Guatemala",
            "por": "Guatemala",
            "rus": "Гватемала",
            "spa": "Guatemala",
            "svk": "Guatemala",
            "fin": "Guatemala",
            "zho": "危地马拉"
        }
    },
    "GG": {
        "currency": "GBP",
        "callingCode": "44",
        "flag": "flag-gg",
        "name": {
            "common": "Guernsey",
            "deu": "Guernsey",
            "fra": "Guernesey",
            "hrv": "Guernsey",
            "ita": "Guernsey",
            "jpn": "ガーンジー",
            "nld": "Guernsey",
            "por": "Guernsey",
            "rus": "Гернси",
            "spa": "Guernsey",
            "svk": "Guernsey",
            "fin": "Guernsey",
            "zho": "根西岛"
        }
    },
    "GN": {
        "currency": "GNF",
        "callingCode": "224",
        "flag": "flag-gn",
        "name": {
            "common": "Guinea",
            "deu": "Guinea",
            "fra": "Guinée",
            "hrv": "Gvineja",
            "ita": "Guinea",
            "jpn": "ギニア",
            "nld": "Guinee",
            "por": "Guiné",
            "rus": "Гвинея",
            "spa": "Guinea",
            "svk": "Guinea",
            "fin": "Guinea",
            "zho": "几内亚"
        }
    },
    "GW": {
        "currency": "XOF",
        "callingCode": "245",
        "flag": "flag-gw",
        "name": {
            "common": "Guinea-Bissau",
            "deu": "Guinea-Bissau",
            "fra": "Guinée-Bissau",
            "hrv": "Gvineja Bisau",
            "ita": "Guinea-Bissau",
            "jpn": "ギニアビサウ",
            "nld": "Guinee-Bissau",
            "por": "Guiné-Bissau",
            "rus": "Гвинея-Бисау",
            "spa": "Guinea-Bisáu",
            "svk": "Guinea-Bissau",
            "fin": "Guinea-Bissau",
            "zho": "几内亚比绍"
        }
    },
    "GY": {
        "currency": "GYD",
        "callingCode": "592",
        "flag": "flag-gy",
        "name": {
            "common": "Guyana",
            "deu": "Guyana",
            "fra": "Guyana",
            "hrv": "Gvajana",
            "ita": "Guyana",
            "jpn": "ガイアナ",
            "nld": "Guyana",
            "por": "Guiana",
            "rus": "Гайана",
            "spa": "Guyana",
            "svk": "Guyana",
            "fin": "Guayana",
            "zho": "圭亚那"
        }
    },
    "HT": {
        "currency": "HTG",
        "callingCode": "509",
        "flag": "flag-ht",
        "name": {
            "common": "Haiti",
            "deu": "Haiti",
            "fra": "Haïti",
            "hrv": "Haiti",
            "ita": "Haiti",
            "jpn": "ハイチ",
            "nld": "Haïti",
            "por": "Haiti",
            "rus": "Гаити",
            "spa": "Haiti",
            "svk": "Haiti",
            "fin": "Haiti",
            "zho": "海地"
        }
    },
    "HM": {
        "currency": "AUD",
        "flag": "flag-hm",
        "name": {
            "common": "Heard Island and McDonald Islands",
            "deu": "Heard und die McDonaldinseln",
            "fra": "Îles Heard-et-MacDonald",
            "hrv": "Otok Heard i otočje McDonald",
            "ita": "Isole Heard e McDonald",
            "jpn": "ハード島とマクドナルド諸島",
            "nld": "Heard-en McDonaldeilanden",
            "por": "Ilha Heard e Ilhas McDonald",
            "rus": "Остров Херд и острова Макдональд",
            "spa": "Islas Heard y McDonald",
            "svk": "Heardov ostrov",
            "fin": "Heard ja McDonaldinsaaret",
            "zho": "赫德岛和麦当劳群岛"
        }
    },
    "HN": {
        "currency": "HNL",
        "callingCode": "504",
        "flag": "flag-hn",
        "name": {
            "common": "Honduras",
            "deu": "Honduras",
            "fra": "Honduras",
            "hrv": "Honduras",
            "ita": "Honduras",
            "jpn": "ホンジュラス",
            "nld": "Honduras",
            "por": "Honduras",
            "rus": "Гондурас",
            "spa": "Honduras",
            "fin": "Honduras",
            "zho": "洪都拉斯"
        }
    },
    "HK": {
        "currency": "HKD",
        "callingCode": "852",
        "flag": "flag-hk",
        "name": {
            "common": "Hong Kong",
            "deu": "Hongkong",
            "fra": "Hong Kong",
            "hrv": "Hong Kong",
            "ita": "Hong Kong",
            "jpn": "香港",
            "nld": "Hongkong",
            "por": "Hong Kong",
            "rus": "Гонконг",
            "spa": "Hong Kong",
            "svk": "Hongkong",
            "fin": "Hongkong"
        }
    },
    "HU": {
        "currency": "HUF",
        "callingCode": "36",
        "flag": "flag-hu",
        "name": {
            "common": "Hungary",
            "deu": "Ungarn",
            "fra": "Hongrie",
            "hrv": "Mađarska",
            "ita": "Ungheria",
            "jpn": "ハンガリー",
            "nld": "Hongarije",
            "por": "Hungria",
            "rus": "Венгрия",
            "spa": "Hungría",
            "svk": "Maďarsko",
            "fin": "Unkari",
            "zho": "匈牙利"
        }
    },
    "IS": {
        "currency": "ISK",
        "callingCode": "354",
        "flag": "flag-is",
        "name": {
            "common": "Iceland",
            "deu": "Island",
            "fra": "Islande",
            "hrv": "Island",
            "ita": "Islanda",
            "jpn": "アイスランド",
            "nld": "IJsland",
            "por": "Islândia",
            "rus": "Исландия",
            "spa": "Islandia",
            "svk": "Island",
            "fin": "Islanti",
            "zho": "冰岛"
        }
    },
    "IN": {
        "currency": "INR",
        "callingCode": "91",
        "flag": "flag-in",
        "name": {
            "common": "India",
            "deu": "Indien",
            "fra": "Inde",
            "hrv": "Indija",
            "ita": "India",
            "jpn": "インド",
            "nld": "India",
            "por": "Índia",
            "rus": "Индия",
            "spa": "India",
            "svk": "India",
            "fin": "Intia",
            "zho": "印度"
        }
    },
    "ID": {
        "currency": "IDR",
        "callingCode": "62",
        "flag": "flag-id",
        "name": {
            "common": "Indonesia",
            "deu": "Indonesien",
            "fra": "Indonésie",
            "hrv": "Indonezija",
            "ita": "Indonesia",
            "jpn": "インドネシア",
            "nld": "Indonesië",
            "por": "Indonésia",
            "rus": "Индонезия",
            "spa": "Indonesia",
            "svk": "Indonézia",
            "fin": "Indonesia",
            "zho": "印度尼西亚"
        }
    },
    "IR": {
        "currency": "IRR",
        "callingCode": "98",
        "flag": "flag-ir",
        "name": {
            "common": "Iran",
            "deu": "Iran",
            "fra": "Iran",
            "hrv": "Iran",
            "ita": "Iran",
            "jpn": "イラン・イスラム共和国",
            "nld": "Iran",
            "por": "Irão",
            "rus": "Иран",
            "spa": "Iran",
            "svk": "Irán",
            "fin": "Iran",
            "zho": "伊朗"
        }
    },
    "IQ": {
        "currency": "IQD",
        "callingCode": "964",
        "flag": "flag-iq",
        "name": {
            "common": "Iraq",
            "deu": "Irak",
            "fra": "Irak",
            "hrv": "Irak",
            "ita": "Iraq",
            "jpn": "イラク",
            "nld": "Irak",
            "por": "Iraque",
            "rus": "Ирак",
            "spa": "Irak",
            "svk": "Irak",
            "fin": "Irak",
            "zho": "伊拉克"
        }
    },
    "IE": {
        "currency": "EUR",
        "callingCode": "353",
        "flag": "flag-ie",
        "name": {
            "common": "Ireland",
            "deu": "Irland",
            "fra": "Irlande",
            "hrv": "Irska",
            "ita": "Irlanda",
            "jpn": "アイルランド",
            "nld": "Ierland",
            "por": "Irlanda",
            "rus": "Ирландия",
            "spa": "Irlanda",
            "svk": "Írsko",
            "fin": "Irlanti",
            "zho": "爱尔兰"
        }
    },
    "IM": {
        "currency": "GBP",
        "callingCode": "44",
        "flag": "flag-im",
        "name": {
            "common": "Isle of Man",
            "deu": "Insel Man",
            "fra": "Île de Man",
            "hrv": "Otok Man",
            "ita": "Isola di Man",
            "jpn": "マン島",
            "nld": "Isle of Man",
            "por": "Ilha de Man",
            "rus": "Остров Мэн",
            "spa": "Isla de Man",
            "svk": "Man",
            "fin": "Mansaari",
            "zho": "马恩岛"
        }
    },
    "IL": {
        "currency": "ILS",
        "callingCode": "972",
        "flag": "flag-il",
        "name": {
            "common": "Israel",
            "deu": "Israel",
            "fra": "Israël",
            "hrv": "Izrael",
            "ita": "Israele",
            "jpn": "イスラエル",
            "nld": "Israël",
            "por": "Israel",
            "rus": "Израиль",
            "spa": "Israel",
            "svk": "Izrael",
            "fin": "Israel",
            "zho": "以色列"
        }
    },
    "IT": {
        "currency": "EUR",
        "callingCode": "39",
        "flag": "flag-it",
        "name": {
            "common": "Italy",
            "deu": "Italien",
            "fra": "Italie",
            "hrv": "Italija",
            "ita": "Italia",
            "jpn": "イタリア",
            "nld": "Italië",
            "por": "Itália",
            "rus": "Италия",
            "spa": "Italia",
            "svk": "Taliansko",
            "fin": "Italia",
            "zho": "意大利"
        }
    },
    "CI": {
        "currency": "XOF",
        "callingCode": "225",
        "flag": "flag-ci",
        "name": {
            "common": "Ivory Coast",
            "deu": "Elfenbeinküste",
            "fra": "Côte d'Ivoire",
            "hrv": "Obala Bjelokosti",
            "ita": "Costa d'Avorio",
            "jpn": "コートジボワール",
            "nld": "Ivoorkust",
            "por": "Costa do Marfim",
            "rus": "Кот-д’Ивуар",
            "spa": "Costa de Marfil",
            "svk": "Pobržie Slonoviny",
            "fin": "Norsunluurannikko",
            "zho": "科特迪瓦"
        }
    },
    "JM": {
        "currency": "JMD",
        "callingCode": "1876",
        "flag": "flag-jm",
        "name": {
            "common": "Jamaica",
            "deu": "Jamaika",
            "fra": "Jamaïque",
            "hrv": "Jamajka",
            "ita": "Giamaica",
            "jpn": "ジャマイカ",
            "nld": "Jamaica",
            "por": "Jamaica",
            "rus": "Ямайка",
            "spa": "Jamaica",
            "svk": "Jamajka",
            "fin": "Jamaika",
            "zho": "牙买加"
        }
    },
    "JP": {
        "currency": "JPY",
        "callingCode": "81",
        "flag": "flag-jp",
        "name": {
            "common": "Japan",
            "deu": "Japan",
            "fra": "Japon",
            "hrv": "Japan",
            "ita": "Giappone",
            "jpn": "日本",
            "nld": "Japan",
            "por": "Japão",
            "rus": "Япония",
            "spa": "Japón",
            "svk": "Japonsko",
            "fin": "Japani",
            "zho": "日本"
        }
    },
    "JE": {
        "currency": "GBP",
        "callingCode": "44",
        "flag": "flag-je",
        "name": {
            "common": "Jersey",
            "deu": "Jersey",
            "fra": "Jersey",
            "hrv": "Jersey",
            "ita": "Isola di Jersey",
            "jpn": "ジャージー",
            "nld": "Jersey",
            "por": "Jersey",
            "rus": "Джерси",
            "spa": "Jersey",
            "svk": "Jersey",
            "fin": "Jersey",
            "zho": "泽西岛"
        }
    },
    "JO": {
        "currency": "JOD",
        "callingCode": "962",
        "flag": "flag-jo",
        "name": {
            "common": "Jordan",
            "deu": "Jordanien",
            "fra": "Jordanie",
            "hrv": "Jordan",
            "ita": "Giordania",
            "jpn": "ヨルダン",
            "nld": "Jordanië",
            "por": "Jordânia",
            "rus": "Иордания",
            "spa": "Jordania",
            "svk": "Jordánsko",
            "fin": "Jordania",
            "zho": "约旦"
        }
    },
    "KZ": {
        "currency": "KZT",
        "callingCode": "76",
        "flag": "flag-kz",
        "name": {
            "common": "Kazakhstan",
            "deu": "Kasachstan",
            "fra": "Kazakhstan",
            "hrv": "Kazahstan",
            "ita": "Kazakistan",
            "jpn": "カザフスタン",
            "nld": "Kazachstan",
            "por": "Cazaquistão",
            "rus": "Казахстан",
            "spa": "Kazajistán",
            "svk": "Kazachstan",
            "fin": "Kazakstan",
            "zho": "哈萨克斯坦"
        }
    },
    "KE": {
        "currency": "KES",
        "callingCode": "254",
        "flag": "flag-ke",
        "name": {
            "common": "Kenya",
            "deu": "Kenia",
            "fra": "Kenya",
            "hrv": "Kenija",
            "ita": "Kenya",
            "jpn": "ケニア",
            "nld": "Kenia",
            "por": "Quénia",
            "rus": "Кения",
            "spa": "Kenia",
            "svk": "Keňa",
            "fin": "Kenia",
            "zho": "肯尼亚"
        }
    },
    "KI": {
        "currency": "AUD",
        "callingCode": "686",
        "flag": "flag-ki",
        "name": {
            "common": "Kiribati",
            "deu": "Kiribati",
            "fra": "Kiribati",
            "hrv": "Kiribati",
            "ita": "Kiribati",
            "jpn": "キリバス",
            "nld": "Kiribati",
            "por": "Kiribati",
            "rus": "Кирибати",
            "spa": "Kiribati",
            "svk": "Kiribati",
            "fin": "Kiribati",
            "zho": "基里巴斯"
        }
    },
    "XK": {
        "currency": "EUR",
        "callingCode": "383",
        "flag": "flag-xk",
        "name": {
            "common": "Kosovo",
            "deu": "Kosovo",
            "fra": "Kosovo",
            "hrv": "Kosovo",
            "ita": "Kosovo",
            "nld": "Kosovo",
            "por": "Kosovo",
            "rus": "Республика Косово",
            "spa": "Kosovo",
            "svk": "Kosovo",
            "fin": "Kosovo",
            "zho": "科索沃"
        }
    },
    "KW": {
        "currency": "KWD",
        "callingCode": "965",
        "flag": "flag-kw",
        "name": {
            "common": "Kuwait",
            "deu": "Kuwait",
            "fra": "Koweït",
            "hrv": "Kuvajt",
            "ita": "Kuwait",
            "jpn": "クウェート",
            "nld": "Koeweit",
            "por": "Kuwait",
            "rus": "Кувейт",
            "spa": "Kuwait",
            "svk": "Kuvajt",
            "fin": "Kuwait",
            "zho": "科威特"
        }
    },
    "KG": {
        "currency": "KGS",
        "callingCode": "996",
        "flag": "flag-kg",
        "name": {
            "common": "Kyrgyzstan",
            "deu": "Kirgisistan",
            "fra": "Kirghizistan",
            "hrv": "Kirgistan",
            "ita": "Kirghizistan",
            "jpn": "キルギス",
            "nld": "Kirgizië",
            "por": "Quirguistão",
            "rus": "Киргизия",
            "spa": "Kirguizistán",
            "svk": "Kirgizsko",
            "fin": "Kirgisia",
            "zho": "吉尔吉斯斯坦"
        }
    },
    "LA": {
        "currency": "LAK",
        "callingCode": "856",
        "flag": "flag-la",
        "name": {
            "common": "Laos",
            "deu": "Laos",
            "fra": "Laos",
            "hrv": "Laos",
            "ita": "Laos",
            "jpn": "ラオス人民民主共和国",
            "nld": "Laos",
            "por": "Laos",
            "rus": "Лаос",
            "spa": "Laos",
            "svk": "Laos",
            "fin": "Laos",
            "zho": "老挝"
        }
    },
    "LV": {
        "currency": "EUR",
        "callingCode": "371",
        "flag": "flag-lv",
        "name": {
            "common": "Latvia",
            "deu": "Lettland",
            "fra": "Lettonie",
            "hrv": "Latvija",
            "ita": "Lettonia",
            "jpn": "ラトビア",
            "nld": "Letland",
            "por": "Letónia",
            "rus": "Латвия",
            "spa": "Letonia",
            "svk": "Lotyšsko",
            "fin": "Latvia",
            "zho": "拉脱维亚"
        }
    },
    "LB": {
        "currency": "LBP",
        "callingCode": "961",
        "flag": "flag-lb",
        "name": {
            "common": "Lebanon",
            "deu": "Libanon",
            "fra": "Liban",
            "hrv": "Libanon",
            "ita": "Libano",
            "jpn": "レバノン",
            "nld": "Libanon",
            "por": "Líbano",
            "rus": "Ливан",
            "spa": "Líbano",
            "svk": "Libanon",
            "fin": "Libanon",
            "zho": "黎巴嫩"
        }
    },
    "LS": {
        "currency": "LSL",
        "callingCode": "266",
        "flag": "flag-ls",
        "name": {
            "common": "Lesotho",
            "deu": "Lesotho",
            "fra": "Lesotho",
            "hrv": "Lesoto",
            "ita": "Lesotho",
            "jpn": "レソト",
            "nld": "Lesotho",
            "por": "Lesoto",
            "rus": "Лесото",
            "spa": "Lesotho",
            "svk": "Lesotho",
            "fin": "Lesotho",
            "zho": "莱索托"
        }
    },
    "LR": {
        "currency": "LRD",
        "callingCode": "231",
        "flag": "flag-lr",
        "name": {
            "common": "Liberia",
            "deu": "Liberia",
            "fra": "Liberia",
            "hrv": "Liberija",
            "ita": "Liberia",
            "jpn": "リベリア",
            "nld": "Liberia",
            "por": "Libéria",
            "rus": "Либерия",
            "spa": "Liberia",
            "svk": "Libéria",
            "fin": "Liberia",
            "zho": "利比里亚"
        }
    },
    "LY": {
        "currency": "LYD",
        "callingCode": "218",
        "flag": "flag-ly",
        "name": {
            "common": "Libya",
            "deu": "Libyen",
            "fra": "Libye",
            "hrv": "Libija",
            "ita": "Libia",
            "jpn": "リビア",
            "nld": "Libië",
            "por": "Líbia",
            "rus": "Ливия",
            "spa": "Libia",
            "svk": "Líbya",
            "fin": "Libya",
            "zho": "利比亚"
        }
    },
    "LI": {
        "currency": "CHF",
        "callingCode": "423",
        "flag": "flag-li",
        "name": {
            "common": "Liechtenstein",
            "deu": "Liechtenstein",
            "fra": "Liechtenstein",
            "hrv": "Lihtenštajn",
            "ita": "Liechtenstein",
            "jpn": "リヒテンシュタイン",
            "nld": "Liechtenstein",
            "por": "Liechtenstein",
            "rus": "Лихтенштейн",
            "spa": "Liechtenstein",
            "svk": "Lichtenštajnsko",
            "fin": "Liechenstein",
            "zho": "列支敦士登"
        }
    },
    "LT": {
        "currency": "EUR",
        "callingCode": "370",
        "flag": "flag-lt",
        "name": {
            "common": "Lithuania",
            "deu": "Litauen",
            "fra": "Lituanie",
            "hrv": "Litva",
            "ita": "Lituania",
            "jpn": "リトアニア",
            "nld": "Litouwen",
            "por": "Lituânia",
            "rus": "Литва",
            "spa": "Lituania",
            "svk": "Litva",
            "fin": "Liettua",
            "zho": "立陶宛"
        }
    },
    "LU": {
        "currency": "EUR",
        "callingCode": "352",
        "flag": "flag-lu",
        "name": {
            "common": "Luxembourg",
            "deu": "Luxemburg",
            "fra": "Luxembourg",
            "hrv": "Luksemburg",
            "ita": "Lussemburgo",
            "jpn": "ルクセンブルク",
            "nld": "Luxemburg",
            "por": "Luxemburgo",
            "rus": "Люксембург",
            "spa": "Luxemburgo",
            "svk": "Luxembursko",
            "fin": "Luxemburg",
            "zho": "卢森堡"
        }
    },
    "MO": {
        "currency": "MOP",
        "callingCode": "853",
        "flag": "flag-mo",
        "name": {
            "common": "Macau",
            "deu": "Macao",
            "fra": "Macao",
            "hrv": "Makao",
            "ita": "Macao",
            "jpn": "マカオ",
            "nld": "Macao",
            "por": "Macau",
            "rus": "Макао",
            "spa": "Macao",
            "fin": "Macao"
        }
    },
    "MK": {
        "currency": "MKD",
        "callingCode": "389",
        "flag": "flag-mk",
        "name": {
            "common": "Macedonia",
            "deu": "Mazedonien",
            "fra": "Macédoine",
            "hrv": "Makedonija",
            "ita": "Macedonia",
            "jpn": "マケドニア旧ユーゴスラビア共和国",
            "nld": "Macedonië",
            "por": "Macedónia",
            "rus": "Республика Македония",
            "spa": "Macedonia",
            "svk": "Macedónsko",
            "fin": "Makedonia",
            "zho": "马其顿"
        }
    },
    "MG": {
        "currency": "MGA",
        "callingCode": "261",
        "flag": "flag-mg",
        "name": {
            "common": "Madagascar",
            "deu": "Madagaskar",
            "fra": "Madagascar",
            "hrv": "Madagaskar",
            "ita": "Madagascar",
            "jpn": "マダガスカル",
            "nld": "Madagaskar",
            "por": "Madagáscar",
            "rus": "Мадагаскар",
            "spa": "Madagascar",
            "svk": "Madagaskar",
            "fin": "Madagaskar",
            "zho": "马达加斯加"
        }
    },
    "MW": {
        "currency": "MWK",
        "callingCode": "265",
        "flag": "flag-mw",
        "name": {
            "common": "Malawi",
            "deu": "Malawi",
            "fra": "Malawi",
            "hrv": "Malavi",
            "ita": "Malawi",
            "jpn": "マラウイ",
            "nld": "Malawi",
            "por": "Malawi",
            "rus": "Малави",
            "spa": "Malawi",
            "svk": "Malawi",
            "fin": "Malawi",
            "zho": "马拉维"
        }
    },
    "MY": {
        "currency": "MYR",
        "callingCode": "60",
        "flag": "flag-my",
        "name": {
            "common": "Malaysia",
            "deu": "Malaysia",
            "fra": "Malaisie",
            "hrv": "Malezija",
            "ita": "Malesia",
            "jpn": "マレーシア",
            "nld": "Maleisië",
            "por": "Malásia",
            "rus": "Малайзия",
            "spa": "Malasia",
            "svk": "Malajzia",
            "fin": "Malesia",
            "zho": "马来西亚"
        }
    },
    "MV": {
        "currency": "MVR",
        "callingCode": "960",
        "flag": "flag-mv",
        "name": {
            "common": "Maldives",
            "deu": "Malediven",
            "fra": "Maldives",
            "hrv": "Maldivi",
            "ita": "Maldive",
            "jpn": "モルディブ",
            "nld": "Maldiven",
            "por": "Maldivas",
            "rus": "Мальдивы",
            "spa": "Maldivas",
            "svk": "Maldivy",
            "fin": "Malediivit",
            "zho": "马尔代夫"
        }
    },
    "ML": {
        "currency": "XOF",
        "callingCode": "223",
        "flag": "flag-ml",
        "name": {
            "common": "Mali",
            "deu": "Mali",
            "fra": "Mali",
            "hrv": "Mali",
            "ita": "Mali",
            "jpn": "マリ",
            "nld": "Mali",
            "por": "Mali",
            "rus": "Мали",
            "spa": "Mali",
            "svk": "Mali",
            "fin": "Mali",
            "zho": "马里"
        }
    },
    "MT": {
        "currency": "EUR",
        "callingCode": "356",
        "flag": "flag-mt",
        "name": {
            "common": "Malta",
            "deu": "Malta",
            "fra": "Malte",
            "hrv": "Malta",
            "ita": "Malta",
            "jpn": "マルタ",
            "nld": "Malta",
            "por": "Malta",
            "rus": "Мальта",
            "spa": "Malta",
            "svk": "Malta",
            "fin": "Malta",
            "zho": "马耳他"
        }
    },
    "MH": {
        "currency": "USD",
        "callingCode": "692",
        "flag": "flag-mh",
        "name": {
            "common": "Marshall Islands",
            "deu": "Marshallinseln",
            "fra": "Îles Marshall",
            "hrv": "Maršalovi Otoci",
            "ita": "Isole Marshall",
            "jpn": "マーシャル諸島",
            "nld": "Marshalleilanden",
            "por": "Ilhas Marshall",
            "rus": "Маршалловы Острова",
            "spa": "Islas Marshall",
            "svk": "Marshallove ostrovy",
            "fin": "Marshallinsaaret",
            "zho": "马绍尔群岛"
        }
    },
    "MQ": {
        "currency": "EUR",
        "callingCode": "596",
        "flag": "flag-mq",
        "name": {
            "common": "Martinique",
            "deu": "Martinique",
            "fra": "Martinique",
            "hrv": "Martinique",
            "ita": "Martinica",
            "jpn": "マルティニーク",
            "nld": "Martinique",
            "por": "Martinica",
            "rus": "Мартиника",
            "spa": "Martinica",
            "svk": "Martinik",
            "fin": "Martinique",
            "zho": "马提尼克"
        }
    },
    "MR": {
        "currency": "MRO",
        "callingCode": "222",
        "flag": "flag-mr",
        "name": {
            "common": "Mauritania",
            "deu": "Mauretanien",
            "fra": "Mauritanie",
            "hrv": "Mauritanija",
            "ita": "Mauritania",
            "jpn": "モーリタニア",
            "nld": "Mauritanië",
            "por": "Mauritânia",
            "rus": "Мавритания",
            "spa": "Mauritania",
            "svk": "Mauritánia",
            "fin": "Mauritania",
            "zho": "毛里塔尼亚"
        }
    },
    "MU": {
        "currency": "MUR",
        "callingCode": "230",
        "flag": "flag-mu",
        "name": {
            "common": "Mauritius",
            "deu": "Mauritius",
            "fra": "Île Maurice",
            "hrv": "Mauricijus",
            "ita": "Mauritius",
            "jpn": "モーリシャス",
            "nld": "Mauritius",
            "por": "Maurício",
            "rus": "Маврикий",
            "spa": "Mauricio",
            "svk": "Maurícius",
            "fin": "Mauritius",
            "zho": "毛里求斯"
        }
    },
    "YT": {
        "currency": "EUR",
        "callingCode": "262",
        "flag": "flag-yt",
        "name": {
            "common": "Mayotte",
            "deu": "Mayotte",
            "fra": "Mayotte",
            "hrv": "Mayotte",
            "ita": "Mayotte",
            "jpn": "マヨット",
            "nld": "Mayotte",
            "por": "Mayotte",
            "rus": "Майотта",
            "spa": "Mayotte",
            "svk": "Mayotte",
            "fin": "Mayotte",
            "zho": "马约特"
        }
    },
    "MX": {
        "currency": "MXN",
        "callingCode": "52",
        "flag": "flag-mx",
        "name": {
            "common": "Mexico",
            "deu": "Mexiko",
            "fra": "Mexique",
            "hrv": "Meksiko",
            "ita": "Messico",
            "jpn": "メキシコ",
            "nld": "Mexico",
            "por": "México",
            "rus": "Мексика",
            "spa": "México",
            "svk": "Mexiko",
            "fin": "Meksiko",
            "zho": "墨西哥"
        }
    },
    "FM": {
        "currency": "USD",
        "callingCode": "691",
        "flag": "flag-fm",
        "name": {
            "common": "Micronesia",
            "deu": "Mikronesien",
            "fra": "Micronésie",
            "hrv": "Mikronezija",
            "ita": "Micronesia",
            "jpn": "ミクロネシア連邦",
            "nld": "Micronesië",
            "por": "Micronésia",
            "rus": "Федеративные Штаты Микронезии",
            "spa": "Micronesia",
            "svk": "Mikronézia",
            "fin": "Mikronesia",
            "zho": "密克罗尼西亚"
        }
    },
    "MD": {
        "currency": "MDL",
        "callingCode": "373",
        "flag": "flag-md",
        "name": {
            "common": "Moldova",
            "deu": "Moldawie",
            "fra": "Moldavie",
            "hrv": "Moldova",
            "ita": "Moldavia",
            "jpn": "モルドバ共和国",
            "nld": "Moldavië",
            "por": "Moldávia",
            "rus": "Молдавия",
            "spa": "Moldavia",
            "svk": "Moldavsko",
            "fin": "Moldova",
            "zho": "摩尔多瓦"
        }
    },
    "MC": {
        "currency": "EUR",
        "callingCode": "377",
        "flag": "flag-mc",
        "name": {
            "common": "Monaco",
            "deu": "Monaco",
            "fra": "Monaco",
            "hrv": "Monako",
            "ita": "Principato di Monaco",
            "jpn": "モナコ",
            "nld": "Monaco",
            "por": "Mónaco",
            "rus": "Монако",
            "spa": "Mónaco",
            "svk": "Monako",
            "fin": "Monaco",
            "zho": "摩纳哥"
        }
    },
    "MN": {
        "currency": "MNT",
        "callingCode": "976",
        "flag": "flag-mn",
        "name": {
            "common": "Mongolia",
            "deu": "Mongolei",
            "fra": "Mongolie",
            "hrv": "Mongolija",
            "ita": "Mongolia",
            "jpn": "モンゴル",
            "nld": "Mongolië",
            "por": "Mongólia",
            "rus": "Монголия",
            "spa": "Mongolia",
            "svk": "Mongolsko",
            "fin": "Mongolia",
            "zho": "蒙古"
        }
    },
    "ME": {
        "currency": "EUR",
        "callingCode": "382",
        "flag": "flag-me",
        "name": {
            "common": "Montenegro",
            "deu": "Montenegro",
            "fra": "Monténégro",
            "hrv": "Crna Gora",
            "ita": "Montenegro",
            "jpn": "モンテネグロ",
            "nld": "Montenegro",
            "por": "Montenegro",
            "rus": "Черногория",
            "spa": "Montenegro",
            "svk": "Čierna Hora",
            "fin": "Montenegro",
            "zho": "黑山"
        }
    },
    "MS": {
        "currency": "XCD",
        "callingCode": "1664",
        "flag": "flag-ms",
        "name": {
            "common": "Montserrat",
            "deu": "Montserrat",
            "fra": "Montserrat",
            "hrv": "Montserrat",
            "ita": "Montserrat",
            "jpn": "モントセラト",
            "nld": "Montserrat",
            "por": "Montserrat",
            "rus": "Монтсеррат",
            "spa": "Montserrat",
            "svk": "Montserrat",
            "fin": "Montserrat",
            "zho": "蒙特塞拉特"
        }
    },
    "MA": {
        "currency": "MAD",
        "callingCode": "212",
        "flag": "flag-ma",
        "name": {
            "common": "Morocco",
            "deu": "Marokko",
            "fra": "Maroc",
            "hrv": "Maroko",
            "ita": "Marocco",
            "jpn": "モロッコ",
            "nld": "Marokko",
            "por": "Marrocos",
            "rus": "Марокко",
            "spa": "Marruecos",
            "svk": "Maroko",
            "fin": "Marokko",
            "zho": "摩洛哥"
        }
    },
    "MZ": {
        "currency": "MZN",
        "callingCode": "258",
        "flag": "flag-mz",
        "name": {
            "common": "Mozambique",
            "deu": "Mosambik",
            "fra": "Mozambique",
            "hrv": "Mozambik",
            "ita": "Mozambico",
            "jpn": "モザンビーク",
            "nld": "Mozambique",
            "por": "Moçambique",
            "rus": "Мозамбик",
            "spa": "Mozambique",
            "svk": "Mozambik",
            "fin": "Mosambik",
            "zho": "莫桑比克"
        }
    },
    "MM": {
        "currency": "MMK",
        "callingCode": "95",
        "flag": "flag-mm",
        "name": {
            "common": "Myanmar",
            "deu": "Myanmar",
            "fra": "Birmanie",
            "hrv": "Mijanmar",
            "ita": "Birmania",
            "jpn": "ミャンマー",
            "nld": "Myanmar",
            "por": "Myanmar",
            "rus": "Мьянма",
            "spa": "Myanmar",
            "svk": "Mjanmarsko",
            "fin": "Myanmar",
            "zho": "缅甸"
        }
    },
    "NA": {
        "currency": "NAD",
        "callingCode": "264",
        "flag": "flag-na",
        "name": {
            "common": "Namibia",
            "deu": "Namibia",
            "fra": "Namibie",
            "hrv": "Namibija",
            "ita": "Namibia",
            "jpn": "ナミビア",
            "nld": "Namibië",
            "por": "Namíbia",
            "rus": "Намибия",
            "spa": "Namibia",
            "svk": "Namíbia",
            "fin": "Namibia",
            "zho": "纳米比亚"
        }
    },
    "NR": {
        "currency": "AUD",
        "callingCode": "674",
        "flag": "flag-nr",
        "name": {
            "common": "Nauru",
            "deu": "Nauru",
            "fra": "Nauru",
            "hrv": "Nauru",
            "ita": "Nauru",
            "jpn": "ナウル",
            "nld": "Nauru",
            "por": "Nauru",
            "rus": "Науру",
            "spa": "Nauru",
            "svk": "Nauru",
            "fin": "Nauru",
            "zho": "瑙鲁"
        }
    },
    "NP": {
        "currency": "NPR",
        "callingCode": "977",
        "flag": "flag-np",
        "name": {
            "common": "Nepal",
            "deu": "Népal",
            "fra": "Népal",
            "hrv": "Nepal",
            "ita": "Nepal",
            "jpn": "ネパール",
            "nld": "Nepal",
            "por": "Nepal",
            "rus": "Непал",
            "spa": "Nepal",
            "svk": "Nepál",
            "fin": "Nepal",
            "zho": "尼泊尔"
        }
    },
    "NL": {
        "currency": "EUR",
        "callingCode": "31",
        "flag": "flag-nl",
        "name": {
            "common": "Netherlands",
            "deu": "Niederlande",
            "fra": "Pays-Bas",
            "hrv": "Nizozemska",
            "ita": "Paesi Bassi",
            "jpn": "オランダ",
            "nld": "Nederland",
            "por": "Holanda",
            "rus": "Нидерланды",
            "spa": "Países Bajos",
            "svk": "Holansko",
            "fin": "Alankomaat",
            "zho": "荷兰"
        }
    },
    "NC": {
        "currency": "XPF",
        "callingCode": "687",
        "flag": "flag-nc",
        "name": {
            "common": "New Caledonia",
            "deu": "Neukaledonien",
            "fra": "Nouvelle-Calédonie",
            "hrv": "Nova Kaledonija",
            "ita": "Nuova Caledonia",
            "jpn": "ニューカレドニア",
            "nld": "Nieuw-Caledonië",
            "por": "Nova Caledónia",
            "rus": "Новая Каледония",
            "spa": "Nueva Caledonia",
            "svk": "Nová Kaledónia",
            "fin": "Uusi-Kaledonia",
            "zho": "新喀里多尼亚"
        }
    },
    "NZ": {
        "currency": "NZD",
        "callingCode": "64",
        "flag": "flag-nz",
        "name": {
            "common": "New Zealand",
            "deu": "Neuseeland",
            "fra": "Nouvelle-Zélande",
            "hrv": "Novi Zeland",
            "ita": "Nuova Zelanda",
            "jpn": "ニュージーランド",
            "nld": "Nieuw-Zeeland",
            "por": "Nova Zelândia",
            "rus": "Новая Зеландия",
            "spa": "Nueva Zelanda",
            "svk": "Nový Zéland",
            "fin": "Uusi-Seelanti",
            "zho": "新西兰"
        }
    },
    "NI": {
        "currency": "NIO",
        "callingCode": "505",
        "flag": "flag-ni",
        "name": {
            "common": "Nicaragua",
            "deu": "Nicaragua",
            "fra": "Nicaragua",
            "hrv": "Nikaragva",
            "ita": "Nicaragua",
            "jpn": "ニカラグア",
            "nld": "Nicaragua",
            "por": "Nicarágua",
            "rus": "Никарагуа",
            "spa": "Nicaragua",
            "svk": "Nikaragua",
            "fin": "Nicaragua",
            "zho": "尼加拉瓜"
        }
    },
    "NE": {
        "currency": "XOF",
        "callingCode": "227",
        "flag": "flag-ne",
        "name": {
            "common": "Niger",
            "deu": "Niger",
            "fra": "Niger",
            "hrv": "Niger",
            "ita": "Niger",
            "jpn": "ニジェール",
            "nld": "Niger",
            "por": "Níger",
            "rus": "Нигер",
            "spa": "Níger",
            "svk": "Niger",
            "fin": "Niger",
            "zho": "尼日尔"
        }
    },
    "NG": {
        "currency": "NGN",
        "callingCode": "234",
        "flag": "flag-ng",
        "name": {
            "common": "Nigeria",
            "deu": "Nigeria",
            "fra": "Nigéria",
            "hrv": "Nigerija",
            "ita": "Nigeria",
            "jpn": "ナイジェリア",
            "nld": "Nigeria",
            "por": "Nigéria",
            "rus": "Нигерия",
            "spa": "Nigeria",
            "svk": "Nigéria",
            "fin": "Nigeria",
            "zho": "尼日利亚"
        }
    },
    "NU": {
        "currency": "NZD",
        "callingCode": "683",
        "flag": "flag-nu",
        "name": {
            "common": "Niue",
            "deu": "Niue",
            "fra": "Niue",
            "hrv": "Niue",
            "ita": "Niue",
            "jpn": "ニウエ",
            "nld": "Niue",
            "por": "Niue",
            "rus": "Ниуэ",
            "spa": "Niue",
            "svk": "Niue",
            "fin": "Niue",
            "zho": "纽埃"
        }
    },
    "NF": {
        "currency": "AUD",
        "callingCode": "672",
        "flag": "flag-nf",
        "name": {
            "common": "Norfolk Island",
            "deu": "Norfolkinsel",
            "fra": "Île Norfolk",
            "hrv": "Otok Norfolk",
            "ita": "Isola Norfolk",
            "jpn": "ノーフォーク島",
            "nld": "Norfolkeiland",
            "por": "Ilha Norfolk",
            "rus": "Норфолк",
            "spa": "Isla de Norfolk",
            "svk": "Norfolk",
            "fin": "Norfolkinsaari",
            "zho": "诺福克岛"
        }
    },
    "KP": {
        "currency": "KPW",
        "callingCode": "850",
        "flag": "flag-kp",
        "name": {
            "common": "North Korea",
            "deu": "Nordkorea",
            "fra": "Corée du Nord",
            "hrv": "Sjeverna Koreja",
            "ita": "Corea del Nord",
            "jpn": "朝鮮民主主義人民共和国",
            "nld": "Noord-Korea",
            "por": "Coreia do Norte",
            "rus": "Северная Корея",
            "spa": "Corea del Norte",
            "svk": "Kórejská ľudovodemokratická republika (KĽR, Severná Kó)",
            "fin": "Pohjois-Korea",
            "zho": "朝鲜"
        }
    },
    "MP": {
        "currency": "USD",
        "callingCode": "1670",
        "flag": "flag-mp",
        "name": {
            "common": "Northern Mariana Islands",
            "deu": "Nördliche Marianen",
            "fra": "Îles Mariannes du Nord",
            "hrv": "Sjevernomarijanski otoci",
            "ita": "Isole Marianne Settentrionali",
            "jpn": "北マリアナ諸島",
            "nld": "Noordelijke Marianeneilanden",
            "por": "Marianas Setentrionais",
            "rus": "Северные Марианские острова",
            "spa": "Islas Marianas del Norte",
            "svk": "Severné Mariány",
            "fin": "Pohjois-Mariaanit",
            "zho": "北马里亚纳群岛"
        }
    },
    "NO": {
        "currency": "NOK",
        "callingCode": "47",
        "flag": "flag-no",
        "name": {
            "common": "Norway",
            "deu": "Norwegen",
            "fra": "Norvège",
            "hrv": "Norveška",
            "ita": "Norvegia",
            "jpn": "ノルウェー",
            "nld": "Noorwegen",
            "por": "Noruega",
            "rus": "Норвегия",
            "spa": "Noruega",
            "svk": "Nórsko",
            "fin": "Norja",
            "zho": "挪威"
        }
    },
    "OM": {
        "currency": "OMR",
        "callingCode": "968",
        "flag": "flag-om",
        "name": {
            "common": "Oman",
            "deu": "Oman",
            "fra": "Oman",
            "hrv": "Oman",
            "ita": "oman",
            "jpn": "オマーン",
            "nld": "Oman",
            "por": "Omã",
            "rus": "Оман",
            "spa": "Omán",
            "svk": "Omán",
            "fin": "Oman",
            "zho": "阿曼"
        }
    },
    "PK": {
        "currency": "PKR",
        "callingCode": "92",
        "flag": "flag-pk",
        "name": {
            "common": "Pakistan",
            "deu": "Pakistan",
            "fra": "Pakistan",
            "hrv": "Pakistan",
            "ita": "Pakistan",
            "jpn": "パキスタン",
            "nld": "Pakistan",
            "por": "Paquistão",
            "rus": "Пакистан",
            "spa": "Pakistán",
            "svk": "Pakistan",
            "fin": "Pakistan",
            "zho": "巴基斯坦"
        }
    },
    "PW": {
        "currency": "USD",
        "callingCode": "680",
        "flag": "flag-pw",
        "name": {
            "common": "Palau",
            "deu": "Palau",
            "fra": "Palaos (Palau)",
            "hrv": "Palau",
            "ita": "Palau",
            "jpn": "パラオ",
            "nld": "Palau",
            "por": "Palau",
            "rus": "Палау",
            "spa": "Palau",
            "svk": "Palau",
            "fin": "Palau",
            "zho": "帕劳"
        }
    },
    "PS": {
        "currency": "ILS",
        "callingCode": "970",
        "flag": "flag-ps",
        "name": {
            "common": "Palestine",
            "deu": "Palästina",
            "fra": "Palestine",
            "hrv": "Palestina",
            "ita": "Palestina",
            "jpn": "パレスチナ",
            "nld": "Palestijnse gebieden",
            "por": "Palestina",
            "rus": "Палестина",
            "spa": "Palestina",
            "svk": "Palestína",
            "fin": "Palestiina",
            "zho": "巴勒斯坦"
        }
    },
    "PA": {
        "currency": "PAB",
        "callingCode": "507",
        "flag": "flag-pa",
        "name": {
            "common": "Panama",
            "deu": "Panama",
            "fra": "Panama",
            "hrv": "Panama",
            "ita": "Panama",
            "jpn": "パナマ",
            "nld": "Panama",
            "por": "Panamá",
            "rus": "Панама",
            "spa": "Panamá",
            "svk": "Panama",
            "fin": "Panama",
            "zho": "巴拿马"
        }
    },
    "PG": {
        "currency": "PGK",
        "callingCode": "675",
        "flag": "flag-pg",
        "name": {
            "common": "Papua New Guinea",
            "deu": "Papua-Neuguinea",
            "fra": "Papouasie-Nouvelle-Guinée",
            "hrv": "Papua Nova Gvineja",
            "ita": "Papua Nuova Guinea",
            "jpn": "パプアニューギニア",
            "nld": "Papoea-Nieuw-Guinea",
            "por": "Papua Nova Guiné",
            "rus": "Папуа — Новая Гвинея",
            "spa": "Papúa Nueva Guinea",
            "svk": "Papua-Nová Guinea",
            "fin": "Papua-Uusi-Guinea",
            "zho": "巴布亚新几内亚"
        }
    },
    "PY": {
        "currency": "PYG",
        "callingCode": "595",
        "flag": "flag-py",
        "name": {
            "common": "Paraguay",
            "deu": "Paraguay",
            "fra": "Paraguay",
            "hrv": "Paragvaj",
            "ita": "Paraguay",
            "jpn": "パラグアイ",
            "nld": "Paraguay",
            "por": "Paraguai",
            "rus": "Парагвай",
            "spa": "Paraguay",
            "svk": "Paraguaj",
            "fin": "Paraguay",
            "zho": "巴拉圭"
        }
    },
    "PE": {
        "currency": "PEN",
        "callingCode": "51",
        "flag": "flag-pe",
        "name": {
            "common": "Peru",
            "deu": "Peru",
            "fra": "Pérou",
            "hrv": "Peru",
            "ita": "Perù",
            "jpn": "ペルー",
            "nld": "Peru",
            "por": "Perú",
            "rus": "Перу",
            "spa": "Perú",
            "svk": "Peru",
            "fin": "Peru",
            "zho": "秘鲁"
        }
    },
    "PH": {
        "currency": "PHP",
        "callingCode": "63",
        "flag": "flag-ph",
        "name": {
            "common": "Philippines",
            "deu": "Philippinen",
            "fra": "Philippines",
            "hrv": "Filipini",
            "ita": "Filippine",
            "jpn": "フィリピン",
            "nld": "Filipijnen",
            "por": "Filipinas",
            "rus": "Филиппины",
            "spa": "Filipinas",
            "svk": "Filipíny",
            "fin": "Filippiinit",
            "zho": "菲律宾"
        }
    },
    "PN": {
        "currency": "NZD",
        "callingCode": "64",
        "flag": "flag-pn",
        "name": {
            "common": "Pitcairn Islands",
            "deu": "Pitcairn",
            "fra": "Îles Pitcairn",
            "hrv": "Pitcairnovo otočje",
            "ita": "Isole Pitcairn",
            "jpn": "ピトケアン",
            "nld": "Pitcairneilanden",
            "por": "Ilhas Pitcairn",
            "rus": "Острова Питкэрн",
            "spa": "Islas Pitcairn",
            "svk": "Pitcairnove ostrovy",
            "fin": "Pitcairn",
            "zho": "皮特凯恩群岛"
        }
    },
    "PL": {
        "currency": "PLN",
        "callingCode": "48",
        "flag": "flag-pl",
        "name": {
            "common": "Poland",
            "deu": "Polen",
            "fra": "Pologne",
            "hrv": "Poljska",
            "ita": "Polonia",
            "jpn": "ポーランド",
            "nld": "Polen",
            "por": "Polónia",
            "rus": "Польша",
            "spa": "Polonia",
            "svk": "Poľsko",
            "fin": "Puola",
            "zho": "波兰"
        }
    },
    "PT": {
        "currency": "EUR",
        "callingCode": "351",
        "flag": "flag-pt",
        "name": {
            "common": "Portugal",
            "deu": "Portugal",
            "fra": "Portugal",
            "hrv": "Portugal",
            "ita": "Portogallo",
            "jpn": "ポルトガル",
            "nld": "Portugal",
            "por": "Portugal",
            "rus": "Португалия",
            "spa": "Portugal",
            "svk": "Portugalsko",
            "fin": "Portugali",
            "zho": "葡萄牙"
        }
    },
    "PR": {
        "currency": "USD",
        "callingCode": "1787",
        "flag": "flag-pr",
        "name": {
            "common": "Puerto Rico",
            "deu": "Puerto Rico",
            "fra": "Porto Rico",
            "hrv": "Portoriko",
            "ita": "Porto Rico",
            "jpn": "プエルトリコ",
            "nld": "Puerto Rico",
            "por": "Porto Rico",
            "rus": "Пуэрто-Рико",
            "spa": "Puerto Rico",
            "svk": "Portoriko",
            "fin": "Puerto Rico",
            "zho": "波多黎各"
        }
    },
    "QA": {
        "currency": "QAR",
        "callingCode": "974",
        "flag": "flag-qa",
        "name": {
            "common": "Qatar",
            "deu": "Katar",
            "fra": "Qatar",
            "hrv": "Katar",
            "ita": "Qatar",
            "jpn": "カタール",
            "nld": "Qatar",
            "por": "Catar",
            "rus": "Катар",
            "spa": "Catar",
            "svk": "Katar",
            "fin": "Qatar",
            "zho": "卡塔尔"
        }
    },
    "CG": {
        "currency": "XAF",
        "callingCode": "242",
        "flag": "flag-cg",
        "name": {
            "common": "Republic of the Congo",
            "cym": "Gweriniaeth y Congo",
            "deu": "Kongo",
            "fra": "Congo",
            "hrv": "Kongo",
            "ita": "Congo",
            "jpn": "コンゴ共和国",
            "nld": "Congo",
            "por": "Congo",
            "rus": "Республика Конго",
            "spa": "Congo",
            "svk": "Kongo",
            "fin": "Kongo-Brazzaville",
            "zho": "刚果"
        }
    },
    "RO": {
        "currency": "RON",
        "callingCode": "40",
        "flag": "flag-ro",
        "name": {
            "common": "Romania",
            "deu": "Rumänien",
            "fra": "Roumanie",
            "hrv": "Rumunjska",
            "ita": "Romania",
            "jpn": "ルーマニア",
            "nld": "Roemenië",
            "por": "Roménia",
            "rus": "Румыния",
            "spa": "Rumania",
            "svk": "Rumunsko",
            "fin": "Romania",
            "zho": "罗马尼亚"
        }
    },
    "RU": {
        "currency": "RUB",
        "callingCode": "7",
        "flag": "flag-ru",
        "name": {
            "common": "Russia",
            "deu": "Russland",
            "fra": "Russie",
            "hrv": "Rusija",
            "ita": "Russia",
            "jpn": "ロシア連邦",
            "nld": "Rusland",
            "por": "Rússia",
            "rus": "Россия",
            "spa": "Rusia",
            "svk": "Rusko",
            "fin": "Venäjä",
            "zho": "俄罗斯"
        }
    },
    "RW": {
        "currency": "RWF",
        "callingCode": "250",
        "flag": "flag-rw",
        "name": {
            "common": "Rwanda",
            "deu": "Ruanda",
            "fra": "Rwanda",
            "hrv": "Ruanda",
            "ita": "Ruanda",
            "jpn": "ルワンダ",
            "nld": "Rwanda",
            "por": "Ruanda",
            "rus": "Руанда",
            "spa": "Ruanda",
            "svk": "Rwanda",
            "fin": "Ruanda",
            "zho": "卢旺达"
        }
    },
    "RE": {
        "currency": "EUR",
        "callingCode": "262",
        "flag": "flag-re",
        "name": {
            "common": "Réunion",
            "deu": "Réunion",
            "fra": "Réunion",
            "hrv": "Réunion",
            "ita": "Riunione",
            "jpn": "レユニオン",
            "nld": "Réunion",
            "por": "Reunião",
            "rus": "Реюньон",
            "spa": "Reunión",
            "svk": "Réunion",
            "fin": "Réunion",
            "zho": "留尼旺岛"
        }
    },
    "BL": {
        "currency": "EUR",
        "callingCode": "590",
        "flag": "flag-bl",
        "name": {
            "common": "Saint Barthélemy",
            "deu": "Saint-Barthélemy",
            "fra": "Saint-Barthélemy",
            "hrv": "Saint Barthélemy",
            "ita": "Antille Francesi",
            "jpn": "サン・バルテルミー",
            "nld": "Saint Barthélemy",
            "por": "São Bartolomeu",
            "rus": "Сен-Бартелеми",
            "spa": "San Bartolomé",
            "svk": "Svätý Bartolomej",
            "fin": "Saint-Barthélemy",
            "zho": "圣巴泰勒米"
        }
    },
    "KN": {
        "currency": "XCD",
        "callingCode": "1869",
        "flag": "flag-kn",
        "name": {
            "common": "Saint Kitts and Nevis",
            "deu": "Saint Christopher und Nevis",
            "fra": "Saint-Christophe-et-Niévès",
            "hrv": "Sveti Kristof i Nevis",
            "ita": "Saint Kitts e Nevis",
            "jpn": "セントクリストファー・ネイビス",
            "nld": "Saint Kitts en Nevis",
            "por": "São Cristóvão e Nevis",
            "rus": "Сент-Китс и Невис",
            "spa": "San Cristóbal y Nieves",
            "svk": "Svätý Krištof a Nevis",
            "fin": "Saint Kitts ja Nevis",
            "zho": "圣基茨和尼维斯"
        }
    },
    "LC": {
        "currency": "XCD",
        "callingCode": "1758",
        "flag": "flag-lc",
        "name": {
            "common": "Saint Lucia",
            "deu": "Saint Lucia",
            "fra": "Sainte-Lucie",
            "hrv": "Sveta Lucija",
            "ita": "Santa Lucia",
            "jpn": "セントルシア",
            "nld": "Saint Lucia",
            "por": "Santa Lúcia",
            "rus": "Сент-Люсия",
            "spa": "Santa Lucía",
            "svk": "Svätá Lucia",
            "fin": "Saint Lucia",
            "zho": "圣卢西亚"
        }
    },
    "MF": {
        "currency": "EUR",
        "callingCode": "590",
        "flag": "flag-mf",
        "name": {
            "common": "Saint Martin",
            "deu": "Saint Martin",
            "fra": "Saint-Martin",
            "hrv": "Sveti Martin",
            "ita": "Saint Martin",
            "jpn": "サン・マルタン（フランス領）",
            "nld": "Saint-Martin",
            "por": "São Martinho",
            "rus": "Сен-Мартен",
            "spa": "Saint Martin",
            "svk": "Svätý Martin",
            "fin": "Saint-Martin",
            "zho": "圣马丁"
        }
    },
    "PM": {
        "currency": "EUR",
        "callingCode": "508",
        "flag": "flag-pm",
        "name": {
            "common": "Saint Pierre and Miquelon",
            "deu": "Saint-Pierre und Miquelon",
            "fra": "Saint-Pierre-et-Miquelon",
            "hrv": "Sveti Petar i Mikelon",
            "ita": "Saint-Pierre e Miquelon",
            "jpn": "サンピエール島・ミクロン島",
            "nld": "Saint Pierre en Miquelon",
            "por": "Saint-Pierre e Miquelon",
            "rus": "Сен-Пьер и Микелон",
            "spa": "San Pedro y Miquelón",
            "svk": "Saint Pierre a Miquelon",
            "fin": "Saint-Pierre ja Miquelon",
            "zho": "圣皮埃尔和密克隆"
        }
    },
    "VC": {
        "currency": "XCD",
        "callingCode": "1784",
        "flag": "flag-vc",
        "name": {
            "common": "Saint Vincent and the Grenadines",
            "deu": "Saint Vincent und die Grenadinen",
            "fra": "Saint-Vincent-et-les-Grenadines",
            "hrv": "Sveti Vincent i Grenadini",
            "ita": "Saint Vincent e Grenadine",
            "jpn": "セントビンセントおよびグレナディーン諸島",
            "nld": "Saint Vincent en de Grenadines",
            "por": "São Vincente e Granadinas",
            "rus": "Сент-Винсент и Гренадины",
            "spa": "San Vicente y Granadinas",
            "svk": "Svätý Vincent a Grenadíny",
            "fin": "Saint Vincent ja Grenadiinit",
            "zho": "圣文森特和格林纳丁斯"
        }
    },
    "WS": {
        "currency": "WST",
        "callingCode": "685",
        "flag": "flag-ws",
        "name": {
            "common": "Samoa",
            "deu": "Samoa",
            "fra": "Samoa",
            "hrv": "Samoa",
            "ita": "Samoa",
            "jpn": "サモア",
            "nld": "Samoa",
            "por": "Samoa",
            "rus": "Самоа",
            "spa": "Samoa",
            "fin": "Samoa",
            "zho": "萨摩亚"
        }
    },
    "SM": {
        "currency": "EUR",
        "callingCode": "378",
        "flag": "flag-sm",
        "name": {
            "common": "San Marino",
            "deu": "San Marino",
            "fra": "Saint-Marin",
            "hrv": "San Marino",
            "ita": "San Marino",
            "jpn": "サンマリノ",
            "nld": "San Marino",
            "por": "San Marino",
            "rus": "Сан-Марино",
            "spa": "San Marino",
            "svk": "San Maríno",
            "fin": "San Marino",
            "zho": "圣马力诺"
        }
    },
    "SA": {
        "currency": "SAR",
        "callingCode": "966",
        "flag": "flag-sa",
        "name": {
            "common": "Saudi Arabia",
            "deu": "Saudi-Arabien",
            "fra": "Arabie Saoudite",
            "hrv": "Saudijska Arabija",
            "ita": "Arabia Saudita",
            "jpn": "サウジアラビア",
            "nld": "Saoedi-Arabië",
            "por": "Arábia Saudita",
            "rus": "Саудовская Аравия",
            "spa": "Arabia Saudí",
            "svk": "Saudská Arábia",
            "fin": "Saudi-Arabia",
            "zho": "沙特阿拉伯"
        }
    },
    "SN": {
        "currency": "XOF",
        "callingCode": "221",
        "flag": "flag-sn",
        "name": {
            "common": "Senegal",
            "deu": "Senegal",
            "fra": "Sénégal",
            "hrv": "Senegal",
            "ita": "Senegal",
            "jpn": "セネガル",
            "nld": "Senegal",
            "por": "Senegal",
            "rus": "Сенегал",
            "spa": "Senegal",
            "svk": "Senegal",
            "fin": "Senegal",
            "zho": "塞内加尔"
        }
    },
    "RS": {
        "currency": "RSD",
        "callingCode": "381",
        "flag": "flag-rs",
        "name": {
            "common": "Serbia",
            "deu": "Serbien",
            "fra": "Serbie",
            "hrv": "Srbija",
            "ita": "Serbia",
            "jpn": "セルビア",
            "nld": "Servië",
            "por": "Sérvia",
            "rus": "Сербия",
            "spa": "Serbia",
            "svk": "Srbsko",
            "fin": "Serbia",
            "zho": "塞尔维亚"
        }
    },
    "SC": {
        "currency": "SCR",
        "callingCode": "248",
        "flag": "flag-sc",
        "name": {
            "common": "Seychelles",
            "deu": "Seychellen",
            "fra": "Seychelles",
            "hrv": "Sejšeli",
            "ita": "Seychelles",
            "jpn": "セーシェル",
            "nld": "Seychellen",
            "por": "Seicheles",
            "rus": "Сейшельские Острова",
            "spa": "Seychelles",
            "svk": "Seychely",
            "fin": "Seychellit",
            "zho": "塞舌尔"
        }
    },
    "SL": {
        "currency": "SLL",
        "callingCode": "232",
        "flag": "flag-sl",
        "name": {
            "common": "Sierra Leone",
            "deu": "Sierra Leone",
            "fra": "Sierra Leone",
            "hrv": "Sijera Leone",
            "ita": "Sierra Leone",
            "jpn": "シエラレオネ",
            "nld": "Sierra Leone",
            "por": "Serra Leoa",
            "rus": "Сьерра-Леоне",
            "spa": "Sierra Leone",
            "svk": "Sierra Leone",
            "fin": "Sierra Leone",
            "zho": "塞拉利昂"
        }
    },
    "SG": {
        "currency": "SGD",
        "callingCode": "65",
        "flag": "flag-sg",
        "name": {
            "common": "Singapore",
            "deu": "Singapur",
            "fra": "Singapour",
            "hrv": "Singapur",
            "ita": "Singapore",
            "jpn": "シンガポール",
            "nld": "Singapore",
            "por": "Singapura",
            "rus": "Сингапур",
            "spa": "Singapur",
            "svk": "Singapur",
            "fin": "Singapore"
        }
    },
    "SX": {
        "currency": "ANG",
        "callingCode": "1721",
        "flag": "flag-sx",
        "name": {
            "common": "Sint Maarten",
            "deu": "Sint Maarten",
            "fra": "Saint-Martin",
            "ita": "Sint Maarten",
            "jpn": "シント・マールテン",
            "nld": "Sint Maarten",
            "por": "São Martinho",
            "rus": "Синт-Мартен",
            "spa": "Sint Maarten",
            "svk": "Svätý Martin",
            "fin": "Sint Maarten",
            "zho": "圣马丁岛"
        }
    },
    "SK": {
        "currency": "EUR",
        "callingCode": "421",
        "flag": "flag-sk",
        "name": {
            "common": "Slovakia",
            "deu": "Slowakei",
            "fra": "Slovaquie",
            "hrv": "Slovačka",
            "ita": "Slovacchia",
            "jpn": "スロバキア",
            "nld": "Slowakije",
            "por": "Eslováquia",
            "rus": "Словакия",
            "spa": "República Eslovaca",
            "svk": "Slovensko",
            "fin": "Slovakia",
            "zho": "斯洛伐克"
        }
    },
    "SI": {
        "currency": "EUR",
        "callingCode": "386",
        "flag": "flag-si",
        "name": {
            "common": "Slovenia",
            "deu": "Slowenien",
            "fra": "Slovénie",
            "hrv": "Slovenija",
            "ita": "Slovenia",
            "jpn": "スロベニア",
            "nld": "Slovenië",
            "por": "Eslovénia",
            "rus": "Словения",
            "spa": "Eslovenia",
            "svk": "Slovinsko",
            "fin": "Slovenia",
            "zho": "斯洛文尼亚"
        }
    },
    "SB": {
        "currency": "SBD",
        "callingCode": "677",
        "flag": "flag-sb",
        "name": {
            "common": "Solomon Islands",
            "deu": "Salomonen",
            "fra": "Îles Salomon",
            "hrv": "Solomonski Otoci",
            "ita": "Isole Salomone",
            "jpn": "ソロモン諸島",
            "nld": "Salomonseilanden",
            "por": "Ilhas Salomão",
            "rus": "Соломоновы Острова",
            "spa": "Islas Salomón",
            "svk": "Salomonove ostrovy",
            "fin": "Salomonsaaret",
            "zho": "所罗门群岛"
        }
    },
    "SO": {
        "currency": "SOS",
        "callingCode": "252",
        "flag": "flag-so",
        "name": {
            "common": "Somalia",
            "deu": "Somalia",
            "fra": "Somalie",
            "hrv": "Somalija",
            "ita": "Somalia",
            "jpn": "ソマリア",
            "nld": "Somalië",
            "por": "Somália",
            "rus": "Сомали",
            "spa": "Somalia",
            "svk": "Somálsko",
            "fin": "Somalia",
            "zho": "索马里"
        }
    },
    "ZA": {
        "currency": "ZAR",
        "callingCode": "27",
        "flag": "flag-za",
        "name": {
            "common": "South Africa",
            "deu": "Republik Südafrika",
            "fra": "Afrique du Sud",
            "hrv": "Južnoafrička Republika",
            "ita": "Sud Africa",
            "jpn": "南アフリカ",
            "nld": "Zuid-Afrika",
            "por": "África do Sul",
            "rus": "Южно-Африканская Республика",
            "spa": "República de Sudáfrica",
            "svk": "Juhoafrická republika",
            "fin": "Etelä-Afrikka",
            "zho": "南非"
        }
    },
    "GS": {
        "currency": "GBP",
        "callingCode": "500",
        "flag": "flag-gs",
        "name": {
            "common": "South Georgia",
            "deu": "Südgeorgien und die Südlichen Sandwichinseln",
            "fra": "Géorgie du Sud-et-les Îles Sandwich du Sud",
            "hrv": "Južna Georgija i otočje Južni Sandwich",
            "ita": "Georgia del Sud e Isole Sandwich Meridionali",
            "jpn": "サウスジョージア・サウスサンドウィッチ諸島",
            "nld": "Zuid-Georgia en Zuidelijke Sandwicheilanden",
            "por": "Ilhas Geórgia do Sul e Sandwich do Sul",
            "rus": "Южная Георгия и Южные Сандвичевы острова",
            "spa": "Islas Georgias del Sur y Sandwich del Sur",
            "svk": "Južná Georgia a Južné Sandwichove ostrovy",
            "fin": "Etelä-Georgia ja Eteläiset Sandwichsaaret",
            "zho": "南乔治亚"
        }
    },
    "KR": {
        "currency": "KRW",
        "callingCode": "82",
        "flag": "flag-kr",
        "name": {
            "common": "South Korea",
            "deu": "Südkorea",
            "fra": "Corée du Sud",
            "hrv": "Južna Koreja",
            "ita": "Corea del Sud",
            "jpn": "大韓民国",
            "nld": "Zuid-Korea",
            "por": "Coreia do Sul",
            "rus": "Южная Корея",
            "spa": "Corea del Sur",
            "svk": "Južná Kórea",
            "fin": "Etelä-Korea",
            "zho": "韩国"
        }
    },
    "SS": {
        "currency": "SSP",
        "callingCode": "211",
        "flag": "flag-ss",
        "name": {
            "common": "South Sudan",
            "deu": "Südsudan",
            "fra": "Soudan du Sud",
            "hrv": "Južni Sudan",
            "ita": "Sudan del sud",
            "jpn": "南スーダン",
            "nld": "Zuid-Soedan",
            "por": "Sudão do Sul",
            "rus": "Южный Судан",
            "spa": "Sudán del Sur",
            "svk": "Južný Sudán",
            "fin": "Etelä-Sudan",
            "zho": "南苏丹"
        }
    },
    "ES": {
        "currency": "EUR",
        "callingCode": "34",
        "flag": "flag-es",
        "name": {
            "common": "Spain",
            "deu": "Spanien",
            "fra": "Espagne",
            "hrv": "Španjolska",
            "ita": "Spagna",
            "jpn": "スペイン",
            "nld": "Spanje",
            "por": "Espanha",
            "rus": "Испания",
            "spa": "España",
            "svk": "Španielsko",
            "fin": "Espanja",
            "zho": "西班牙"
        }
    },
    "LK": {
        "currency": "LKR",
        "callingCode": "94",
        "flag": "flag-lk",
        "name": {
            "common": "Sri Lanka",
            "deu": "Sri Lanka",
            "fra": "Sri Lanka",
            "hrv": "Šri Lanka",
            "ita": "Sri Lanka",
            "jpn": "スリランカ",
            "nld": "Sri Lanka",
            "por": "Sri Lanka",
            "rus": "Шри-Ланка",
            "spa": "Sri Lanka",
            "svk": "Srí Lanka",
            "fin": "Sri Lanka",
            "zho": "斯里兰卡"
        }
    },
    "SD": {
        "currency": "SDG",
        "callingCode": "249",
        "flag": "flag-sd",
        "name": {
            "common": "Sudan",
            "deu": "Sudan",
            "fra": "Soudan",
            "hrv": "Sudan",
            "ita": "Sudan",
            "jpn": "スーダン",
            "nld": "Soedan",
            "por": "Sudão",
            "rus": "Судан",
            "spa": "Sudán",
            "svk": "Sudán",
            "fin": "Sudan",
            "zho": "苏丹"
        }
    },
    "SR": {
        "currency": "SRD",
        "callingCode": "597",
        "flag": "flag-sr",
        "name": {
            "common": "Suriname",
            "deu": "Suriname",
            "fra": "Surinam",
            "hrv": "Surinam",
            "ita": "Suriname",
            "jpn": "スリナム",
            "nld": "Suriname",
            "por": "Suriname",
            "rus": "Суринам",
            "spa": "Surinam",
            "svk": "Surinam",
            "fin": "Suriname",
            "zho": "苏里南"
        }
    },
    "SJ": {
        "currency": "NOK",
        "callingCode": "4779",
        "flag": "flag-sj",
        "name": {
            "common": "Svalbard and Jan Mayen",
            "deu": "Spitzbergen",
            "fra": "Svalbard et Jan Mayen",
            "hrv": "Svalbard i Jan Mayen",
            "ita": "Svalbard e Jan Mayen",
            "jpn": "スヴァールバル諸島およびヤンマイエン島",
            "nld": "Svalbard en Jan Mayen",
            "por": "Ilhas Svalbard e Jan Mayen",
            "rus": "Шпицберген и Ян-Майен",
            "spa": "Islas Svalbard y Jan Mayen",
            "svk": "Svalbard a Jan Mayen",
            "fin": "Huippuvuoret",
            "zho": "斯瓦尔巴特"
        }
    },
    "SZ": {
        "currency": "SZL",
        "callingCode": "268",
        "flag": "flag-sz",
        "name": {
            "common": "Swaziland",
            "deu": "Swasiland",
            "fra": "Swaziland",
            "hrv": "Svazi",
            "ita": "Swaziland",
            "jpn": "スワジランド",
            "nld": "Swaziland",
            "por": "Suazilândia",
            "rus": "Свазиленд",
            "spa": "Suazilandia",
            "svk": "Svazijsko",
            "fin": "Swazimaa",
            "zho": "斯威士兰"
        }
    },
    "SE": {
        "currency": "SEK",
        "callingCode": "46",
        "flag": "flag-se",
        "name": {
            "common": "Sweden",
            "deu": "Schweden",
            "fra": "Suède",
            "hrv": "Švedska",
            "ita": "Svezia",
            "jpn": "スウェーデン",
            "nld": "Zweden",
            "por": "Suécia",
            "rus": "Швеция",
            "spa": "Suecia",
            "svk": "šveédsko",
            "fin": "Ruotsi",
            "zho": "瑞典"
        }
    },
    "CH": {
        "currency": "CHE",
        "callingCode": "41",
        "flag": "flag-ch",
        "name": {
            "common": "Switzerland",
            "deu": "Schweiz",
            "fra": "Suisse",
            "hrv": "Švicarska",
            "ita": "Svizzera",
            "jpn": "スイス",
            "nld": "Zwitserland",
            "por": "Suíça",
            "rus": "Швейцария",
            "spa": "Suiza",
            "svk": "Švajčiarsko",
            "fin": "Sveitsi",
            "zho": "瑞士"
        }
    },
    "SY": {
        "currency": "SYP",
        "callingCode": "963",
        "flag": "flag-sy",
        "name": {
            "common": "Syria",
            "deu": "Syrien",
            "fra": "Syrie",
            "hrv": "Sirija",
            "ita": "Siria",
            "jpn": "シリア・アラブ共和国",
            "nld": "Syrië",
            "por": "Síria",
            "rus": "Сирия",
            "spa": "Siria",
            "svk": "Sýria",
            "fin": "Syyria",
            "zho": "叙利亚"
        }
    },
    "ST": {
        "currency": "STD",
        "callingCode": "239",
        "flag": "flag-st",
        "name": {
            "common": "São Tomé and Príncipe",
            "deu": "São Tomé und Príncipe",
            "fra": "São Tomé et Príncipe",
            "hrv": "Sveti Toma i Princip",
            "ita": "São Tomé e Príncipe",
            "jpn": "サントメ・プリンシペ",
            "nld": "Sao Tomé en Principe",
            "por": "São Tomé e Príncipe",
            "rus": "Сан-Томе и Принсипи",
            "spa": "Santo Tomé y Príncipe",
            "svk": "Svätý Tomáš a Princov ostrov",
            "fin": "São Téme ja Príncipe",
            "zho": "圣多美和普林西比"
        }
    },
    "TW": {
        "currency": "TWD",
        "callingCode": "886",
        "flag": "flag-tw",
        "name": {
            "common": "Taiwan",
            "deu": "Taiwan",
            "fra": "Taïwan",
            "hrv": "Tajvan",
            "ita": "Taiwan",
            "jpn": "台湾（台湾省/中華民国）",
            "nld": "Taiwan",
            "por": "Ilha Formosa",
            "rus": "Тайвань",
            "spa": "Taiwán",
            "svk": "Taiwan",
            "fin": "Taiwan"
        }
    },
    "TJ": {
        "currency": "TJS",
        "callingCode": "992",
        "flag": "flag-tj",
        "name": {
            "common": "Tajikistan",
            "deu": "Tadschikistan",
            "fra": "Tadjikistan",
            "hrv": "Tađikistan",
            "ita": "Tagikistan",
            "jpn": "タジキスタン",
            "nld": "Tadzjikistan",
            "por": "Tajiquistão",
            "rus": "Таджикистан",
            "spa": "Tayikistán",
            "svk": "Taǆikistan",
            "fin": "Tadžikistan",
            "zho": "塔吉克斯坦"
        }
    },
    "TZ": {
        "currency": "TZS",
        "callingCode": "255",
        "flag": "flag-tz",
        "name": {
            "common": "Tanzania",
            "deu": "Tansania",
            "fra": "Tanzanie",
            "hrv": "Tanzanija",
            "ita": "Tanzania",
            "jpn": "タンザニア",
            "nld": "Tanzania",
            "por": "Tanzânia",
            "rus": "Танзания",
            "spa": "Tanzania",
            "svk": "Tanzánia",
            "fin": "Tansania",
            "zho": "坦桑尼亚"
        }
    },
    "TH": {
        "currency": "THB",
        "callingCode": "66",
        "flag": "flag-th",
        "name": {
            "common": "Thailand",
            "deu": "Thailand",
            "fra": "Thaïlande",
            "hrv": "Tajland",
            "ita": "Tailandia",
            "jpn": "タイ",
            "nld": "Thailand",
            "por": "Tailândia",
            "rus": "Таиланд",
            "spa": "Tailandia",
            "svk": "Thajsko",
            "fin": "Thaimaa",
            "zho": "泰国"
        }
    },
    "TL": {
        "currency": "USD",
        "callingCode": "670",
        "flag": "flag-tl",
        "name": {
            "common": "Timor-Leste",
            "deu": "Timor-Leste",
            "fra": "Timor oriental",
            "hrv": "Istočni Timor",
            "ita": "Timor Est",
            "jpn": "東ティモール",
            "nld": "Oost-Timor",
            "por": "Timor-Leste",
            "rus": "Восточный Тимор",
            "spa": "Timor Oriental",
            "svk": "Východný Timor",
            "fin": "Itä-Timor",
            "zho": "东帝汶"
        }
    },
    "TG": {
        "currency": "XOF",
        "callingCode": "228",
        "flag": "flag-tg",
        "name": {
            "common": "Togo",
            "deu": "Togo",
            "fra": "Togo",
            "hrv": "Togo",
            "ita": "Togo",
            "jpn": "トーゴ",
            "nld": "Togo",
            "por": "Togo",
            "rus": "Того",
            "spa": "Togo",
            "svk": "Togo",
            "fin": "Togo",
            "zho": "多哥"
        }
    },
    "TK": {
        "currency": "NZD",
        "callingCode": "690",
        "flag": "flag-tk",
        "name": {
            "common": "Tokelau",
            "deu": "Tokelau",
            "fra": "Tokelau",
            "hrv": "Tokelau",
            "ita": "Isole Tokelau",
            "jpn": "トケラウ",
            "nld": "Tokelau",
            "por": "Tokelau",
            "rus": "Токелау",
            "spa": "Islas Tokelau",
            "svk": "Tokelau",
            "fin": "Tokelau",
            "zho": "托克劳"
        }
    },
    "TO": {
        "currency": "TOP",
        "callingCode": "676",
        "flag": "flag-to",
        "name": {
            "common": "Tonga",
            "deu": "Tonga",
            "fra": "Tonga",
            "hrv": "Tonga",
            "ita": "Tonga",
            "jpn": "トンガ",
            "nld": "Tonga",
            "por": "Tonga",
            "rus": "Тонга",
            "spa": "Tonga",
            "svk": "Tonga",
            "fin": "Tonga",
            "zho": "汤加"
        }
    },
    "TT": {
        "currency": "TTD",
        "callingCode": "1868",
        "flag": "flag-tt",
        "name": {
            "common": "Trinidad and Tobago",
            "deu": "Trinidad und Tobago",
            "fra": "Trinité-et-Tobago",
            "hrv": "Trinidad i Tobago",
            "ita": "Trinidad e Tobago",
            "jpn": "トリニダード・トバゴ",
            "nld": "Trinidad en Tobago",
            "por": "Trinidade e Tobago",
            "rus": "Тринидад и Тобаго",
            "spa": "Trinidad y Tobago",
            "svk": "Trinidad a Tobago",
            "fin": "Trinidad ja Tobago",
            "zho": "特立尼达和多巴哥"
        }
    },
    "TN": {
        "currency": "TND",
        "callingCode": "216",
        "flag": "flag-tn",
        "name": {
            "common": "Tunisia",
            "deu": "Tunesien",
            "fra": "Tunisie",
            "hrv": "Tunis",
            "ita": "Tunisia",
            "jpn": "チュニジア",
            "nld": "Tunesië",
            "por": "Tunísia",
            "rus": "Тунис",
            "spa": "Túnez",
            "svk": "Tunisko",
            "fin": "Tunisia",
            "zho": "突尼斯"
        }
    },
    "TR": {
        "currency": "TRY",
        "callingCode": "90",
        "flag": "flag-tr",
        "name": {
            "common": "Turkey",
            "deu": "Türkei",
            "fra": "Turquie",
            "hrv": "Turska",
            "ita": "Turchia",
            "jpn": "トルコ",
            "nld": "Turkije",
            "por": "Turquia",
            "rus": "Турция",
            "spa": "Turquía",
            "svk": "Turecko",
            "fin": "Turkki",
            "zho": "土耳其"
        }
    },
    "TM": {
        "currency": "TMT",
        "callingCode": "993",
        "flag": "flag-tm",
        "name": {
            "common": "Turkmenistan",
            "deu": "Turkmenistan",
            "fra": "Turkménistan",
            "hrv": "Turkmenistan",
            "ita": "Turkmenistan",
            "jpn": "トルクメニスタン",
            "nld": "Turkmenistan",
            "por": "Turquemenistão",
            "rus": "Туркмения",
            "spa": "Turkmenistán",
            "svk": "Turkménsko",
            "fin": "Turkmenistan",
            "zho": "土库曼斯坦"
        }
    },
    "TC": {
        "currency": "USD",
        "callingCode": "1649",
        "flag": "flag-tc",
        "name": {
            "common": "Turks and Caicos Islands",
            "deu": "Turks-und Caicosinseln",
            "fra": "Îles Turques-et-Caïques",
            "hrv": "Otoci Turks i Caicos",
            "ita": "Isole Turks e Caicos",
            "jpn": "タークス・カイコス諸島",
            "nld": "Turks-en Caicoseilanden",
            "por": "Ilhas Turks e Caicos",
            "rus": "Теркс и Кайкос",
            "spa": "Islas Turks y Caicos",
            "svk": "Turks a Caicos",
            "fin": "Turks-ja Caicossaaret",
            "zho": "特克斯和凯科斯群岛"
        }
    },
    "TV": {
        "currency": "AUD",
        "callingCode": "688",
        "flag": "flag-tv",
        "name": {
            "common": "Tuvalu",
            "deu": "Tuvalu",
            "fra": "Tuvalu",
            "hrv": "Tuvalu",
            "ita": "Tuvalu",
            "jpn": "ツバル",
            "nld": "Tuvalu",
            "por": "Tuvalu",
            "rus": "Тувалу",
            "spa": "Tuvalu",
            "svk": "Tuvalu",
            "fin": "Tuvalu",
            "zho": "图瓦卢"
        }
    },
    "UG": {
        "currency": "UGX",
        "callingCode": "256",
        "flag": "flag-ug",
        "name": {
            "common": "Uganda",
            "deu": "Uganda",
            "fra": "Ouganda",
            "hrv": "Uganda",
            "ita": "Uganda",
            "jpn": "ウガンダ",
            "nld": "Oeganda",
            "por": "Uganda",
            "rus": "Уганда",
            "spa": "Uganda",
            "svk": "Uganda",
            "fin": "Uganda",
            "zho": "乌干达"
        }
    },
    "UA": {
        "currency": "UAH",
        "callingCode": "380",
        "flag": "flag-ua",
        "name": {
            "common": "Ukraine",
            "deu": "Ukraine",
            "fra": "Ukraine",
            "hrv": "Ukrajina",
            "ita": "Ucraina",
            "jpn": "ウクライナ",
            "nld": "Oekraïne",
            "por": "Ucrânia",
            "rus": "Украина",
            "spa": "Ucrania",
            "svk": "Ukrajina",
            "fin": "Ukraina",
            "zho": "乌克兰"
        }
    },
    "AE": {
        "currency": "AED",
        "callingCode": "971",
        "flag": "flag-ae",
        "name": {
            "common": "United Arab Emirates",
            "deu": "Vereinigte Arabische Emirate",
            "fra": "Émirats arabes unis",
            "hrv": "Ujedinjeni Arapski Emirati",
            "ita": "Emirati Arabi Uniti",
            "jpn": "アラブ首長国連邦",
            "nld": "Verenigde Arabische Emiraten",
            "por": "Emirados Árabes Unidos",
            "rus": "Объединённые Арабские Эмираты",
            "spa": "Emiratos Árabes Unidos",
            "svk": "Spojené arabské emiráty",
            "fin": "Arabiemiraatit",
            "zho": "阿拉伯联合酋长国"
        }
    },
    "GB": {
        "currency": "GBP",
        "callingCode": "44",
        "flag": "flag-gb",
        "name": {
            "common": "United Kingdom",
            "deu": "Vereinigtes Königreich",
            "fra": "Royaume-Uni",
            "hrv": "Ujedinjeno Kraljevstvo",
            "ita": "Regno Unito",
            "jpn": "イギリス",
            "nld": "Verenigd Koninkrijk",
            "por": "Reino Unido",
            "rus": "Великобритания",
            "spa": "Reino Unido",
            "svk": "Veľká Británia (Spojené kráľovstvo)",
            "fin": "Yhdistynyt kuningaskunta",
            "zho": "英国"
        }
    },
    "US": {
        "currency": "USD",
        "callingCode": "1",
        "flag": "flag-us",
        "name": {
            "common": "United States",
            "deu": "Vereinigte Staaten von Amerika",
            "fra": "États-Unis",
            "hrv": "Sjedinjene Američke Države",
            "ita": "Stati Uniti d'America",
            "jpn": "アメリカ合衆国",
            "nld": "Verenigde Staten",
            "por": "Estados Unidos",
            "rus": "Соединённые Штаты Америки",
            "spa": "Estados Unidos",
            "svk": "Spojené štáty",
            "fin": "Yhdysvallat",
            "zho": "美国"
        }
    },
    "UM": {
        "currency": "USD",
        "flag": "flag-um",
        "name": {
            "common": "United States Minor Outlying Islands",
            "deu": "Kleinere Inselbesitzungen der Vereinigten Staaten",
            "fra": "Îles mineures éloignées des États-Unis",
            "hrv": "Mali udaljeni otoci SAD-a",
            "ita": "Isole minori esterne degli Stati Uniti d'America",
            "jpn": "合衆国領有小離島",
            "nld": "Kleine afgelegen eilanden van de Verenigde Staten",
            "por": "Ilhas Menores Distantes dos Estados Unidos",
            "rus": "Внешние малые острова США",
            "spa": "Islas Ultramarinas Menores de Estados Unidos",
            "svk": "Menšie odľahlé ostrovy USA",
            "fin": "Yhdysvaltain asumattomat saaret",
            "zho": "美国本土外小岛屿"
        }
    },
    "VI": {
        "currency": "USD",
        "callingCode": "1340",
        "flag": "flag-vi",
        "name": {
            "common": "United States Virgin Islands",
            "deu": "Amerikanische Jungferninseln",
            "fra": "Îles Vierges des États-Unis",
            "hrv": "Američki Djevičanski Otoci",
            "ita": "Isole Vergini americane",
            "jpn": "アメリカ領ヴァージン諸島",
            "nld": "Amerikaanse Maagdeneilanden",
            "por": "Ilhas Virgens dos Estados Unidos",
            "rus": "Виргинские Острова",
            "spa": "Islas Vírgenes de los Estados Unidos",
            "svk": "Americké Panenské ostrovy",
            "fin": "Neitsytsaaret",
            "zho": "美属维尔京群岛"
        }
    },
    "UY": {
        "currency": "UYI",
        "callingCode": "598",
        "flag": "flag-uy",
        "name": {
            "common": "Uruguay",
            "deu": "Uruguay",
            "fra": "Uruguay",
            "hrv": "Urugvaj",
            "ita": "Uruguay",
            "jpn": "ウルグアイ",
            "nld": "Uruguay",
            "por": "Uruguai",
            "rus": "Уругвай",
            "spa": "Uruguay",
            "svk": "Uruguaj",
            "fin": "Uruguay",
            "zho": "乌拉圭"
        }
    },
    "UZ": {
        "currency": "UZS",
        "callingCode": "998",
        "flag": "flag-uz",
        "name": {
            "common": "Uzbekistan",
            "deu": "Usbekistan",
            "fra": "Ouzbékistan",
            "hrv": "Uzbekistan",
            "ita": "Uzbekistan",
            "jpn": "ウズベキスタン",
            "nld": "Oezbekistan",
            "por": "Uzbequistão",
            "rus": "Узбекистан",
            "spa": "Uzbekistán",
            "svk": "Uzbekistan",
            "fin": "Uzbekistan",
            "zho": "乌兹别克斯坦"
        }
    },
    "VU": {
        "currency": "VUV",
        "callingCode": "678",
        "flag": "flag-vu",
        "name": {
            "common": "Vanuatu",
            "deu": "Vanuatu",
            "fra": "Vanuatu",
            "hrv": "Vanuatu",
            "ita": "Vanuatu",
            "jpn": "バヌアツ",
            "nld": "Vanuatu",
            "por": "Vanuatu",
            "rus": "Вануату",
            "spa": "Vanuatu",
            "svk": "Vanuatu",
            "fin": "Vanuatu",
            "zho": "瓦努阿图"
        }
    },
    "VA": {
        "currency": "EUR",
        "callingCode": "3906698",
        "flag": "flag-va",
        "name": {
            "common": "Vatican City",
            "deu": "Vatikanstadt",
            "fra": "Cité du Vatican",
            "hrv": "Vatikan",
            "ita": "Città del Vaticano",
            "jpn": "バチカン市国",
            "nld": "Vaticaanstad",
            "por": "Cidade do Vaticano",
            "rus": "Ватикан",
            "spa": "Ciudad del Vaticano",
            "svk": "Vatikán",
            "fin": "Vatikaani",
            "zho": "梵蒂冈"
        }
    },
    "VE": {
        "currency": "VEF",
        "callingCode": "58",
        "flag": "flag-ve",
        "name": {
            "common": "Venezuela",
            "deu": "Venezuela",
            "fra": "Venezuela",
            "hrv": "Venezuela",
            "ita": "Venezuela",
            "jpn": "ベネズエラ・ボリバル共和国",
            "nld": "Venezuela",
            "por": "Venezuela",
            "rus": "Венесуэла",
            "spa": "Venezuela",
            "svk": "Venezuela",
            "fin": "Venezuela",
            "zho": "委内瑞拉"
        }
    },
    "VN": {
        "currency": "VND",
        "callingCode": "84",
        "flag": "flag-vn",
        "name": {
            "common": "Vietnam",
            "deu": "Vietnam",
            "fra": "Viêt Nam",
            "hrv": "Vijetnam",
            "ita": "Vietnam",
            "jpn": "ベトナム",
            "nld": "Vietnam",
            "por": "Vietname",
            "rus": "Вьетнам",
            "spa": "Vietnam",
            "svk": "Vietnam",
            "fin": "Vietnam",
            "zho": "越南"
        }
    },
    "WF": {
        "currency": "XPF",
        "callingCode": "681",
        "flag": "flag-wf",
        "name": {
            "common": "Wallis and Futuna",
            "deu": "Wallis und Futuna",
            "fra": "Wallis-et-Futuna",
            "hrv": "Wallis i Fortuna",
            "ita": "Wallis e Futuna",
            "jpn": "ウォリス・フツナ",
            "nld": "Wallis en Futuna",
            "por": "Wallis e Futuna",
            "rus": "Уоллис и Футуна",
            "spa": "Wallis y Futuna",
            "svk": "Wallis a Futuna",
            "fin": "Wallis ja Futuna",
            "zho": "瓦利斯和富图纳群岛"
        }
    },
    "EH": {
        "currency": "MAD",
        "callingCode": "212",
        "flag": "flag-eh",
        "name": {
            "common": "Western Sahara",
            "deu": "Westsahara",
            "fra": "Sahara Occidental",
            "hrv": "Zapadna Sahara",
            "ita": "Sahara Occidentale",
            "jpn": "西サハラ",
            "nld": "Westelijke Sahara",
            "por": "Saara Ocidental",
            "rus": "Западная Сахара",
            "spa": "Sahara Occidental",
            "svk": "Západná Sahara",
            "fin": "Länsi-Sahara",
            "zho": "西撒哈拉"
        }
    },
    "YE": {
        "currency": "YER",
        "callingCode": "967",
        "flag": "flag-ye",
        "name": {
            "common": "Yemen",
            "deu": "Jemen",
            "fra": "Yémen",
            "hrv": "Jemen",
            "ita": "Yemen",
            "jpn": "イエメン",
            "nld": "Jemen",
            "por": "Iémen",
            "rus": "Йемен",
            "spa": "Yemen",
            "svk": "Jemen",
            "fin": "Jemen",
            "zho": "也门"
        }
    },
    "ZM": {
        "currency": "ZMW",
        "callingCode": "260",
        "flag": "flag-zm",
        "name": {
            "common": "Zambia",
            "deu": "Sambia",
            "fra": "Zambie",
            "hrv": "Zambija",
            "ita": "Zambia",
            "jpn": "ザンビア",
            "nld": "Zambia",
            "por": "Zâmbia",
            "rus": "Замбия",
            "spa": "Zambia",
            "svk": "Zambia",
            "fin": "Sambia",
            "zho": "赞比亚"
        }
    },
    "ZW": {
        "currency": "ZWL",
        "callingCode": "263",
        "flag": "flag-zw",
        "name": {
            "common": "Zimbabwe",
            "deu": "Simbabwe",
            "fra": "Zimbabwe",
            "hrv": "Zimbabve",
            "ita": "Zimbabwe",
            "jpn": "ジンバブエ",
            "nld": "Zimbabwe",
            "por": "Zimbabwe",
            "rus": "Зимбабве",
            "spa": "Zimbabue",
            "svk": "Zimbabwe",
            "fin": "Zimbabwe",
            "zho": "津巴布韦"
        }
    },
    "AX": {
        "currency": "EUR",
        "callingCode": "358",
        "flag": "flag-ax",
        "name": {
            "common": "Åland Islands",
            "deu": "Åland",
            "fra": "Ahvenanmaa",
            "hrv": "Ålandski otoci",
            "ita": "Isole Aland",
            "jpn": "オーランド諸島",
            "nld": "Ålandeilanden",
            "por": "Alândia",
            "rus": "Аландские острова",
            "spa": "Alandia",
            "svk": "Alandy",
            "fin": "Ahvenanmaa",
            "zho": "奥兰群岛"
        }
    }
};
console.log(_.size(cca2Countries));//248

let obj={};
for(let item in cca2Countries){
    obj[item]=cca2Countries[item].currency;
}
//remove countries that does not have currency property
const cca2CountriesFilter = JSON.parse(JSON.stringify(obj));
console.log(_.size(cca2CountriesFilter));//247

let currArray=[];
for(let item in cca2CountriesFilter){
    currArray.push(cca2CountriesFilter[item]);
}
console.log(currArray.length);//247

const uniArray = [ ... new Set(currArray)];
console.log(uniArray.length);//156

const cca2Last = _.invert(cca2CountriesFilter);
console.log(_.size(cca2Last));//156


console.log('=====================================');
const currencyCountries = fs.readFileSync("./currencycode.txt", "utf-8");
//read file and convert into string
console.log(typeof currencyCountries);
const splitArray = currencyCountries.split('\n');
//convert string into array line by line
console.log(splitArray.length); //167

//only save first 3 characters
const currencyArray=[];
splitArray.forEach((item)=>{
    currencyArray.push(item.slice(0,3));
});
console.log(currencyArray.sort().length); //167

//filter cca2(length is 247) based on if it is in the currencyArray(length is 167)
//final cca2 country list
let finalCCA2Arr=[];
//corresponding currency code array, have same length
let finalCurrencyArr=[];
for(let item in cca2CountriesFilter){
    let index = currencyArray.indexOf(cca2CountriesFilter[item]);
    if(index > -1){
        finalCCA2Arr.push(item);
        finalCurrencyArr.push(cca2CountriesFilter[item]);
    }else{
        console.log(item,cca2CountriesFilter[item]);
    }
}
console.log(finalCCA2Arr.length);//244
console.log(finalCurrencyArr.length);//244

//find unique currency code in final currency array
const uniqueArray = [ ... new Set(finalCurrencyArr)];
console.log(uniqueArray.length);//153

