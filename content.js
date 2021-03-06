
var explorecount = 0

var maincontent = [{
    "stacknumber":"12",
    "intro": "Ritual And Riddles",
    "introstatement": "You typically avoid supernatural jobs... however, you committed to this investigation in a moment of weakness while at a festival in a nearby town.  Strange noises and inexplicable events have occurred recently at the remote and abandoned mansion in front of you.  You can’t get in the front door, so you decide to break the latch and climb through a window.",
    "introchallenge": "The town folk are convinced you can find a way to free the spirit haunting the old house..."
},
{
    "room": "roomonebox",
    "roomtitle": "Servant Room",
    "roomdescription": "You find a small, dark room with a solo window in front, and a chimney in back, with one small bed and a chamber pot underneath. A cloudy mirror, slightly askew, looks down on the bed. The window is dark with dust, cobwebs, and dead bugs.",
    "roompuzzle": "You hear a voice whisper a riddle: what question could I never answer with a yes?",
    "roompuzzle_opt1": "Are you tired?",
    "roompuzzle_opt1_var": "1",
    "roompuzzle_opt2": "Are you asleep?",
    "roompuzzle_opt2_var": "2",
    "roompuzzle_opt3": "Are you happy?",
    "roompuzzle_opt3_var": "3",
    "roompuzzle_ans": "2",
    "roompuzzle_ans_message": "You feel warm and the dead bugs come to life and skitter away, oddly they move single file in the shape of a P",
    "roompuzzle_ans_message_wrong": "You hear a faint howl and some laughter as the voice fades away."
}, {
    "room": "roomtwobox",
    "roomtitle": "Study",
    "roomdescription": "Three dormer windows to your left face to front of house, but they don’t lighten up the drab, yellow-brown room. Four small wooden desks, each with little chalk boards and scattered broken chalk, form a grid in the center. Three scrambled words on the chalkboard In the back: '188-Pnaio' '432-lcok' '399-skteleon'. Low shelves line one side of the room, filled with old children’s books and dolls with vacant, haunted eyes.  A plain, empty desk and wooden chair observe from the front of the room.",
    "roompuzzle": "On one of the desks, a riddle is scratched on the surface - Many keys but opens no locks?",
    "roompuzzle_opt1": "188?",
    "roompuzzle_opt1_var": "1",
    "roompuzzle_opt2": "432?",
    "roompuzzle_opt2_var": "2",
    "roompuzzle_opt3": "399?",
    "roompuzzle_opt3_var": "3",
    "roompuzzle_ans": "1",
    "roompuzzle_ans_message": "You scratch the answer on the desk, and as you walk by the dolls you hear faint letters in a child's whisper - S-E-P",
    "roompuzzle_ans_message_wrong": "You hear children laughing somewhere else in the house, then inaudible whispers, then silence."
}, {
    "room": "roomthreebox",
    "roomtitle": "Courtyard Tree",
    "roomdescription": "You hear a noise in the courtyard and go to investigate.  Withered and dead, yet apparently pulsing with life, the tree’s rigid woody entrails knock against the windows, in the absence of wind or weather.",
    "roompuzzle": "An out-of-place brick catches your attention, under the dirt is an inscription of a riddle - buried alive and dug up dead?",
    "roompuzzle_opt1": "Worms?",
    "roompuzzle_opt1_var": "1",
    "roompuzzle_opt2": "A Coffin?",
    "roompuzzle_opt2_var": "2",
    "roompuzzle_opt3": "A Plant?",
    "roompuzzle_opt3_var": "3",
    "roompuzzle_ans": "3",
    "roompuzzle_ans_message": "You see another brick that says Plants and place the brick beside it, when you do, the tree branches contort and create a moonlit shadow that says - HADES",
    "roompuzzle_ans_message_wrong": "You place the brick on the walkway, and the tree groans as if responding to your choice."
}, {
    "room": "roomfourbox",
    "roomtitle": "Rectory",
    "roomdescription": "A small, grey stone building, peeks from the back of the house. Cloaked in a purple-black aura, even during daylight, the stones appear to change in color and composition throughout the day. A priest’s silhouette floats past the stained glass window, but it doesn’t look quite human. A close look at the window reveals three removable sections, one with the sun, one with rain drops, and one with a wood stove",
    "roompuzzle": "Inscribed in Greek - which you somehow now understand - is the riddle: can go through glass without breaking it?",
    "roompuzzle_opt1": "Liquid droplets?",
    "roompuzzle_opt1_var": "1",
    "roompuzzle_opt2": "Heat from a stove?",
    "roompuzzle_opt2_var": "2",
    "roompuzzle_opt3": "Light from the sun?",
    "roompuzzle_opt3_var": "3",
    "roompuzzle_ans": "3",
    "roompuzzle_ans_message": "The inscription causes you to realize that the glass pane with a sun is in the shade, when you remove it and hold it in the light it reveals the letter E",
    "roompuzzle_ans_message_wrong": "You attempt to put hot water on the glass - the temperature change shatters the glass."
}, {
    "room": "roomfivebox",
    "roomtitle": "Bedroom",
    "roomdescription": "A Juliet balcony with small doors opens to the back, with a view of the overgrown property below. Two old gardening gloves sit draped over the balcony. A Large window opens to the front, lined with flower boxes, where only the woody stalks of dead plantings remain. One red pot sits empty with a pile of dirt to its side.  Pillows and blankets are heaped on a large brass bed against the far wall, all covered with a layer of dust, except one pillow appears half empty, sitting next to a pile of soft feathers.  A large fireplace adorns the wall opposite the bed; it features a carriage clock sitting on the mantle - the time is stopped at 11:59.",
    "roompuzzle": "A phrase smears slowly across the face of the clock as a riddle - what can you fill with empty hands?",
    "roompuzzle_opt1": "the red pot.",
    "roompuzzle_opt1_var": "1",
    "roompuzzle_opt2": "the gardening gloves",
    "roompuzzle_opt2_var": "2",
    "roompuzzle_opt3": "the empty pillow",
    "roompuzzle_opt3_var": "3",
    "roompuzzle_ans": "2",
    "roompuzzle_ans_message": "You look at your empty hands, pick up the gloves, and fill the stiff gloves with your hands. The clock strikes midnight, and the letter R appears on its face.",
    "roompuzzle_ans_message_wrong": "Looking at the pillow and pot You fill your hands with dirt and feathers to restore them, you hear the gears in the clock snap, and silence... "
}, {
    "room": "roomsixbox",
    "roomtitle": "Library",
    "roomdescription": "Three large windows hold up each side of the room - high-ceilinged and spacious, and spanning from the front to back of house.  The only wall not lined with books features a gallery of portraits, it must be the estate’s ancestors. Their unsettling, too-realistic stares extend out over the groups of red, overstuffed velveteen chairs. One of the paintings, upside down, seems to have eyes staring right at you. It has a brass label that reads - Athena. On a mahogany wooden desk near the back window, a gilt trimmed globe with Greece as the only continent - labeled Atlas - sits next to an alert quill pen and writing mat, marred by years of spilled ink stains. Next to the globe is a marble framed mirror inscribed with the word Narcissus. Gas lamps illuminate cozy nooks and crannies.",
    "roompuzzle": "A parchment paper sits on the desk, a riddle written at the top of the paper invites an answer: Blind, Deaf, Dumb, yet always tells the truth?",
    "roompuzzle_opt1": "Athena",
    "roompuzzle_opt1_var": "1",
    "roompuzzle_opt2": "Narcissus",
    "roompuzzle_opt2_var": "2",
    "roompuzzle_opt3": "Atlas",
    "roompuzzle_opt3_var": "3",
    "roompuzzle_ans": "2",
    "roompuzzle_ans_message": "You grab the quill and scratch the word Narcissus on the paper ... the quill takes on a life of its own and scrapes the phrase - in the Underworld - on the page.",
    "roompuzzle_ans_message_wrong": "As soon as you begin to scratch an answer on the paper, it tears, the quill breaks, and all the paintings in the room appear to smirk."
}, {
    "room": "roomsevenbox",
    "roomtitle": "Nursery",
    "roomdescription": "You step in, and in the dark, you almost stumble into one of 4 little beds, each with an ornate brass frame. In the corner a rocking chair sits near a whicker bassinet and a locked, looming cupboard. On the wall near the beds hang four paintings of young children, compelling your attention as they look odd, as if they are elderly, jaundiced children. One child holds a gift box labeled - from Pandora - , another child has a note in one hand that says - a promise from Hera - , and one child held a locked box labeled - property of Plutus.",
    "roompuzzle": "Three ceramic keys hang near the cupboard, labeled with the names from the portraits, and a fingerpainted riddle below them: cannot keep it until you give it.",
    "roompuzzle_opt1": "Hera's promise",
    "roompuzzle_opt1_var": "1",
    "roompuzzle_opt2": "Plutus' treasure",
    "roompuzzle_opt2_var": "2",
    "roompuzzle_opt3": "Pandora's gift box",
    "roompuzzle_opt3_var": "3",
    "roompuzzle_ans": "1",
    "roompuzzle_ans_message": "As you reach for Hera's key her portrait tranforms and may have winked at you, the unlocked cupboard reveals the letter N on one of the shelves.",
    "roompuzzle_ans_message_wrong": "As you reach for the key the ceramic on all three keys begans to crack, the portraits turn grey and the keys reduce to dust."
}, {
    "room": "roomeightbox",
    "roomtitle": "Guest Room",
    "roomdescription": "The long and unusually narrow guest room is entirely empty, but the velvet red carpet and matching walls still make the room feel cramped.  A small bent and tangled sculpture of a question mark titled - Coeus - sits in the light near the balcony window. An ancient thermometer is right outside the window with the word Boreus inscribed at the base, and there is a bell outside the entry to the room inscribed - Apollo.",
    "roompuzzle": "The velvet walls of the room begin to change as if someone is rubbing a finger over the wall to write the riddle: You answer even though it never asks questions.",
    "roompuzzle_opt1": "Coeus sculpture",
    "roompuzzle_opt1_var": "1",
    "roompuzzle_opt2": "Boreus thermometer",
    "roompuzzle_opt2_var": "2",
    "roompuzzle_opt3": "Apollo's bell",
    "roompuzzle_opt3_var": "3",
    "roompuzzle_ans": "3",
    "roompuzzle_ans_message": "You ring the bell at the door, and without question, the velvet walls reveal the answer with the letter O.",
    "roompuzzle_ans_message_wrong": "The tempurature and the statue remain the same, and the walls suddenly appear more grey than red."
}, {
    "room": "roomninebox",
    "roomtitle": "Parlor",
    "roomdescription": "You feel an excited but uneasy energy as you enter into a large, gold-specked room with high ceilings and an Ocean theme. The room is littered with small tables, arranged into seating groups around rugs decorated with large ships and the word Amphitrite repeated in the threads.  On one of the tables is a wine glass labeled Dionysus. A dusty aquarium engraved with the word Proteus sits empty, except for a natural sponge sitting at the bottom. A buffet on one wall looks to tip forward, with every drawer but one hanging open, a ceramic colander glazed with the name Pomona sits in one of the drawers. A table in the center must have hosted thousands of breakfasts, in the morning light of the three large, arched windows. On a side table near the window, a gramophone sits at attention, ready to amplify.",
    "roompuzzle": "You move the record on the gramaphone and it spins on its own, crackling out the riddle: full of holes, but still holds water.",
    "roompuzzle_opt1": "Proteus",
    "roompuzzle_opt1_var": "1",
    "roompuzzle_opt2": "Pomona",
    "roompuzzle_opt2_var": "2",
    "roompuzzle_opt3": "Dionysus",
    "roompuzzle_opt3_var": "3",
    "roompuzzle_ans": "1",
    "roompuzzle_ans_message": "As you look at the sponge and repeat the word Proteus the grammaphone repeats back the letter H as if to answer.",
    "roompuzzle_ans_message_wrong": "You begin to speak an answer and the room goes black, the grammaphone scratches to a halt."
}, {
    "room": "roomtenbox",
    "roomtitle": "Main Hall",
    "roomdescription": "The heavy wooden door opens into a large entry way. The expanse of marble floors must have been beautiful before they were cracked and stained. A grand, curved wood staircase beckons your ascent. The entry doors have a message burned into the back: say my name to release the curse .. servant room .. rectory .. bedroom .. study .. parlor .. guest room .. nursery .. dining room ..",
    "roompuzzle": "You see a box of matches and begin to burn the letters you know on the door, based on the clues from each room and see an answer forming, you may need to fill in some blanks where you failed in a room. As you finish burning in the answer, you see all four shadows appear on the floor and know you need to stand on one to complete your answer.",
    "roompuzzle_ans": "persephone",
    "roompuzzle_ans_message": "The entire house shakes with energy and an orchestra of creaks and groans express what you imagine is the word thank you in greek, sun breaks through the clouds and light pours in as the curtains are now pulled aside.  Everything in the house is somehow brighter, and you intuitively know that the spirit of Persephone is free. She had been held by Hades in the underworld, trapped there because she ate a single pomegranate seed, and needed to be called out through the ritual you just completed.  As you walk out the front door, you feel something in your pocket, and take out a ceramic key and look at it in your open hand.  The wrinkles on your hand reshape to read - please free my brother - and include a location you remember visiting as a child. You start down the path to your next adventure...",
    "roompuzzle_ans_message_wrong": "The room darkens, you hear a fire roaring in a distant room and smell smoke. You choke, sputter, and pass out, only to wake up in the yard in front of the house.  The house has the same light in the windows as when you started your investigation, and your watch now reads an earlier time.  The window latch you had broken to enter the house is now unscathed, as if you have been given a chance to try again."
}, {
    "room": "roomelevenbox",
    "roomtitle": "Dining Room",
    "roomdescription": "Dark and almost cozy, the room is rimmed with wood chair rail. A headless suit of armor lies on its side in the corner.  Deep green fabric clings to the walls, where it isn’t peeling in the corners. A large, shiny wood table sits in the center of a circle of fading dining chairs upholstered in silk and gold braid, with a rocking chair at the head of the table. On one end a large buffet props up a wine decanter and glasses. A cot next to it with a green pillow, as if someone lived in the corner at some point. A scrawled message breaks the mirror’s otherwise clear expanse.",
    "roompuzzle": "The message on the mirror states a riddle: what loses its head at sunrise and gets it back at sunset",
    "roompuzzle_opt1": "a suit of armor",
    "roompuzzle_opt1_var": "1",
    "roompuzzle_opt2": "a green pillow",
    "roompuzzle_opt2_var": "2",
    "roompuzzle_opt3": "a rocking chair",
    "roompuzzle_opt3_var": "3",
    "roompuzzle_ans": "2",
    "roompuzzle_ans_message": "You lift the green pillow to find a nest of glistening spiders, oddly arranged in the letter E",
    "roompuzzle_ans_message_wrong": "You sit in the rocking chair and point to the suit of armor, which appears to slump its shoulders in dissapointment."
}, {
    "room": "roomtwelvebox",
    "roomtitle": "Kitchen",
    "roomdescription": "The room is spacious, but cluttered. Pots and pans hang from a rack in the ceiling. In the center stand two large wood work tables, worn down and softened with age, except for some small potted plants on one end. The walls spare no space, lined with drawers and cabinets, one cabinet holds dried strawberries and watermelon in a yellowed mason jar. An old freezer sits in a corner, still running somehow, with three small ice cubes arranged inside.  Three large copper sinks, cast iron ovens, and filmy windows fill the rest of the room.",
    "roompuzzle": "One of the copper sinks is half filled with water, with a riddle written in grease: made of water, but put in water it will die",
    "roompuzzle_opt1": "potted plants",
    "roompuzzle_opt1_var": "1",
    "roompuzzle_opt2": "watermelon",
    "roompuzzle_opt2_var": "2",
    "roompuzzle_opt3": "ice cubes",
    "roompuzzle_opt3_var": "3",
    "roompuzzle_ans": "3",
    "roompuzzle_ans_message": "You place the ice in the sink, and as the ice melts, the grease floats to the surface and reads - he gave me a pomegranate seed...",
    "roompuzzle_ans_message_wrong": "Your choice only causes the water to become murky, and the drain suspiciously unclogs, causing all evidence to be sucked away."
}, {
    "person": "roomonebox",
    "person_name": "Poseidon",
    "person_entry": "appears as a shadow",
    "person_description": "You see your shadow holding a trident, and you could swear it is waving at you.",
    "person_info1": "The wave seems friendly as if to get your attention.",
    "person_info2": "As you walk under an overhang, your shadow leans to the right, you mimic this lean, and avoid a falling rock"
}, {
    "person": "roomfivebox",
    "person_name": "Poseidon",
    "person_entry": "appears as a shadow",
    "person_description": "",
    "person_info1": "You lean down to pick up a small shiny object, but your shadow waves at you just in time to realize it is a spider.",
    "person_info2": "The shadow begins to fade, and you hear a faint whisper - charred wood makes me helpless.",
    "person_end_message": "-in sign language - the charred wood prevented my help - Success comes to those who deserve it, go on to find other success.  You realize you have selected the wrong person and missed an opportunity for something in addition to your attempt to solve the main mystery."
}, {
    "person": "roomtwobox",
    "person_name": "Demeter",
    "person_entry": "appears as a shadow",
    "person_description": "You see your shadow holding a tree branch, and pointing at the sky.",
    "person_info1": "The motions of your shadow seem anxious.",
    "person_info2": "leafy plants sprout up under your feet to soften your step."
}, {
    "person": "roomsixbox",
    "person_name": "Demeter",
    "person_entry": "appears as a shadow",
    "person_description": "",
    "person_info1": "Small mint plants grow around you and freshen the musty air.",
    "person_info2": "The shadow begins to fade, and you hear a faint whisper - I am of no use near marble.",
    "person_end_message": "-in sign language - the marlble floor prevented my help - Footprints on the sands of time are not made by sitting down, get up and go forth.  You realize you have selected the wrong person and missed an opportunity for something in addition to your attempt to solve the main mystery."
}, {
    "person": "roomthreebox",
    "person_name": "Ares",
    "person_entry": "appears as a shadow",
    "person_description": "You see your shadow, holding a large spear, and pointing it at the ground.",
    "person_info1": "Your shadow shakes the spear angrily.",
    "person_info2": "Shadows of attackers appear beside you, and are swiped away by your shadow."
}, {
    "person": "roomsevenbox",
    "person_name": "Ares",
    "person_entry": "appears as a shadow",
    "person_description": "",
    "person_info1": "Your shadow throws its spear, and you see a candle light ahead of you to show a better path.",
    "person_info2": "The shadow begins to fade, and you hear a faint whisper - sulphur removes my abilities.",
    "person_end_message": "-in sign language - the sulphur in the match prevented my help - May today's success or failure be the beginning of tomorrow's achievements.  You realize you have selected the wrong person and missed an opportunity for something in addition to your attempt to solve the main mystery."
}, {
    "person": "roomfourbox",
    "person_name": "Apollo",
    "person_entry": "appears as a shadow",
    "person_description": "You see your shadow, but it's center is missing in the shape of the sun.",
    "person_info1": "Your shadow stands with a confident pose.",
    "person_info2": "The sun shape on your shadow lights up the room, which you now see more clearly."
}, {
    "person": "roomeightbox",
    "person_name": "Apollo",
    "person_entry": "appears as a shadow",
    "person_description": "",
    "person_info1": "A loose stone almost causes you to fall, but you feel your foot steady and see the hand of the shadow at your foot, as if holding you up.",
    "person_info2": "The shadow begins to fade, and you hear a faint whisper - I cannot assist in the presence of water.",
    "person_end_message": "-in sign language - You chose wisely, a treasure is located nearby to finance your future - if the spirit is free you feel you deserve the treasure."
}
]
