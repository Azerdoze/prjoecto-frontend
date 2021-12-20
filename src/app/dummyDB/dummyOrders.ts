import { Orders } from "../models/orders";

export const DummyOrders: Orders [] = [
    {
        ordername: "Jaegers",
        code: "jaeger",
        shortdescription: "Hunters of the Unknown, the unsong heroes of humankind. Forever living from the scraps, but always ready to use their swords in the fight to bolster humanity",
        realname: "Jagers van Onbekend",
        description: 
        `
        <p>The Jaegers are the oldest living organization in the human kingdoms. Born from the very first settlers to guard them in their goal of securing the lands of Arthan Uthyl from the locals, now known as the Denizens of the Old World.</p>

        <p>These volunteers, later conscripts, were subject to horrific alchemy that mutated them into something different. Most of them die during the ceremony, but those that survive live on to become professional monster hunters, also known as Jaegers.</p>
        <p>Jaegers are divided into different kinds of morals and teachings, thus there are several ways of thought, or schools. Each one might specialize in different monsters, or fighting style as well.</p>

        <p>Though the most common is the Wulfaz. These hunters have been most active in the northern lands of Boyarska, but they have also known to appear in central Varsemia once in a while.</p>
        <p>They appear when whispers of something wicked and vile is striking lonely villages, be it a dragon attack or a ghoul uprising.</p>

        <p>Being the oldest known organization hasn't been easy on them. Conscripts have become less frequent and some say that the development and the scarcity of Old World Denizens has pushed them to the brink of extinction.</p>
        <p>It's true that most of the human kingdoms of Arthan Uthyl have become rather safe, but there is still a lot of untamed land in them, and where man hasn't reached, the Denizens lurk deep.</p>

        <p>Similar to the Arcane Hounds, the Jaegers are usually seen by general populace with mistrust. They see them mostly as cutthroats, odd job mercenaries. Their cold demeanor doesn't help, but unlike the Arcane Hounds, Jaegers still have a lot of empathy and emotions burning inside.</p>
        `,
        orderbanner: `<img src="../../assets/Images/jaegers.png" alt="Flag of the Jaegers Wulfaz School" class="banner">`,
        scope: "Global",
        alignment: "Lawful Neutral",
        headquarters: "Decentralized",
        values:  "Integrity and Humanity",
        goals: "Ensure the safety of locals against evil denizens of the Old World and Abominations, in exchange for coin",
        allies: "Mercenary groups and adventures willing to help hunt any wicked creatures",
        enemies: "Denizens of the Old World, Abominations, Undead", 
        rivals:  "Other Jaeger schools"
    },
    {
        ordername: "The Dark Blades",
        code: "donkere",
        shortdescription: "Amidst the Darkness an invisible hand strikes with cunning and brutality against humanity.",
        realname: "Donkere Dolken",
        description: `
        <p>Since the founding of the arrival of the humans in the continent there has been an invisible threat slowly trying to push humanity out of their feet. An unrelenting darkness that looms amidst the shadows and plots the downfall of any just man. Behold the Donkere Dolk - The Dark Blades.</p>

        <p>No one knows for sure where they came from or why they are so eager in their objective. Though the most common tale is that they came among the first men, hidden amidst the ships, to make sure that humanity doesn't succeed here where they failed in lands forgotten.</p>
        <p>The Donkere have a loose organization, working mostly through cells, small groups of individuals. Their motives are always sinister and macabre. A brutal message to ensure they are never forgotten, thus they are widely seen as enemies of mankind.</p>

        <p>Truth is, most of the individuals under the Donkere Dolk banner have long since abdicated their humanity. Some due to curse, others through magical means, these elite forces of darkness have been known to plot humanity's downfall among the forces of the Darar and the Great Unknown.</p>
        <p>As the name implies, they are mostly known for being assassins of the highest order, having more than a couple of king's heads under their belt.</p>

        <p>While they were more of a threat during ages past, they still linger in the darkness, ready to pounce and destroy any small building of hope.</p>
        
        `,
        orderbanner: `<img src="../../assets/Images/jaegers.png" alt="Flag of the Jaegers Wulfaz School" class="banner">`,
        scope: "Global",
        alignment: "Lawful Evil",
        headquarters: "Decentralized",
        values:  "Wickedness and Depravity",
        goals: "To remind humanity of their frailty and destroy any enduring symbols of hope",
        allies: "Denizens of the Old World",
        enemies: "Human Kingdoms", 
        rivals:  "none"
    },
    {
        ordername: "The Arcane Hounds",
        code: "hounds",
        shortdescription: "Hunting unlicensed arcane users is there passion. Subduing them is an extra pleasure.",
        realname: "Shenmi De Liquan",
        description: `
        <p>The Arcane Hounds were born after the Worm'Instrel - Sephterak wars that left Najha into a desert. The Minzao, under the guidance of the dragon Shen Long, decreed that no arcane user could be taught and use it's magic without the minzao seal and created a group of elite individuals to work as a police unit.</p>

        <p>Over the years the group has grown into a massive agency, where their agents are borderline inhuman. They are immune to arcane magic and they can sniff it and track it. Making them extremely dangerous.</p>
        <p>It is true that the Arcane Hounds are almost inhuman. Most of them lost any empathy. Their eyes are nothing but burning blue orbs and their bodies are filled with arcane tattoos. These people have sacrificed their humanity to ensure there is no another cataclysm.</p>

        <p>It's rare to see a group of them together. Usually just one is enough to bring suspicion and panic among the populace. Their outlandish looks make them look suspicious and not to be trusted, and combined with a lack of empathy, brings a usually lack of cooperation with the populace.</p>
        <p>Still, they are unrelenting on their task, and it is rare to see one fail.</p>
        `,
        orderbanner: `<img src="../../assets/Images/jaegers.png" alt="Flag of the Jaegers Wulfaz School" class="banner">`,
        scope: "Global",
        alignment: "Lawful Neutral",
        headquarters: "Minzao Draconic Protectorate",
        values:  "Discipline and Order",
        goals: "To ensure that all arcane magic is properly regulated, and swiftly eliminate any uncontrolled ones.",
        allies: "Human Kingdoms",
        enemies: "Unsanctioned arcane users", 
        rivals:  "none"
    },
    {
        ordername: "The Silk Corporation",
        code: "silk",
        shortdescription: "Under the shadow of a normal market, this emporium trades secrets and favours.",
        realname: "Corporatio Sericum",
        description: `
        <p>Beneath the markets of Varsemia and Najha lies a living organism. It is hidden for the untrained eye, but it's beating heart is unceasing. Welcome to the Silk Corporation.</p>

        <p>The Silk Corporation was born from a group of greedy merchants that got bored with the antics of the united league of merchants of Arthan Uthyl and wanted a place where trade could be done with no rules. If you want something, they can get it for you.</p>
        <p>It has grown from a simple underground market to a more complex structure. After all, the most valuable commodity is secrets and favours.</p>

        <p>Thus, the company has become kind of a rogue's guild, with a strong financial presence. No one knows who the leaders are but every underground base seems to have a manager.</p>
        <p>While they trade mostly with usual currency, they do have their own currency. This special coins are only given to those whom the corporation deems as worthy and can be exchanged for a favour or secret.</p>

        <p>The merchant's league tries hard to fight and dismantle it, but like an hydra, for every market they manage to close, two more appear, in the darkness of the cities.</p>
        <p>It's not an enterily good venture also. Inumerous lives have been lost to vices available in the dark pits of the silk corporation.</p>
        `,
        orderbanner: `<img src="../../assets/Images/jaegers.png" alt="Flag of the Jaegers Wulfaz School" class="banner">`,
        scope: "Regional (Varsemia and Najha)",
        alignment: "Lawful Neutral",
        headquarters: "Cretian Empire - Septum",
        values:  "Coin",
        goals: "To ensure there's offer for anything a costumer is ready to pay for.",
        allies: "Shady Businessmen",
        enemies: "League of Merchants", 
        rivals:  "League of Merchants"
    },
    {
        ordername: "The Blood Wolves Pack",
        code: "ulverskare",
        shortdescription: "The biggest mercenary company in the Northern Lands of Arthan Uthyl.",
        realname: "Blod Ulverskare",
        description: `
        <p>There was once an incident on the now defunct house Ben Yahia, in Belshimor. The scandal involved a few men escaping the inner cells of the mighty house and showing to the general public that Ben Yahia was doing experiments on humans.</p>

        <p>Of all the escapees, only one managed to survive. His name is Glankral Stonebird. He is an amalgam of grafts stitched together making him insanely powerful.</p>
        <p>After surviving the scandal he moved north and found a home amidst the snowy blankets of Istid. There he was recognized by the community as a capable fighter. Warriors kept moving towards his wing and he eventually grew strong enough to have his own banner, thus the Blood Wolves Pack was born.</p>

        <p>Much like the Hela's Angels in the South, these mercenaries accept any kind of job. Though while Hela's have been known to be proactive in more cunning jobs, The Blood Wolves Pack is a straight forward, brute force mercenary band. They value combat prowess above anything and the bloodier the job, the more enticing it becomes.</p>
        <p>With their headquarters in Istid Trelleborg, they are a band with an exceptional track record, making them elite, but rather expensive, mercenaries for hire.</p>
         `,
        orderbanner: `<img src="../../assets/Images/jaegers.png" alt="Flag of the Jaegers Wulfaz School" class="banner">`,
        scope: "Northern Human Kingdoms",
        alignment: "True Neutral",
        headquarters: "Istid",
        values:  "Strength and Resolve",
        goals: "Where there is trouble there is coin. To solve any problem for coin.",
        allies: "none",
        enemies: "Denizens of the Old World, Abominations, Undead, Rogue Mercenaries", 
        rivals:  "Hela's Angels"
    },
    {
        ordername: "Hela's Angels",
        code: "angehela",
        shortdescription: "The biggest mercenary in the Southern Lands of Arthan Uthyl",
        realname: "Angele d'Hela",
        description: `
        <p>Hela's Angels story began when a boat filled with mercenaries arrived at the shores of Baciria, when this was still Cretian lands. The boat was filled with mercenaries from all over the continent, with promises of riches and united against tiranny.</p>

        <p>Through quick and decisive attacks, this group kept pushing, taking village after village until the showdown at Kerkyra, where several other mercenary groups joined them against the cretian forces.</p>
        <p>Victory that day marked the beginning of the creation of what would become the city-state of Baciria, and the mercenaries they joined in the coastal village of Edisea and, united under one banner became the Hela's Angels mercenary company.</p>

        <p>Since then, the village has grown into a city, boasting trade, and the company after several successful jobs, became famous throughout the continent. And even though they usually work more in the Southern Area of the continent, they are available to work in any place.</p>
        <p>The pillars of the company are it's founding fathers and leaders. Vahu Mana is an armatian holy warrior of Zistra. Short lipped, but with a just heart. Magnus Ulf is a meditative gernian shaman, whose past was tainted by the cretian invasions, lastly there was Zharick Barcagid. A short tempered, scarred barcagenian slayer that eventually left the band after a serious argument, though his place in the ladder was kept.</p>

        <p>Through the years the band as expanded with mercenaries from all over the continent joining them. Even nowadays they are always ready to take arms and fight for a good cause, and a heavy purse.</p>
        `,
        orderbanner: `<img src="../../assets/Images/jaegers.png" alt="Flag of the Jaegers Wulfaz School" class="banner">`,
        scope: "Southern Human Kingdoms",
        alignment: "True Neutral",
        headquarters: "Baciria - Edisea",
        values:  "Purpose and Willpower",
        goals: "To investigate, search and resolve any issues the populace might need, in exchange for coin",
        allies: "Baciria",
        enemies: "Denizens of the Old World, Abominations, Undead, Rogue Mercenaries", 
        rivals:  "The Blood Wolves Pack"
    }
]