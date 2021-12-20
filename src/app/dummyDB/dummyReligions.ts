import { Religions } from "../models/religions";

export const DummyReligions: Religions [] = [
    {
        name: "Beveritan Polytheism",
        code: "bevpol",
        shortdescription: "The pantheon of the beveritans. Based around an epic of nine warriors of old that through their feats ascended to godhood..",
        description: 
        `
        <p>The Beveritan Pantheon is polytheistic, consisting of nine main gods and each representing an alignment. It's story is based on an epic about nine warriors who ascended godhood.</p>
        
        <p>Tahrcanix is a warrior that defeated the heavens, becoming a god and champion. He's a strong old men, usually seen wielding two lightning bolts as weapons. He represents the path, the rain and the lightning. His alignment is Lawful Good and his weapon of choice is the Bastard Sword.</p>
        <p>Clerics and devouts of Tahrcanix do not like to wear a lot of clothes. The majority uses little more than a tunic and some armor. A rune of Tiw, painted in blue, on their noses until midway the eyes is the most common representation of their priests and they are known to be impatient and hasty individuals.</p>
        
        <p>Tudanis is a druid that dedicated his life to the mystical powers and nature's welfare. A man with imense power, he ended up as nature's divine champion. Lord of fauna, earth and knowledge, he represents the Neutral Good Alignment and his weapon of choice is a club.</p>
        <p>Believers of Tudanis usually like to dress themselves with bear furs, a symbol of resistance and strength, naked torso, sometimes with some armor on top of it, and some trousers with autumn colors. His devouts are usually serene, contemplative and friendly.</p>
        
        <p>Ebonna was a warrior that dedicated her life to horseback fighting. After a life filled with deeds, the primordial gods made her become one with her horse, and she became the Queen of Centaurs. She is the protector of horses, champion of luck and freedom and her alignment is Chaotic Good, while her weapon of choice is the two handed sword.</p>
        <p>Followers of the Centaur Queen like to wear brown robes on top of their usual attire and paint a streak of white from the bottom of their noses until the end of their foreheads. They are usually direct and resolute.</p>
        
        <p>Dagda is a warrior that according to legend became a god after dividing a mountain in two with his bare hands. He is the ultimate symbol of strength, dedication and heroism, and is usually seen as a broad shouldered blonde man, with traditional beveritan war paint, and carrying a hammer and shield. His alignment is Lawful Neutral and his weapon of choice is the warhammer.</p>
        <p>Priests of Dagda like to work their body, being well built and value strength, determination and estoicism. They usually have the Mann rune tatooted around an arm in dark blue colors.</p>
        
        <p>Sernuhnos was, just like Tudanis, a druid that dedicated his life to the preservation and well-being of the land. Not like Tudanis, he criated strong ties with the flora. Upon his death, the primordials regenerated him and made him the avatar of nature. His appearance is that of a man with a goat head and tree branches instead of hair. The protector of flora, spirit of community and ressurection, his alignment is True Neutral and his weapon of choice is the Klar.</p>
        <p>His devouts like to wear robes with green colors, long hair, and usually have patterns of foliage. They are calm people, pragmatical, but good natured.</p>
        
        <p>Nuhada is the absolute lord of the unreachable kingdom of the grey elves. The protector of the arcane, guardian of madness and champion of nobility. Unlike the rest of the pantheon, Nuhada has always been a divine figure, belonging to the primordial gods. He has long white hair and chalk white skin. His eyes are burning orbs of orange. His alignment is the Chaotic Neutral and his weapon of choice is the Elven Spear Blade.</p>
        <p>Clerics of Nuhada are usually frail but quite agile, prefering liberty of movement instead of heavy armor. Due to their high dexterity, the prefer clinical strikes instead of brute force. They dress with gray patterns and dye their hair and face white. They are known as protectors of ruins, mausoleums and other mystical places. These places of solitude make them aloof and distant individuals.</p>
        
        <p>Lughe, Lord of Intrigue and Cunning, Sire of the Sun and Arts. He loves weapons and during his life he collected magical spears. His divine status arrived when he sacrificed his life to save the land from a demonic invasion. For his sacrifice, the Primordials offered him immortality and omnipresence, thus becoming a god among men. Lughe is seen as a men covered in beveritan tattoos, long white hair, golden eyes, a helmet with two long protruding horns and a beatiful spear, whose blade produces the Winter season. His aligment is Lawful Evil and his weapon of choice is the spear.</p>
        <p>Followers of Lughe like to tattoo their bodies with beveritan symbolism. They wear horned helmets and foxskin coats. They are usually seen between foreign communities, where they create espionage chains.</p>
        
        <p>Chuculain was a mystical warrior known for his frenzy and fighting prowess. He achieved godhood after defeating alone two armies that invaded the city where he rested. Usually depicted has a tall, heavily muscled man, covered in runes and with bloodied hands. He is the Lord of War, Rage and Frenzy. His aligment is Neutral Evil and his weapon of choice is the Spiked Gauntlet.</p>
        <p>Followers of this god are mostly warpriests. They wear heavy and simple armor, and love to throw themselves in a frenzy against enemy hordes. They are usally quick witted, simple, direct and serious.</p>
        
        <p>Morygan was a fearful witch that with her powers of seduction corrupted, murdered and finally achieved a place among the gods. She's a woman with an unnatural beauty but terryfing at the same time. It is said that her presence can kill a man either from lust or fear. She is the goddess of love, folly, personification of corruption ad mother of the unknown. She is described as an extremely well sculpted woman, wearing only a dark crow feathered cloak that covers her shoulders. Are legs and eyes are drenched in dried blood and she is usually accompanied by crows. Her aligment is Chaotic Evil and her weapon of choice is the dagger.</p>
        <p>Followers of Morygan are taciturn creatures, dark and gloomy. They wear dark clothes and wear a cloak made of crow feathers. they like to dye their eyes with red ink. They like to behave in a seductive manner, using their charisma and guile to achieve their goals. Living in civilization's outskirts, Her clerics are seen with mistrust and their presence is usally a bad omen.</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Tahrcanix</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Travel, Storms, Water</li>
                <li><em>Misteries</em> : Heavens, Wind</li>
                <li><em>Favored Weapon</em> : Bastard Sword</li>
            </ul>
            <h3 class="blue">Tudanis</h3>
            <ul>
                <li><em>Alignment</em> : Neutral Good</li>
                <li><em>Domains</em> : Animal, Earth, Knowledge</li>
                <li><em>Misteries</em> : Stone, Lore</li>
                <li><em>Favored Weapon</em> : Club</li>
            </ul>
            <h3 class="blue">Ebonna</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Luck, Freedom, Rune</li>
                <li><em>Misteries</em> : Bones, Nature</li>
                <li><em>Favored Weapon</em> : Greatsword</li>
            </ul>
            <h3 class="blue">Dagda</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Strength, Heroism, Protection</li>
                <li><em>Misteries</em> : Flame, Ancestor</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sernuhnos</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Plant, Community, Resurrection</li>
                <li><em>Misteries</em> : Life, Wood</li>
                <li><em>Favored Weapon</em> : Klar</li>
            </ul>
            <h3 class="blue">Nuhada</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Arcane, Madness, Nobility</li>
                <li><em>Misteries</em> : Spellscar, Lunar</li>
                <li><em>Favored Weapon</em> : Elven Spearblade</li>
            </ul>
            <h3 class="blue">Lughe</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Trickery, Sun, Fate</li>
                <li><em>Misteries</em> : Solar, Dark Tapestry</li>
                <li><em>Favored Weapon</em> : Spear</li>
            </ul>
            <h3 class="blue">Chuculain</h3>
            <ul>
                <li><em>Alignment</em> : Neutral Evil</li>
                <li><em>Domains</em> : War, Ferocity, Rage</li>
                <li><em>Misteries</em> : Battle, Metal</li>
                <li><em>Favored Weapon</em> : Spiked Gauntlet</li>
            </ul>
            <h3 class="blue">Morygan</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Lust, Catastrophe, Corruption, Void</li>
                <li><em>Misteries</em> : Occult, Outer Rifts</li>
                <li><em>Favored Weapon</em> : Dagger</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Cretian Polytheism",
        code: "crepol",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <p><em>Krothar</em> - True Neutral - Animal, Plant, War - Nature, Battle - Throwing Axe</p>
        <p><em>Femrir</em> - Chaotic Good - Strength, Destruction, Freedom - Animal, Bones - War Axe</p>
        <p><em>Aemir</em> - Chaotic Neutral - Chaos, Air, Ice - Winter, Wind - Great Axe</p>
        <p><em>Malathur</em> - Chaotic Evil - Death, Water, Catastrophe - Apocalypse, Waves - Earth Breaker</p>
        <p><em>Thyerr</em> - Lawful Good - Stars, Law, Honor - Ancestor, Heavens - Longsword</p>
        <p><em>Nidhoggr</em> - Lawful Neutral - Time, Moon, Sun - Solar, Lunar - Warhammer</p>
        <p><em>Sartun</em> - Lawful Evil - Evil, Tyranny, Fire - Flame, Stone - Heavy Flail</p>
        `,
    },
    {
        name: "Kaastian Klaarism",
        code: "kaakla",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Gernian Totemism",
        code: "gertot",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Lampa Polytheism",
        code: "lampol",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Armatian Zistranism",
        code: "armzis",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Asseri Drakism",
        code: "assdra",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Barcagenian Makhanism",
        code: "barmak",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Krin Polytheism",
        code: "krinpol",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Tatamakian Folklore",
        code: "tatfol",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Tvorlinian Polytheism",
        code: "tvopol",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Maoquinan Totemism",
        code: "maotot",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Kaomi Totemism",
        code: "kaotot",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Borigua Elementalism",
        code: "borele",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Quepatec Polytheism",
        code: "quepol",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Lao-Tse Monotheism",
        code: "laomon",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Minzao Monotheism",
        code: "minmon",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Ghobian Polytheism",
        code: "ghopol",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "Meynari Polytheism",
        code: "meypol",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
        <h3 class="blue">Krothar</h3>
        <ul>
            <li><em>Alignment</em> : True Neutral</li>
            <li><em>Domains</em> : Animal, Plant, War</li>
            <li><em>Misteries</em> : Nature, Battle</li>
            <li><em>Favored Weapon</em> : Throwing Axe</li>
        </ul>
        <h3 class="blue">Femrir</h3>
        <ul>
            <li><em>Alignment</em> : Chaotic Good</li>
            <li><em>Domains</em> : Strength, Destruction, Freedom</li>
            <li><em>Misteries</em> : Animal, Bones</li>
            <li><em>Favored Weapon</em> : War Axe</li>
        </ul>
        <h3 class="blue">Aemir</h3>
        <ul>
            <li><em>Alignment</em> : Chaotic Neutral</li>
            <li><em>Domains</em> : Chaos, Air, Ice</li>
            <li><em>Misteries</em> : Winter, Wind</li>
            <li><em>Favored Weapon</em> : Great Axe</li>
        </ul>
        <h3 class="blue">Malathur</h3>
        <ul>
            <li><em>Alignment</em> : Chaotic Evil</li>
            <li><em>Domains</em> : Death, Water, Catastrophe</li>
            <li><em>Misteries</em> : Apocalypse, Waves</li>
            <li><em>Favored Weapon</em> : Earthbreaker</li>
        </ul>
        <h3 class="blue">Thyerr</h3>
        <ul>
            <li><em>Alignment</em> : Lawful Good</li>
            <li><em>Domains</em> : Stars, Law, Honor</li>
            <li><em>Misteries</em> : Ancestor, Heavens</li>
            <li><em>Favored Weapon</em> : Longsword</li>
        </ul>
        <h3 class="blue">Nidhoggr</h3>
        <ul>
            <li><em>Alignment</em> : Lawful Neutral</li>
            <li><em>Domains</em> : Time, Moon, Sun</li>
            <li><em>Misteries</em> : Solar, Lunar</li>
            <li><em>Favored Weapon</em> : Warhammer</li>
        </ul>
        <h3 class="blue">Sartun</h3>
        <ul>
            <li><em>Alignment</em> : Lawful Evil</li>
            <li><em>Domains</em> : Evil, Tyranny, Fire</li>
            <li><em>Misteries</em> : Flame, Stone</li>
            <li><em>Favored Weapon</em> : Heavy Flail</li>
        </ul>
    </div>
        `,
    },
    {
        name: "The Faceless Ones",
        code: "facone",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "The Demon Lords",
        code: "demlor",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "The Archdevils",
        code: "barmak",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
    {
        name: "The Great Old Ones",
        code: "greold",
        shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate quos laudantium ut maiores rerum tempore repellat in totam nihil.",
        description: 
        `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a repellendus natus deserunt nihil, veritatis porro. Veniam repellat excepturi vel, neque numquam ducimus at minus ut necessitatibus doloremque harum corporis!</p>
        
        `,
        banner: `<img src="../../assets/Images/beveritanpolytheism.png" alt="banner of the beveritan polytheism">`,
        mainhub: "Beveritan Lands",
        traits: 
        `
        <div class="text-align-center">
            <h3 class="blue">Krothar</h3>
            <ul>
                <li><em>Alignment</em> : True Neutral</li>
                <li><em>Domains</em> : Animal, Plant, War</li>
                <li><em>Misteries</em> : Nature, Battle</li>
                <li><em>Favored Weapon</em> : Throwing Axe</li>
            </ul>
            <h3 class="blue">Femrir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Good</li>
                <li><em>Domains</em> : Strength, Destruction, Freedom</li>
                <li><em>Misteries</em> : Animal, Bones</li>
                <li><em>Favored Weapon</em> : War Axe</li>
            </ul>
            <h3 class="blue">Aemir</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Neutral</li>
                <li><em>Domains</em> : Chaos, Air, Ice</li>
                <li><em>Misteries</em> : Winter, Wind</li>
                <li><em>Favored Weapon</em> : Great Axe</li>
            </ul>
            <h3 class="blue">Malathur</h3>
            <ul>
                <li><em>Alignment</em> : Chaotic Evil</li>
                <li><em>Domains</em> : Death, Water, Catastrophe</li>
                <li><em>Misteries</em> : Apocalypse, Waves</li>
                <li><em>Favored Weapon</em> : Earthbreaker</li>
            </ul>
            <h3 class="blue">Thyerr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Good</li>
                <li><em>Domains</em> : Stars, Law, Honor</li>
                <li><em>Misteries</em> : Ancestor, Heavens</li>
                <li><em>Favored Weapon</em> : Longsword</li>
            </ul>
            <h3 class="blue">Nidhoggr</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Neutral</li>
                <li><em>Domains</em> : Time, Moon, Sun</li>
                <li><em>Misteries</em> : Solar, Lunar</li>
                <li><em>Favored Weapon</em> : Warhammer</li>
            </ul>
            <h3 class="blue">Sartun</h3>
            <ul>
                <li><em>Alignment</em> : Lawful Evil</li>
                <li><em>Domains</em> : Evil, Tyranny, Fire</li>
                <li><em>Misteries</em> : Flame, Stone</li>
                <li><em>Favored Weapon</em> : Heavy Flail</li>
            </ul>
        </div>
        `,
    },
]