// Map EVERY subcategory name exactly (case sensitive) to its own list
const allProducts = {
  // --- Electronics ---
  "Phones": [
    {name:"iQOO Neo 10",img:"images/IQOOneo10.jpg",link:"https://amzn.to/45xvrbJ",desc:"iQOO Neo 10 (Titanium Chrome, 8GB RAM, 256GB Storage) | Snapdragon 8s Gen 4 Processor & SuperComputing Chip Q1 | 7000 mAh Battery | Segment's Highest 144 FPS Gaming Smartphone.", price: "$499", rating: 4.7, reviews: 342, badge: "Best Seller"},
    {name:"Redmi Note 14 Pro 5G",img:"images/redmin14pro.jpg",link:"https://amzn.to/47sCyET",desc:"Redmi Note 14 Pro 5G Champagne Gold 8GB RAM 256GB Storage|50 MP Sony Camera Setup|Corning Gorilla Glass Victus 2 | 1.5K 3D Curved AMOLED | Mediatek Dimensity 7300- Ultra | IP68 IP69.", price: "$399", rating: 4.6, reviews: 518, badge: "Popular"},
    {name:"Samsung Galaxy S23",img:"images/samsungs23.jpg",link:"https://amzn.to/4fzlmQ8",desc:"Samsung Galaxy S23 5G AI Smartphone (Phantom Black, 8GB, 256GB Storage)", price: "$699", rating: 4.8, reviews: 1247, badge: "Top Rated"},
    {name:"OnePlus 11",img:"images/oneplus11.jpg",link:"https://amzn.to/4oAnKKr",desc:"OnePlus 11 5G (Titan Black, 8GB RAM, 128GB Storage)", price: "$649", rating: 4.7, reviews: 892},
    {name:"Google Pixel 9a",img:"images/pixel9a.jpg",link:"https://amzn.to/45BuvTI",desc:"Google Pixel 9a 5G (8GB RAM, 256GB Storage)", price: "$449", rating: 4.5, reviews: 324, badge: "New"},
    {name:"Nothing Phone (3a)",img:"images/nth3a.jpg",link:"https://amzn.to/45whJWv",desc:"Nothing Phone (3a) Black 256GB 8GB RAM", price: "$329", rating: 4.6, reviews: 456},
    {name:"CMF Phone 2 Pro",img:"images/nthcmf2pro.jpg",link:"https://amzn.to/4oA9Ms8",desc:"CMF Phone 2 Pro (Light Green, 8GB RAM, 128GB Storage)", price: "$299", rating: 4.4, reviews: 287},
    {name:"Vivo Y39 5G",img:"images/vivoy39.jpg",link:"https://amzn.to/45qARVO",desc:"Vivo Y39 5G (Ocean Blue, 8GB RAM, 256GB Storage) 50 MP + 2 MP Rear Camera | 8 MP Selfie Camera 16.9672 cm (6.68\" inch) Memory & SIM: 8GB RAM | 256GB internal memory 44W fast charging with 6500 mAh battery.", price: "$279", rating: 4.3, reviews: 198},
    {name:"iPhone 15",img:"images/iphone15.jpg",link:"https://amzn.to/45BQuKr",desc:"Apple iPhone 15 (128GB) - Black. The most powerful iPhone yet with advanced camera system and A17 chip.", price: "$799", rating: 4.9, reviews: 2156, badge: "Premium"}
  ],
  "Laptops": [
    {name:"MacBook Air M2",img:"images/macbook.jpg",link:"https://amzn.to/3V8hZ9j",desc:"Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage. Supercharged by M2. Sleek, lightweight design.", price: "$1099", rating: 4.8, reviews: 1892, badge: "Best Seller"},
    {name:"Dell XPS 13",img:"images/dellxps.jpg",link:"https://amzn.to/45BQuKr",desc:"Dell XPS 13-9350 Laptop, AI Enabled Intel Core Ultra7 Processor 256V, 16GB, LPDDR5X, 512GB SSD, Intel Arc Graphics, 13\" (33.02cm) FHD+ Display, Win 11+MSO'21+McAfee 15 Month, Platinum Silver, 1.22Kg.", price: "$1299", rating: 4.7, reviews: 673},
    {name:"HP Spectre x360",img:"images/hpspectre.jpg",link:"https://amzn.to/45BQuKr",desc:"HP Spectre x360 2-in-1 Laptop, 14 inch OLED Touchscreen, Intel Core Ultra 7, 32GB RAM, 1TB SSD, Backlit Keyboard, Fingerprint Reader, Silver.", price: "$1499", rating: 4.8, reviews: 432, badge: "Premium"},
    {name:"Lenovo Yoga 9i",img:"images/yoga9i.jpg",link:"https://amzn.to/3V8hZ9j",desc:"Lenovo Yoga Book 9 13th Gen Intel Evo Core i7 Dual 13.3\" 2.8K OLED Display(2x33.7cm) with Pen+Keyboard|16GB/1TB SSD/Win 11/Office 2021/5.0MP IR Camera/360 B&W Rotating Soundbar/Teal/1.34Kg,82YQ001DIN.", price: "$1399", rating: 4.7, reviews: 389}
  ],
  "Smartwatches": [
    {name:"Apple Watch Series 9",img:"images/applewatch.jpg",link:"https://amzn.to/45BQuKr",desc:"Apple Watch Series 9 [GPS 41mm] Smart Watch with Blue Sport Loop. Advanced health tracking, ECG, blood oxygen monitoring, and fitness features.", price: "$399", rating: 4.8, reviews: 2147, badge: "Best Seller"},
    {name:"Samsung Galaxy Watch 6",img:"images/galaxywatch6.jpg",link:"https://amzn.to/45BQuKr",desc:"Samsung Galaxy Watch 6 Classic 43mm Smartwatch with Bluetooth Calling, Advanced Health Monitoring, GPS, Waterproof, 40% Larger Screen.", price: "$349", rating: 4.6, reviews: 987},
    {name:"Amazfit GTR 4",img:"images/amazfitgtr4.jpg",link:"https://amzn.to/45BQuKr",desc:"Amazfit GTR 4 Smart Watch for Men Women, 150+ Sports Modes, Bluetooth Calling, 14-Day Battery, GPS, Heart Rate Monitor, Black.", price: "$199", rating: 4.5, reviews: 1243, badge: "Value"},
    {name:"Garmin Venu 2",img:"images/garminvenu2.jpg",link:"https://amzn.to/45BQuKr",desc:"Garmin Venu 2 Premium Smartwatch with AMOLED Display, Music Storage, Advanced Health Monitoring, GPS, and Up to 10 Days Battery.", price: "$449", rating: 4.7, reviews: 678}
  ],
  "Apple Products": [
    {name:"iPad Pro M2",img:"images/ipadpro.jpg",link:"https://amzn.to/45BQuKr",desc:"Apple iPad Pro 12.9-inch with M2 chip: 128GB, Wi-Fi + Cellular, Space Gray. Liquid Retina XDR display, Face ID, Thunderbolt/USB 4.", price: "$1099", rating: 4.8, reviews: 892, badge: "Premium"},
    {name:"MacBook Pro M3",img:"images/macbookpro.jpg",link:"https://amzn.to/45BQuKr",desc:"Apple MacBook Pro Laptop with M3 chip: 14-inch Liquid Retina XDR Display, 16GB Unified Memory, 512GB SSD Storage. For creators and professionals.", price: "$1999", rating: 4.9, reviews: 432},
    {name:"iMac 24-inch",img:"images/imac24.jpg",link:"https://amzn.to/45BQuKr",desc:"Apple iMac 24-inch with M3 chip: 8GB RAM, 256GB SSD, 4.5K Retina Display, Seven-speaker sound system, Magic Keyboard with Touch ID - Pink.", price: "$1299", rating: 4.7, reviews: 345},
    {name:"AirPods Pro 2",img:"images/airpodspro2.jpg",link:"https://amzn.to/45BQuKr",desc:"Apple AirPods Pro (2nd generation) with MagSafe Charging Case (USB-C). Active noise cancellation, Adaptive Audio, Personalized Spatial Audio.", price: "$249", rating: 4.8, reviews: 3247, badge: "Best Seller"}
  ],
  "Accessories": [
    {name:"Anker PowerCore",img:"images/powerbank.jpg",link:"https://amzn.to/45BQuKr",desc:"Anker PowerCore 26800mAh Portable Charger, Power Bank High Capacity External Battery Pack with 2 USB-C and 1 USB-A Ports.", price: "$59", rating: 4.6, reviews: 876, badge: "Best Seller"},
    {name:"Logitech MX Master 3S",img:"images/mxmaster3s.jpg",link:"https://amzn.to/45BQuKr",desc:"Logitech MX Master 3S Wireless Mouse for Mac and PC, Ergonomic Design, 8K DPI Sensor, Ultra-quiet Clicks, Bluetooth, USB Receiver.", price: "$99", rating: 4.8, reviews: 1243},
    {name:"Sony WH-1000XM5",img:"images/sonyxm5.jpg",link:"https://amzn.to/45BQuKr",desc:"Sony WH-1000XM5 Wireless Noise Cancelling Headphones, 30-Hour Battery Life, Industry Leading ANC, Hi-Res Audio, Quick Attention Mode.", price: "$349", rating: 4.7, reviews: 1892},
    {name:"SanDisk 1TB SSD",img:"images/ssd1tb.jpg",link:"https://amzn.to/45BQuKr",desc:"SanDisk 1TB Portable SSD, Up to 1050MB/s, Rugged & Durable, Waterproof, Dustproof, Shock Resistant, USB-C, USB 3.2 Gen 2.", price: "$129", rating: 4.6, reviews: 765}
  ],

  // --- Clothes ---
  "Men": [
    {name:"Formal Shirt",img:"images/menshirt.jpg",link:"https://amzn.to/45BQuKr",desc:"Classic Fit Formal Shirt for Men, 100% Cotton, Wrinkle Resistant, Regular Fit, Dress Shirt for Office, Wedding, Party - White.", price: "$49", rating: 4.5, reviews: 567, badge: "Popular"},
    {name:"Jeans",img:"images/menjeans.jpg",link:"https://amzn.to/45BQuKr",desc:"Men's Slim Fit Jeans, Stretch Denim, Mid-Rise, Five Pocket, Classic Blue, Comfortable Fit for Everyday Wear.", price: "$79", rating: 4.6, reviews: 892},
    {name:"Leather Jacket",img:"images/menjacket.jpg",link:"https://amzn.to/45BQuKr",desc:"Men's Genuine Leather Jacket, Biker Style, Zipper Front, Multiple Pockets, Soft Fleece Lining, Available in Black and Brown.", price: "$199", rating: 4.7, reviews: 345, badge: "Premium"},
    {name:"Sneakers",img:"images/mensneakers.jpg",link:"https://amzn.to/45BQuKr",desc:"Men's Running Shoes, Lightweight Athletic Sneakers, Breathable Mesh Upper, Cushioned Sole, Perfect for Gym, Walking, Jogging.", price: "$89", rating: 4.5, reviews: 1243}
  ],
  "Women": [
    {name:"Summer Dress",img:"images/womendress.jpg",link:"https://amzn.to/45BQuKr",desc:"Women's Summer Dress, Floral Print, Sleeveless, A-Line, Flowy Midi Dress, Comfortable Cotton Blend, Perfect for Beach, Vacation, Party.", price: "$59", rating: 4.7, reviews: 876, badge: "Best Seller"},
    {name:"Heels",img:"images/womenheels.jpg",link:"https://amzn.to/45BQuKr",desc:"Women's Pumps Heels, Pointed Toe, Stiletto High Heels, Comfortable Block Heel, Perfect for Office, Wedding, Party, Available in Multiple Colors.", price: "$69", rating: 4.4, reviews: 432},
    {name:"Handbag",img:"images/womenbag.jpg",link:"https://amzn.to/45BQuKr",desc:"Women's Genuine Leather Handbag, Tote Bag, Top Handle, Multiple Compartments, Zipper Closure, Stylish and Spacious for Daily Use.", price: "$129", rating: 4.8, reviews: 289, badge: "Premium"},
    {name:"Scarf",img:"images/womenscarf.jpg",link:"https://amzn.to/45BQuKr",desc:"Women's Cashmere Scarf, Lightweight, Soft and Warm, Solid Color, Fringe Edges, Perfect Accessory for Winter and Fall.", price: "$39", rating: 4.6, reviews: 198}
  ],
  "Kids": [
    {name:"Kids T-shirt",img:"images/kidstshirt.jpg",link:"https://amzn.to/45BQuKr",desc:"Kids Cotton T-Shirt, Cartoon Print, Short Sleeve, Soft and Comfortable, Perfect for School, Play, and Daily Wear, Multiple Designs Available.", price: "$19", rating: 4.5, reviews: 345, badge: "Popular"},
    {name:"School Bag",img:"images/schoolbag.jpg",link:"https://amzn.to/45BQuKr",desc:"Kids School Backpack, Lightweight, Water Resistant, Multiple Compartments, Padded Shoulder Straps, Reflective Strips for Safety, Cute Animal Design.", price: "$49", rating: 4.7, reviews: 567},
    {name:"Sneakers",img:"images/kidssneakers.jpg",link:"https://amzn.to/45BQuKr",desc:"Kids Athletic Shoes, Velcro Closure, Lightweight, Non-Slip Sole, Breathable Mesh, Perfect for School, Play, and Sports Activities.", price: "$39", rating: 4.6, reviews: 432},
    {name:"Cap",img:"images/kidscap.jpg",link:"https://amzn.to/45BQuKr",desc:"Kids Baseball Cap, Adjustable Strap, UV Protection, Breathable Mesh, Fun Designs, Perfect for Sun Protection and Style.", price: "$15", rating: 4.4, reviews: 289}
  ],

  // --- Furniture ---
  "Bedroom": [
    {name:"Queen Bed",img:"images/queenbed.jpg",link:"https://amzn.to/45BQuKr",desc:"Queen Size Bed Frame with Headboard, Solid Wood Construction, Modern Design, Easy Assembly, Available in Oak and Walnut Finish.", price: "$799", rating: 4.7, reviews: 234, badge: "Popular"},
    {name:"Wardrobe",img:"images/wardrobe.jpg",link:"https://amzn.to/45BQuKr",desc:"Large Wardrobe Closet, 6 Doors, Multiple Shelves and Drawers, Mirror Included, Spacious Storage for Clothes and Accessories.", price: "$1299", rating: 4.8, reviews: 189, badge: "Premium"},
    {name:"Bedside Table",img:"images/bedside.jpg",link:"https://amzn.to/45BQuKr",desc:"Modern Bedside Table, Nightstand with Drawer and Open Shelf, Solid Wood, Perfect for Lamps, Books, and Nighttime Essentials.", price: "$149", rating: 4.6, reviews: 345},
    {name:"Dressing Table",img:"images/dressingtable.jpg",link:"https://amzn.to/45BQuKr",desc:"Dressing Table with Mirror, 3 Drawers and Open Shelf, LED Lights, Comfortable Stool Included, Perfect for Makeup and Jewelry Storage.", price: "$299", rating: 4.7, reviews: 212}
  ],
  "Living Room": [
    {name:"Sofa Set",img:"images/sofa.jpg",link:"https://amzn.to/45BQuKr",desc:"3+2 Seater Sofa Set, Premium Fabric, High Resilience Foam Cushions, Modern Design, Available in Multiple Colors, Easy to Clean.", price: "$1499", rating: 4.8, reviews: 345, badge: "Best Seller"},
    {name:"Coffee Table",img:"images/coffeetable.jpg",link:"https://amzn.to/45BQuKr",desc:"Modern Coffee Table, Tempered Glass Top, Metal Frame, Minimalist Design, Perfect for Living Room, Centerpiece for Your Space.", price: "$249", rating: 4.6, reviews: 289},
    {name:"TV Stand",img:"images/tvstand.jpg",link:"https://amzn.to/45BQuKr",desc:"TV Console Stand, 60 inch, Wood Finish, Multiple Shelves and Drawers, Cable Management, Modern Design for Living Room Entertainment.", price: "$399", rating: 4.7, reviews: 432},
    {name:"Bookshelf",img:"images/bookshelf.jpg",link:"https://amzn.to/45BQuKr",desc:"Tall Bookshelf, 5 Shelves, Solid Wood, Rustic Design, Perfect for Books, Decorations, and Display Items, Wall Mounted or Freestanding.", price: "$299", rating: 4.5, reviews: 198}
  ],
  "Dining": [
    {name:"Dining Table",img:"images/diningtable.jpg",link:"https://amzn.to/45BQuKr",desc:"6-Seater Dining Table, Solid Wood, Extendable Design, Scratch Resistant Finish, Perfect for Family Meals and Gatherings.", price: "$899", rating: 4.7, reviews: 212},
    {name:"Dining Chairs",img:"images/diningchairs.jpg",link:"https://amzn.to/45BQuKr",desc:"Set of 4 Dining Chairs, Upholstered Seats, Wooden Legs, Comfortable and Stylish, Perfect Match for Any Dining Table.", price: "$399", rating: 4.6, reviews: 345},
    {name:"Bar Stools",img:"images/barstools.jpg",link:"https://amzn.to/45BQuKr",desc:"Set of 2 Bar Stools, Adjustable Height, Swivel Seat, Footrest, Modern Design for Kitchen Island or Home Bar.", price: "$199", rating: 4.5, reviews: 189}
  ],

  // --- Books ---
  "Fiction": [
    {name:"The Great Gatsby",img:"images/gatsby.jpg",link:"https://amzn.to/45BQuKr",desc:"F. Scott Fitzgerald's classic American novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.", price: "$14.99", rating: 4.8, reviews: 4567, badge: "Classic"},
    {name:"Harry Potter",img:"images/harrypotter.jpg",link:"https://amzn.to/45BQuKr",desc:"Harry Potter and the Sorcerer's Stone by J.K. Rowling. The first book in the magical series about a young wizard's adventures at Hogwarts.", price: "$19.99", rating: 4.9, reviews: 12456, badge: "Best Seller"},
    {name:"The Hobbit",img:"images/hobbit.jpg",link:"https://amzn.to/45BQuKr",desc:"J.R.R. Tolkien's epic fantasy novel about Bilbo Baggins' journey to reclaim treasure guarded by a dragon.", price: "$16.99", rating: 4.8, reviews: 8923},
    {name:"1984",img:"images/1984.jpg",link:"https://amzn.to/45BQuKr",desc:"George Orwell's dystopian classic exploring totalitarianism, surveillance, and individual freedom in a chilling future society.", price: "$15.99", rating: 4.7, reviews: 7654}
  ],
  "Non-Fiction": [
    {name:"Sapiens",img:"images/sapiens.jpg",link:"https://amzn.to/45BQuKr",desc:"Sapiens: A Brief History of Humankind by Yuval Noah Harari. A groundbreaking exploration of human history from evolution to modern society.", price: "$18.99", rating: 4.8, reviews: 9876, badge: "Best Seller"},
    {name:"Atomic Habits",img:"images/atomichabits.jpg",link:"https://amzn.to/45BQuKr",desc:"Atomic Habits by James Clear. A proven system for building good habits, breaking bad ones, and mastering tiny changes that lead to remarkable results.", price: "$17.99", rating: 4.9, reviews: 14567, badge: "Best Seller"},
    {name:"Educated",img:"images/educated.jpg",link:"https://amzn.to/45BQuKr",desc:"Educated by Tara Westover. A memoir about growing up in a survivalist family and pursuing education against all odds.", price: "$16.99", rating: 4.7, reviews: 8765},
    {name:"The Power of Habit",img:"images/powerofhabit.jpg",link:"https://amzn.to/45BQuKr",desc:"The Power of Habit by Charles Duhigg. Exploring the science behind why we do what we do in life and business.", price: "$15.99", rating: 4.6, reviews: 7654}
  ],
  "Manga": [
    {name:"One Piece",img:"images/onepiece.jpg",link:"https://amzn.to/45BQuKr",desc:"One Piece Vol. 1 by Eiichiro Oda. The beginning of the epic pirate adventure following Monkey D. Luffy and his crew.", price: "$12.99", rating: 4.9, reviews: 5678, badge: "Best Seller"},
    {name:"Demon Slayer",img:"images/demonslayer.jpg",link:"https://amzn.to/45BQuKr",desc:"Demon Slayer: Kimetsu no Yaiba Vol. 1 by Koyoharu Gotouge. A boy becomes a demon slayer to save his sister who has been turned into a demon.", price: "$13.99", rating: 4.8, reviews: 6789, badge: "Popular"},
    {name:"My Hero Academia",img:"images/myhero.jpg",link:"https://amzn.to/45BQuKr",desc:"My Hero Academia Vol. 1 by Kohei Horikoshi. In a world where everyone has superpowers, a boy without powers dreams of becoming a hero.", price: "$12.99", rating: 4.7, reviews: 5432},
    {name:"Tokyo Revengers",img:"images/tokyorevengers.jpg",link:"https://amzn.to/45BQuKr",desc:"Tokyo Revengers Vol. 1 by Ken Wakui. A delinquent travels back in time to change the past and save his friends from a tragic future.", price: "$11.99", rating: 4.6, reviews: 4321}
  ],
  "Academic": [
    {name:"Calculus Early Transcendentals",img:"images/calculus.jpg",link:"https://amzn.to/45BQuKr",desc:"Calculus: Early Transcendentals by James Stewart. The definitive textbook for calculus courses with clear explanations and comprehensive examples.", price: "$249.99", rating: 4.5, reviews: 1234},
    {name:"Principles of Economics",img:"images/economics.jpg",link:"https://amzn.to/45BQuKr",desc:"Principles of Economics by N. Gregory Mankiw. A comprehensive introduction to economic principles and their real-world applications.", price: "$199.99", rating: 4.4, reviews: 876},
    {name:"Organic Chemistry",img:"images/organicchem.jpg",link:"https://amzn.to/45BQuKr",desc:"Organic Chemistry by David R. Klein. A student-friendly approach to understanding organic chemistry concepts and mechanisms.", price: "$189.99", rating: 4.3, reviews: 765},
    {name:"University Physics",img:"images/physics.jpg",link:"https://amzn.to/45BQuKr",desc:"University Physics with Modern Physics by Hugh D. Young. Comprehensive coverage of physics principles with modern applications.", price: "$229.99", rating: 4.6, reviews: 987}
  ],

  // --- Beauty ---
  "Skincare": [
    {name:"Vitamin C Serum",img:"images/vitcserum.jpg",link:"https://amzn.to/45BQuKr",desc:"Professional Vitamin C Serum with Hyaluronic Acid and Vitamin E. Brightens skin, reduces dark spots, and provides antioxidant protection.", price: "$49.99", rating: 4.7, reviews: 2345, badge: "Best Seller"},
    {name:"Retinol Cream",img:"images/retinolcream.jpg",link:"https://amzn.to/45BQuKr",desc:"Anti-Aging Retinol Cream with Peptides and Niacinamide. Reduces wrinkles, improves skin texture, and promotes collagen production.", price: "$59.99", rating: 4.8, reviews: 1892},
    {name:"Hyaluronic Acid",img:"images/hyaluronic.jpg",link:"https://amzn.to/45BQuKr",desc:"Hyaluronic Acid Serum for Face. Deeply hydrates, plumps skin, and reduces the appearance of fine lines. Suitable for all skin types.", price: "$39.99", rating: 4.6, reviews: 3456},
    {name:"Sunscreen SPF 50",img:"images/sunscreen.jpg",link:"https://amzn.to/45BQuKr",desc:"Broad Spectrum Sunscreen SPF 50. Water-resistant, non-greasy formula with zinc oxide and titanium dioxide. Protects against UVA and UVB rays.", price: "$29.99", rating: 4.7, reviews: 2891}
  ],
  "Makeup": [
    {name:"Foundation",img:"images/foundation.jpg",link:"https://amzn.to/45BQuKr",desc:"Full Coverage Foundation with Buildable Finish. 24-hour wear, sweat and transfer resistant, available in 40 shades for all skin tones.", price: "$45.99", rating: 4.6, reviews: 3456, badge: "Popular"},
    {name:"Lipstick Set",img:"images/lipstick.jpg",link:"https://amzn.to/45BQuKr",desc:"Matte Lipstick Set of 6. Highly pigmented, long-lasting formula with comfortable wear. Includes popular shades for any occasion.", price: "$39.99", rating: 4.7, reviews: 2345},
    {name:"Eyeshadow Palette",img:"images/eyeshadow.jpg",link:"https://amzn.to/45BQuKr",desc:"36-Color Eyeshadow Palette with Matte and Shimmer Finishes. Blendable formula, includes double-ended brush, perfect for creating any look.", price: "$59.99", rating: 4.8, reviews: 4567, badge: "Best Seller"},
    {name:"Mascara",img:"images/mascara.jpg",link:"https://amzn.to/45BQuKr",desc:"Volumizing Waterproof Mascara. Lengthens and thickens lashes without clumping. Smudge-proof and easy to remove with warm water.", price: "$24.99", rating: 4.5, reviews: 3456}
  ],
  "Haircare": [
    {name:"Shampoo & Conditioner",img:"images/shampoo.jpg",link:"https://amzn.to/45BQuKr",desc:"Sulfate-Free Shampoo and Conditioner Set. Hydrates and strengthens hair, reduces frizz, and enhances natural shine. Suitable for color-treated hair.", price: "$34.99", rating: 4.6, reviews: 2345},
    {name:"Hair Serum",img:"images/hairserum.jpg",link:"https://amzn.to/45BQuKr",desc:"Argan Oil Hair Serum. Tames frizz, adds shine, and protects against heat damage. Lightweight formula that won't weigh hair down.", price: "$29.99", rating: 4.7, reviews: 1892},
    {name:"Hair Dryer",img:"images/hairdryer.jpg",link:"https://amzn.to/45BQuKr",desc:"Professional Hair Dryer with Ionic Technology. 3 heat and 2 speed settings, concentrator and diffuser attachments, reduces drying time by 50%.", price: "$89.99", rating: 4.8, reviews: 1234, badge: "Premium"},
    {name:"Hair Mask",img:"images/hairmask.jpg",link:"https://amzn.to/45BQuKr",desc:"Deep Conditioning Hair Mask. Repairs damaged hair, restores moisture, and improves elasticity. Use once a week for best results.", price: "$24.99", rating: 4.5, reviews: 1567}
  ],

  // --- Sports ---
  "Fitness": [
    {name:"Yoga Mat",img:"images/yogamat.jpg",link:"https://amzn.to/45BQuKr",desc:"Extra Thick Yoga Mat with Carrying Strap. Non-slip surface, eco-friendly materials, perfect for yoga, pilates, and floor exercises.", price: "$49.99", rating: 4.7, reviews: 3456, badge: "Best Seller"},
    {name:"Dumbbell Set",img:"images/dumbbells.jpg",link:"https://amzn.to/45BQuKr",desc:"Adjustable Dumbbell Set, 5-25 lbs. Space-saving design, quick weight adjustment, durable construction for home workouts.", price: "$129.99", rating: 4.8, reviews: 2345},
    {name:"Resistance Bands",img:"images/resistance.jpg",link:"https://amzn.to/45BQuKr",desc:"Set of 5 Resistance Bands with Door Anchor. Progressive resistance levels, includes carrying bag and exercise guide for full body workouts.", price: "$39.99", rating: 4.6, reviews: 4567},
    {name:"Fitness Tracker",img:"images/fitnesstracker.jpg",link:"https://amzn.to/45BQuKr",desc:"Advanced Fitness Tracker with Heart Rate Monitor. Tracks steps, distance, calories, sleep, and multiple workout modes. Waterproof up to 50m.", price: "$79.99", rating: 4.7, reviews: 3456}
  ],
  "Outdoor": [
    {name:"Hiking Backpack",img:"images/hikingbackpack.jpg",link:"https://amzn.to/45BQuKr",desc:"50L Hiking Backpack with Rain Cover. Ergonomic design, multiple compartments, hydration bladder compatible, perfect for multi-day hikes.", price: "$149.99", rating: 4.8, reviews: 1234, badge: "Premium"},
    {name:"Camping Tent",img:"images/campingtent.jpg",link:"https://amzn.to/45BQuKr",desc:"4-Person Camping Tent with Rain Fly. Easy setup, waterproof fabric, ventilation windows, perfect for family camping trips.", price: "$199.99", rating: 4.7, reviews: 2345},
    {name:"Sleeping Bag",img:"images/sleepingbag.jpg",link:"https://amzn.to/45BQuKr",desc:"Cold Weather Sleeping Bag, -10°F Rating. Lightweight, compact design, waterproof shell, insulated with synthetic fibers for warmth.", price: "$129.99", rating: 4.6, reviews: 1892},
    {name:"Portable Grill",img:"images/portablegrill.jpg",link:"https://amzn.to/45BQuKr",desc:"Portable Charcoal Grill with Legs. Compact design, perfect for picnics, beach trips, and tailgating. Includes carrying case.", price: "$79.99", rating: 4.5, reviews: 1567}
  ],
  "Apparel": [
    {name:"Running Shoes",img:"images/runningshoes.jpg",link:"https://amzn.to/45BQuKr",desc:"Men's Running Shoes with Cloud-Like Cushioning. Breathable mesh upper, responsive sole, perfect for road running and gym workouts.", price: "$129.99", rating: 4.7, reviews: 3456, badge: "Best Seller"},
    {name:"Sports Jersey",img:"images/sportsjersey.jpg",link:"https://amzn.to/45BQuKr",desc:"Moisture-Wicking Sports Jersey. Lightweight, breathable fabric with strategic ventilation. Perfect for basketball, soccer, and training.", price: "$49.99", rating: 4.6, reviews: 2345},
    {name:"Yoga Pants",img:"images/yogapants.jpg",link:"https://amzn.to/45BQuKr",desc:"High-Waisted Yoga Pants with Pockets. Four-way stretch, sweat-wicking fabric, comfortable waistband for all-day wear.", price: "$59.99", rating: 4.8, reviews: 4567, badge: "Popular"},
    {name:"Sports Watch",img:"images/sportswatch.jpg",link:"https://amzn.to/45BQuKr",desc:"GPS Sports Watch with Heart Rate Monitor. Tracks running, cycling, swimming, and more. Smart notifications and up to 20 days battery.", price: "$199.99", rating: 4.7, reviews: 3456}
  ]
};

// Search suggestions for enhanced search experience
const searchSuggestions = [
  "iPhone 15", "MacBook Air", "Apple Watch", "Samsung Galaxy", "Nike Shoes",
  "Yoga Mat", "Resistance Bands", "Camping Tent", "Hiking Backpack", "Sleeping Bag",
  "Vitamin C Serum", "Retinol Cream", "Sunscreen SPF 50", "Hair Serum", "Makeup Palette",
  "The Great Gatsby", "Harry Potter", "Sapiens", "Atomic Habits", "1984"
];

// ---- URL params & rendering ----
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const subcategory = urlParams.get("subcategory");
const search = urlParams.get("search");
const type = urlParams.get("type");

const productList = document.getElementById("product-list");
const titleEl = document.getElementById("category-title");

// Helper function to generate star rating HTML
function getStarRating(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars += `<svg class="star filled" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>`;
  }
  
  if (hasHalf) {
    stars += `<svg class="star half" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>`;
  }
  
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += `<svg class="star empty" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>`;
  }
  
  return stars;
}

// Helper function to format currency
function formatPrice(price) {
  return price.toString().replace('$', '');
}

function setTitle(txt) { 
  if (titleEl) titleEl.textContent = txt; 
}

// Enhanced product card renderer with better structure and accessibility
function renderProductCard(product, index) {
  const div = document.createElement("div");
  div.className = "product-card";
  div.setAttribute('role', 'article');
  div.setAttribute('aria-label', `${product.name} - ${product.price}`);
  div.tabIndex = 0;
  
  // Create the product card HTML
  div.innerHTML = `
    <div class="product-image-container">
      <img src="${product.img}" alt="${product.name}" 
           loading="${index < 6 ? 'eager' : 'lazy'}" 
           onerror="this.src='https://placehold.co/300x300/4f46e5/ffffff?text=Product'">
      ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
      <button class="quick-view-btn" aria-label="Quick view ${product.name}">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </button>
    </div>
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <div class="product-rating">
        <div class="rating-stars">
          ${getStarRating(product.rating)}
        </div>
        <span class="rating-count">(${product.reviews})</span>
      </div>
      <p class="product-price">${product.price}</p>
      <p class="product-desc" aria-hidden="true">${product.desc}</p>
      <button class="btn btn-primary product-btn" 
              onclick="window.open('${product.link}', '_blank', 'noopener'); event.stopPropagation();">
        View Product
      </button>
    </div>
  `;
  
  // Add event listeners
  div.addEventListener('click', () => {
    window.open(product.link, '_blank', 'noopener');
  });
  
  div.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(product.link, '_blank', 'noopener');
    }
  });
  
  // Quick view functionality
  const quickViewBtn = div.querySelector('.quick-view-btn');
  if (quickViewBtn) {
    quickViewBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showQuickViewModal(product);
    });
  }
  
  return div;
}

// Quick view modal functionality
function showQuickViewModal(product) {
  // Create modal overlay
  const modal = document.createElement('div');
  modal.className = 'quick-view-modal';
  modal.innerHTML = `
    <div class="quick-view-content">
      <button class="quick-view-close" aria-label="Close modal">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="quick-view-body">
        <div class="quick-view-image">
          <img src="${product.img}" alt="${product.name}">
        </div>
        <div class="quick-view-details">
          <h2>${product.name}</h2>
          <div class="quick-view-rating">
            <div class="rating-stars">
              ${getStarRating(product.rating)}
            </div>
            <span>${product.reviews} reviews</span>
          </div>
          <div class="quick-view-price">${product.price}</div>
          <p class="quick-view-desc">${product.desc}</p>
          <div class="quick-view-actions">
            <a href="${product.link}" target="_blank" rel="noopener" class="btn btn-primary">
              View Product
            </a>
            <button class="btn btn-outline" onclick="copyAffiliateLink('${product.link}')">
              Copy Affiliate Link
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add modal to page
  document.body.appendChild(modal);
  
  // Close modal on click outside or escape key
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('.quick-view-close')) {
      modal.remove();
      document.body.style.overflow = '';
    }
  });
  
  // Escape key closes modal
  const closeOnEscape = (e) => {
    if (e.key === 'Escape') {
      modal.remove();
      document.body.style.overflow = '';
      document.removeEventListener('keydown', closeOnEscape);
    }
  };
  document.addEventListener('keydown', closeOnEscape);
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

// Copy affiliate link to clipboard
function copyAffiliateLink(link) {
  navigator.clipboard.writeText(link).then(() => {
    // Show temporary success message
    const button = document.activeElement;
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
}

// Search functionality with fuzzy matching
function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  
  const results = [];
  
  Object.entries(allProducts).forEach(([sub, products]) => {
    products.forEach(product => {
      // Check if product matches search query
      const nameMatch = product.name.toLowerCase().includes(q);
      const descMatch = product.desc && product.desc.toLowerCase().includes(q);
      const categoryMatch = sub.toLowerCase().includes(q);
      
      if (nameMatch || descMatch || categoryMatch) {
        // Add relevance score
        product.relevance = 0;
        if (nameMatch) product.relevance += 3;
        if (descMatch) product.relevance += 1;
        if (categoryMatch) product.relevance += 2;
        
        results.push(product);
      }
    });
  });
  
  // Sort by relevance and rating
  return results.sort((a, b) => {
    if (b.relevance !== a.relevance) {
      return b.relevance - a.relevance;
    }
    return b.rating - a.rating;
  });
}

// Render products with loading states
function renderProducts(productsToShow) {
  if (!productList) return;
  
  // Show loading state
  if (window.loadingStates) {
    window.loadingStates.showLoading();
  }
  
  // Clear existing content
  productList.innerHTML = "";
  
  // Check if we have products
  if (productsToShow.length === 0) {
    if (window.loadingStates) {
      window.loadingStates.showEmptyState();
    } else {
      productList.innerHTML = "<p style='color:#fff;opacity:.9; text-align:center; width:100%;'>No products found. Try adjusting your search terms.</p>";
    }
    return;
  }
  
  // Render products with slight delay for better UX
  setTimeout(() => {
    try {
      productsToShow.forEach((product, index) => {
        const productCard = renderProductCard(product, index);
        productList.appendChild(productCard);
      });
      
      // Hide loading state
      if (window.loadingStates) {
        window.loadingStates.hideLoading();
      }
    } catch (error) {
      console.error('Error rendering products:', error);
      productList.innerHTML = "<p style='color:#fff;opacity:.9; text-align:center; width:100%;'>Error loading products. Please try again.</p>";
      if (window.loadingStates) {
        window.loadingStates.hideLoading();
      }
    }
  }, 100);
}

// Main rendering logic
if (productList) {
  let productsToShow = [];
  let displayTitle = "All Products";

  // Highest priority: explicit subcategory
  if (subcategory && allProducts[subcategory]) {
    productsToShow = [...allProducts[subcategory]];
    displayTitle = `${subcategory} — ${productsToShow.length} Products`;
  }
  // Next: category-level listing if data exists for that key
  else if (category && allProducts[category]) {
    // If we're viewing subcategories, don't show products
    if (type === "sub") {
      // This case is handled by MyAffi.js
      displayTitle = `${category} — Subcategories`;
    } else {
      // Show all products in this category
      productsToShow = [];
      const categoryData = window.categories[category];
      if (categoryData && categoryData.subs) {
        Object.keys(categoryData.subs).forEach(sub => {
          if (allProducts[sub]) {
            productsToShow.push(...allProducts[sub]);
          }
        });
      }
      displayTitle = `${category} — ${productsToShow.length} Products`;
    }
  }
  // Search across all subcategories
  else if (search) {
    productsToShow = searchProducts(search);
    displayTitle = `Search Results: "${search}" (${productsToShow.length})`;
  }
  // Fallback: show all products
  else {
    productsToShow = [];
    Object.values(allProducts).forEach(arr => {
      productsToShow.push(...arr);
    });
    displayTitle = `All Products (${productsToShow.length})`;
  }

  // Set the title
  setTitle(displayTitle);
  
  // Render the products
  renderProducts(productsToShow);
}

// Add event listener for clear search button if it exists
document.addEventListener('DOMContentLoaded', () => {
  const clearSearchBtn = document.getElementById('clear-search-btn');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      window.location.href = 'Products.html';
    });
  }
});

// Enhanced search input behavior
const searchInput = document.getElementById('search-input');
if (searchInput) {
  // Populate with current search if present
  if (search) {
    searchInput.value = search;
  }
  
  // Focus on search input when page loads on small screens
  if (window.innerWidth <= 768) {
    searchInput.focus();
  }
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
  // Ctrl + K for search focus
  if (e.ctrlKey && e.key === 'k') {
    e.preventDefault();
    document.getElementById('search-input')?.focus();
  }
  // Escape closes any modals
  if (e.key === 'Escape') {
    const modal = document.querySelector('.quick-view-modal');
    if (modal) {
      modal.remove();
      document.body.style.overflow = '';
    }
  }
});

// Add resize observer for better responsive behavior
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    // Refresh the display to ensure proper grid layout
    if (productList && productList.children.length > 0) {
      const currentProducts = Array.from(productList.children);
      currentProducts.forEach(child => {
        productList.removeChild(child);
      });
      // Re-append to trigger re-layout
      setTimeout(() => {
        currentProducts.forEach(child => {
          productList.appendChild(child);
        });
      }, 50);
    }
  }, 250);
});
