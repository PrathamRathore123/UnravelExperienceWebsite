interface JourneyDay {
  day: string;
  title: string;
  description: string;
  image: string;
}

interface Itinerary {
  title: string;
  subtitle: string;
  duration: string;
  location: string;
  pdf: string;
  box: string;
  Weather: string;
  inclusion: string;
  heroImages: string[];
  journeyDays: JourneyDay[];
  galleryTitle?: string;
  gallerySubtitle: string;
  galleryImage: string;
}

export const itenaryData: Record<string, Itinerary> = {
  london: {
    title: "A London Christmas",
    subtitle: "London in December doesn't try to impress you. It just is",
    duration: "8 Nights | 9 Days",
    location: "London, United Kingdom",
    pdf:'/Brochure of itenary/Unravel x A London Christmas 🎄 .pdf',
    box:"London at Christmas is pure theatre. Ice skating beneath Somerset House, champagne at Claridge's, evenings at the Royal Opera House. But this is London beyond the tourist trail—where locals know the best tables at The Ivy, where Burlington Arcade means proper Christmas shopping, and festive tradition meets modern extravagance. The London that celebrates properly.",
    Weather:'Crisp and cold with temperatures ranging 2-10°C; expect occasional rain and the possibility of light snow in January and February.',
    inclusion:'Curated luxury accommodations, private chauffeurs, exclusive seasonal experiences, and personalized support from Unravel One throughout your journey.',
    heroImages: [
      "https://c.animaapp.com/mirmmjt1sI61N8/img/rectangle-15.png",
    ],
    journeyDays: [
      {
        day: "Day 1 ",
        title:" Arrival & Royal Beginnings",
        description: "Welcome to London.Your private chauffeur meets you at the airport and drives you to your hotel. Take a few hours to settle in.When evening comes, step out for a private walking tour through London's royal history.Wander St. James's Park, hear stories of palaces and kings, and take in Buckingham Palace bathed in winter light.End the walk with a glass of Moët Imperial Brut and canapés at Harrods.",
        image: "https://c.animaapp.com/mirmmjt1sI61N8/img/picture---64c8004b-b620-4666-885a-505770c8e121-jpeg.png",
      },
      {
        day: "Day 2",
        title:"A British Christmas",
        description: "The morning is yours.Covent Garden. A quiet café. Your call. In the evening, your guide takes you on a private Christmas lights tour. See London glowing —Covent Garden's windows, Regent Street's arches, the hidden corners only locals know.Hot chocolate in hand. Mulled wine if you prefer.3-hour private experience",
        image: "https://c.animaapp.com/mirmmjt1sI61N8/img/picture---6e231363-bc06-4099-b173-b736f0a14333-jpeg.png",
      },
      {
        day: "Day 3",
        title:"The Markets Trail",
        description: "Today, you're chasing London's markets.Your private guide and driver take you through Portobello in Notting Hill, Borough Market's food scene, Camden's creative chaos, and Old Spitalfields.Tastings. Local finds. Stories behind every stall.",
        image: "https://c.animaapp.com/mirmmjt1sI61N8/img/picture---6e231363-bc06-4099-b173-b736f0a14333-jpeg-4.png",
      },
      {
        day: "Day 4",
       title:"Art, Adventure & Winter Wonderland",
        description: "Start at Frameless, where digital art surrounds you in light and color.Then feel the Thames rush beneath you on the Rib Experience, high-speed, city skyline,unforgettable.In the evening, your driver takes you to Hyde Park's Winter Wonderland. Rides, games,twinkling stalls. Stay as long as you want. Your driver brings you back when you're ready.",
        image: "https://c.animaapp.com/mirmmjt1sI61N8/img/picture---6e231363-bc06-4099-b173-b736f0a14333-jpeg-1.png",
      },
      {
        day: "Day 5",
        title:"The Countryside & Blenheim Palace",
        description: "Leave the city behind.Your private driver-guide takes you to the Cotswolds, storybook villages, winding roads, the kind of scenery that makes you slow down.Then Blenheim Palace, glowing with its famous Christmas light trail.",
        image: "https://c.animaapp.com/mirmmjt1sI61N8/img/picture---6e231363-bc06-4099-b173-b736f0a14333-jpeg-5.png",
      },
      {
        day: "Day 6",
        title:"Your Day",
        description: "A free day. Here are a few Unravel favorites:● World flavors at Mercato Mayfair Food Hall ● Ice skating at Somerset House ● Afternoon tea at Fortnum &amp; Mason ● Donuts at Donutelier by Roladin ● Buckingham Palace Christmas Markets ● A cozy drink at The Churchill Arms, London's most festive pub Or just wander. That works too.",
        image: "https://c.animaapp.com/mirmmjt1sI61N8/img/picture---6e231363-bc06-4099-b173-b736f0a14333-jpeg-2.png",
      },
      {
        day: "Day 7",
        title:"Icons & A Musical Night",
        description: "Morning: Big Ben. Buckingham Palace. Trafalgar Square. The classics.Evening: Mamma Mia! The Party an immersive dinner experience where ABBA, laughter, and Mediterranean food come together for a night you won't forget.",
        image: "https://c.animaapp.com/mirmmjt1sI61N8/img/picture---6e231363-bc06-4099-b173-b736f0a14333-jpeg-6.png",
      },
      {
        day: "Day 8",
        title:" Afternoon Tea Bus & Christmas Carols",
        description: "Hop aboard a vintage double-decker for moving afternoon tea. Scones, sandwiches, and Big Ben gliding past your window.In the evening, the Royal Albert Hall for Christmas Carols. Heartwarming. The perfect finale.",
        image: "https://c.animaapp.com/mirmmjt1sI61N8/img/picture---6e231363-bc06-4099-b173-b736f0a14333-jpeg-3.png",
      },
       {
        day: "Day 9",
        title:" Farewell, London",
        description: "After breakfast, your driver takes you to the airport.Leave with warm memories and the quiet promise to return.Because Christmas in London always calls you back.",
        image: "/sabrina-mazzeo.jpg",
      },
    ],
    galleryTitle: "A London Dump",
    gallerySubtitle: "Quiet Scenes That Stay With You.",
    galleryImage: "https://c.animaapp.com/mirmmjt1sI61N8/img/group-118.png",
  },
  paris: {
    title: "A Parisian Noël",
    subtitle: "Paris in Winter is for people who know that gray skies make the lights glow brighter",
    duration: "7 Days | Paris",
    location: "Paris, France",
    pdf:'/Brochure of itenary/Unravel x A Parisian Noel 🎄.pdf',
    box:"Paris doesn't do Christmas—it does Noël. Quieter, more intimate, impossibly chic. Leisurely bistro lunches, walks through the Marais' medieval streets, evening concerts in centuries-old chapels. We're taking you to the passages couverts where locals shop and the corners that only reveal themselves when you know where to look.",
    Weather:' Chilly Parisian winter with temperatures between 3-11°C; pack layers for gray skies, occasional rain, and rare snow dustings.',
    inclusion:'Handpicked boutique stays, private chauffeurs, insider access to Parisian traditions, and seamless trip management with Unravel One.',
   
    heroImages: [
     "/Paris.JPG.jpeg",
    ],
    journeyDays: [
      {
        day: "Day 1 ",
        title:"Bienvenue à Paris",
        description: "Your private driver meets you at the airport and takes you to your hotel.Champagne waiting in your suite. Rooftops of Paris through the window.The evening is yours. Wander. Get lost a little. That's how Paris works.",
        image: "/ParisItenaryImages/DAY1.jpg",
      },
      {
        day: "Day 2 ",
       title:"Christmas Markets,Movie Magic & Cozy Paris",
        description: "Step into the world of Emily in Paris on a private 2.5-hour walking tour. Metro rides. Filming locations. A pain au chocolat from her favorite bakery.Then festive afternoon tea at the Ritz Paris. Delicate pastries. Holiday ambience. The kind of moment you remember in February.Later, a private golf cart tour through Paris's Christmas lights. Champs-Élysées. Place Vendôme. Galeries Lafayette glowing. Cozy blankets. Stories about Parisian holiday traditions.",
        image: "/ParisItenaryImages/DAY2.jpg",
      },
       {
        day: "Day 3",
        title:"Icons & Indulgence",
        description: "Your private chauffeur picks you up. Eight hours at your disposal.Start at the Louvre before anyone else gets there. Reserved entry. Quiet halls.Then the Eiffel Tower. Summit access. The view that never gets old.Arc de Triomphe rooftop. Musée d'Orsay. Then the Aura Invalides — light, music, and architecture colliding into something you didn't expect.Afterward, the city is yours. Shop Rue Saint-Honoré. Café-hop through Saint-Germain. Chase the sunset in Montmartre.End with a Seine River cruise. Watch the Eiffel Tower sparkle as you glide through the heart of it all.",
        image: "/ParisItenaryImages/DAY3.jpg",
      },
       {
        day: "Day 4",
        title:"A Fairytale Evening at Château de Vaux-le-Vicomte",
        description: "The morning is slow. Sleep in. Find a café. Walk along the Seine.In the evening, your driver takes you to Château de Vaux-le-Vicomte. Thousands of lights. Festive décor. Fireplaces. Music. Candle-lit gardens. A 17th-century estate that understands Christmas better than most places do.Your driver brings you back to Paris when you're ready.",
        image: "/ParisItenaryImages/DAY4.jpg",
      },
       {
        day: "Day 5 ",
        title:"Baking, Markets & Christmas Magic in Montmartre",
        description: "Learn to make croissants or macarons from scratch in a local atelier. Hands-on. Charming. Very Parisian.Free time after. Shop. Relax. Sit somewhere warm with something good.Later, a small-group food and Christmas market tour through Montmartre. Cobbled streets. Artisan cheese. Legendary pastries. Wooden chalets. Vin chaud. The scent of holiday treats in cold air.",
        image: "/ParisItenaryImages/DAY5.jpg",
      },
       {
        day: "Day 6",
        title:"Breakfast at Versailles",
        description: "Your driver takes you to the Palace of Versailles for breakfast at Ore — Ducasse au Château de Versailles. Gourmet. Regal. Overlooking the Cour d'Honneur.Then wander the palace. The Hall of Mirrors. The royal chambers. At your own pace.Your driver brings you back to Paris in the afternoon.The evening is yours. Last-night-in-Paris energy. Souvenirs. A bistro. The city sparkling one more time.",
        image: "/ParisItenaryImages/DAY6.jpg",
      },
       {
        day: "Day 7  ",
        title:"Au Revoir, Paris",
        description: "Lazy breakfast. One last patisserie run.Your driver takes you to the airport.Leave with full hearts and the soft sound of Christmas bells in your memory.",
        image: "/ParisItenaryImages/DAY7.jpg",
      },
    ],
    galleryTitle: "A Paris Dump",
    gallerySubtitle: "Moments in the City of Light.",
    galleryImage: "https://c.animaapp.com/mirmmjt1sI61N8/img/group-118.png",
  },
  lapland: {
    title: "A Week With Santa",
    subtitle: "If you've ever wanted to feel eight years old again, this is how",
    duration: "7 Days | Lapland, Finland",
    location: "Lapland, Finland",
    pdf:'/Brochure of itenary/Unravel x Lapland 🎅.pdf',
    box:"Lapland in winter is Arctic fairy tale. Reindeer roaming, Northern Lights dancing, snow transforming everything into silence. Snowmobiling across frozen wilderness, wooden saunas after sub-zero days, glass igloos where you watch the aurora from bed. Meet Santa, drive huskies across frozen lakes, discover that cold this pure feels like coming home.",
    Weather:' Arctic conditions with temperatures plunging to -15 to -5°C; expect snow-covered landscapes, Northern Lights potential, and crisp, magical winter air.',
    inclusion:' Cozy Arctic lodges, private chauffeurs for ground transfers, once-in-a-lifetime winter activities, and full concierge service through Unravel One.',
    heroImages: [
      "https://c.animaapp.com/mirmmjt1sI61N8/img/rectangle-17.png",
    ],
    journeyDays: [
      {
     
        day: "Day 1 ",
        title:"Welcome to the Arctic Circle",
        description: "Your private driver meets you at Rovaniemi airport and takes you to your stay — a glass igloo, cozy cabin, or boutique hotel nestled in the snow.Unpack. Settle in. Let the stillness of Lapland wash over you.The day is yours. Rest. Wander. Feel the cold on your face and realize you're somewhere most people only dream about.",
        image: "/LaplandItenaryImages/day1.jpg",
      },
      {
        day: "Day 2 ",
        title:"Huskies, Santa & Aurora Hunting",
        description: "Breakfast, then straight into the Arctic. A husky sledding safari through silent forests. The sound of paws on snow. The kind of quiet that feels like magic.Then the iconic Santa Claus Village. Meet Santa himself. Send postcards to your loved ones from the official Santa post office in the Arctic Circle. Yes, really.Spend the afternoon however you want. Warm up. Explore. Let the day breathe.Late evening, the real adventure begins. A twilight aurora hunting snowmobile experience. Drive through winter landscapes lit only by your headlights. Stop in the middle of a pitch-dark forest. Your guide makes a campfire. You listen to stories about the Northern Lights while barbecuing sausages and sipping Lappish snacks.Then you look up. And if the universe is kind, the sky starts dancing.",
        image: "/LaplandItenaryImages/day2.jpg",
      },
       {
        day: "Day 3 ",
        title:"Snowshoes, Hot Cocoa and Forest Saunas",
        description: "Start the day with a snowshoe trek through hidden Arctic forests. Your guide leads. The snow crunches. Hot cocoa and marshmallows in the middle of nowhere.The afternoon is yours. Nap. Read. Stare out the window at a landscape that doesn't feel real. In the evening, a sauna and jacuzzi experience in the middle of the forest. Steam rising into freezing air. Stars overhead.The kind of warmth that stays with you.",
        image: "/LaplandItenaryImages/day3.jpg",
      },
       {
        day: "Day 4",
        title:"A Day in Levi",
        description: "Day trip to Levi, a winter town that feels like it was designed for this season.Visit Arcadania and choose your own adventure. Ski.Snowboard. Try something you've never done. Or just soak in the vibe of a place that knows how to do winter right.Return to Rovaniemi in the evening. Tired in the best way."  ,
        image: "/LaplandItenaryImages/day4.jpg",
      },
       {
        day: "Day 5",
        title:"The Hidden Palace of Santa",
        description: "Today, you're going somewhere most people don't know exists.A bus takes you deep into the woods to Santa's secret wooden house. The Forest Queen welcomes you. A candle-lit path leads you into the magic.Five fairy tasks await:● Meet Santa in his hidden house. Bring your letter. He has a gift for the children. ● Decorate gingerbread cookies in a cozy wooden cabin.Eat them or take them home.● Ride a reindeer sleigh. Close your eyes. Imagine flying.● Write your deepest wish and hang it on the Christmas tree of wishes. Because in Lapland, magic happens.● Warm up with pastries and hot berry juice between adventures.Tobogganing. Kick sledding. Mini snowmobiles for kids. Snow everywhere.Return to Rovaniemi with minds full of wonder and hearts impossibly warm.",
        image: "/LaplandItenaryImages/Day5.jpg",
      },
          {
        day: "Day 6",
        title:"Ice Floating and Aurora Picnic",
        description: "The morning is yours. If you're feeling brave, add an ice floating experience. Floating in Arctic waters in a survival suit.Surreal. Unforgettable.In the evening, your guide drives you out of the city to the perfect spot for an Aurora Borealis picnic. Open skies.Lappish snacks. Warm drinks. And hopefully, the lights.The kind of night that makes you believe in things you stopped believing in years ago.",
        image: "/LaplandItenaryImages/day6.jpg",
      },
          {
        day: "Day 7",
        title:"Farewell, Lapland",
        description: "Checkout. One last look at the snow.Your driver takes you to the airport.Leave with full hearts and the quiet knowledge that you've been somewhere truly magical.",
        image: "/LaplandItenaryImages/day7.jpg",
      },
    ],
    galleryTitle: "A Lapland Dump",
    gallerySubtitle: "Winter Magic Captured.",
    galleryImage: "https://c.animaapp.com/mirmmjt1sI61N8/img/group-118.png",
  },
   newyork: {
    title: "A New York Christmas (Like in the Movies)",
    subtitle: "Couples, families, solo travelers seeking an iconic, cinematic New York Christmas experience",
    duration: "4 Nights | 5 Days",
    location: "New York City, USA",
    pdf:'/Brochure of itenary/Unravel x A New York Christmas 🎄.pdf',
    box:"New York at Christmas doubles down on itself—brighter, faster, more alive. Fifth Avenue windows, Rockefeller's tree, rooftop bars where the skyline glitters. But also: secret Village jazz clubs, the Met during quiet mornings, neighborhood brunch spots that matter. New York through a local lens, wide awake and waiting.",
    Weather:' Cold and brisk with temperatures from -3 to 8°C; January and February bring snow and icy winds, while March begins to thaw.',
    inclusion:' Carefully selected hotels, private chauffeurs, iconic holiday experiences, and dedicated travel companion support from Unravel One.',
    heroImages: [
      "/luke-scarpino.jpg"
    ],
    journeyDays: [
      {
        day: "Day 1 ",
        title:"New York, New York",
        description: "Your private luxury driver meets you at the airport with hot cocoa and takes you to Lotte New York Palace in the heart of Midtown. Check in. Champagne waiting in your cathedral-view suite. Later, a private holiday lights limo tour. Fifth Avenue. Rockefeller Center. Radio City. Hot chocolate. Festive tunes. A cheese pizza because this is New York.Back at your suite, an in-room sundae feast. Because why not.",
        image: "/NewYorkItenaryImages/DAY1.jpg",
      },
      {
        day: "Day 2 ",
        title:"Lights, Ice and Broadway",
        description: "Breakfast at Lotte. Then a private walking tour through Central Park, Gapstow Bridge, and the Upper East Side. Every corner looks like a movie because it probably was one. Spend the afternoon on Fifth Avenue. Legendary window displays. Christmas markets. The energy of the city at full volume. Later, ice skating at Rockefeller Center or Bryant Park. Then Broadway. Choose from &amp; Juliet,The Lion King, or Moulin Rouge!The kind of night you'll talk about for years.",
        image: "/NewYorkItenaryImages/DAY2.jpg",
      },
       {
        day: "Day 3 ",
        title:"Aerial Magic and City Lights",
        description: "Breakfast in bed or brunch at Balthazar in SoHo. Then MoMA or The Edge for morning skyline views.Free afternoon. Shop through SoHo, Nolita, or the West Village. Café-hop. Get lost in the best way.Then the highlight: a doors-off helicopter flight over New York City. Empire State Building. One World Trade. Statue of Liberty. Adrenaline. Awe. The whole thing.",
        image: "/NewYorkItenaryImages/DAY3.jpg",
      },
        {
        day: "Day 4 ",
        title:"Christmas Day at Aman New York",
        description: "Slow breakfast at Lotte Palace. Optional Christmas mass at St. Patrick's Cathedral, right across the street. Spend the afternoon however you want. Bryant Park Winter Village. Hot cocoa. A horse carriage ride through Central Park. Summit One Vanderbilt for that interactive art installation everyone's talking about.In the evening, an exclusive festive dinner at Aman New York. Private table. Candle-lit. A Christmas menu crafted just for this night.Return to Lotte Palace for your final night. Maybe a quiet toast overlooking the city lights.",
        image: "/NewYorkItenaryImages/DAY4.jpg",
      },
        {
        day: "Day 5 ",
        title:"Farewell, New York",
        description: "Breakfast at leisure. One last look at the skyline.Your private driver takes you to the airport.Leave with a heart full of Christmas magic and a camera roll straight out of a movie.",
        image: "/NewYorkItenaryImages/DAY5.jpg",
      },
    ],
    gallerySubtitle: "Winter Magic Captured.",
    galleryImage: "https://c.animaapp.com/mirmmjt1sI61N8/img/group-118.png",
  },

};

