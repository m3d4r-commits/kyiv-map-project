const places = [
  { id:1,  type:'restaurant', emoji:'🍽', name:'KANAPA',                                cuisine:'Modern Ukrainian',         uah:'500–900',   eur:'€10–18',   gbp:'£8.50–15', note:'Borscht with pampushki, varenyky, Chicken Kyiv. Terrace with city views on Andriyivskyy Descent.', lat:50.4598574, lng:30.5165903, walk:'12 min · 1.0 km', walkKm:1.0, headerGrad:'linear-gradient(135deg,#C9A84C,#e0c46e)', hours:'10:00–00:00', url:'https://visitkyiv.com/explore/kanapa/' },
  { id:2,  type:'restaurant', emoji:'🍽', name:'Ulyublenyi Dyadya',                     cuisine:'Mediterranean / Middle Eastern', uah:'600–1,000', eur:'€12–20',   gbp:'£10–17',   note:'Award-winning. Moroccan, Israeli, Turkish & Greek influences. Warm upscale atmosphere — book ahead.', lat:50.438297, lng:30.501079, walk:'31 min · 2.5 km', walkKm:2.5, headerGrad:'linear-gradient(135deg,#8B6914,#C9A84C)', hours:'08:00–22:00', url:'https://visitkyiv.com/explore/ulublenyi-diadia/' },
  { id:3,  type:'restaurant', emoji:'🍽', name:'Ostannya Barykada',                     cuisine:'Traditional Ukrainian',     uah:'400–750',   eur:'€8–15',    gbp:'£7–13',    note:'Hidden underground at Maidan. Entry requires a password: "Boritesya — poborete" (Fight — and you shall overcome).', lat:50.4512159, lng:30.5221697, walk:'10 min · 0.8 km', walkKm:0.8, headerGrad:'linear-gradient(135deg,#6b5a1f,#a89033)', hours:'11:00–00:00', url:'https://kyivguide.com.ua/the-last-barricade/' },
  { id:4,  type:'restaurant', emoji:'🍽', name:'BEEF Meat & Wine',                      cuisine:'Steakhouse',                uah:'800–1,500', eur:'€16–30',   gbp:'£14–25',   note:'Industrial-chic. Open kitchen cooking over natural coals. Dry-aged steak, carpaccio, roast beef.', lat:50.439046, lng:30.520744, walk:'27 min · 2.1 km', walkKm:2.1, headerGrad:'linear-gradient(135deg,#5a3e1b,#8B6914)', hours:'09:00–23:00', url:'https://beef.kyiv.ua/en/' },
  { id:5,  type:'restaurant', emoji:'🍽', name:'Catch Seafood',                         cuisine:'Seafood',                   uah:'900–1,800', eur:'€18–36',   gbp:'£15–30',   note:'Top-rated seafood in Kyiv. Live king crab tank. City views. Menu changes with daily catch.', lat:50.4558549, lng:30.517039, walk:'6 min · 0.4 km', walkKm:0.4, headerGrad:'linear-gradient(135deg,#2E6EA6,#5a9fd4)', hours:'12:00–23:00', url:'https://famiglia.com.ua/en/catch/' },
  { id:6,  type:'restaurant', emoji:'🍽', name:'Pizzeria Napule',                       cuisine:'Neapolitan Pizza',          uah:'300–550',   eur:'€6–11',    gbp:'£5–9',     note:'AVPN certified. Wood-fired oven, materials sourced from Naples. 30+ varieties. Pioneer of real Neapolitan pizza in Kyiv.', lat:50.437864, lng:30.533683, walk:'36 min · 2.9 km', walkKm:2.9, headerGrad:'linear-gradient(135deg,#b8432c,#e07a5a)', hours:'11:00–22:00', url:'https://gusovsky.com.ua/en/restaurant/pizzeria-napule' },
  { id:7,  type:'restaurant', emoji:'🍽', name:'Urban Space 500',                       cuisine:'Contemporary Ukrainian',    uah:'500–900',   eur:'€10–18',   gbp:'£8.50–15', note:'Social enterprise — 80% of profits go to city development projects. Innovative seasonal menu.', lat:50.4490951, lng:30.5204184, walk:'10 min · 0.8 km', walkKm:0.8, headerGrad:'linear-gradient(135deg,#3a7a3a,#6ab06a)', hours:'09:00–23:00', url:'https://urbanspace.if.ua/en' },
  { id:8,  type:'restaurant', emoji:'🍽', name:'Vino e Cucina',                         cuisine:'Italian Enoteca',           uah:'700–1,300', eur:'€14–26',   gbp:'£12–22',   note:'Enoteca concept with exceptional wine list. Risotto in cheese wheel. For gourmets and hedonists.', lat:50.458232, lng:30.487416, walk:'32 min · 2.6 km', walkKm:2.6, headerGrad:'linear-gradient(135deg,#6B1A5C,#a84c96)', hours:'12:00–00:00', url:'https://famiglia.com.ua/en/vino-e-cucina/' },
  { id:9,  type:'restaurant', emoji:'🍽', name:'Puzata Hata',                           cuisine:'Ukrainian Canteen',         uah:'80–200',    eur:'€1.60–4',  gbp:'£1.35–3.40', note:'Self-service chain where locals eat daily. No frills. Borscht, varenyky, holubtsi — whatever is hot.', lat:50.4476187, lng:30.5239113, walk:'15 min · 1.2 km', walkKm:1.2, headerGrad:'linear-gradient(135deg,#C9A84C,#f0d87a)', hours:'08:00–22:00', url:'https://www.facebook.com/PuzataHata/' },
  { id:10, type:'sight',      emoji:'🏛', name:'Kyiv Pechersk Lavra',                   cuisine:'UNESCO Monastery',          uah:'80–250',    eur:'€1.60–5',  gbp:'£1.35–4.25', note:'Top sight in Kyiv. Underground tunnels with mummified monks — explore by candlelight. UNESCO World Heritage.', lat:50.4349385, lng:30.5573187, walk:'60 min · 4.8 km', walkKm:4.8, headerGrad:'linear-gradient(135deg,#1A3A5C,#2E6EA6)', hours:'08:30–18:00', url:'https://lavra.ua/en/' },
  { id:11, type:'sight',      emoji:'🏛', name:"St. Sophia's Cathedral",                cuisine:'UNESCO Cathedral',          uah:'160–220',   eur:'€3.20–4.40', gbp:'£2.70–3.75', note:'Original 11th-century mosaics and frescoes. Climb the bell tower for panoramic views over old Kyiv.', lat:50.4529022, lng:30.5142035, walk:'1 min · next door', walkKm:0.05, headerGrad:'linear-gradient(135deg,#2E6EA6,#6BAED6)', hours:'10:00–18:00', url:'https://en.wikipedia.org/wiki/Saint_Sophia_Cathedral,_Kyiv' },
  { id:12, type:'sight',      emoji:'🏛', name:"St. Michael's Golden-Domed Monastery",  cuisine:'Monastery',                 uah:'Free',      eur:'Free',     gbp:'Free',     note:'Striking blue and gold exterior. Rebuilt after the Soviets demolished the original in 1937.', lat:50.4558456, lng:30.5230134, walk:'11 min · 0.9 km', walkKm:0.9, headerGrad:'linear-gradient(135deg,#1565C0,#42A5F5)', hours:'07:00–19:00', url:'https://en.wikipedia.org/wiki/St._Michael%27s_Golden-Domed_Monastery' },
  { id:13, type:'sight',      emoji:'🏛', name:'Andriyivskyy Descent',                  cuisine:'Historic Street',           uah:'Free',      eur:'Free',     gbp:'Free',     note:"Artists, galleries, Bulgakov's house. Views from Zamkova Hora. Called the Montmartre of Kyiv.", lat:50.4598069, lng:30.5161398, walk:'12 min · 1.0 km', walkKm:1.0, headerGrad:'linear-gradient(135deg,#4A148C,#9C27B0)', hours:'All day', url:'https://kyivguide.com.ua/andriyivskyy-descent/' },
  { id:14, type:'sight',      emoji:'🏛', name:'Motherland Monument',                   cuisine:'Monument / War Museum',     uah:'~100',      eur:'~€2',      gbp:'~£1.70',   note:'102m steel-and-titanium statue (62m figure on 40m base). Viewing platform inside the head. Park full of tanks, planes, WW2 monuments.', lat:50.4265249, lng:30.5630521, walk:'74 min · 5.9 km', walkKm:5.9, headerGrad:'linear-gradient(135deg,#455A64,#78909C)', hours:'10:00–18:00', url:'https://warmuseum.kyiv.ua/en/visit' },
  { id:15, type:'sight',      emoji:'🏛', name:'PinchukArtCentre',                      cuisine:'Contemporary Art',          uah:'Free',      eur:'Free',     gbp:'Free',     note:'Best contemporary art gallery in the city. Rotating exhibitions. Rooftop café on the 6th floor.', lat:50.4418397, lng:30.5213207, walk:'22 min · 1.8 km', walkKm:1.8, headerGrad:'linear-gradient(135deg,#E91E63,#F48FB1)', hours:'12:00–21:00 (Wed–Sun)', url:'https://pinchukartcentre.org/en' },
  { id:16, type:'sight',      emoji:'🏛', name:'Independence Square (Maidan)',           cuisine:'Historic Square',           uah:'Free',      eur:'Free',     gbp:'Free',     note:'Central hub of Kyiv. Site of the 2014 revolution. Symbolic to all Ukrainians.', lat:50.4505318, lng:30.5229899, walk:'11 min · 0.9 km', walkKm:0.9, headerGrad:'linear-gradient(135deg,#F57F17,#FFD54F)', hours:'All day', url:'https://guide.kyivcity.gov.ua/en/places/maydanu-nezalezhnosti' },
  { id:17, type:'sight',      emoji:'🏡', name:'Pyrohiv Open-Air Museum',                cuisine:'Folk Architecture Museum',  uah:'130',       eur:'~€2.60',   gbp:'~£2.20',   note:'Largest open-air museum in Ukraine. 300+ traditional structures from 16th–20th century villages across all regions. Plan 3–4 hours. Closed Wednesdays.', lat:50.3545, lng:30.5122, walk:'Far · ~11 km (taxi/bus)', walkKm:11.0, headerGrad:'linear-gradient(135deg,#2E7D32,#66BB6A)', hours:'09:00–18:00 (closed Wed)', url:'https://www.pyrohiv.com/' },
  // Hotels
  { id:18, type:'hotel', emoji:'🏨', name:'Sofiivska St 19',                     cuisine:'Boutique Hotel',         uah:'~2,500–4,000', eur:'~€50–80', gbp:'~£50–85',  note:'In the heart of old Kyiv, steps from St. Sophia\'s Cathedral and Mykhailivska Square.', lat:50.4520, lng:30.5181, walk:'1 min · next door', walkKm:0.05, headerGrad:'linear-gradient(135deg,#8B5CF6,#e8857f)', hours:'24h', url:null },
  { id:19, type:'hotel', emoji:'🏨', name:'InterContinental Kyiv',               cuisine:'5★ Luxury',              uah:'~8,000–15,000', eur:'~€160–300', gbp:'~£160–310', note:'272 rooms. Four restaurants, rooftop lounge, indoor pool, spa. Panoramic views of golden-domed city center. Favored by ambassadors since 2009.', lat:50.4557, lng:30.5192, walk:'5 min · 0.5 km', walkKm:0.5, headerGrad:'linear-gradient(135deg,#8B6914,#C9A84C)', hours:'24h', url:'https://www.ihg.com/intercontinental/hotels/us/en/kiev/kbpha/hoteldetail' },
  { id:20, type:'hotel', emoji:'🏨', name:'Fairmont Grand Hotel Kyiv',           cuisine:'5★ Luxury',              uah:'~7,000–14,000', eur:'~€140–280', gbp:'~£145–290', note:'133 rooms starting at 40 sq m — most spacious in the city. 205 sq m Royal Residence. Marigold restaurant, Elixir SPA. Weekly classical concerts.', lat:50.4603, lng:30.5254, walk:'14 min · 1.3 km', walkKm:1.3, headerGrad:'linear-gradient(135deg,#8B6914,#C9A84C)', hours:'24h', url:'https://www.fairmont.com/en/hotels/kyiv/fairmont-grand-hotel-kyiv.html' },
  { id:21, type:'hotel', emoji:'🏨', name:'Hyatt Regency Kyiv',                  cuisine:'5★ Luxury',              uah:'~6,500–12,000', eur:'~€130–240', gbp:'~£135–250', note:'234 rooms overlooking Old City. Grill Asia (Wine Spectator Award), rooftop Bar on 8, 20m indoor pool, full spa. 5 min to Maidan.', lat:50.4532, lng:30.5185, walk:'4 min · 0.4 km', walkKm:0.4, headerGrad:'linear-gradient(135deg,#8B6914,#C9A84C)', hours:'24h', url:'https://www.hyatt.com/hyatt-regency/en-US/kievh-hyatt-regency-kyiv' },
  { id:22, type:'hotel', emoji:'🏨', name:'Premier Palace Hotel',                cuisine:'5★ Luxury',              uah:'~5,500–10,000', eur:'~€110–200', gbp:'~£115–210', note:'Kyiv\'s oldest luxury hotel, opened 1912. 289 rooms, pool, rooftop Terracotta, Japanese restaurant Ikigai.', lat:50.4438, lng:30.5108, walk:'16 min · 1.3 km', walkKm:1.3, headerGrad:'linear-gradient(135deg,#8B6914,#C9A84C)', hours:'24h', url:'https://premier-palace.phnr.com/en' },
  { id:23, type:'hotel', emoji:'🏨', name:'Hilton Kyiv',                         cuisine:'5★ Luxury',              uah:'~5,000–9,500',  eur:'~€100–190', gbp:'~£100–200', note:'262 SmartHome-automated rooms. Park Kitchen (seafood open kitchen), full spa with heated indoor pool.', lat:50.4450, lng:30.5053, walk:'18 min · 1.4 km', walkKm:1.4, headerGrad:'linear-gradient(135deg,#8B6914,#C9A84C)', hours:'24h', url:'https://www.hilton.com/en/hotels/kbphihi-hilton-kyiv/' },
  { id:24, type:'hotel', emoji:'🏨', name:'11 Mirrors Design Hotel',             cuisine:'5★ Boutique',            uah:'~5,000–9,000',  eur:'~€100–180', gbp:'~£100–190', note:'50 rooms. Ukraine\'s first Design Hotels member, co-founded by Wladimir Klitschko. World\'s Best City Hotel 2016. Rooftop bar.', lat:50.4475, lng:30.5065, walk:'16 min · 1.3 km', walkKm:1.3, headerGrad:'linear-gradient(135deg,#6B1A5C,#a84c96)', hours:'24h', url:'https://11mirrors-hotel.com/' },
  { id:25, type:'hotel', emoji:'🏨', name:'Opera Hotel',                         cuisine:'5★ Boutique',            uah:'~4,500–8,500',  eur:'~€90–170',  gbp:'~£95–175',  note:'140 rooms in a 1906 monument. Themed suites. Teatro restaurant, Wine Spectator Award.', lat:50.4481, lng:30.5001, walk:'20 min · 1.6 km', walkKm:1.6, headerGrad:'linear-gradient(135deg,#6B1A5C,#a84c96)', hours:'24h', url:'https://www.opera-hotel.com' },
  { id:26, type:'hotel', emoji:'🏨', name:'BURSA Hotel',                         cuisine:'4★ Boutique',            uah:'~3,500–7,000',  eur:'~€70–140',  gbp:'~£72–145',  note:'33 rooms in two connected historic buildings. Balbek Bureau design. Art gallery, Bar 1818 rooftop, SUPRA restaurant, KINO42 cinema.', lat:50.4656, lng:30.5136, walk:'18 min · 1.4 km', walkKm:1.4, headerGrad:'linear-gradient(135deg,#6B1A5C,#a84c96)', hours:'24h', url:'https://bursa.cc/' },
  { id:27, type:'hotel', emoji:'🏨', name:'MaNNa Boutique Hotel',                cuisine:'4★ Adults Only',         uah:'~3,000–6,000',  eur:'~€60–120',  gbp:'~£62–125',  note:'7 individually designed rooms with handmade ceramics, custom furniture, freestanding bathtubs. Adults-only. TripAdvisor 5/5.', lat:50.4598, lng:30.5153, walk:'12 min · 1.0 km', walkKm:1.0, headerGrad:'linear-gradient(135deg,#6B1A5C,#a84c96)', hours:'24h', url:'https://www.manna-hotel.com/en' },
  { id:28, type:'hotel', emoji:'🏨', name:'Vozdvyzhensky Hotel',                 cuisine:'4★ Boutique',            uah:'~2,800–5,500',  eur:'~€56–110',  gbp:'~£58–115',  note:'33 rooms in 19th-century pastel buildings. Celebrated terrace restaurant. 5 min to St. Andrew\'s Church and Andriyivsky Descent.', lat:50.4593, lng:30.5155, walk:'12 min · 1.0 km', walkKm:1.0, headerGrad:'linear-gradient(135deg,#6B1A5C,#a84c96)', hours:'24h', url:'https://vozd-hotel.com/en/' },
  { id:29, type:'hotel', emoji:'🏨', name:'Staro Hotel',                         cuisine:'4★ Mid-Range',           uah:'~3,400',        eur:'~€68',      gbp:'~£70',      note:'35 rooms, Art Nouveau style inspired by Alphonse Mucha. TripAdvisor Travelers\' Choice. Tennis court, outstanding breakfast.', lat:50.4694, lng:30.5086, walk:'25 min · 2.1 km', walkKm:2.1, headerGrad:'linear-gradient(135deg,#3a7a3a,#6ab06a)', hours:'24h', url:'https://staro.ua/' },
  { id:30, type:'hotel', emoji:'🏨', name:'KONTRAKT Hotel',                      cuisine:'3★ Mid-Range',           uah:'~2,000–3,500',  eur:'~€40–70',   gbp:'~£41–72',   note:'17 rooms, Danish hygge style. Rated 9.5/10 on Booking.com. All-day coffee buffet. One block from Kontraktova Square.', lat:50.4661, lng:30.5192, walk:'20 min · 1.6 km', walkKm:1.6, headerGrad:'linear-gradient(135deg,#3a7a3a,#6ab06a)', hours:'24h', url:'https://kontrakthotel.com/en/' },
  { id:31, type:'hotel', emoji:'🏨', name:'Bontiak Hotel',                       cuisine:'4★ Mid-Range',           uah:'~1,800–3,000',  eur:'~€36–60',   gbp:'~£37–62',   note:'42 designer rooms with fireplaces, coffee makers, mini-kitchens. 200m from Golden Gate metro. Rated 8.9 on Booking.com.', lat:50.4515, lng:30.5169, walk:'6 min · 0.5 km', walkKm:0.5, headerGrad:'linear-gradient(135deg,#3a7a3a,#6ab06a)', hours:'24h', url:'https://bontiak.com/en/' },
  { id:32, type:'hotel', emoji:'🏨', name:'ibis Kyiv City Center',               cuisine:'3★ Budget',              uah:'~2,200',        eur:'~€44',      gbp:'~£46',      note:'210 rooms across from St. Volodymyr\'s Cathedral. 1.5 km to Golden Gate, 2 km to Sofia Square. Bar, restaurant, 4 conference halls.', lat:50.4453, lng:30.4985, walk:'22 min · 1.7 km', walkKm:1.7, headerGrad:'linear-gradient(135deg,#455A64,#78909C)', hours:'24h', url:'https://all.accor.com/hotel/7143/index.en.shtml' },
  { id:33, type:'hotel', emoji:'🏨', name:'ibis Kyiv Railway Station',           cuisine:'3★ Budget',              uah:'~2,100',        eur:'~€42',      gbp:'~£43',      note:'326 rooms. Breakfast from 4 AM. SkyBus airport shuttle at the door. Purpose-built for rail travelers.', lat:50.4400, lng:30.4849, walk:'35 min · 2.8 km', walkKm:2.8, headerGrad:'linear-gradient(135deg,#455A64,#78909C)', hours:'24h', url:'https://all.accor.com/hotel/A034/index.en.shtml' }
];

// State
const markers = {};
let activeItem = null;
let map, clusterGroup;
let currentFilter = 'all';
let currentSort = 'default';
let sidebarOpen = true;
let itineraryMode = false;
let itinerary = []; // ordered list of place ids
let visited = new Set(); // ids of visited places
let routeLines = [];
let currentMapStyle = 1;
let homeBase = { lat: 50.4505, lng: 30.5230, name: 'City Center' };
let homeBaseMarker = null;
let settingHomeBase = false;
let homeBaseSet = false;

const tileLayers = [
  { name:'Light',     url:'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' },
  { name:'Dark',      url:'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' },
  { name:'Streets',   url:'https://tile.openstreetmap.org/{z}/{x}/{y}.png' },
  { name:'Satellite', url:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' }
];

let activeTileLayer;

function isMapDark() {
  const tl = tileLayers[currentMapStyle];
  return tl.name === 'Dark' || tl.name === 'Satellite';
}

function getRouteColor() {
  return isMapDark() ? '#34d399' : '#15803d';
}

function getRouteDashColor() {
  return isMapDark() ? '#fff' : '#000';
}

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  document.getElementById('sidebar').classList.toggle('collapsed', !sidebarOpen);
  const toggleIcon = document.getElementById('toggle-icon');
  const toggleLabel = document.getElementById('toggle-label');
  if (toggleIcon) toggleIcon.textContent = sidebarOpen ? '✕' : '☰';
  if (toggleLabel) toggleLabel.textContent = sidebarOpen ? 'Close' : 'Menu';
  if (map) {
    setTimeout(() => map.invalidateSize(), 100);
    setTimeout(() => map.invalidateSize(), 400);
  }
}

function cycleMapStyle() {
  if (!map) return;
  currentMapStyle = (currentMapStyle + 1) % tileLayers.length;
  const tl = tileLayers[currentMapStyle];
  if (activeTileLayer) map.removeLayer(activeTileLayer);
  activeTileLayer = L.tileLayer(tl.url, { attribution:'© OpenStreetMap', maxZoom:19 }).addTo(map);
  document.getElementById('style-btn').textContent = '🗺 ' + tl.name;
  // Dark popup theme for Dark & Satellite tiles
  document.body.classList.toggle('dark-map', isMapDark());
  // Update route line colors for new tile style
  const rc = getRouteColor();
  const dc = getRouteDashColor();
  routeLines.forEach(l => {
    if (l.setStyle) {
      const opts = l.options;
      if (opts.dashArray) l.setStyle({ color: dc });
      else l.setStyle({ color: rc });
    }
  });
}

function fitAllMarkers() {
  if (!map) return;
  const visible = places.filter(p => currentFilter === 'all' || p.type === currentFilter);
  if (visible.length === 0) return;
  const coords = visible.map(p => [p.lat, p.lng]);
  if (homeBaseSet) coords.push([homeBase.lat, homeBase.lng]);
  const bounds = L.latLngBounds(coords);
  map.fitBounds(bounds, { padding: [40, 40] });
}

function selectPlace(id) {
  if (itineraryMode) {
    toggleItineraryStop(id);
    return;
  }
  if (activeItem !== null) {
    const prev = document.getElementById('item-' + activeItem);
    if (prev) prev.classList.remove('active');
  }
  activeItem = id;
  const el = document.getElementById('item-' + id);
  if (el) { el.classList.add('active'); el.scrollIntoView({ behavior:'smooth', block:'nearest' }); }
  const p = places.find(x => x.id === id);
  if (p && map) {
    const marker = markers[id];
    // On mobile, collapse sidebar first so the map is visible
    if (window.innerWidth <= 768 && sidebarOpen) {
      toggleSidebar();
      setTimeout(() => {
        map.setView([p.lat, p.lng], 16, { animate:true });
        if (marker) marker.openPopup();
        drawRouteTo(p);
      }, 400);
    } else {
      map.setView([p.lat, p.lng], 16, { animate:true });
      if (marker) marker.openPopup();
      drawRouteTo(p);
    }
  }
}

// Decode Google-style encoded polyline (used by Valhalla)
function decodePolyline(encoded, precision) {
  const factor = Math.pow(10, precision || 6);
  let index = 0, lat = 0, lng = 0;
  const coords = [];
  while (index < encoded.length) {
    let b, shift = 0, result = 0;
    do { b = encoded.charCodeAt(index++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
    lat += (result & 1) ? ~(result >> 1) : (result >> 1);
    shift = 0; result = 0;
    do { b = encoded.charCodeAt(index++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
    lng += (result & 1) ? ~(result >> 1) : (result >> 1);
    coords.push([lat / factor, lng / factor]);
  }
  return coords;
}

async function fetchWalkingRoute(from, to) {
  // Primary: Valhalla pedestrian routing (proper sidewalks, paths, stairs)
  const valhallaJson = JSON.stringify({
    locations: [{ lat: from.lat, lon: from.lng }, { lat: to.lat, lon: to.lng }],
    costing: 'pedestrian',
    units: 'kilometers',
    directions_options: { units: 'kilometers' }
  });
  try {
    const resp = await fetch('https://valhalla1.openstreetmap.de/route?json=' + encodeURIComponent(valhallaJson));
    const data = await resp.json();
    if (data.trip && data.trip.legs && data.trip.legs.length > 0) {
      const shape = data.trip.legs[0].shape;
      const coords = decodePolyline(shape, 6);
      return {
        coords,
        distanceKm: data.trip.summary.length,
        durationMin: Math.round(data.trip.summary.time / 60)
      };
    }
  } catch (e) { console.warn('Valhalla fetch failed, trying OSRM fallback', e); }

  // Fallback: OSRM
  try {
    const url = 'https://router.project-osrm.org/route/v1/foot/' +
      from.lng + ',' + from.lat + ';' + to.lng + ',' + to.lat +
      '?overview=full&geometries=geojson';
    const resp = await fetch(url);
    const data = await resp.json();
    if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
      const route = data.routes[0];
      const coords = route.geometry.coordinates.map(c => [c[1], c[0]]);
      return { coords, distanceKm: route.distance / 1000, durationMin: Math.round(route.duration / 60) };
    }
  } catch (e) { console.warn('OSRM also failed, falling back to straight line', e); }

  // Last resort: straight line
  const km = haversine(from.lat, from.lng, to.lat, to.lng);
  return { coords: [[from.lat, from.lng], [to.lat, to.lng]], distanceKm: km, durationMin: Math.round(km / 0.08) };
}

async function fetchMultiStopRoute(stops) {
  // Primary: Valhalla multi-stop pedestrian route
  const valhallaJson = JSON.stringify({
    locations: stops.map(s => ({ lat: s.lat, lon: s.lng })),
    costing: 'pedestrian',
    units: 'kilometers',
    directions_options: { units: 'kilometers' }
  });
  try {
    const resp = await fetch('https://valhalla1.openstreetmap.de/route?json=' + encodeURIComponent(valhallaJson));
    const data = await resp.json();
    if (data.trip && data.trip.legs) {
      // Combine all leg shapes into one coordinate array
      let allCoords = [];
      data.trip.legs.forEach(leg => {
        const legCoords = decodePolyline(leg.shape, 6);
        if (allCoords.length > 0) legCoords.shift(); // avoid duplicate junction point
        allCoords = allCoords.concat(legCoords);
      });
      return {
        coords: allCoords,
        distanceKm: data.trip.summary.length,
        durationMin: Math.round(data.trip.summary.time / 60),
        legs: data.trip.legs
      };
    }
  } catch (e) { console.warn('Valhalla multi-stop failed, trying OSRM', e); }

  // Fallback: OSRM
  try {
    const coordStr = stops.map(s => s.lng + ',' + s.lat).join(';');
    const url = 'https://router.project-osrm.org/route/v1/foot/' + coordStr +
      '?overview=full&geometries=geojson&steps=false';
    const resp = await fetch(url);
    const data = await resp.json();
    if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
      const route = data.routes[0];
      const coords = route.geometry.coordinates.map(c => [c[1], c[0]]);
      return { coords, distanceKm: route.distance / 1000, durationMin: Math.round(route.duration / 60) };
    }
  } catch (e) { console.warn('OSRM multi-stop also failed', e); }

  return null;
}

async function drawRouteTo(place) {
  if (!map) return;
  clearRouteLines();
  const hotel = homeBase;
  const info = document.getElementById('route-info');

  // Show loading state
  document.getElementById('route-distance').textContent = '...';
  document.getElementById('route-time').textContent = '...';
  document.getElementById('route-stops').textContent = '1 stop';
  info.style.display = 'flex';

  const result = await fetchWalkingRoute(hotel, place);
  const line = L.polyline(result.coords, {
    color: getRouteColor(), weight: 4, opacity: 0.85,
    lineCap: 'round', lineJoin: 'round'
  }).addTo(map);
  routeLines.push(line);

  // Animated dash effect overlay
  const dashLine = L.polyline(result.coords, {
    color: getRouteDashColor(), weight: 2, opacity: 0.4,
    dashArray: '6,12', lineCap: 'round'
  }).addTo(map);
  routeLines.push(dashLine);

  document.getElementById('route-distance').textContent = result.distanceKm.toFixed(1) + ' km';
  document.getElementById('route-time').textContent = result.durationMin + ' min';
  const gmBtn = document.getElementById('route-gmaps-btn');
  if (gmBtn) gmBtn.href = gmapsUrl(place);
}

function clearRouteLines() {
  if (map) routeLines.forEach(l => map.removeLayer(l));
  routeLines = [];
}

function clearRouteDisplay() {
  clearRouteLines();
  document.getElementById('route-info').style.display = 'none';
}

function toggleItineraryMode() {
  itineraryMode = !itineraryMode;
  document.getElementById('itinerary-toggle').classList.toggle('active', itineraryMode);
  if (!itineraryMode) {
    drawItineraryRoute();
  }
  renderList();
}

function toggleItineraryStop(id) {
  const idx = itinerary.indexOf(id);
  if (idx >= 0) {
    itinerary.splice(idx, 1);
  } else {
    itinerary.push(id);
  }
  updateItinerarySummary();
  renderList();
}

function clearItinerary() {
  itinerary = [];
  clearRouteDisplay();
  updateItinerarySummary();
  renderList();
}

async function updateItinerarySummary() {
  const sumEl = document.getElementById('itinerary-summary');
  const clearEl = document.getElementById('clear-itinerary');
  if (itinerary.length === 0) {
    sumEl.style.display = 'none';
    clearEl.style.display = 'none';
    return;
  }
  clearEl.style.display = 'block';
  sumEl.style.display = 'block';
  const names = itinerary.map((id, i) => (i + 1) + '. ' + places.find(p => p.id === id).name);

  // Quick haversine estimate first
  let totalKm = 0;
  const itinPlaces = itinerary.map(id => places.find(p => p.id === id));
  const routeStops = homeBaseSet ? [homeBase, ...itinPlaces] : itinPlaces;
  for (let i = 1; i < routeStops.length; i++) {
    totalKm += haversine(routeStops[i-1].lat, routeStops[i-1].lng, routeStops[i].lat, routeStops[i].lng);
  }
  const totalMin = Math.round(totalKm / 0.08);
  document.getElementById('itinerary-text').innerHTML = names.join('<br>') +
    '<br><span style="color:var(--gold-light);font-weight:600;margin-top:4px;display:inline-block;">≈ ' +
    totalKm.toFixed(1) + ' km · ~' + totalMin + ' min walking</span>';
  const gmapsLink = document.getElementById('itinerary-gmaps-link');
  if (gmapsLink) gmapsLink.href = gmapsItineraryUrl();
}

async function drawItineraryRoute() {
  if (!map) return;
  clearRouteLines();
  if (itinerary.length === 0) {
    document.getElementById('route-info').style.display = 'none';
    return;
  }

  const itinPlaces = itinerary.map(id => places.find(p => p.id === id));
  const stops = homeBaseSet ? [homeBase, ...itinPlaces] : itinPlaces;
  const info = document.getElementById('route-info');

  // Show loading
  document.getElementById('route-distance').textContent = '...';
  document.getElementById('route-time').textContent = '...';
  document.getElementById('route-stops').textContent = itinerary.length + ' stop' + (itinerary.length > 1 ? 's' : '');
  info.style.display = 'flex';

  // Try multi-stop OSRM route
  const multiResult = await fetchMultiStopRoute(stops);
  let totalKm, totalMin;

  if (multiResult) {
    totalKm = multiResult.distanceKm;
    totalMin = multiResult.durationMin;

    // Draw the full route line
    const line = L.polyline(multiResult.coords, {
      color: getRouteColor(), weight: 4.5, opacity: 0.85,
      lineCap: 'round', lineJoin: 'round'
    }).addTo(map);
    routeLines.push(line);

    // White dash overlay
    const dashLine = L.polyline(multiResult.coords, {
      color: getRouteDashColor(), weight: 2, opacity: 0.35,
      dashArray: '6,14', lineCap: 'round'
    }).addTo(map);
    routeLines.push(dashLine);
  } else {
    // Fallback: straight lines segment by segment
    totalKm = 0;
    for (let i = 1; i < stops.length; i++) {
      const a = stops[i-1], b = stops[i];
      const segKm = haversine(a.lat, a.lng, b.lat, b.lng);
      totalKm += segKm;
      const line = L.polyline([[a.lat, a.lng], [b.lat, b.lng]], {
        color: getRouteColor(), weight: 4, opacity: 0.85
      }).addTo(map);
      routeLines.push(line);
    }
    totalMin = Math.round(totalKm / 0.08);
  }

  // Number markers at each stop
  for (let i = 1; i < stops.length; i++) {
    const s = stops[i];
    const numIcon = L.divIcon({
      html: '<div style="width:22px;height:22px;border-radius:50%;background:' + getRouteColor() + ';color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;border:2.5px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.35);">' + i + '</div>',
      className: '', iconSize: [22,22], iconAnchor: [11,11]
    });
    const numMarker = L.marker([s.lat, s.lng], { icon: numIcon, zIndexOffset: 2000 }).addTo(map);
    routeLines.push(numMarker);
  }

  document.getElementById('route-distance').textContent = totalKm.toFixed(1) + ' km';
  document.getElementById('route-time').textContent = totalMin + ' min';
  const gmBtn = document.getElementById('route-gmaps-btn');
  if (gmBtn) gmBtn.href = gmapsItineraryUrl();

  // Fit map to route
  const boundsCoords = stops.map(s => [s.lat, s.lng]);
  const bounds = L.latLngBounds(boundsCoords);
  map.fitBounds(bounds, { padding: [60, 60] });
}

function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function getPriceNum(p) {
  if (p.uah === 'Free' || p.uah === '—') return 0;
  const m = p.uah.match(/\d+/);
  return m ? parseInt(m[0]) : 999;
}

function setSort(s, btn) {
  currentSort = s;
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}

function setFilter(type, btn) {
  currentFilter = type;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  // Show/hide markers based on filter
  if (map) {
    places.forEach(p => {
      if (!markers[p.id]) return;
      if (type === 'all' || p.type === type) {
        if (!map.hasLayer(markers[p.id])) markers[p.id].addTo(map);
      } else {
        if (map.hasLayer(markers[p.id])) map.removeLayer(markers[p.id]);
      }
    });
  }

  applyFilters();
}

function applyFilters() {
  renderList();
}

function renderList() {
  const list = document.getElementById('place-list');
  const query = document.getElementById('search-box').value.toLowerCase().trim();

  let filtered = places.filter(p => {
    if (currentFilter !== 'all' && p.type !== currentFilter) return false;
    if (query && !p.name.toLowerCase().includes(query) && !p.cuisine.toLowerCase().includes(query)) return false;
    return true;
  });

  // Sort
  if (currentSort === 'distance') {
    filtered.sort((a, b) => a.walkKm - b.walkKm);
  } else if (currentSort === 'price-low') {
    filtered.sort((a, b) => getPriceNum(a) - getPriceNum(b));
  } else if (currentSort === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  list.innerHTML = '';
  filtered.forEach(p => {
    const div = document.createElement('div');
    const classes = ['place-item'];
    if (itinerary.includes(p.id)) classes.push('in-itinerary');
    if (visited.has(p.id)) classes.push('visited');
    div.className = classes.join(' ');
    div.id = 'item-' + p.id;
    div.onclick = () => selectPlace(p.id);

    const priceDisplay = p.uah === '—' ? '' : p.uah === 'Free' ? 'Free' : p.gbp + ' / ' + p.eur;
    const walkDisplay = p.walk ? '<span class="walk-tag">🚶 ' + p.walk + '</span>' : '';
    const itinIdx = itinerary.indexOf(p.id);
    const badge = visited.has(p.id)
      ? '<span class="visited-badge">✓</span>'
      : '<span class="itin-badge">' + (itinIdx >= 0 ? itinIdx + 1 : '') + '</span>';

    const gmapsBtnHtml = '<a class="list-gmaps-btn" href="' + gmapsUrl(p) + '" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Open in Google Maps">🧭</a>';

    div.innerHTML =
      '<div class="place-icon ' + p.type + '">' + p.emoji + '</div>' +
      '<div class="place-info"><div class="place-name">' + p.name + '</div>' +
      '<div class="place-meta"><span>' + p.cuisine + '</span>' +
      '<span class="price-tag">' + priceDisplay + '</span>' + walkDisplay + '</div></div>' +
      gmapsBtnHtml + badge;
    list.appendChild(div);
  });
}

function gmapsUrl(p) {
  return 'https://www.google.com/maps/dir/?api=1&destination=' + p.lat + ',' + p.lng + '&travelmode=walking';
}

function gmapsItineraryUrl() {
  if (itinerary.length === 0) return '#';
  const origin = homeBase;
  const stops = itinerary.map(id => places.find(p => p.id === id));
  const dest = stops[stops.length - 1];
  const waypoints = stops.slice(0, -1);
  let url = 'https://www.google.com/maps/dir/?api=1' +
    '&destination=' + dest.lat + ',' + dest.lng +
    '&travelmode=walking';
  if (homeBaseSet) {
    url = 'https://www.google.com/maps/dir/?api=1' +
      '&origin=' + origin.lat + ',' + origin.lng +
      '&destination=' + dest.lat + ',' + dest.lng +
      '&travelmode=walking';
  }
  if (waypoints.length > 0) {
    url += '&waypoints=' + waypoints.map(p => p.lat + ',' + p.lng).join('|');
  }
  return url;
}

function addToItinerary(id) {
  if (itinerary.includes(id)) return;
  itinerary.push(id);
  updateItinerarySummary();
  renderList();
}

function toggleVisited(id) {
  if (visited.has(id)) {
    visited.delete(id);
  } else {
    visited.add(id);
  }
  updateMarkerStyle(id);
  renderList();
  // Update popup button if open
  const btn = document.getElementById('visited-btn-' + id);
  if (btn) {
    btn.className = 'popup-action-btn btn-visited' + (visited.has(id) ? ' is-visited' : '');
    btn.textContent = visited.has(id) ? '✓ Visited' : '☐ Mark Visited';
  }
}

function updateMarkerStyle(id) {
  if (!map || !markers[id]) return;
  const p = places.find(x => x.id === id);
  if (!p) return;
  const isVisited = visited.has(id);
  const color = p.type === 'hotel' ? '#8B5CF6' : p.type === 'restaurant' ? '#C9A84C' : '#2E6EA6';
  const markerSize = 34;
  const fontSize = 14;
  const opacity = isVisited ? 'opacity:0.35;' : '';
  const bg = isVisited ? 'background:#888;' : 'background:' + color + ';';

  const icon = L.divIcon({
    html: '<div style="width:' + markerSize + 'px;height:' + markerSize + 'px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);' + bg + 'border:2.5px solid rgba(255,255,255,0.95);box-shadow:0 3px 14px rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;position:relative;' + opacity + '"><span style="transform:rotate(45deg);font-size:' + fontSize + 'px;line-height:1;' + (isVisited ? 'filter:grayscale(1);' : '') + '">' + p.emoji + '</span></div>',
    className: '', iconSize: [markerSize, markerSize], iconAnchor: [markerSize/2, markerSize], popupAnchor: [0, -42]
  });
  markers[id].setIcon(icon);
}

function setHomeBase(lat, lng, name) {
  homeBase = { lat, lng, name: name || 'Your Location' };
  homeBaseSet = true;
  // Update home base marker
  if (homeBaseMarker && map) {
    homeBaseMarker.setLatLng([lat, lng]);
  }
  // Recalculate walk distances for all places
  places.forEach(p => {
    const km = haversine(lat, lng, p.lat, p.lng);
    p.walkKm = Math.round(km * 10) / 10;
    const mins = Math.round(km / 0.08);
    p.walk = mins + ' min · ' + p.walkKm.toFixed(1) + ' km';
  });
  // Refresh sidebar
  renderList();
  // Update home base label
  const label = document.getElementById('homebase-label');
  if (label) label.textContent = '📍 ' + homeBase.name;
  settingHomeBase = false;
  const btn = document.getElementById('set-homebase-btn');
  if (btn) { btn.classList.remove('active'); btn.textContent = '📍 Set Base'; }
}

function toggleSetHomeBase() {
  settingHomeBase = !settingHomeBase;
  const btn = document.getElementById('set-homebase-btn');
  if (btn) {
    btn.classList.toggle('active', settingHomeBase);
    btn.textContent = settingHomeBase ? '👆 Tap Map' : '📍 Set Base';
  }
}

function detectGPS() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(
    pos => {
      setHomeBase(pos.coords.latitude, pos.coords.longitude, 'My Location');
      if (map) map.panTo([pos.coords.latitude, pos.coords.longitude]);
    },
    () => { /* denied or failed — keep default */ },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

function fixMobileVh() {
  // Fix 100vh on mobile browsers that don't support dvh
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

function init() {
  // Mobile viewport fix
  fixMobileVh();
  window.addEventListener('resize', fixMobileVh);
  window.addEventListener('orientationchange', () => {
    setTimeout(() => { fixMobileVh(); if (map) map.invalidateSize(); }, 300);
  });

  // tap:false is required for modern mobile Chrome/Samsung Internet — they handle touch natively
  // tap:true causes double-fire on Android Chromium
  map = L.map('map', { zoomControl: false, tap: false }).setView([50.445, 30.523], 14);
  activeTileLayer = L.tileLayer(tileLayers[1].url, {
    attribution: '© OpenStreetMap contributors © CARTO', maxZoom: 19
  }).addTo(map);
  document.body.classList.add('dark-map');
  L.control.zoom({ position: 'bottomright' }).addTo(map);

  // Force map to recalculate size after a beat (fixes blank map on mobile)
  setTimeout(() => map.invalidateSize(), 100);
  setTimeout(() => map.invalidateSize(), 500);

  places.forEach(p => {
    const color = p.type === 'hotel' ? '#8B5CF6' : p.type === 'restaurant' ? '#C9A84C' : '#2E6EA6';
    const markerSize = 34;
    const fontSize = 14;
    const pulseHtml = '';

    const icon = L.divIcon({
      html: pulseHtml + '<div style="width:' + markerSize + 'px;height:' + markerSize + 'px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:' + color + ';border:2.5px solid rgba(255,255,255,0.95);box-shadow:0 3px 14px rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;position:relative;"><span style="transform:rotate(45deg);font-size:' + fontSize + 'px;line-height:1;">' + p.emoji + '</span></div>',
      className: '', iconSize: [markerSize, markerSize], iconAnchor: [markerSize/2, markerSize], popupAnchor: [0, -42]
    });

    const walkHtml = p.walk
      ? '<div class="popup-walk-badge">🚶 ' + p.walk + ' from base</div>'
      : '';

    const hoursHtml = p.hours
      ? '<div class="popup-hours">🕐 ' + p.hours + '</div>'
      : '';

    const pricesHtml = p.uah === '—' || !p.uah
      ? ''
      : p.uah === 'Free'
      ? '<div class="popup-free-badge">✓ Free entry</div>'
      : '<div class="popup-prices"><div class="popup-price-chip"><div class="currency">' + (p.type==='sight'?'Entry UAH':p.type==='hotel'?'Per night':'UAH / person') + '</div><div class="amount">' + p.uah + '</div></div><div class="popup-price-chip"><div class="currency">EUR</div><div class="amount">' + p.eur + '</div></div><div class="popup-price-chip"><div class="currency">GBP</div><div class="amount">' + p.gbp + '</div></div></div>';

    const setBaseBtn = p.type === 'hotel'
      ? '<button class="popup-action-btn btn-base" onclick="setHomeBase(' + p.lat + ',' + p.lng + ',\'' + p.name.replace(/'/g, "\\'") + '\');if(homeBaseMarker&&map)homeBaseMarker.setLatLng([' + p.lat + ',' + p.lng + ']);">📍 Set as Base</button>'
      : '';

    const actionsHtml = '<div class="popup-actions">' +
        '<button class="popup-action-btn btn-directions" onclick="event.stopPropagation();window.open(\'' + gmapsUrl(p) + '\',\'_blank\')">🧭 Google Maps</button>' +
        '<button class="popup-action-btn btn-itinerary" onclick="addToItinerary(' + p.id + ')">📋 Route</button>' +
        '<button id="visited-btn-' + p.id + '" class="popup-action-btn btn-visited" onclick="toggleVisited(' + p.id + ')">☐ Visited</button>' +
        setBaseBtn +
        '</div>';

    const popup =
      '<div class="popup-inner">' +
      '<div class="popup-header-img" style="background:' + p.headerGrad + '">' +
      '<span style="font-size:36px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">' + p.emoji + '</span>' +
      '<span class="overlay-text">' + (p.type === 'hotel' ? '🏨 Hotel' : p.type === 'restaurant' ? '🍽 Restaurant' : '🏛 Attraction') + '</span>' +
      '</div>' +
      '<div class="popup-body">' +
      '<div class="popup-name">' + (p.url ? '<a href="' + p.url + '" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;border-bottom:1.5px solid var(--gold);padding-bottom:1px;transition:color 0.15s;">' + p.name + ' ↗</a>' : p.name) + '</div>' +
      '<div class="popup-cuisine">' + p.cuisine + '</div>' +
      hoursHtml + walkHtml + pricesHtml +
      '<div class="popup-note">' + p.note + '</div>' +
      actionsHtml +
      '</div></div>';

    const marker = L.marker([p.lat, p.lng], { icon, zIndexOffset: 0 })
      .addTo(map)
      .bindPopup(popup, { maxWidth: 300, minWidth: 280 });
    marker.on('click', () => selectPlace(p.id));
    // Update visited button state whenever popup opens
    marker.on('popupopen', () => {
      const btn = document.getElementById('visited-btn-' + p.id);
      if (btn) {
        const v = visited.has(p.id);
        btn.className = 'popup-action-btn btn-visited' + (v ? ' is-visited' : '');
        btn.textContent = v ? '✓ Visited' : '☐ Visited';
      }
    });
    markers[p.id] = marker;
  });

  // Home base marker (draggable)
  const hbIcon = L.divIcon({
    html: '<div style="width:44px;height:44px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:#8B5CF6;border:2.5px solid rgba(255,255,255,0.95);box-shadow:0 3px 14px rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;"><span style="transform:rotate(45deg);font-size:20px;line-height:1;">📍</span></div>',
    className: '', iconSize: [44, 44], iconAnchor: [22, 44], popupAnchor: [0, -42]
  });
  homeBaseMarker = L.marker([homeBase.lat, homeBase.lng], { icon: hbIcon, zIndexOffset: 1000, draggable: true })
    .addTo(map)
    .bindPopup('<div style="font-family:DM Sans,sans-serif;text-align:center;padding:4px;"><strong>' + homeBase.name + '</strong><br><span style="font-size:11px;color:#666;">Drag to reposition or tap a hotel → Set as Base</span></div>', { maxWidth: 220 });

  homeBaseMarker.on('dragend', function() {
    const pos = homeBaseMarker.getLatLng();
    setHomeBase(pos.lat, pos.lng, 'Custom Location');
  });

  // Map click to set home base when in "Set Base" mode
  map.on('click', function(e) {
    if (!settingHomeBase) return;
    setHomeBase(e.latlng.lat, e.latlng.lng, 'Custom Location');
    homeBaseMarker.setLatLng(e.latlng);
  });

  renderList();

  // Keyboard shortcut: Escape to close sidebar
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && sidebarOpen) toggleSidebar();
    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      document.getElementById('search-box').focus();
    }
  });

  // Show base selection hint
  if (!homeBaseSet) {
    const toast = document.createElement('div');
    toast.id = 'base-hint';
    toast.innerHTML = '📍 <strong>Tip:</strong> Tap any hotel and "Set as Base" to get walking distances from your stay.';
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    toast.style.cssText = 'position:fixed;left:50%;transform:translateX(-50%);background:rgba(26,58,92,0.97);color:#fff;padding:12px 20px;border-radius:12px;font-size:13px;font-family:DM Sans,sans-serif;z-index:2000;max-width:420px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.3);cursor:pointer;'
      + (isMobile ? 'top:12px;bottom:auto;max-width:calc(100vw - 32px);' : 'bottom:24px;backdrop-filter:blur(8px);');
    toast.onclick = () => toast.remove();
    document.body.appendChild(toast);
    setTimeout(() => { if (toast.parentNode) toast.style.opacity = '0'; toast.style.transition = 'opacity 0.5s'; setTimeout(() => toast.remove(), 600); }, 8000);
  }

  // Mobile setup
  if (window.matchMedia('(max-width: 768px)').matches) {
    const sidebar = document.getElementById('sidebar');
    const handle = sidebar.querySelector('.mobile-handle');

    // Start collapsed on mobile so map tiles render fully
    sidebarOpen = false;
    sidebar.classList.add('collapsed');

    // After map is ready, force a resize
    setTimeout(() => {
      map.invalidateSize();
      map.setView([50.445, 30.523], 14);
    }, 200);

    // Swipe gestures on handle
    let touchStartY = 0;
    handle.addEventListener('touchstart', e => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    handle.addEventListener('touchend', e => {
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dy) < 20) {
        // Short tap — toggle
        toggleSidebar();
      } else if (dy > 40 && sidebarOpen) {
        toggleSidebar(); // swipe down → collapse
      } else if (dy < -40 && !sidebarOpen) {
        toggleSidebar(); // swipe up → expand
      }
    }, { passive: true });
  }
}
// ── Second script block ──
// Robust script loader with fallback CDN and error display
(function() {
  var overlay = document.getElementById('loading-overlay');
  var loadingText = document.getElementById('loading-text');
  var loadingSub = document.getElementById('loading-sub');
  var timeout;

  function onLeafletReady() {
    clearTimeout(timeout);
    try {
      init();
      overlay.style.transition = 'opacity 0.4s';
      overlay.style.opacity = '0';
      setTimeout(function() { overlay.style.display = 'none'; }, 500);
    } catch(e) {
      showError('Map init error: ' + e.message);
      console.error('init() error:', e);
    }
  }

  function showError(msg) {
    clearTimeout(timeout);
    loadingText.textContent = 'Could not load map';
    loadingSub.innerHTML = msg + '<br><br>' +
      '<b>How to open on mobile:</b><br>' +
      '1. Open Samsung Internet or Chrome<br>' +
      '2. Tap the address bar<br>' +
      '3. Type: file:// and browse to this file<br>' +
      'Or share the file to Chrome via "Open with"<br><br>' +
      '<small style="color:rgba(255,255,255,0.35);">OneDrive/Files app previews block JavaScript.</small><br><br>' +
      '<button onclick="location.reload()" style="padding:10px 24px;border-radius:8px;border:1px solid rgba(201,168,76,0.4);background:transparent;color:#E8C96A;font-size:14px;font-family:DM Sans,sans-serif;cursor:pointer;">Retry</button>';
    loadingSub.style.color = 'rgba(255,255,255,0.7)';
    loadingSub.style.lineHeight = '1.7';
    loadingSub.style.maxWidth = '320px';
  }

  function tryLoad(url, fallbackUrl) {
    var script = document.createElement('script');
    script.src = url;
    script.onload = onLeafletReady;
    script.onerror = function() {
      if (fallbackUrl) {
        loadingSub.textContent = 'Primary CDN failed, trying fallback...';
        var script2 = document.createElement('script');
        script2.src = fallbackUrl;
        script2.onload = onLeafletReady;
        script2.onerror = function() {
          showError('Both CDNs failed. Check your internet connection.');
        };
        document.body.appendChild(script2);
      } else {
        showError('Script load failed. Check your internet connection.');
      }
    };
    document.body.appendChild(script);
  }

  // 10 second timeout
  timeout = setTimeout(function() {
    showError('Timed out loading map library. This usually means the app you opened the file with blocks external scripts.');
  }, 10000);

  // Primary: unpkg, Fallback: cdnjs
  tryLoad(
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js'
  );
})();
