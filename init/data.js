const sampleListings = [
    {
        title: 'Luxury Beachfront Villa',
        description: 'Exquisite villa with direct access to a pristine beach.',
        price: 5000,
        image: 'https://source.unsplash.com/featured/?beach,villa',
        location: '125 Seaview Avenue',
        country: 'Bahamas'
    },
    {
        title: 'Historic Canal House',
        description: 'Charming canal house in the heart of Amsterdam.',
        price: 3500,
        image: 'https://source.unsplash.com/featured/?canal,house',
        location: '130 Waterfront Street',
        country: 'Netherlands'
    },
    {
        title: 'Safari Lodge Adventure',
        description: 'Authentic safari lodge experience amidst wildlife.',
        price: 4000,
        image: 'https://source.unsplash.com/featured/?safari,lodge',
        location: '135 Savanna Plains',
        country: 'Kenya'
    },
    {
        title: 'Rustic Mountain Cabin',
        description: 'Cozy cabin retreat with stunning mountain views.',
        price: 1200,
        image: 'https://source.unsplash.com/featured/?mountain,cabin',
        location: '140 Alpine Road',
        country: 'Canada'
    },
    {
        title: 'Modern City Loft',
        description: 'Sleek loft apartment in the bustling city center.',
        price: 2800,
        image: 'https://source.unsplash.com/featured/?city,loft',
        location: '145 Urban Plaza',
        country: 'USA'
    },
    {
        title: 'Eco-Friendly Treehouse Hideaway',
        description: 'Secluded treehouse retreat surrounded by nature.',
        price: 800,
        image: 'https://source.unsplash.com/featured/?treehouse,nature',
        location: '150 Forest Haven',
        country: 'Costa Rica'
    },
    {
        title: 'Chateau in the French Countryside',
        description: 'Magnificent chateau surrounded by vineyards and lavender fields.',
        price: 6000,
        image: 'https://source.unsplash.com/featured/?chateau,france',
        location: '155 Vineyard Lane',
        country: 'France'
    },
    {
        title: 'Island Paradise Villa',
        description: 'Luxurious villa nestled on a private island.',
        price: 8000,
        image: 'https://source.unsplash.com/featured/?island,villa',
        location: '160 Paradise Island',
        country: 'Maldives'
    },
    {
        title: 'Ski Chalet with Hot Tub',
        description: 'Comfortable chalet with hot tub near ski slopes.',
        price: 2000,
        image: 'https://source.unsplash.com/featured/?ski,chalet',
        location: '165 Snowy Peaks Road',
        country: 'Switzerland'
    },
    {
        title: 'Tropical Beach House Retreat',
        description: 'Serene beach house retreat with palm-fringed views.',
        price: 3000,
        image: 'https://source.unsplash.com/featured/?tropical,beach,house',
        location: '170 Sandy Shore Drive',
        country: 'Fiji'
    },
    {
        title: 'Seaside Cottage Escape',
        description: 'Quaint cottage overlooking the azure sea.',
        price: 1500,
        image: 'https://source.unsplash.com/featured/?seaside,cottage',
        location: '175 Coastal Retreat',
        country: 'Greece'
    },
    {
        title: 'Rural Farmhouse Getaway',
        description: 'Traditional farmhouse surrounded by rolling countryside.',
        price: 1800,
        image: 'https://source.unsplash.com/featured/?farmhouse,rural',
        location: '180 Countryside Lane',
        country: 'Italy'
    },
    {
        title: 'Urban Penthouse Oasis',
        description: 'Luxurious penthouse retreat in the heart of the city.',
        price: 3500,
        image: 'https://source.unsplash.com/featured/?urban,penthouse',
        location: '185 Highrise Plaza',
        country: 'USA'
    },
    {
        title: 'Lakeview Cabin Retreat',
        description: 'Cozy cabin overlooking a tranquil lake.',
        price: 2000,
        image: 'https://source.unsplash.com/featured/?lake,cabin',
        location: '190 Lakeside Drive',
        country: 'Canada'
    },
    {
        title: 'Mountain Lodge Serenity',
        description: 'Secluded lodge nestled amidst majestic mountains.',
        price: 2500,
        image: 'https://source.unsplash.com/featured/?mountain,lodge',
        location: '195 Mountain View Road',
        country: 'Switzerland'
    },
    {
        title: 'Modern Riverside Apartment',
        description: 'Chic apartment with stunning views of the river.',
        price: 2800,
        image: 'https://source.unsplash.com/featured/?riverside,apartment',
        location: '200 Riverwalk Avenue',
        country: 'UK'
    },
    {
        title: 'Coastal Cliffside Retreat',
        description: 'Tranquil retreat perched on coastal cliffs.',
        price: 3000,
        image: 'https://source.unsplash.com/featured/?coastal,retreat',
        location: '205 Cliffside Lane',
        country: 'New Zealand'
    },
    {
        title: 'Tropical Jungle Hideaway',
        description: 'Secluded jungle retreat amidst lush tropical foliage.',
        price: 1800,
        image: 'https://source.unsplash.com/featured/?tropical,jungle',
        location: '210 Rainforest Road',
        country: 'Costa Rica'
    },
    {
        title: 'Desert Oasis Villa',
        description: 'Luxurious villa oasis in the midst of the desert.',
        price: 4000,
        image: 'https://source.unsplash.com/featured/?desert,villa',
        location: '215 Oasis Avenue',
        country: 'United Arab Emirates'
    },
    {
        title: 'Historic Townhouse in Old Town',
        description: 'Elegant townhouse with historic charm in the heart of the old town.',
        price: 3200,
        image: 'https://source.unsplash.com/featured/?townhouse,historic',
        location: '220 Heritage Street',
        country: 'Spain'
    },
    {
        title: 'Seaside Cottage Escape',
        description: 'Quaint cottage overlooking the azure sea.',
        price: 1500,
        image: 'https://source.unsplash.com/featured/?seaside,cottage',
        location: '175 Coastal Retreat',
        country: 'Greece'
    },
    {
        title: 'Rural Farmhouse Getaway',
        description: 'Traditional farmhouse surrounded by rolling countryside.',
        price: 1800,
        image: 'https://source.unsplash.com/featured/?farmhouse,rural',
        location: '180 Countryside Lane',
        country: 'Italy'
    },
    {
        title: 'Urban Penthouse Oasis',
        description: 'Luxurious penthouse retreat in the heart of the city.',
        price: 3500,
        image: 'https://source.unsplash.com/featured/?urban,penthouse',
        location: '185 Highrise Plaza',
        country: 'USA'
    },
    {
        title: 'Lakeview Cabin Retreat',
        description: 'Cozy cabin overlooking a tranquil lake.',
        price: 2000,
        image: 'https://source.unsplash.com/featured/?lake,cabin',
        location: '190 Lakeside Drive',
        country: 'Canada'
    },
    {
        title: 'Mountain Lodge Serenity',
        description: 'Secluded lodge nestled amidst majestic mountains.',
        price: 2500,
        image: 'https://source.unsplash.com/featured/?mountain,lodge',
        location: '195 Mountain View Road',
        country: 'Switzerland'
    },
    {
        title: 'Modern Riverside Apartment',
        description: 'Chic apartment with stunning views of the river.',
        price: 2800,
        image: 'https://source.unsplash.com/featured/?riverside,apartment',
        location: '200 Riverwalk Avenue',
        country: 'UK'
    },
    {
        title: 'Coastal Cliffside Retreat',
        description: 'Tranquil retreat perched on coastal cliffs.',
        price: 3000,
        image: 'https://source.unsplash.com/featured/?coastal,retreat',
        location: '205 Cliffside Lane',
        country: 'New Zealand'
    },
    {
        title: 'Tropical Jungle Hideaway',
        description: 'Secluded jungle retreat amidst lush tropical foliage.',
        price: 1800,
        image: 'https://source.unsplash.com/featured/?tropical,jungle',
        location: '210 Rainforest Road',
        country: 'Costa Rica'
    },
    {
        title: 'Desert Oasis Villa',
        description: 'Luxurious villa oasis in the midst of the desert.',
        price: 4000,
        image: 'https://source.unsplash.com/featured/?desert,villa',
        location: '215 Oasis Avenue',
        country: 'United Arab Emirates'
    },
    {
        title: 'Historic Townhouse in Old Town',
        description: 'Elegant townhouse with historic charm in the heart of the old town.',
        price: 3200,
        image: 'https://source.unsplash.com/featured/?townhouse,historic',
        location: '220 Heritage Street',
        country: 'Spain'
    },
    {
        title: 'Secluded Beach House',
        description: 'Peaceful beach house nestled in a secluded cove.',
        price: 2200,
        image: 'https://source.unsplash.com/featured/?beach,house',
        location: '225 Secluded Cove',
        country: 'Australia'
    },
    {
        title: 'Historic Stone Cottage',
        description: 'Quaint cottage with historic charm and stone walls.',
        price: 1700,
        image: 'https://source.unsplash.com/featured/?cottage,stone',
        location: '230 Stone Lane',
        country: 'Ireland'
    },
    {
        title: 'Modern Lakeside Retreat',
        description: 'Contemporary retreat with stunning views of the lake.',
        price: 3000,
        image: 'https://source.unsplash.com/featured/?lakeside,retreat',
        location: '235 Lakeview Drive',
        country: 'Canada'
    },
    {
        title: 'Luxury Skyline Apartment',
        description: 'Luxurious apartment with panoramic views of the city skyline.',
        price: 4000,
        image: 'https://source.unsplash.com/featured/?skyline,apartment',
        location: '240 Skyview Terrace',
        country: 'USA'
    },
    {
        title: 'Mountain Chalet Getaway',
        description: 'Cozy chalet nestled amidst snow-capped mountains.',
        price: 2500,
        image: 'https://source.unsplash.com/featured/?mountain,chalet',
        location: '245 Alpine Retreat',
        country: 'Switzerland'
    },
    {
        title: 'Tropical Island Bungalow',
        description: 'Relaxing bungalow on a tropical island paradise.',
        price: 3500,
        image: 'https://source.unsplash.com/featured/?tropical,island,bungalow',
        location: '250 Palm Tree Lane',
        country: 'Maldives'
    },
    {
        title: 'Urban Industrial Loft',
        description: 'Industrial loft with modern design elements.',
        price: 2800,
        image: 'https://source.unsplash.com/featured/?urban,industrial,loft',
        location: '255 Industrial Avenue',
        country: 'Germany'
    },
    {
        title: 'Coastal Cliff Villa',
        description: 'Villa perched on coastal cliffs with breathtaking views.',
        price: 4500,
        image: 'https://source.unsplash.com/featured/?coastal,villa',
        location: '260 Cliffside Drive',
        country: 'Greece'
    },
    {
        title: 'Rustic Farmhouse Retreat',
        description: 'Rustic farmhouse surrounded by scenic countryside.',
        price: 2000,
        image: 'https://source.unsplash.com/featured/?farmhouse,rustic',
        location: '265 Countryside Lane',
        country: 'France'
    },
    {
        title: 'Ski Lodge Getaway',
        description: 'Comfortable lodge perfect for winter skiing adventures.',
        price: 2800,
        image: 'https://source.unsplash.com/featured/?ski,lodge',
        location: '270 Snowy Peaks Road',
        country: 'Canada'
    },
    {
        title: 'Treetop Cabin Hideaway',
        description: 'Secluded cabin nestled high in the treetops.',
        price: 1500,
        image: 'https://source.unsplash.com/featured/?treetop,cabin',
        location: '275 Forest Haven',
        country: 'Norway'
    },
    {
        title: 'Urban Rooftop Retreat',
        description: 'Chic retreat with a private rooftop terrace in the city.',
        price: 3200,
        image: 'https://source.unsplash.com/featured/?rooftop,urban',
        location: '280 Highrise Plaza',
        country: 'USA'
    },
    {
        title: 'Desert Oasis Resort',
        description: 'Luxurious resort oasis amidst the desert sands.',
        price: 5000,
        image: 'https://source.unsplash.com/featured/?desert,oasis',
        location: '285 Oasis Lane',
        country: 'Morocco'
    },
    {
        title: 'Historic Mansion Estate',
        description: 'Grand mansion estate with sprawling gardens and historic architecture.',
        price: 6000,
        image: 'https://source.unsplash.com/featured/?mansion,estate',
        location: '290 Heritage Street',
        country: 'England'
    },
    {
        title: 'Tropical Rainforest Villa',
        description: 'Luxurious villa nestled in the heart of a tropical rainforest.',
        price: 3800,
        image: 'https://source.unsplash.com/featured/?tropical,villa,rainforest',
        location: '295 Jungle Retreat',
        country: 'Costa Rica'
    }
 
];
module.exports = {data:sampleListings};
