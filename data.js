// All the content for the site lives here.

const SLEEPERS = {
  plush: {
    name: "The Plush Hugger",
    color: "#DA5F79",
    blob: "#E3AEB8",
    hint: "Can't sleep without something soft to hold.",
    desc: "A sentimental soul who needs to feel safe before they can let go. You hold on to familiar things and familiar people, and you sleep best with something soft to hold.",
    tips: [
      "Keep your favorite plush in the same spot every night, so your brain learns it's time to sleep.",
      "Hug it close and take three slow breaths before you close your eyes.",
      "No plush? A rolled-up blanket or a long pillow works too."
    ],
    notes: [
      "About 40% of American adults sleep with a stuffed animal. You're in good company.",
      "One hotel chain in the UK has returned more than 75,000 teddy bears that guests left behind, and many of them belonged to adults.",
      "In that same survey, the average British teddy bear was 27 years old."
    ]
  },

  burrito: {
    name: "The Burrito",
    color: "#B07445",
    blob: "#CDA684",
    hint: "Wrapped up tight. No gaps allowed.",
    desc: "A homebody who loves their own little space. You feel safest when you're tucked in, wrapped up and far away from the rest of the world.",
    tips: [
      "Tuck the blanket under your feet so there are no gaps.",
      "Keep the room cool and the bed warm.",
      "Try a heavier blanket for gentle pressure."
    ],
    notes: [
      "Your body cools down before sleep. In the deepest stages of sleep, it's about one or two degrees below normal.",
      "One study tested 84 ways of tucking in. Being wrapped up can make a 22°C room feel like 26°C.",
      "Feet have no hair, so heat escapes from them fastest. That's why some burritos still leave one foot out."
    ]
  },

  fridge: {
    name: "The Fridge Visitor",
    color: "#C9714F",
    blob: "#E0A088",
    hint: "One little snack, then straight to bed. Probably.",
    desc: "A free spirit who lives in the moment and loves good food. You don't overthink bedtime. A little snack, a warm drink, and you're ready to drift off.",
    tips: [
      "Keep it small. A light snack 30 to 40 minutes before bed is enough.",
      "Try something warm, like a cup of milk or herbal tea.",
      "Skip the heavy stuff. Save the big meal for tomorrow."
    ],
    notes: [
      "You're not alone: 93% of American adults have an after-dinner snack at least once a week.",
      "One survey found 60% of American adults snack after 8 PM.",
      "Milk has tryptophan, the famous \"sleepy\" ingredient, but science says its effect is pretty small. The cozy feeling might be doing most of the work."
    ]
  },

  melatonin: {
    name: "The Melatonin Taker",
    color: "#6F9A75",
    blob: "#A9C7AC",
    hint: "Sleep, but make it a tiny pill.",
    desc: "A planner who loves a good routine. You're reliable, you like things done right, and your bedtime runs like clockwork.",
    tips: [
      "Go to bed and wake up at the same time, even on weekends.",
      "Dim the lights an hour before bed to let your body's own melatonin rise.",
      "Thinking about supplements? Check with a doctor first. More isn't better."
    ],
    notes: [
      "Melatonin is actually a hormone your body makes on its own, not an herb.",
      "Melatonin use among U.S. adults went up about five times between 1999 and 2018.",
      "Some melatonin supplements contain several times the amount listed on the label."
    ]
  },

  accidental: {
    name: "The Accidental Sleeper",
    color: "#B39A3C",
    blob: "#DDD08E",
    hint: "Never meant to fall asleep. Always does.",
    desc: "An easygoing soul who goes with the flow. You never plan to fall asleep. It just happens, on the couch, mid-movie, halfway through a page.",
    tips: [
      "Stop trying so hard. Sleep comes easier when you're not chasing it.",
      "Read a few pages of something calm in bed, not on the couch.",
      "Set a gentle reminder to move to bed before the couch claims you."
    ],
    notes: [
      "When people have trouble falling asleep, half of Americans turn on the TV.",
      "Reading is one of the most popular ways to wind down: 27% of people use it to help them sleep.",
      "In one survey, people said they'd woken up in a car, a chair, on the couch and even on the floor."
    ]
  },

  rain: {
    name: "The Rain Listener",
    color: "#5F7FAE",
    blob: "#9DB6D6",
    hint: "Needs the sound of rain, real or not.",
    desc: "A quiet observer with a busy mind. You think a lot and feel a lot, and you sleep best when a steady sound outside helps the noise inside settle down.",
    tips: [
      "Play rain sounds at a low, steady volume.",
      "Pick a track without thunder. Sudden booms can wake you up.",
      "Set a timer so the sound fades out after you fall asleep."
    ],
    notes: [
      "Rain is \"pink noise\": deeper and softer than white noise, which sounds more like TV static.",
      "Steady rain covers up sudden sounds, like a door slamming, so they're less likely to wake you.",
      "Rain sound tracks have been streamed billions of times."
    ]
  },

  podcast: {
    name: "The Podcast Listener",
    color: "#8670B0",
    blob: "#B3A3D3",
    hint: "Falls asleep halfway through someone else's story.",
    desc: "A people person who loves a good story. You like to chat, you love to listen, and the sound of someone talking makes you feel like you're not alone.",
    tips: [
      "Pick something calm and a little boring. A thriller will keep you up.",
      "Set a sleep timer so the episode doesn't play all night.",
      "Keep the volume low, just enough to follow along."
    ],
    notes: [
      "Nearly half of podcast listeners have used a podcast to help them fall asleep.",
      "Some shows are made to be boring on purpose, with rambling stories that go nowhere.",
      "Bedtime listeners take about 10 minutes longer to fall asleep. They don't want to miss the ending."
    ]
  },

  scroller: {
    name: "The Scroller",
    color: "#5A78B4",
    blob: "#8AA3D0",
    hint: "“Just one more video” — three hours ago.",
    desc: "A curious mind who hates missing out. You love anything new, and there's always one more thing to see before you can finally put the phone down.",
    tips: [
      "Put your phone across the room, not next to your pillow.",
      "Turn on night mode or grayscale. Boring screens are easier to leave.",
      "Swap the last scroll for something slow, like a few pages of a book."
    ],
    notes: [
      "87% of people keep their phone in the bedroom, often within arm's reach.",
      "45% of Americans reach for their phone when they can't fall asleep.",
      "91% of people say they've lost sleep to binge-watching \"just one more episode.\""
    ]
  }
};

// Position of each blob on the Meet the Sleepers page (center x, center y)
const BLOB_POS = {
  plush:      [331, 223],
  rain:       [1187, 223],
  melatonin:  [756, 373],
  burrito:    [221, 488],
  podcast:    [1287, 525],
  accidental: [756, 675],
  fridge:     [391, 828],
  scroller:   [1154, 828]
};

// Quiz: each answer gives one point to a sleeper
const QUIZ = [
  {
    title: "Question one",
    q: "It's bedtime. What's the last thing you do?",
    a: [
      ["Check my phone “one last time”", "scroller"],
      ["Grab a little snack or a warm drink", "fridge"],
      ["Get under the covers and tuck myself in", "burrito"],
      ["Turn off the lights at my usual time", "melatonin"]
    ]
  },
  {
    title: "Question two",
    q: "You're in bed, but still awake. What's on your mind?",
    a: [
      ["Everything I said today, on replay", "rain"],
      ["What I'm going to eat tomorrow", "fridge"],
      ["Nothing. I'm watching something.", "scroller"],
      ["I just want something to hold", "plush"]
    ]
  },
  {
    title: "Question three",
    q: "The room is completely silent. You…",
    a: [
      ["Put on the sound of rain", "rain"],
      ["Play a podcast, just to hear someone talk", "podcast"],
      ["Pull the blanket over my head", "burrito"],
      ["Don't notice. I'm already half asleep.", "accidental"]
    ]
  },
  {
    title: "Question four",
    q: "Where do you usually end up falling asleep?",
    a: [
      ["In bed, at the same time every night", "melatonin"],
      ["On the couch, without meaning to", "accidental"],
      ["Wrapped up in a cocoon of blankets", "burrito"],
      ["Next to my favorite stuffed animal", "plush"]
    ]
  },
  {
    title: "Question five",
    q: "It's 2 AM and you're still awake. You…",
    a: [
      ["Take something to help me sleep", "melatonin"],
      ["Head to the kitchen", "fridge"],
      ["Pick up my phone", "scroller"],
      ["Put my earbuds back in", "podcast"]
    ]
  },
  {
    title: "Question six",
    q: "Pick the sound you'd fall asleep to.",
    a: [
      ["Rain on the window", "rain"],
      ["Someone telling a story", "podcast"],
      ["The TV in the next room", "accidental"],
      ["Silence, and something soft to hug", "plush"]
    ]
  }
];
