const ProductsData = [
    {
      id: 1,
      name: 'Laptop',
      price: 899.99,
      description: 'Powerful laptop for all your computing needs',
      longDescription: 'Introducing our state-of-the-art laptop, where sophistication meets performance. Encased in a premium, ultra-slim chassis, this device seamlessly blends style with functionality. Its expansive, high-resolution display provides a visually immersive experience for work or entertainment. Equipped with a powerful processor, the laptop effortlessly handles demanding tasks, ensuring smooth multitasking and rapid responsiveness. The integrated cutting-edge graphics enhance both creativity and gaming. Capture memories with precision using the built-in high-definition webcam, while the ergonomically designed keyboard ensures comfortable and efficient typing. With robust security features, including facial recognition and fingerprint authentication, your data remains protected. Experience unparalleled portability and power with this sleek and dynamic laptop.',
      imageUrl: 'https://media.istockphoto.com/id/1297051332/vector/levitation-laptop-mockup.jpg?s=612x612&w=0&k=20&c=E9rp9HY7CaPjjsnZlg8NYBTFOGy7gfBSL7oK6wv5VnY=',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 599.99,
      description: 'Latest smartphone with high-end features',
      longDescription: 'Introducing the latest innovation in mobile technology, our cutting-edge smartphone seamlessly combines style and functionality. With a sleek, ergonomic design, the device boasts a vibrant and immersive edge-to-edge display, delivering stunning visuals and a captivating user experience. Powered by a high-performance processor, it effortlessly handles multitasking, ensuring swift and responsive navigation. Capture life moments in stunning detail with the advanced camera system, featuring AI enhancements for flawless photos and videos. The smartphone also prioritizes security, offering facial recognition and fingerprint sensor options. Stay connected for longer with an extended battery life and enjoy the convenience of fast charging. Elevate your mobile experience with this powerful, stylish companion.',
      imageUrl: 'https://i.pinimg.com/originals/3c/bf/ca/3cbfcaf6893c5eba39bcb5c2939e275e.jpg',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 99.99,
      description: 'High-quality over-ear headphones for immersive audio',
      longDescription: 'Introducing our premium headphones, where exceptional sound meets unparalleled comfort. Immerse yourself in a world of audio excellence with cutting-edge technology that delivers crystal-clear highs and deep, resonant lows. The sleek over-ear design ensures an optimal listening experience, complemented by plush memory foam ear cushions for extended comfort during prolonged use. These headphones are equipped with advanced noise-canceling capabilities, allowing you to escape into your music or focus without distractions. The foldable and lightweight design enhances portability, making them your ideal travel companion. With intuitive touch controls and a long-lasting battery life, these headphones redefine your auditory experience, seamlessly combining style, comfort, and audio brilliance.',
      imageUrl: 'https://i.pinimg.com/736x/0c/38/88/0c3888506e55d9478829079f30ceb369.jpg',
    },
    {
      id: 4,
      name: 'Coffee Maker',
      price: 49.99,
      longDescription: "Introducing our state-of-the-art coffee maker, designed to elevate your daily coffee ritual. Crafted with precision and innovation, this sleek appliance seamlessly blends style with functionality. Experience the perfect brew every time with customizable settings, allowing you to adjust the strength and temperature to suit your preferences. The intuitive touchscreen interface makes operation a breeze, while the programmable timer ensures your coffee is ready when you are. The coffee maker's advanced brewing technology extracts rich flavors, delivering a cup of perfection with each pour. Its compact design fits seamlessly into any kitchen, and the easy-to-clean components simplify maintenance. Elevate your mornings with the aroma and taste of freshly brewed coffee, courtesy of our exceptional coffee maker.",
      description: 'Automatic coffee maker for your daily caffeine fix',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/002/078/235/non_2x/illustration-of-coffee-machine-isolated-in-flat-style-vector.jpg',
    },
    {
      id: 5,
      name: 'Fitness Tracker',
      price: 79.99,
      description: 'Track your fitness activities with this smart device',
      longDescription: 'Introducing our cutting-edge fitness tracker, a sleek and intelligent gadget designed to empower your wellness journey. This wearable marvel seamlessly integrates into your lifestyle, effortlessly monitoring key health metrics. Equipped with precision sensors, it accurately tracks your steps, heart rate, and sleep patterns, providing valuable insights into your overall well-being. The vibrant touchscreen display keeps you informed with real-time data, while its water-resistant design ensures durability during workouts and daily activities. Sync seamlessly with your smartphone to receive notifications and analyze comprehensive fitness trends. With a lightweight and stylish design, our fitness tracker is the perfect companion for achieving your health and fitness goals, motivating you to live a more active and balanced life.',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/002/078/235/non_2x/illustration-of-coffee-machine-isolated-in-flat-style-vector.jpg',
    },
    {
      id: 6,
      name: 'Desk Chair',
      price: 129.99,
      description: 'Ergonomic chair for comfortable work or gaming sessions',
      longDescription: "Introducing our ergonomic desk chair, where comfort meets contemporary design for the ultimate workspace experience. This chair is crafted with precision to provide optimal support during long hours of work or study. Its adjustable features, including height, tilt, and lumbar support, cater to your individual preferences, promoting a healthy posture and reducing fatigue. The chair's sleek, modern aesthetic effortlessly complements any office or home environment. Upholstered in high-quality, breathable materials, it ensures a comfortable seating experience, while the durable construction guarantees long-lasting reliability. Elevate your productivity and well-being with our stylish and ergonomically designed desk chair – the perfect fusion of form and function for a comfortable and inspiring work atmosphere.",
      imageUrl: 'https://us.123rf.com/450wm/pikepicture/pikepicture2308/pikepicture230800227/210022510-room-office-chair-cartoon-vector-illustration.jpg?ver=6',
    },
    {
      id: 7,
      name: 'Backpack',
      price: 39.99,
      description: 'Stylish and spacious backpack for everyday use',
      longDescription: "Meet our versatile and stylish backpack, meticulously designed to complement your on-the-go lifestyle. This backpack seamlessly combines form and function, featuring a sleek yet durable exterior that stands up to the demands of daily life. With multiple compartments and pockets, it offers ample storage for your essentials, from laptops to water bottles. The ergonomic design and padded straps ensure comfort during extended wear, while the water-resistant material provides protection in varying weather conditions. Whether you're heading to work, school, or a weekend adventure, this backpack effortlessly blends practicality with contemporary aesthetics, making it the perfect companion for those who value both style and functionality on their journey.",
      imageUrl: 'https://us.123rf.com/450wm/pikepicture/pikepicture2308/pikepicture230800227/210022510-room-office-chair-cartoon-vector-illustration.jpg?ver=6',
    },
    {
      id: 8,
      name: 'Smartwatch',
      price: 149.99,
      description: 'Feature-packed smartwatch for staying connected',
      longDescription: "Introducing our cutting-edge smartwatch, a fusion of technology and style that seamlessly integrates into your active lifestyle. This sleek wearable goes beyond just telling time, offering a myriad of features to enhance your daily routine. Track your fitness progress with precision, monitor your heart rate, and stay connected with notifications from your smartphone – all displayed on a vibrant, customizable touchscreen. With GPS capabilities, it's your ideal companion for outdoor activities. The sleek, durable design ensures both functionality and fashion, suitable for any occasion. Stay ahead in style and substance with our smartwatch, where innovation meets the elegance of a timeless accessory.",
      imageUrl: 'https://img.freepik.com/free-vector/smartwatch-illustration-vector_23-2147498800.jpg?w=2000',
    },
    {
      id: 9,
      name: 'Bluetooth Speaker',
      price: 59.99,
      description: 'Portable Bluetooth speaker for on-the-go music',
      longDescription: "Introducing our state-of-the-art Bluetooth speaker, where impeccable sound meets wireless convenience. This compact yet powerful speaker delivers a rich audio experience, with deep bass and crisp highs, creating an immersive soundstage for your music, podcasts, and calls. Effortlessly connect your devices via Bluetooth for seamless streaming, or use the built-in aux-in for a wired connection. The sleek, portable design makes it an ideal companion for on-the-go adventures or enhancing your home ambiance. With a long-lasting battery life and intuitive controls, our Bluetooth speaker ensures that your favorite tunes are always at your fingertips, providing a perfect harmony of portability, style, and exceptional audio quality.",
      imageUrl: 'https://cdn5.vectorstock.com/i/1000x1000/78/74/flat-bluetooth-speakers-vector-19797874.jpg',
    },
    {
      id: 10,
      name: 'Digital Camera',
      price: 299.99,
      description: 'Capture high-quality photos with this digital camera',
      longDescription: "Introducing our advanced digital camera, where innovation meets precision to capture life's moments in stunning detail. Packed with cutting-edge technology, this camera boasts high-resolution imaging and advanced autofocus for crystal-clear photos and videos. Whether you're a seasoned photographer or a casual shooter, the intuitive controls and customizable settings cater to all skill levels. Its compact yet durable design makes it your ideal travel companion, while the flip-out touchscreen simplifies framing and playback. With impressive low-light performance and rapid shooting capabilities, this digital camera is ready to seize every fleeting moment with unparalleled clarity. Unleash your creativity and document life's stories with our sophisticated digital camera.",
      imageUrl: 'https://img.freepik.com/premium-vector/camera-cartoon-vector-illustration-with-modern-colors_500021-348.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1701820800&semt=ais',
    },
    {
      id: 11,
      name: 'Gaming Console',
      price: 399.99,
      description: 'Next-gen gaming console for immersive gaming experiences',
      longDescription: "Unleash the next level of gaming with our revolutionary gaming console. Designed for immersive experiences, this powerhouse combines cutting-edge graphics, high-performance processing, and a vast game library to redefine your gaming world. Immerse yourself in lifelike graphics, responsive controls, and seamless multiplayer capabilities that transport you to new realms of entertainment. With 4K resolution and HDR technology, every detail comes to life on your screen. The sleek and dynamic design not only enhances your gaming setup but also reflects the console's futuristic capabilities. Elevate your gaming adventure with our state-of-the-art console – where innovation and excitement converge to create a gaming experience like no other.",
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/011/203/869/small/game-console-free-vector.jpg',
    },
    {
      id: 12,
      name: 'Wireless Earbuds',
      price: 79.99,
      longDescription: "Introducing our wireless earbuds, the epitome of convenience and immersive audio. These sleek and compact buds provide a cable-free experience, seamlessly connecting to your devices via Bluetooth. With high-fidelity sound and dynamic bass, they deliver an audio experience that transcends expectations. The ergonomic design ensures a secure and comfortable fit, making them ideal for workouts, commutes, or everyday use. Touch controls allow effortless navigation between music, calls, and voice assistants, while the compact charging case extends your listening pleasure on the go. Elevate your audio game with our wireless earbuds, where portability meets performance for a truly wire-free and immersive sound experience.",
      description: 'Wireless earbuds with crystal-clear audio',
      imageUrl: 'https://as2.ftcdn.net/v2/jpg/03/24/00/73/1000_F_324007320_gARJNstVZzdfldeo6VzNDfu6nLaBgmgC.jpg',
    },
    {
      id: 13,
      name: 'Home Security Camera',
      price: 129.99,
      description: 'Monitor your home with this advanced security camera',
      longDescription: "Introducing our advanced home security camera, your vigilant guardian for peace of mind. This cutting-edge surveillance solution combines state-of-the-art technology with user-friendly features to safeguard your home. Enjoy crystal-clear 1080p HD video, day or night, with infrared night vision ensuring visibility in low-light conditions. The camera seamlessly integrates with your smart home ecosystem, allowing remote monitoring via a dedicated app. Motion detection alerts and two-way audio capabilities enable real-time communication, providing an additional layer of security. With easy installation and weather-resistant construction, this camera offers reliable protection for both indoor and outdoor spaces. Elevate your home security with our sophisticated camera – where innovation meets peace of mind.",
      imageUrl: 'https://as2.ftcdn.net/v2/jpg/03/24/00/73/1000_F_324007320_gARJNstVZzdfldeo6VzNDfu6nLaBgmgC.jpg',
    },
    {
      id: 14,
      name: 'Tablet',
      price: 249.99,
      description: 'Portable tablet for work and entertainment',
      longDescription: "Introducing our sleek and powerful tablet, a versatile device designed to enhance your digital experience. With a vibrant, high-resolution display, it provides a stunning canvas for work, entertainment, and creativity. Powered by a robust processor, this tablet effortlessly handles multitasking, ensuring smooth performance for apps, games, and productivity tools. Its slim and lightweight design makes it the perfect companion for on-the-go use, while the long-lasting battery ensures you stay connected throughout the day. Whether you're reading, streaming, or sketching, the responsive touch interface and intuitive controls make every interaction a pleasure. Embrace the future of portable technology with our feature-rich tablet, where innovation and convenience converge for a seamless digital lifestyle.",
      imageUrl: 'https://i.pinimg.com/originals/b3/c8/59/b3c859a5950c9adf395fe85a47939d09.jpg',
    },
    {
      id: 15,
      name: 'Printer',
      price: 89.99,
      description: 'Efficient printer for your home or office needs',
      longDescription: "Introducing our high-performance printer, a reliable companion for all your printing needs. This versatile device seamlessly combines speed, precision, and connectivity to enhance your productivity. Experience crisp and vibrant prints with advanced printing technology, whether you're producing documents, photos, or creative projects. With wireless connectivity, effortlessly print from your devices, and cloud compatibility allows for seamless access to your files from anywhere. The intuitive touchscreen interface simplifies navigation, while features like duplex printing save both time and resources. Compact yet robust, this printer is designed for modern workspaces, delivering professional-quality results with every print. Elevate your printing experience with our efficient and feature-rich printer – where innovation meets reliability.",
      imageUrl: 'https://img.freepik.com/premium-vector/printer-paper_16734-438.jpg',
    },
    {
      id: 16,
      name: 'Smart Thermostat',
      price: 129.99,
      description: 'Smart thermostat for energy-efficient temperature control',
      longDescription: "Introducing our cutting-edge smart thermostat, your key to personalized comfort and energy efficiency. This sleek and intuitive device seamlessly integrates into your home, allowing you to control your heating and cooling systems with precision. With smart learning capabilities, it adapts to your preferences over time, optimizing energy usage and reducing utility costs. The user-friendly interface, accessible via a mobile app, empowers you to adjust settings remotely, ensuring your home is always the perfect temperature. Compatible with popular smart home ecosystems, it effortlessly fits into your connected lifestyle. Elevate your home's climate control with our smart thermostat – where innovation meets sustainability for a more comfortable and eco-friendly living space.",
      imageUrl: 'https://thumbs.dreamstime.com/b/digital-thermostat-vector-illustration-digital-thermostat-vector-illustration-simple-vector-icon-122683162.jpg',
    },
    {
      id: 17,
      name: 'Drones',
      price: 199.99,
      description: 'Explore the skies with this high-tech drone',
      longDescription: "Introducing our advanced drone, a technological marvel that takes your aerial adventures to new heights. Packed with cutting-edge features, this quadcopter combines stability and agility for unparalleled flying experiences. Capture breathtaking vistas with the integrated high-resolution camera, offering both photo and video capabilities. Precision controls and intelligent flight modes make it suitable for both novice pilots and seasoned enthusiasts. The compact and durable design ensures portability without compromising on performance. With extended battery life and obstacle avoidance technology, this drone is your ticket to exploring the skies with confidence. Elevate your perspective and unleash your creativity with our state-of-the-art drone – where innovation meets the thrill of flight.",
      imageUrl: 'https://st3.depositphotos.com/1071184/12605/v/450/depositphotos_126054730-stock-illustration-quadrocopter-flat-icon.jpg',
    },
    {
      id: 18,
      name: 'Portable Charger',
      price: 29.99,
      description: 'Charge your devices on the go with this portable charger',
      longDescription: "Introducing our compact and powerful portable charger, your on-the-go solution to stay connected anytime, anywhere. This sleek and lightweight device ensures you never run out of power, featuring a high-capacity battery that can quickly charge your devices multiple times. The slim design easily fits into your pocket or bag, making it an essential companion for travel, outdoor adventures, or daily commuting. Equipped with multiple charging ports and fast-charging technology, it efficiently powers up smartphones, tablets, and other USB-compatible devices. With a durable build and intelligent safety features, this portable charger is a reliable energy source for your tech-savvy lifestyle. Stay charged and connected effortlessly with our portable charger – where convenience meets reliability for your power-hungry devices.",
      imageUrl: 'https://img.freepik.com/premium-vector/power-bank-with-usb-cable-portable-charger-device-vector-illustration_266660-659.jpg?w=2000',
    },
    {
      id: 19,
      name: 'Projector',
      price: 179.99,
      description: 'Create a cinematic experience with this home projector',
      longDescription: "Introducing our state-of-the-art projector, a visual masterpiece designed to transform any space into an immersive cinematic experience. With stunning clarity and vibrant colors, this projector brings your presentations, movies, and gaming sessions to life on a grand scale. The high-resolution display and advanced imaging technology ensure sharp and detailed visuals. Compact and portable, it effortlessly adapts to various environments, making it ideal for both home entertainment and professional presentations. Versatile connectivity options, including HDMI and wireless capabilities, enable seamless integration with your devices. Elevate your visual experience with our projector – where innovation meets versatility, delivering a captivating display for all your multimedia needs.",
      imageUrl: 'https://media.istockphoto.com/id/524386738/vector/movie-projector-vector-illustration.jpg?s=612x612&w=0&k=20&c=Ky2ITKqtXJ1QsyMG9cAbIEg0RNRXj7NtCFU9CBiJSe4=',
    },
    {
      id: 20,
      name: 'Virtual Reality Headset',
      price: 299.99,
      description: 'Immerse yourself in virtual worlds with this VR headset',
      longDescription: "Introducing our cutting-edge VR headset, an immersive gateway to virtual worlds that transcends reality. Slip into a realm where vivid visuals, realistic sound, and responsive controls redefine your gaming and entertainment experiences. This sleek and comfortable headset delivers stunning 3D environments, creating an unparalleled sense of presence. With precise tracking and intuitive motion controls, you become an active participant in the virtual landscape. The high-resolution display ensures crystal-clear graphics, while ergonomic design prioritizes comfort during extended use. Compatible with a range of VR content, this headset opens up endless possibilities for exploration, gaming, and interactive storytelling. Step into the future of entertainment with our VR headset – where innovation meets a new dimension of reality.",
      imageUrl: 'https://img.freepik.com/free-vector/realistic-vr-headset-illustration_23-2148766391.jpg',
    },
  ];
  
  export default ProductsData;