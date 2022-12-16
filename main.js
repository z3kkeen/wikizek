
// ELEMENT OBJECTS
const elements = {
    pyro:{
        light: "#F17C57",
        dark: "#DA4819",
        lightTrans: "rgba(218, 72, 25, 0.4)",
        darkTrans: "rgba(137, 101, 90, 0.4)",
        character: "images/character.png",
        weapon: "images/weapon.png",
        element: "images/element.png",
        artifacts: "images/artifacts.png",
        weapons: "images/weapons.png",
        talents: "images/talents.png"
    },
    hydro:{
        light: "#70D6F6",
        dark: "#27A8D1",
        character: "images/hydroCC.png",
        weapon: "images/hydroW1.png",
        element: "images/hydroEL.png",
    },
    anemo:{
        light: "#5CA591",
        dark: "#72E2C3",
    },
    electro:{
        light: "#B492D7",
        dark: "#7D5A89",
    },
    dendro:{
        light: "#23C18A",
        dark: "#6DF6AC",
    },
    cryo:{
        light: "#A0E9E5",
        dark: "#56C7C0",
    },
    geo:{
        light: "#E3B342",
        dark: "#B48F3A",
    },
}


// CHARACTER OBJECTS
const list = {
    pyro: [
        {
            id: 0,
            img: "images/characters/hutao.webp",
            name: "Hu Tao",
            weapon: "Polearm",
            element: "Pyro",
        },
        {
            id: 1,
            img: "images/characters/diluc.png",
            name: "Diluc",
            weapon: "Claymore",
            element: "Pyro",
        },
        {
            id: 2,
            img: "images/characters/yoimiya.webp",
            name: "Yoimiya",
            weapon: "Bow",
            element: "Pyro",
        },
        {
            id: 3,
            img: "images/characters/xiangling.webp",
            name: "Xiangling",
            weapon: "Polearm",
            element: "Pyro",
        },
        {
            id: 4,
            img: "images/characters/yanfei.webp",
            name: "Yanfei",
            weapon: "Catalyst",
            element: "Pyro",
        },
        {
            id: 5,
            img: "images/characters/thoma.png",
            name: "Thoma",
            weapon: "Polearm",
            element: "Pyro",
        },
        {
            id: 6,
            img: "images/characters/amber.png",
            name: "Amber",
            weapon: "Bow",
            element: "Pyro",
        },
        {
            id: 7,
            img: "images/characters/bennet.webp",
            name: "Bennet",
            weapon: "Sword",
            element: "Pyro",
        },
        {
            id: 8,
            img: "images/characters/xinyan.webp",
            name: "Xinyan",
            weapon: "Claymore",
            element: "Pyro",
        },
        {
            id: 9,
            img: "images/characters/klee.webp",
            name: "Klee",
            weapon: "Catalyst",
            element: "Pyro",
        },
    ],
    hydro: [
        {
            id: 0,
            img: "images/characters/ayato.png",
            name: "Kamisato Ayato",
            weapon: "Sword",
            element: "Hydro",
        },
        {
            id: 1,
            img: "images/characters/kokomi.png",
            name: "Sanganomiya Kokomi",
            weapon: "Catalyst",
            element: "Hydro",
        },
        {
            id: 2,
            img: "images/characters/mona.webp",
            name: "Mona Megistus",
            weapon: "Catalyst",
            element: "Hydro",
        },
        {
            id: 3,
            img: "images/characters/nilou.webp",
            name: "Nilou",
            weapon: "Sword",
            element: "Hydro",
        },
        {
            id: 4,
            img: "images/characters/childe.png",
            name: "Tartaglia / Childe / Ajax",
            weapon: "Bow",
            element: "Hydro",
        },
        {
            id: 5,
            img: "images/characters/yelan.png",
            name: "Yelan",
            weapon: "Bow",
            element: "Hydro",
        },
        {
            id: 6,
            img: "images/characters/barbra.webp",
            name: "Barbra",
            weapon: "Catalyst",
            element: "Hydro",
        },
        {
            id: 7,
            img: "images/characters/candace.png",
            name: "Candace",
            weapon: "Polearm",
            element: "Hydro",
        },
        {
            id: 8,
            img: "images/characters/xingqiu.webp",
            name: "Xingqiu",
            weapon: "Sword",
            element: "Hydro",
        },
    ],
    anemo: [
        {
            id: 0,
            img: "images/characters/jean.webp",
            name: "Jean",
            weapon: "Sword",
            element: "Anemo",
        },
        {
            id: 1,
            img: "images/characters/kazuha.png",
            name: "Kadehara Kazuha",
            weapon: "Sword",
            element: "Anemo",
        },
        {
            id: 2,
            img: "images/characters/xiao.webp",
            name: "Xiao",
            weapon: "Polearm",
            element: "Anemo",
        },
        {
            id: 3,
            img: "images/characters/venti.webp",
            name: "Venti",
            weapon: "Bow",
            element: "Anemo",
        },
        {
            id: 4,
            img: "images/characters/traveler.webp",
            name: "Traveler (Lumine / Aether)",
            weapon: "Sword",
            element: "Anemo",
        },
        {
            id: 5,
            img: "images/characters/heizou.webp",
            name: "Heizou",
            weapon: "Catalyst",
            element: "Anemo",
        },
        {
            id: 6,
            img: "images/characters/sucrose.png",
            name: "Sucrose",
            weapon: "Catalyst",
            element: "Anemo",
        },
        {
            id: 7,
            img: "images/characters/sayu.webp",
            name: "Sayu",
            weapon: "Claymore",
            element: "Anemo",
        },
    ],
    electro: [
        {
            id: 0,
            img: "images/characters/keqing.webp",
            name: "Keqing",
            weapon: "Sword",
            element: "Electro",
        },
        {
            id: 1,
            img: "images/characters/yaemiko.webp",
            name: "Yae Miko",
            weapon: "Catalyst",
            element: "Electro",
        },
        {
            id: 2,
            img: "images/characters/raiden.webp",
            name: "Raiden Ei",
            weapon: "Polearm",
            element: "Electro",
        },
        {
            id: 3,
            img: "images/characters/sara.png",
            name: "Sara",
            weapon: "Bow",
            element: "Electro",
        },
        {
            id: 4,
            img: "images/characters/beidou.webp",
            name: "Beidou",
            weapon: "Claymore",
            element: "Electro",
        },
        {
            id: 5,
            img: "images/characters/lisa.webp",
            name: "Lisa",
            weapon: "Catalyst",
            element: "Electro",
        },
        {
            id: 6,
            img: "images/characters/razor.webp",
            name: "Razor",
            weapon: "Claymore",
            element: "Electro",
        },
        {
            id: 7,
            img: "images/characters/fischl.webp",
            name: "Fischl",
            weapon: "Bow",
            element: "Electro",
        },
        {
            id: 8,
            img: "images/characters/kuki.png",
            name: "Kuki Shinobu",
            weapon: "Sword",
            element: "Electro",
        },
        {
            id: 9,
            img: "images/characters/traveler.webp",
            name: "Traveler (Lumine / Aether)",
            weapon: "Sword",
            element: "Electro",
        },
        {
            id: 10,
            img: "images/characters/cyno.png",
            name: "Cyno",
            weapon: "Polearm",
            element: "Electro",
        },
        {
            id: 11,
            img: "images/characters/dori.webp",
            name: "Dpri",
            weapon: "Claymore",
            element: "Electro",
        },
    ],
    dendro: [
        {
            id: 9,
            img: "images/characters/tighnari.webp",
            name: "Tighnari",
            weapon: "Bow",
            element: "Dendro",
        },
        {
            id: 1,
            img: "images/characters/traveler.webp",
            name: "Traveler (Lumine / Aether)",
            weapon: "Sword",
            element: "Dendro",
        },
        {
            id: 2,
            img: "images/characters/nahida.png",
            name: "Nahida",
            weapon: "Calatyst",
            element: "Dendro",
        },
        {
            id: 3,
            img: "images/characters/collei.webp",
            name: "Collei",
            weapon: "Bow",
            element: "Dendro",
        },
    ],
    cryo: [
        {
            id: 0,
            img: "images/characters/ayaka.webp",
            name: "Kamisato Ayaka",
            weapon: "Sword",
            element: "Cryo",
        },
        {
            id: 1,
            img: "images/characters/eula.webp",
            name: "Eula",
            weapon: "Claymore",
            element: "Cryo",
        },
        {
            id: 2,
            img: "images/characters/ganyu.webp",
            name: "Ganyu",
            weapon: "Bow",
            element: "Cryo",
        },
        {
            id: 3,
            img: "images/characters/qiqi.webp",
            name: "Qiqi",
            weapon: "Sword",
            element: "Cryo",
        },
        {
            id: 4,
            img: "images/characters/shenhe.png",
            name: "Shenhe",
            weapon: "Polearm",
            element: "Cryo",
        },
        {
            id: 5,
            img: "images/characters/chongyun.webp",
            name: "Chongyun",
            weapon: "Claymore",
            element: "Cryo",
        },
        {
            id: 6,
            img: "images/characters/diona.png",
            name: "Diona",
            weapon: "Bow",
            element: "Cryo",
        },
        {
            id: 7,
            img: "images/characters/kaeya.webp",
            name: "Kaeya",
            weapon: "Sword",
            element: "Cryo",
        },
        {
            id: 8,
            img: "images/characters/rosaria.webp",
            name: "Rosaria",
            weapon: "Polearm",
            element: "Cryo",
        },
        {
            id: 9,
            img: "images/characters/layla.png",
            name: "Layla",
            weapon: "Sword",
            element: "Cryo",
        },
    ],
    geo: [
        {
            id: 0,
            img: "images/characters/albedo.png",
            name: "Albedo",
            weapon: "Sword",
            element: "Geo",
        },
        {
            id: 1,
            img: "images/characters/itto.webp",
            name: "Itto",
            weapon: "Claymore",
            element: "Geo",
        },
        {
            id: 2,
            img: "images/characters/zhongli.webp",
            name: "Zhongli",
            weapon: "Polearm",
            element: "Geo",
        },
        {
            id: 3,
            img: "images/characters/traveler.webp",
            name: "Traveler (Lumine / Aether)",
            weapon: "Sword",
            element: "Geo",
        },
        {
            id: 4,
            img: "images/characters/gorou.webp",
            name: "Gorou",
            weapon: "Bow",
            element: "Geo",
        },
        {
            id: 5,
            img: "images/characters/ningguang.webp",
            name: "Ningguang",
            weapon: "Catalyst",
            element: "Geo",
        },
        {
            id: 6,
            img: "images/characters/noelle.webp",
            name: "Noelle",
            weapon: "Claymore",
            element: "Geo",
        },
        {
            id: 7,
            img: "images/characters/yunjin.webp",
            name: "Yun Jin",
            weapon: "Polearm",
            element: "Geo",
        },
    ]
}

function createCircle(type) {
    const parent = document.getElementById("main");
    
            // removes previous children
            parent.replaceChildren()
    
    for (let i = 0; i < list[type].length; i++) {
        const link = document.createElement("a")
        const circle = document.createElement("img");
        circle.src = list[type][i].img

        // decides the address
        link.href = "index2.html?char=" + list[type][i].id + "&type=" + type; 

        // gives circles a class of their own element
        circle.classList.add(type) 

        link.appendChild(circle)

        // appends the 'a' element into main
        document.querySelector("main").appendChild(link)
        
        // gives id to circle based on element type
        circle.setAttribute('id','circle' + type);
    }
}


// decides what color / images will be used in index2
function initIndex2 () {

    const url = new URL (window.location.href)
    const root = document.querySelector(':root');
    const element = elements[url.searchParams.get("type")] 
    const char = list[url.searchParams.get("type")][url.searchParams.get("char")]

    document.querySelector("#name").innerText = char.name
    document.querySelector("#weapon").innerText = char.weapon
    document.querySelector("#element").innerText = char.element
    
    document.querySelector("#ccimg").src = char.img

    // selects index2 color theme
    root.style.setProperty("--lighter", element.light)
    root.style.setProperty("--darker", element.dark)
    root.style.setProperty("--lighter-trans", element.lightTrans)
    root.style.setProperty("--darker-trans", element.darkTrans)


    // picks photos based on element type FROM "element" array
    document.querySelector("#char").src = element.character
    document.querySelector("#weap").src = element.weapon
    document.querySelector("#elem").src = element.element
    document.querySelector("#artifs").src = element.artifacts
    document.querySelector("#weaps").src = element.weapons
    document.querySelector("#tals").src = element.talents
}