const modalImage = document.getElementById("modalImage");
const flashcards = document.querySelectorAll(".flashcard");
//object mapping
const imagePathMap = {
    "Aatrox": "/Champion Icons/Aatrox_Background.webp",
    "Ahri": "/Champion Icons/Ahri_Background.webp",
    "Akali": "/Champion Icons/Akali_Background.webp",
    "Akshan": "/Champion Icons/Akshan_Background.webp",
    "Alistar": "/Champion Icons/Alistar_Background.webp",
    "Amumu": "/Champion Icons/Amumu_Background.webp",
    "Anivia": "/Champion Icons/Anivia_Background.webp",
    "Annie": "/Champion Icons/Annie_Background.webp",
    "Aphelios": "/Champion Icons/Aphelios_Background.webp",
    "Ashe": "/Champion Icons/Ashe_Background.webp",
    "Aurelion Sol": "/Champion Icons/AurelionSol_Background.webp",
    "Azir": "/Champion Icons/Azir_Background.webp",
    "Bard": "/Champion Icons/Bard_Background.webp",
    "Bel'Veth": "/Champion Icons/BelVeth_Background.webp",
    "Blitzcrank": "/Champion Icons/Blitzcrank_Background.webp",
    "Brand": "/Champion Icons/Brand_Background.webp",
    "Braum": "/Champion Icons/Braum_Background.webp",
    "Briar": "/Champion Icons/Briar_Background.webp",
    "Caitlyn": "/Champion Icons/Caitlyn_Background.webp",
    "Camille": "/Champion Icons/Camille_Background.webp",
    "Cassiopeia": "/Champion Icons/Cassiopeia_Background.webp",
    "Cho'Gath": "/Champion Icons/ChoGath_Background.webp",
    "Corki": "/Champion Icons/Corki_Background.webp",
    "Darius": "/Champion Icons/Darius_Background.webp",
    "Diana": "/Champion Icons/Diana_Background.webp",
    "Dr. Mundo": "/Champion Icons/DrMundo_Background.webp",
    "Draven": "/Champion Icons/Draven_Background.webp",
    "Ekko": "/Champion Icons/Ekko_Background.webp",
    "Elise": "/Champion Icons/Elise_Background.webp",
    "Evelynn": "/Champion Icons/Evelynn_Background.webp",
    "Ezreal": "/Champion Icons/Ezreal_Background.webp",
    "Fiddlesticks": "/Champion Icons/Fiddlesticks_Background.webp",
    "Fiora": "/Champion Icons/Fiora_Background.webp",
    "Fizz": "/Champion Icons/Fizz_Background.webp",
    "Galio": "/Champion Icons/Galio_Background.webp",
    "Gangplank": "/Champion Icons/Gankplank_Background.webp",
    "Garen": "/Champion Icons/Garen_Background.webp",
    "Gnar": "/Champion Icons/Gnar_Background.webp",
    "Gragas": "/Champion Icons/Gragas_Background.webp",
    "Graves": "/Champion Icons/Graves_Background.webp",
    "Gwen": "/Champion Icons/Gwen_Background.webp",
    "Hecarim": "/Champion Icons/Hecarim_Background.webp",
    "Heimerdinger": "/Champion Icons/Heimerdinger_Background.webp",
    "Hwei": "/Champion Icons/Hwei_Background.webp",
    "Illaoi": "/Champion Icons/Illaoi_Background.webp",
    "Irelia": "/Champion Icons/Irelia_Background.webp",
    "Ivern": "/Champion Icons/Ivern_Background.webp",
    "Janna": "/Champion Icons/Janna_Background.webp",
    "Jarvan IV": "/Champion Icons/JarvanIV_Background.webp",
    "Jax": "/Champion Icons/Jax_Background.webp",
    "Jayce": "/Champion Icons/Jayce_Background.webp",
    "Jhin": "/Champion Icons/Jhin_Background.webp",
    "Jinx": "/Champion Icons/Jinx_Background.webp",
    "K'Sante": "/Champion Icons/KSante_Background.webp",
    "Kai'Sa": "/Champion Icons/KaiSa_Background.webp",
    "Kalista": "/Champion Icons/Kalista_Background.webp",
    "Karma": "/Champion Icons/Karma_Background.webp",
    "Karthus": "/Champion Icons/Karthus_Background.webp",
    "Kassadin": "/Champion Icons/Kassadin_Background.webp",
    "Katarina": "/Champion Icons/Katarina_Background.webp",
    "Kayle": "/Champion Icons/Kayle_Background.webp",
    "Kayn": "/Champion Icons/Kayn_Background.webp",
    "Kennen": "/Champion Icons/Kennen_Background.webp",
    "Kha'Zix": "/Champion Icons/KhaZix_Background.webp",
    "Kindred": "/Champion Icons/Kindred_Background.webp",
    "Kled": "/Champion Icons/Kled_Background.webp",
    "Kog'Maw": "/Champion Icons/KogMaw_Background.webp",
    "LeBlanc": "/Champion Icons/LeBlanc_Background.webp",
    "Lee Sin": "/Champion Icons/LeeSin_Background.webp",
    "Leona": "/Champion Icons/Leona_Background.webp",
    "Lillia": "/Champion Icons/Lillia_Background.webp",
    "Lissandra": "/Champion Icons/Lissandra_Background.webp",
    "Lucian": "/Champion Icons/Lucian_Background.webp",
    "Lulu": "/Champion Icons/Lulu_Background.webp",
    "Lux": "/Champion Icons/Lux_Background.webp",
    "Malphite": "/Champion Icons/Malphite_Background.webp",
    "Malzahar": "/Champion Icons/Malzahar_Background.webp",
    "Maokai": "/Champion Icons/Maokai_Background.webp",
    "Master Yi": "/Champion Icons/MasterYi_Background.webp",
    "Milio": "/Champion Icons/Milio_Background.webp",
    "Miss Fortune": "/Champion Icons/MissFortune_Background.webp",
    "Mordekaiser": "/Champion Icons/Mordekaiser_Background.webp",
    "Morgana": "/Champion Icons/Morgana_Background.webp",
    "Naafiri": "/Champion Icons/Naafiri_Background.webp",
    "Nami": "/Champion Icons/Nami_Background.webp",
    "Nasus": "/Champion Icons/Nasus_Background.webp",
    "Nautilus": "/Champion Icons/Nautilus_Background.webp",
    "Neeko": "/Champion Icons/Neeko_Background.webp",
    "Nidalee": "/Champion Icons/Nidalee_Background.webp",
    "Nilah": "/Champion Icons/Nilah_Background.webp",
    "Nocturne": "/Champion Icons/Nocturne_Background.webp",
    "Nunu & Willump": "/Champion Icons/Nunu_Background.webp",
    "Olaf": "/Champion Icons/Olaf_Background.webp",
    "Orianna": "/Champion Icons/Orianna_Background.webp",
    "Ornn": "/Champion Icons/Ornn_Background.webp",
    "Pantheon": "/Champion Icons/Pantheon_Background.webp",
    "Poppy": "/Champion Icons/Poppy_Background.webp",
    "Pyke": "/Champion Icons/Pyke_Background.webp",
    "Qiyana": "/Champion Icons/Qiyana_Background.webp",
    "Quinn": "/Champion Icons/Quinn_Background.webp",
    "Rakan": "/Champion Icons/Rakan_Background.webp",
    "Rammus": "/Champion Icons/Rammus_Background.webp",
    "Rek'Sai": "/Champion Icons/RekSai_Background.webp",
    "Rell": "/Champion Icons/Rell_Background.webp",
    "Renata Glasc": "/Champion Icons/RenataGlasc_Background.webp",
    "Renekton": "/Champion Icons/Renekton_Background.webp",
    "Rengar": "/Champion Icons/Rengar_Background.webp",
    "Riven": "/Champion Icons/Riven_Background.webp",
    "Rumble": "/Champion Icons/Rumble_Background.webp",
    "Ryze": "/Champion Icons/Ryze_Background.webp",
    "Samira": "/Champion Icons/Samira_Background.webp",
    "Sejuani": "/Champion Icons/Sejuani_Background.webp",
    "Senna": "/Champion Icons/Senna_Background.webp",
    "Seraphine": "/Champion Icons/Seraphine_Background.webp",
    "Sett": "/Champion Icons/Sett_Background.webp",
    "Shaco": "/Champion Icons/Shaco_Background.webp",
    "Shen": "/Champion Icons/Shen_Background.webp",
    "Shyvana": "/Champion Icons/Shyvana_Background.webp",
    "Singed": "/Champion Icons/Singed_Background.webp",
    "Sion": "/Champion Icons/Sion_Background.webp",
    "Sivir": "/Champion Icons/Sivir_Background.webp",
    "Skarner": "/Champion Icons/Skarner_Background.webp",
    "Smolder": "/Champion Icons/Smolder_Background.webp",
    "Sona": "/Champion Icons/Sona_Background.webp",
    "Soraka": "/Champion Icons/Soraka_Background.webp",
    "Swain": "/Champion Icons/Swain_Background.webp",
    "Sylas": "/Champion Icons/Sylas_Background.webp",
    "Syndra": "/Champion Icons/Syndra_Background.webp",
    "Tahm Kench": "/Champion Icons/TahmKench_Background.webp",
    "Taliyah": "/Champion Icons/Taliyah_Background.webp",
    "Talon": "/Champion Icons/Talon_Background.webp",
    "Taric": "/Champion Icons/Taric_Background.webp",
    "Teemo": "/Champion Icons/Teemo_Background.webp",
    "Thresh": "/Champion Icons/Thresh_Background.webp",
    "Tristana": "/Champion Icons/Tristana_Background.webp",
    "Trundle": "/Champion Icons/Trundle_Background.webp",
    "Tryndamere": "/Champion Icons/Tryndamere_Background.webp",
    "Twisted Fate": "/Champion Icons/TwistedFate_Background.webp",
    "Twitch": "/Champion Icons/Twitch_Background.webp",
    "Udyr": "/Champion Icons/Udyr_Background.webp",
    "Urgot": "/Champion Icons/Urgot_Background.webp",
    "Varus": "/Champion Icons/Varus_Background.webp",
    "Vayne": "/Champion Icons/Vayne_Background.webp",
    "Veigar": "/Champion Icons/Veigar_Background.webp",
    "Vel'Koz": "/Champion Icons/VelKoz_Background.webp",
    "Vi": "/Champion Icons/Vi_Background.webp",
    "Viktor": "/Champion Icons/Viktor_Background.webp",
    "Vladimir": "/Champion Icons/Vladimir_Background.webp",
    "Volibear": "/Champion Icons/Volibear_Background.webp",
    "Warwick": "/Champion Icons/Warwick_Background.webp",
    "Wukong": "/Champion Icons/Wukong_Background.webp",
    "Xayah": "/Champion Icons/Xayah_Background.webp",
    "Xerath": "/Champion Icons/Xerath_Background.webp",
    "Xin Zhao": "/Champion Icons/XinZhao_Background.webp",
    "Yasuo": "/Champion Icons/Yasuo_Background.webp",
    "Yone": "/Champion Icons/Yone_Background.webp",
    "Yorick": "/Champion Icons/Yorick_Background.webp",
    "Yuumi": "/Champion Icons/Yuumi_Background.webp",
    "Zac": "/Champion Icons/Zac_Background.webp",
    "Zed": "/Champion Icons/Zed_Background.webp",
    "Ziggs": "/Champion Icons/Ziggs_Background.webp",
    "Zilean": "/Champion Icons/Zilean_Background.webp",
    "Zoe": "/Champion Icons/Zoe_Background.webp",
    "Zyra": "/Champion Icons/Zyra_Background.webp",
};

// event listener for flashcards
flashcards.forEach(flashcard => {
    flashcard.addEventListener('click', () => {
        overlay.style.display = "flex";
        modal.style.display = "block";
        modalCover.textContent = "";


        const contentValue = flashcard.getAttribute('data-content');
        modalImage.textContent = contentValue;
        const imagePath = imagePathMap[contentValue] || '/path/to/default-image.webp';
        modalImage.src = imagePath;

        //creating new image in the modal
        const newImage = document.createElement('img');
        newImage.src = imagePath;
        newImage.alt = contentValue;
        modalCover.appendChild(newImage);
    })
})
closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    modal.style.display = 'none';
});

closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function closeModal() {

    overlay.style.display = 'none';
    modal.style.display = 'none';
}

// function dark_theme() {
//     const body = document.getElementById("body");
//     body.classList.toggle("dark_theme");
// }

function search_champions() {
    // var input, filter, container, cards, title, i;
    // input = document.getElementById("searchbar");
    // filter = input.value.replace(/\s/g, '').toUpperCase();
    // container = document.getElementById("container");
    // cards = container.getElementsByClassName("flashcard");

    // for (i = 0; i < cards.length; i++) {
    //     title = cards[i].querySelector("#champion_name");

    //     
    //     if (title) {
    //         if (title.textContent.toUpperCase().indexOf(filter) > -1) {
    //             cards[i].style.display = "";
    //         }
    //         else {
    //             cards[i].style.display = "none";
    //         }
    //     }
    // }
    var input, filter, container, cards;
    input = document.getElementById("searchbar");
    filter = input.value.replace(/\s/g, '').toUpperCase();
    container = document.getElementById("container");
    cards = container.getElementsByClassName("flashcard");
    for (let i = 0; i < cards.length; i++) {
        var dataContent = cards[i].getAttribute("data-content");
        if (dataContent) {
            if (dataContent.toUpperCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            }
            else {
                cards[i].style.display = "none";
            }
        }
    }


}
document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        var champions = ["Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe",
            "Aurelion Sol", "Azir", "Bard", "Bel'Veth", "Blitzcrank", "Brand", "Braum", "Briar", "Caitlyn", "Camille",
            "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko",
            "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank",
            "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei", "Illaoi", "Irelia",
            "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "K'Sante", "Kai'Sa", "Kalista",
            "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix",
            "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra",
            "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Milio", "Miss Fortune",
            "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne",
            "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana",
            "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble",
            "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana",
            "Singed", "Sion", "Sivir", "Skarner", "Smolder", "Sona", "Soraka", "Swain", "Sylas", "Syndra",
            "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle",
            "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar",
            "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah",
            "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs",
            "Zilean", "Zoe", "Zyra"];
        $("#searchbar").autocomplete({
            source: champions
        });

    });
});

fetch("championData.json")
    .then(response => response.json())
    .then(champions => {
        champions.forEach(champion => {
            var championId = champion.id;
            var championName = champion.name;
            var championQuote = champion.quote;
            var loreContent = champion.lore;
            
            console.log(championId);
            console.log(championName);
            console.log(championQuote); //testing
            console.log(loreContent);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));  