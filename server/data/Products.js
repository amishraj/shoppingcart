const products = [
  {
    name: "Nintendo 3DS",
    image: "/images/3ds.png",
    description:
      "The Nintendo 3DS offers a wide range of games, including popular Nintendo franchises such as Mario, Zelda, and Pokemon, as well as a vast library of third-party games. It also has an extensive online platform called the Nintendo eShop, where players can download digital games, demos, and other content.",
    price: 1,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Atari VCS",
    image: "/images/atari.png",
    description:
    "Atari returns to the living room with the Atari VCS™ — a completely modern gaming and video computer system, blending the best of consoles and PCs to delight a whole new generation of gamers and creators.",
    price: 1,
    countInStock: 10,
    rating: 2,
    numReviews: 2,
  },
  {
    name: "GameBoy Advanced SP Color",
    image: "/images/GBASP.png",
    description:
    "The Game Boy Advance SP (GBA SP) is a handheld gaming console released by Nintendo in 2003. It is an updated version of the original Game Boy Advance (GBA) with improved features and a more compact design. The GBA SP features a clamshell design with a folding screen that protects the display when not in use, making it more portable and durable than its predecessor. It also has a built-in rechargeable battery, eliminating the need for AA batteries like the original GBA. The GBA SP has a backlit screen, allowing for better visibility in various lighting conditions, and also includes a headphone jack for private gaming sessions. It is compatible with a large library of Game Boy Advance games, as well as backward compatibility with Game Boy and Game Boy Color games through a cartridge slot. The GBA SP was a popular handheld gaming console among gamers due to its improved design, portability, and extensive game library.",
    price: 1,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    name: "Nintendo Game Cube",
    image: "/images/GC.png",
    description:
    "The GameCube is a home video game console developed and released by Nintendo in 2001. It is a compact, cube-shaped console with a unique design and colorful aesthetics. The GameCube uses mini optical discs as its primary form of game media, and it is known for its high-quality graphics and innovative controller design. The console has a diverse library of games spanning various genres, including iconic titles such as Super Mario Sunshine, The Legend of Zelda: The Wind Waker, and Super Smash Bros. Melee. The GameCube also supports local multiplayer, allowing for fun gaming sessions with friends and family. Despite being considered commercially unsuccessful compared to its competitors, the PlayStation 2 and Xbox, the GameCube has a dedicated fanbase and is remembered for its distinctive design, memorable games, and unique gaming experiences.",
    price: 1,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    name: "AMD Gaming PC",
    image: "/images/gpc.png",
    description:
    "AMD 7950x, 2TB RAM, 10TB NVME, 10GB, 4090TI Nvidia GPU. Gaming PCs are designed to deliver a superior gaming experience, with the ability to run games at high resolutions, high frame rates, and with detailed graphics settings. They offer flexibility in terms of customization and upgradability, allowing gamers to tailor their systems to their specific needs and preferences. Gaming PCs are compatible with a wide range of gaming peripherals such as gaming mice, keyboards, and monitors, offering a customizable and immersive gaming experience.",
    price: 1,
    countInStock: 1,
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: "Nintendo 64",
    image: "/images/nin64.png",
    description:
    "nin64",
    price: 1,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Sony PS5",
    image: "/images/ps5.png",
    description:
    "The PlayStation 5 (PS5) is a gaming console developed by Sony Interactive Entertainment. It is the latest generation of the popular PlayStation gaming console series, succeeding the PlayStation 4. The PS5 features cutting-edge hardware and technology, delivering an immersive gaming experience with stunning graphics, fast load times, and advanced audio. It is powered by a custom-designed AMD processor, with support for ray tracing and 4K resolution gaming. The PS5 also includes an innovative DualSense controller with haptic feedback and adaptive triggers, providing a more tactile and immersive gameplay experience. The console offers a wide range of games, including exclusive titles from Sony's first-party studios, as well as a vast library of backward-compatible games from previous PlayStation consoles. Additionally, the PS5 offers features such as fast solid-state drive (SSD) storage, a user-friendly interface, and online multiplayer capabilities. It has gained a large following among gamers worldwide, with its powerful hardware, impressive performance, and diverse gaming library making it a highly sought-after gaming console.",
    price: 1,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    name: "Sony PS Vita",
    image: "/images/psvita.png",
    description:
    "The PlayStation Vita, commonly referred to as the PS Vita, is a handheld gaming console developed and produced by Sony. It was released in 2011 as the successor to the PlayStation Portable (PSP). The PS Vita features a 5-inch OLED touchscreen display, dual analog sticks, front and rear cameras, and built-in Wi-Fi and Bluetooth capabilities.",
    price: 1,
    countInStock: 10,
    rating: 3,
    numReviews: 9,
  },
  {
    name: "Steam Deck",
    image: "/images/steamdeck.png",
    description:
    "The Steam Deck is a handheld gaming device developed by Valve Corporation, the same company behind the popular digital game distribution platform, Steam. It resembles a handheld console with a 7-inch touchscreen display and built-in controllers, resembling those of a traditional gaming console. It runs on a custom AMD APU, which combines a quad-core CPU with an RDNA 2 GPU, making it capable of running AAA games from your Steam library. The Steam Deck also features a built-in controller layout with thumbsticks, buttons, triggers, and a D-pad, allowing for a wide range of control options. It also has a USB-C port for connecting to external displays and accessories, and a custom docking station for use with a TV or monitor. With its powerful hardware and extensive library of Steam games, the Steam Deck offers a unique and portable gaming experience for players who want to take their favorite PC games on the go.",
    price: 1,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    name: "Nintendo Switch",
    image: "/images/switch.png",
    description:
    "The Nintendo Switch is a popular gaming console developed by Nintendo, a renowned video game company. It was released in March 2017 and quickly gained widespread popularity for its unique design and versatile gameplay options. The Switch features a hybrid design that allows it to be used as a home console connected to a TV or as a handheld device for gaming on-the-go. It has a 6.2-inch touch screen, detachable Joy-Con controllers that can be used independently or attached to the console, and a dock for connecting to a TV.",
    price: 1,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    name: "Nintendo Wii",
    image: "/images/wii.png",
    description:
    "Nintendo Wii is known for its unique motion-controlled gameplay, which allows players to interact with games using physical gestures rather than traditional button inputs. The Wii's motion-sensing controllers, called Wii Remotes, are used to mimic actions such as swinging a tennis racket, bowling a ball, or waving a sword. The console also features a wide range of family-friendly games, including iconic titles like Mario Kart, Super Smash Bros., and Wii Sports, which became a cultural phenomenon with its virtual sports simulations.",
    price: 1,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    name: "Xbox Series X",
    image: "/images/xbox-x.png",
    description:
    "The Xbox Series X is a next-generation gaming console developed by Microsoft. Released in November 2020, it boasts powerful hardware and advanced features designed to deliver an immersive gaming experience. The Xbox Series X is powered by a custom-designed processor and graphics card, enabling it to deliver 4K gaming at 60 frames per second (fps) and even support for up to 120 fps for some games. It also features fast load times thanks to its custom SSD, allowing for quick game start-ups and reduced loading screens. The Xbox Series X supports backward compatibility, allowing players to enjoy a wide range of Xbox One, Xbox 360, and original Xbox games.",
    price: 1,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
];

export default products;
