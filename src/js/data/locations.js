/**
 * src/js/data/locations.js
 *
 * All map location objects.  Each entry contains:
 *   type   {string}   – Marker category (e.g. "Main Mission", "Easter Egg")
 *   cat    {string}   – Top-level group (e.g. "Story", "Collectibles")
 *   title  {string}   – Display name
 *   lat    {number}   – Leaflet latitude  (GTA V tile space)
 *   lng    {number}   – Leaflet longitude (GTA V tile space)
 *   char   {string=}  – Playable character(s): F / M / T / combos
 *   desc   {string}   – Short description shown in the detail panel
 *   imgs   {string[]} – Optional image URLs
 *
 * Tile calibration reference (gta5-map.github.io tile set):
 *   Los Santos City Centre  ≈ lat 67,  lng -119
 *   Sandy Shores            ≈ lat 75,  lng -107
 *   Paleto Bay              ≈ lat 83,  lng -135
 *   Mount Chiliad peak      ≈ lat 78,  lng -115
 *   Fort Zancudo            ≈ lat 76,  lng -129
 *   LSIA (airport)          ≈ lat 62,  lng -120
 */

/* global LOCS */
const LOCS = [
  // ── Main Story Missions ──────────────────────────────────────────────────────
  { type:"Main Mission", cat:"Story", title:"Prologue – Ludendorff",          lat:53.93, lng:-79.49,  char:"M/T/B", desc:"Michael, Trevor and Brad rob the Ludendorff bank in North Yankton. 9 years before the main story.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Franklin and Lamar",             lat:65.06, lng:-114.17, char:"F/L",   desc:"Franklin and Lamar repo two luxury cars from Simeon lot in South LS.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Repossession",                   lat:64.92, lng:-113.7,  char:"F",     desc:"Franklin repos a Bagger motorcycle from the Vagos in Chamberlain Hills.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Complications",                  lat:68.78, lng:-120.93, char:"F/M",   desc:"Franklin meets Michael for the first time repossessing his son Jimmy car in Rockford Hills.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Father/Son",                     lat:66.36, lng:-124.85, char:"M",     desc:"Michael races across Del Perro to save Jimmy from being abandoned on a moving yacht.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Marriage Counseling",            lat:68.78, lng:-120.93, char:"M/F",   desc:"Michael and Franklin destroy the tennis coach house — belonging to cartel boss Martin Madrazo.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Daddy Little Girl",              lat:66.36, lng:-124.85, char:"M",     desc:"Michael tries to bond with Tracey at Del Perro beach but ends up chasing the yacht she is partying on.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Friend Request",                 lat:68.03, lng:-121.64, char:"M",     desc:"Michael infiltrates LifeInvader HQ in Pillbox Hill and plants a device on Jay Norris prototype phone.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Casing the Jewel Store",         lat:67.8,  lng:-119.32, char:"M",     desc:"Michael and Lester case Vangelico Fine Jewelry in preparation for the first heist.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Carbine Rifles Setup",           lat:65.06, lng:-114.17, char:"F",     desc:"Franklin steals carbine rifles from the Vagos for the Jewel Store Job.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"The Jewel Store Job",            lat:67.8,  lng:-119.32, char:"M/F",   desc:"Rob Vangelico Fine Jewelry. Choose Smart approach (gas) or Loud (guns blazing).", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Mr. Philips",                    lat:74.93, lng:-110.08, char:"T",     desc:"Trevor is introduced in Sandy Shores. He kills Johnny Klebitz and takes over Blaine County meth trade.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Nervous Ron",                    lat:73.86, lng:-110.6,  char:"T",     desc:"Trevor and Ron take down a Lost MC gun shipment at the Sandy Shores airfield.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Crystal Maze",                   lat:74.82, lng:-113.06, char:"T",     desc:"Trevor and Chef defend the meth lab from the Lost MC and Aztecas simultaneously.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Trevor Philips Industries",      lat:74.93, lng:-110.08, char:"T",     desc:"Trevor meets the O Neil Brothers for the first time. The rivalry begins.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Chop",                           lat:65.06, lng:-114.17, char:"F",     desc:"Franklin and Lamar use Chop the Rottweiler to track down D, a Ballas member.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Hood Safari",                    lat:63.71, lng:-113.01, char:"F/T/L", desc:"Franklin, Trevor and Lamar go on a drug pickup in Davis which goes wrong fast.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Fame or Shame",                  lat:63.95, lng:-115.33, char:"M/T",   desc:"Michael and Trevor race to the Maze Bank Arena to confront Tracey auditioning for the show.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Dead Man Walking",               lat:64.89, lng:-112.93, char:"M",     desc:"Michael goes to the city morgue in Mission Row to retrieve a body for Dave Norton and the FIB.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Did Somebody Say Yoga?",         lat:68.78, lng:-120.93, char:"M",     desc:"Michael does yoga then gets drugged and wakes up in the desert.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Three Companies",                lat:66.66, lng:-115.65, char:"M/T/F", desc:"Michael and FIB agents fast-rope from a helicopter while Trevor flies it. Extract Kerimov from IAA.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"By the Book",                    lat:74.93, lng:-110.08, char:"T",     desc:"Trevor tortures Mr. K in Sandy Shores on FIB orders while Michael stakes out the target in LS.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"I Fought the Law",               lat:67.69, lng:-114.58, char:"F/M",   desc:"Franklin and Michael provide cover for Devin Weston sports car driver across Vinewood.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Eye in the Sky",                 lat:66.8,  lng:-115.91, char:"T/F",   desc:"Trevor pilots the police helicopter thermal camera while Franklin tracks the thief below.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Mr. Richards",                   lat:68.02, lng:-121.55, char:"T",     desc:"Trevor is hired by Solomon Richards to deal with the Azerbaijani agency threatening his star.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Caida Libre",                    lat:68.78, lng:-120.93, char:"T/M",   desc:"Trevor shoots down a Madrazo cartel plane; Michael searches the crash site.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Deep Inside",                    lat:68.02, lng:-121.55, char:"F",     desc:"Franklin infiltrates Vinewood Studios to steal the JB 700W prototype car for Devin Weston.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Minor Turbulence",               lat:73.86, lng:-110.6,  char:"T",     desc:"Trevor hijacks a cargo plane mid-air above the Sandy Shores airfield.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Paleto Score Setup",             lat:81.71, lng:-125.23, char:"M/T",   desc:"Michael and Trevor scout Paleto Bay, watching the bank and police response.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Predator",                       lat:79.49, lng:-120.91, char:"M/T/F", desc:"The trio use a military drone to hunt and kill the O Neil Brothers on Chiliad Mountain.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Military Hardware Setup",        lat:76.18, lng:-133.54, char:"T",     desc:"Trevor steals military hardware from the National Guard convoy for the Paleto Score.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"The Paleto Score",               lat:81.71, lng:-125.23, char:"M/T/F", desc:"Rob the Paleto Bay bank while a full military response pursues you down the Pacific Highway.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Monkey Business",                lat:68.5,  lng:-128.75, char:"M/T/F", desc:"Infiltrate Humane Labs via submarine, steal nerve agent samples for the FIB.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Hang Ten",                       lat:65.36, lng:-120.55, char:"T",     desc:"Trevor tracks down Floyd and Debra at their Vespucci apartment.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Surveying the Score",            lat:66.8,  lng:-115.92, char:"M/L",   desc:"Michael and Lester survey the Union Depository in downtown Pillbox Hill.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Bury the Hatchet",               lat:68.02, lng:-121.55, char:"M/T",   desc:"Michael flies to North Yankton to visit Brad grave — Trevor follows and discovers the betrayal.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Pack Man",                       lat:69.6,  lng:-123.94, char:"F",     desc:"Franklin delivers the final car for Devin Weston while evading police and mercenaries.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Fresh Meat",                     lat:61.74, lng:-108.32, char:"F/M",   desc:"Franklin and Michael rescue Trevor from the Wei Cheng Triads at the La Mesa meat factory.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"The Ballad of Rocco",            lat:68.02, lng:-121.55, char:"M/T",   desc:"Michael and Trevor chase Rocco through Vinewood to stop extortion of Solomon Richards.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Blitz Play",                     lat:65.7,  lng:-117.47, char:"M/T/F", desc:"The trio ambush an FIB armoured truck on the Great Ocean Highway.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Lamar Down",                     lat:65.06, lng:-114.17, char:"F/T/M", desc:"Franklin, Trevor and Michael rescue Lamar from Ballas at the Sawmill in Blaine County.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Meltdown",                       lat:68.79, lng:-113.02, char:"M",     desc:"Michael races to the Vinewood Bowl to rescue Amanda and Tracey from Devin Weston mercenaries.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Architects Plans Setup",         lat:66.68, lng:-116.04, char:"F",     desc:"Franklin steals the FIB HQ blueprints from an architect office.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"The Bureau Raid",                lat:66.68, lng:-116.04, char:"M/F",   desc:"Infiltrate FIB Headquarters. Choose Fire Crew or Rooftop approach.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Reuniting the Family",           lat:68.78, lng:-120.93, char:"M",     desc:"Michael reconciles with his family after Jimmy reveals he has been abducted.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Getaway Vehicle Setup",          lat:66.8,  lng:-115.92, char:"F",     desc:"Franklin steals two getaway vehicles across Los Santos for the Big Score.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Driller Setup",                  lat:66.8,  lng:-115.92, char:"T",     desc:"Trevor steals a driller from a construction site for the Subtle approach of the Big Score.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Sidetracked Setup",              lat:76.64, lng:-109.8,  char:"T",     desc:"Trevor steals a train from McKenzie Airfield for the Obvious approach of the Big Score.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Cleaning Out the Bureau",        lat:66.68, lng:-116.04, char:"M",     desc:"Michael and Lester destroy servers at the FIB building after the Bureau Raid.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"The Big Score",                  lat:66.45, lng:-115.65, char:"M/T/F", desc:"Rob the Union Depository of billions in gold. Subtle approach (disguised) or Obvious (armoured train).", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"Something Sensible – Ending A",  lat:63.73, lng:-110.74, char:"F",     desc:"Ending A: Franklin lures Trevor to the El Burro Heights oil fields and kills him.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"The Times Come – Ending B",      lat:78.17, lng:-107.62, char:"F",     desc:"Ending B: Franklin pursues Michael to the satellite dishes near Mount Gordo. The darkest ending.", imgs:[] },
  { type:"Main Mission", cat:"Story", title:"The Third Way – Ending C",       lat:66.45, lng:-115.65, char:"M/T/F", desc:"Ending C (canon): All three work together to eliminate all antagonists. Everyone survives.", imgs:[] },

  // ── Heist Setups ─────────────────────────────────────────────────────────────
  { type:"Heist Setup", cat:"Story", title:"Scope Out – Merryweather",        lat:60.8,  lng:-105.94, char:"M",     desc:"Michael scouts the Port of LS terminal to find the government superweapon container.", imgs:[] },
  { type:"Heist Setup", cat:"Story", title:"The Merryweather Heist",          lat:60.8,  lng:-105.94, char:"M/T/F", desc:"The crew attempts to steal a government superweapon. Dave Norton forces them to return it.", imgs:[] },
  { type:"Heist Setup", cat:"Story", title:"Draugur – Blitz Play Setup",      lat:65.7,  lng:-117.47, char:"M/T/F", desc:"The trio steal a BobCat Security armoured truck to use as the decoy for Blitz Play.", imgs:[] },
  { type:"Heist Setup", cat:"Story", title:"Gauntlet – Bureau Raid Setup",    lat:66.8,  lng:-115.92, char:"M",     desc:"Steal a fire truck for the Bureau Raid fire crew approach.", imgs:[] },
  { type:"Heist Setup", cat:"Story", title:"Tow Truck – Big Score Setup",     lat:67.8,  lng:-119.32, char:"F",     desc:"Franklin steals a flatbed tow truck for the Big Score heist.", imgs:[] },

  // ── Strangers & Freaks ────────────────────────────────────────────────────────
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Tonya – Pulling Favors",               lat:65.06, lng:-114.17, char:"F",     desc:"Tonya asks Franklin to tow cars while JB is on a bender. 5-mission chain around Strawberry.", imgs:[] },
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Beverly – Paparazzo",                  lat:68.02, lng:-121.55, char:"M",     desc:"Beverly Felton hires Michael to photograph celebrities. 6-mission chain around Vinewood.", imgs:[] },
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Omega – Far Out",                      lat:74.93, lng:-110.08, char:"F",     desc:"Sandy Shores conspiracy theorist Omega asks Franklin to collect all 50 Spaceship Parts.", imgs:[] },
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Dom – Risk Assessment",                lat:67.69, lng:-114.58, char:"F/M",   desc:"Extreme sports enthusiast Dom challenges the protagonists to skydiving and base jumping.", imgs:[] },
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Barry – Grass Roots",                  lat:65.06, lng:-114.17, char:"F/M/T", desc:"Barry gives each protagonist a joint with hallucinations: clowns for T, aliens for M, animals for F.", imgs:[] },
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Mary-Ann – Exercising Demons",         lat:68.02, lng:-121.55, char:"F/M/T", desc:"Competitive Mary-Ann challenges each protagonist to intense cycling and running races.", imgs:[] },
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Peter Dreyfuss – A Starlet in Vinewood", lat:68.02, lng:-121.55, char:"F",   desc:"Collect all 50 Letter Scraps to unlock. Franklin discovers Dreyfuss murdered actress Leonora Johnson.", imgs:[] },
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Maude – Bail Bonds",                   lat:74.93, lng:-110.08, char:"T",     desc:"Maude Eccles sends Trevor to bring in 4 bail jumpers dead or alive across Blaine County.", imgs:[] },
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Epsilon Program – Seeking the Truth",  lat:68.51, lng:-120.11, char:"M",     desc:"Michael joins the Epsilon cult (Kifflom!). 10-mission chain ending with a choice to keep or donate $2.1M.", imgs:[] },
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Cletus – Target Practice",             lat:73.86, lng:-110.6,  char:"T",     desc:"Cletus teaches Trevor how to hunt deer in Blaine County.", imgs:[] },
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Cletus – Fair Game",                   lat:73.86, lng:-110.6,  char:"T",     desc:"Cletus and Trevor go hunting elk together, but competing hunters interrupt.", imgs:[] },
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Joe and Josef – Extra Commission",     lat:77.12, lng:-108.96, char:"T",     desc:"Trevor encounters two redneck vigilantes abducting Mexicans near the O Neil ranch.", imgs:[] },
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Manuel – Minute Man Blues",            lat:77.12, lng:-108.96, char:"T",     desc:"Trevor confronts Joe and Josef one final time after discovering their victims were US citizens.", imgs:[] },
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Hao – Street Race",                    lat:65.06, lng:-114.17, char:"F",     desc:"Hao challenges Franklin to a street race through South Los Santos.", imgs:[] },
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Ursula – Hitchhiker",                  lat:79.49, lng:-120.91, char:"T/M/F", desc:"A woman named Ursula is stranded on the mountain. She reveals disturbing things on the drive home.", imgs:[] },
  { type:"Strangers & Freaks", cat:"Side Missions", title:"Dreyfuss – Reunion",                   lat:68.02, lng:-121.55, char:"F",     desc:"Final confrontation with Peter Dreyfuss. Franklin can kill him or let him go.", imgs:[] },

  // ── Assassinations ────────────────────────────────────────────────────────────
  { type:"Assassination", cat:"Side Missions", title:"Hotel Assassination",            lat:69.61, lng:-120.75, char:"F", desc:"Lester asks Franklin to assassinate Bret Lowrey outside the Von Crastenburg Hotel. Affects BAWSAQ: buy Bilkinton before.", imgs:[] },
  { type:"Assassination", cat:"Side Missions", title:"The Multi Target Assassination", lat:66.8,  lng:-115.92, char:"F", desc:"Lester marks 4 Betta Pharmaceutical jury members across LS. Buy Debonaire cigarettes before.", imgs:[] },
  { type:"Assassination", cat:"Side Missions", title:"The Vice Assassination",         lat:66.8,  lng:-115.92, char:"F", desc:"Kill the vice chairman of Facade Corp. Invest in Facade stock before the hit.", imgs:[] },
  { type:"Assassination", cat:"Side Missions", title:"The Bus Assassination",          lat:66.8,  lng:-115.92, char:"F", desc:"Kill Jackson Skinner by forcing his car off the road near the bus terminal.", imgs:[] },
  { type:"Assassination", cat:"Side Missions", title:"The Construction Assassination", lat:66.01, lng:-116.1,  char:"F", desc:"Kill CEO at Maze Bank construction tower. Buy Gold Coast shares beforehand.", imgs:[] },

  // ── Safehouses ────────────────────────────────────────────────────────────────
  { type:"Safehouse", cat:"Properties", title:"Michael Mansion – Rockford Hills",  lat:68.78, lng:-120.93, desc:"Michael luxurious family home in Rockford Hills. Features pool, tennis court and cinema.", imgs:[] },
  { type:"Safehouse", cat:"Properties", title:"Franklin Aunt House – Strawberry",  lat:64.24, lng:-113.77, desc:"Franklin starting safehouse in Strawberry. A modest single-story home on Forum Drive.", imgs:[] },
  { type:"Safehouse", cat:"Properties", title:"Franklin House – Vinewood Hills",   lat:69.61, lng:-123.93, desc:"A stunning modernist mansion in the hills, unlocked after Marriage Counseling.", imgs:[] },
  { type:"Safehouse", cat:"Properties", title:"Trevor Trailer – Sandy Shores",     lat:74.93, lng:-110.08, desc:"Trevor base of operations — a beaten-up trailer in Sandy Shores. Centre of the meth operation.", imgs:[] },
  { type:"Safehouse", cat:"Properties", title:"Del Perro Heights Apartment",        lat:66.08, lng:-122.05, desc:"Purchasable beachfront apartment in Del Perro for $200,000. Great views of Del Perro Pier.", imgs:[] },
  { type:"Safehouse", cat:"Properties", title:"Alta Street Apartment",              lat:66.05, lng:-116.19, desc:"Purchasable mid-tier apartment in Alta for $223,000. Good central location.", imgs:[] },

  // ── Properties ────────────────────────────────────────────────────────────────
  { type:"Property", cat:"Properties", title:"Sonar Collections Dock",   lat:68.4,  lng:-127.76, desc:"Purchase for $250,000. Unlocks the submarine and allows collection of 30 Nuclear Waste pieces.", imgs:[] },
  { type:"Property", cat:"Properties", title:"McKenzie Airfield",         lat:76.64, lng:-109.8,  desc:"Purchase for $150,000. Activates Trevor arms-dealing missions — supply airdrops across Blaine County.", imgs:[] },
  { type:"Property", cat:"Properties", title:"LS Customs – La Mesa",      lat:65.25, lng:-110.65, desc:"Purchase for $349,000. All future car modifications at this LS Customs location are free permanently.", imgs:[] },
  { type:"Property", cat:"Properties", title:"Vanilla Unicorn Strip Club", lat:65.16, lng:-113.71, desc:"Trevor takes it over during the story. Generates $5,000 every 24 hours. Has a secret weapon cache.", imgs:[] },
  { type:"Property", cat:"Properties", title:"Smoke on the Water",         lat:66.34, lng:-124.73, desc:"Purchase for $204,000. A medical marijuana dispensary on the Great Ocean Highway near Vespucci Beach.", imgs:[] },
  { type:"Property", cat:"Properties", title:"The Hen House",               lat:78.43, lng:-116.89, desc:"Purchase for $80,000. Generates $1,600 per week. A small business in northern Blaine County.", imgs:[] },

  // ── Services ──────────────────────────────────────────────────────────────────
  { type:"Hospital",       cat:"Services", title:"Pillbox Hill Medical Center",   lat:66.49, lng:-113.34, desc:"Downtown hospital in Pillbox Hill. Central location and convenient respawn.", imgs:[] },
  { type:"Hospital",       cat:"Services", title:"Mount Zonah Medical Center",    lat:67.65, lng:-119.45, desc:"Modern hospital near Rockford Hills. Respawn point for west LS.", imgs:[] },
  { type:"Hospital",       cat:"Services", title:"Central LS Medical Center",     lat:64.64, lng:-112.4,  desc:"Main hospital in South LS. Primary player respawn point after death in that area.", imgs:[] },
  { type:"Hospital",       cat:"Services", title:"Sandy Shores Medical Center",   lat:74.7,  lng:-110.63, desc:"Small clinic in Sandy Shores. The only medical facility in all of Blaine County.", imgs:[] },
  { type:"Police Station", cat:"Services", title:"Mission Row Police Station",    lat:65.62, lng:-112.37, desc:"The main LSPD station in Downtown LS. Based on the LAPD Parker Center.", imgs:[] },
  { type:"Police Station", cat:"Services", title:"Vinewood Police Station",       lat:69.58, lng:-122.95, desc:"Smaller LSPD station serving the Vinewood Hills area.", imgs:[] },
  { type:"Police Station", cat:"Services", title:"Sandy Shores Sheriff Dept",     lat:74.72, lng:-110.57, desc:"Blaine County Sheriff Office substation. Small desert facility.", imgs:[] },
  { type:"Police Station", cat:"Services", title:"Paleto Bay Sheriff Dept",       lat:80.94, lng:-126.54, desc:"Northernmost police station in the game. Featured in the Paleto Score setup.", imgs:[] },
  { type:"Airport",        cat:"Services", title:"Los Santos International Airport", lat:62.23, lng:-119.59, desc:"Main airport of Los Santos, based on LAX. Multiple runways. Used in several heist missions.", imgs:[] },
  { type:"Airport",        cat:"Services", title:"Sandy Shores Airfield",          lat:73.86, lng:-110.6,  desc:"A desert airstrip near Sandy Shores. Trevor uses it heavily in multiple missions.", imgs:[] },
  { type:"Airport",        cat:"Services", title:"McKenzie Airfield",              lat:76.64, lng:-109.8,  desc:"Purchasable airfield near Grapeseed. Site of Trevor arms-smuggling missions.", imgs:[] },

  // ── Landmarks ─────────────────────────────────────────────────────────────────
  { type:"Landmark", cat:"World", title:"Maze Bank Tower",          lat:66.25, lng:-115.45, desc:"The tallest building in Los Santos — inspired by the US Bank Tower. Iconic skyline anchor.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Vinewood Sign",            lat:70.08, lng:-113.7,  desc:"GTA take on the Hollywood Sign. Visible from most of the city.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Mount Chiliad",            lat:79.49, lng:-120.91, desc:"The highest peak in San Andreas. Home to cable car, ski lodge, and the famous Chiliad Mystery.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Galileo Observatory",      lat:70.47, lng:-119.98, desc:"Inspired by the Griffith Observatory in LA. Panoramic views of the city.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Del Perro Pier",           lat:66.36, lng:-124.85, desc:"Santa Monica Pier-style amusement boardwalk. Features Ferris wheel, roller coaster and food stalls.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Maze Bank Arena",          lat:63.95, lng:-115.33, desc:"Los Santos main sports stadium — based on the Staples Center.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Port of Los Santos",       lat:61.15, lng:-105.67, desc:"Massive industrial port on the south-east coast. Used in heist setups and the Merryweather mission.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Alamo Sea",                lat:75.09, lng:-116.26, desc:"Large inland body of water in Blaine County — inspired by the Salton Sea.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Fort Zancudo",             lat:76.18, lng:-133.54, desc:"Military base on the west coast. 5-star wanted level if entered. Contains jets, tanks and Buzzards.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Raton Canyon",             lat:76.03, lng:-121.13, desc:"A dramatic canyon through the northern wilderness. Red river, forests and cliffs.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Grand Senora Desert",      lat:72.53, lng:-110.37, desc:"The Mojave-inspired arid region east of Sandy Shores. Dotted with wind farms, mesas and oil pumps.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Paleto Bay",               lat:81.71, lng:-125.23, desc:"A small coastal town in the far north. Site of the Paleto Score bank heist.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Sandy Shores Town",        lat:74.93, lng:-110.08, desc:"A desert community east of the Alamo Sea. Home to Trevor operations.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Humane Labs and Research",  lat:71.74, lng:-99.43,  desc:"Government biomedical facility. Targeted during Monkey Business and several heist setups.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Vinewood Racetrack",       lat:67.69, lng:-114.58, desc:"Horse racing facility. Bet on races or ride the horse yourself.", imgs:[] },
  { type:"Landmark", cat:"World", title:"LifeInvader HQ",           lat:68.03, lng:-121.64, desc:"Facebook parody in Pillbox Hill. Site of the Friend Request mission.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Rockford Hills",           lat:68.78, lng:-120.93, desc:"The Beverly Hills of Los Santos. Wealthy mansions including Michael home.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Vespucci Beach",           lat:65.89, lng:-121.97, desc:"Los Santos Venice Beach. Muscle Beach, skate park, lifeguard towers.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Davis – Grove Street",     lat:63.71, lng:-113.01, desc:"Franklin home neighbourhood. Grove Street is a direct GTA San Andreas reference.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Union Depository",         lat:66.45, lng:-115.65, desc:"The most secure financial institution in Los Santos. Target of the final heist.", imgs:[] },
  { type:"Landmark", cat:"World", title:"Vinewood Bowl",            lat:68.79, lng:-113.02, desc:"Open-air music venue inspired by the Hollywood Bowl. Site of the Meltdown mission.", imgs:[] },
  { type:"Landmark", cat:"World", title:"FIB Headquarters",         lat:66.68, lng:-116.04, desc:"Federal Investigation Bureau HQ in Pillbox Hill. Target of the Bureau Raid.", imgs:[] },
  { type:"Landmark", cat:"World", title:"IAA Headquarters",         lat:66.66, lng:-115.65, desc:"Intelligence Agency building in downtown LS. Smaller than FIB but equally secretive.", imgs:[] },

  // ── Activities ────────────────────────────────────────────────────────────────
  { type:"Activity", cat:"World", title:"Los Santos Golf Club",              lat:68.81, lng:-123.67, desc:"Fully playable 18-hole golf game in the hills west of LS. Any character can play.", imgs:[] },
  { type:"Activity", cat:"World", title:"Ammu-Nation Shooting Range",        lat:65.57, lng:-114.52, desc:"Complete shooting challenges across Bronze, Silver and Gold tiers to unlock weapon discounts.", imgs:[] },
  { type:"Activity", cat:"World", title:"Yoga – Michael Backyard",           lat:68.78, lng:-120.93, desc:"Morning yoga sessions with Amanda. Match on-screen poses with the analog sticks.", imgs:[] },
  { type:"Activity", cat:"World", title:"Yellow Jack Inn – Darts & Arm Wrestling", lat:73.03, lng:-113.24, desc:"The Yellow Jack Inn in Sandy Shores offers darts and arm wrestling mini-games.", imgs:[] },
  { type:"Activity", cat:"World", title:"Triathlon – Vespucci Beach",        lat:65.89, lng:-121.97, desc:"Swim, bike and run triathlon starting at Vespucci Beach.", imgs:[] },
  { type:"Activity", cat:"World", title:"Triathlon – Alamo Sea",             lat:75.09, lng:-116.26, desc:"Triathlon around the Alamo Sea in Blaine County.", imgs:[] },
  { type:"Activity", cat:"World", title:"Parachuting – Mount Chiliad",       lat:79.49, lng:-120.91, desc:"13 parachute jump challenges. Required for the Dom strangers and freaks chain.", imgs:[] },
  { type:"Activity", cat:"World", title:"Street Racing – Cypress Flats",     lat:65.16, lng:-111.62, desc:"Illegal street races around the industrial Cypress Flats area of south LS.", imgs:[] },
  { type:"Activity", cat:"World", title:"Flight School – LSIA",              lat:62.23, lng:-119.59, desc:"Complete 10 flight school lessons at LSIA. Required for 100% completion.", imgs:[] },
  { type:"Activity", cat:"World", title:"Hunting – Chiliad Mountain",        lat:79.49, lng:-120.91, desc:"Hunt elk, coyote and mountain lions. Companion missions with Cletus.", imgs:[] },

  // ── Gang Territories ──────────────────────────────────────────────────────────
  { type:"Gang Territory", cat:"World", title:"Families Territory – Davis",   lat:63.71, lng:-113.01, desc:"Franklin old neighbourhood. The Chamberlain Gangster Families control Davis and surroundings.", imgs:[] },
  { type:"Gang Territory", cat:"World", title:"Ballas Territory – Strawberry", lat:65.06, lng:-114.17, desc:"The Ballas control Strawberry and Forum Drive. Bitter rivals of the Families.", imgs:[] },
  { type:"Gang Territory", cat:"World", title:"Vagos – South LS",             lat:63.37, lng:-110.77, desc:"The Los Santos Vagos patrol south-east LS near the port and Elysian Island.", imgs:[] },
  { type:"Gang Territory", cat:"World", title:"Lost MC – Sandy Shores",        lat:74.93, lng:-110.08, desc:"The Lost Motorcycle Club desert chapter. Trevor systematically destroys them in Mr Philips.", imgs:[] },
  { type:"Gang Territory", cat:"World", title:"Merryweather Security",         lat:60.8,  lng:-105.94, desc:"The private military company Los Santos port operations.", imgs:[] },
  { type:"Gang Territory", cat:"World", title:"O Neil Ranch – Grapeseed",      lat:77.12, lng:-108.96, desc:"The O Neil Brothers family meth ranch in Grapeseed. Trevor destroys it during the Predator arc.", imgs:[] },

  // ── Easter Eggs ───────────────────────────────────────────────────────────────
  { type:"Easter Egg", cat:"World", title:"Mount Chiliad UFO Mystery",         lat:79.49, lng:-120.91, desc:"The most famous mystery in GTA V. A mural at the peak hints at a UFO visible at 3AM in rain at 100%.", imgs:[] },
  { type:"Easter Egg", cat:"World", title:"Ghost of Jolene Cranley-Evans",     lat:78.87, lng:-107.76, desc:"Between 23:00 and midnight, Jolene ghost appears on the cliff of Mount Gordo.", imgs:[] },
  { type:"Easter Egg", cat:"World", title:"Frozen Alien – Raton Canyon",       lat:76.21, lng:-121.23, desc:"A small alien figure frozen in the ice beneath the river near Raton Canyon.", imgs:[] },
  { type:"Easter Egg", cat:"World", title:"Bigfoot – The Last One",            lat:79.49, lng:-120.91, desc:"At 100% completion, Franklin encounters a mountain lion that reveals it is actually Bigfoot.", imgs:[] },
  { type:"Easter Egg", cat:"World", title:"Infinity Killer Writings",          lat:77.63, lng:-105.89, desc:"Infinity 8 is carved into a rock face near Raton Canyon. The Infinity Killer murdered 8 hikers.", imgs:[] },
  { type:"Easter Egg", cat:"World", title:"DeLorean Time Machine Reference",   lat:72.53, lng:-110.37, desc:"A wrecked sports car with burned tire tracks in the Grand Senora Desert — a Back to the Future homage.", imgs:[] },
  { type:"Easter Egg", cat:"World", title:"Sandy Shores UFO at 3AM",          lat:74.72, lng:-110.3,  desc:"A silent UFO hovers above Sandy Shores at exactly 3AM. No special requirements needed.", imgs:[] },
  { type:"Easter Egg", cat:"World", title:"Fort Zancudo UFO at 3AM",          lat:73.66, lng:-108.87, desc:"A UFO hovers inside Fort Zancudo at 3AM. Getting close triggers immediate 5-star military response.", imgs:[] },
  { type:"Easter Egg", cat:"World", title:"Sunken UFO – Pacific Ocean",        lat:83.17, lng:-121.55, desc:"A sunken UFO rests on the seabed deep in the Pacific Ocean off the western coast. Requires submarine.", imgs:[] },
  { type:"Easter Egg", cat:"World", title:"Hatch – Easter Egg Island",         lat:71.87, lng:-96.07,  desc:"A metal hatch on a small island east of San Andreas — a direct reference to the TV show Lost.", imgs:[] },
  { type:"Easter Egg", cat:"World", title:"Murder Mystery – Letter Scraps",    lat:68.02, lng:-121.55, desc:"50 letter scraps scattered across the map. Assembled they reveal the murder of actress Leonora Johnson.", imgs:[] },
  { type:"Easter Egg", cat:"World", title:"Serial Killer Jars – Mount Chiliad", lat:79.49, lng:-120.91, desc:"Three jars containing human body parts are scattered on Mount Chiliad.", imgs:[] },

  // ── Nuclear Waste (30 collectibles) ───────────────────────────────────────────
  ...Array.from({ length: 30 }, (_, i) => {
    const coords = [
      [76.18,-133.52],[75.69,-131.96],[76.37,-130.8], [77.69,-130.04],[77.99,-127.07],
      [78.46,-125.79],[78.87,-123.94],[79.28,-122.09],[79.54,-120.67],[79.74,-118.7],
      [79.94,-116.72],[80.2, -115.3], [80.45,-113.88],[79.65,-111.81],[78.85,-109.73],
      [78.04,-107.65],[77.24,-105.58],[76.44,-103.5], [70.47,-133.45],[71.0, -134.83],
      [71.54,-136.21],[72.5, -137.86],[73.46,-139.51],[75.26,-141.68],[76.42,-141.35],
      [77.16,-140.76],[78.12,-142.41],[79.02,-143.49],[79.76,-142.9], [80.07,-142.04],
    ];
    return {
      type:"Nuclear Waste", cat:"Collectibles",
      title:`Nuclear Waste #${i + 1}`,
      lat: coords[i][0], lng: coords[i][1],
      desc:"Collect 30 Nuclear Waste barrels from the ocean floor using the submarine (Sonar Dock required).",
      imgs:[],
    };
  }),

  // ── Spaceship Parts (50 collectibles) ─────────────────────────────────────────
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #1 – Zancudo Farm Barn",      lat:79.57, lng:-120.95, desc:"One of 50 Spaceship Parts for the Omega stranger mission. Collect all 50 to build the Space Docker.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #2 – Grapeseed Farm Shed",    lat:77.85, lng:-111.74, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #3 – Grapeseed Cattle Field", lat:77.54, lng:-112.6,  desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #4 – San Chianski Mountain",  lat:76.36, lng:-108.71, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #5 – Alien Graffiti Hill",    lat:77.23, lng:-113.46, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #6 – Sandy Shores Bay",       lat:75.15, lng:-110.59, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #7 – Grand Senora Rock",      lat:74.78, lng:-110.89, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #8 – Satellite Dish Array",   lat:73.19, lng:-108.85, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #9 – Desert Boat",            lat:74.7,  lng:-113.99, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #10 – Derelict Desert House", lat:76.28, lng:-123.91, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #11 – Rocky Desert Valley",   lat:74.28, lng:-115.83, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #12 – Welcome House",         lat:74.54, lng:-114.42, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #13 – Underwater Cave",       lat:75.53, lng:-102.41, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #14 – Tataviam Mountain Beach", lat:74.33, lng:-104.29, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #15 – Drainage Pipe",         lat:72.99, lng:-110.82, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #16 – Underwater Jetty",      lat:71.63, lng:-113.13, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #17 – Freeway Walkway",       lat:66.08, lng:-113.37, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #18 – Construction Container", lat:65.01, lng:-110.6, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #19 – Small Pacific Island",  lat:60.41, lng:-110.38, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #20 – Vagos Sewer Pipe",      lat:62.7,  lng:-113.38, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #21 – Elysian Island Ruins",  lat:61.83, lng:-118.62, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #22 – Gasometer Pipe",        lat:62.9,  lng:-121.39, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #23 – Alien Sculptures",      lat:64.06, lng:-121.06, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #24 – LSIA South Fence",      lat:61.99, lng:-120.3,  desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #25 – Hospital Roof",         lat:64.87, lng:-115.25, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #26 – Freeway Homeless Camp", lat:65.87, lng:-123.23, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #27 – Bean Machine Coffee",   lat:66.58, lng:-118.42, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #28 – Penris Building Roof",  lat:67.38, lng:-120.49, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #29 – Construction Tunnel",   lat:67.06, lng:-119.24, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #30 – Billboard Ladder",      lat:66.56, lng:-124.19, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #31 – Vinewood Studios",      lat:69.2,  lng:-124.78, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #32 – Burton Roundabout",     lat:69.25, lng:-123.23, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #33 – Hotel Rooftop Pool",    lat:69.76, lng:-124.33, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #34 – Golf Course Island",    lat:69.1,  lng:-125.77, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #35 – Vinewood Hills Lake",   lat:71.68, lng:-123.69, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #36 – Concrete Jetty Building", lat:71.41, lng:-122.99, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #37 – Galileo Observatory Roof", lat:70.47, lng:-119.98, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #38 – Richman Glen Tree",     lat:70.16, lng:-126.42, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #39 – Tongva Hills Cave",     lat:71.66, lng:-129.46, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #40 – Banham Canyon Telescope", lat:71.19, lng:-130.74, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #41 – Tongva Hills Hedge Farm", lat:72.93, lng:-130.25, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #42 – Tongva Bridge Waterfall", lat:72.13, lng:-128.17, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #43 – Zancudo River Bridge",  lat:74.55, lng:-126.52, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #44 – Zancudo River Alcove",  lat:74.59, lng:-124.97, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #45 – Mount Josiah Rock Ledge", lat:75.51, lng:-128.16, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #46 – Bridge Underside",      lat:76.69, lng:-132.05, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #47 – Cassoy Creek Waterfall", lat:75.98, lng:-126.88, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #48 – Paleto Cove Hill",      lat:77.85, lng:-131.72, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #49 – Paleto Forest Tunnel",  lat:77.15, lng:-128.66, desc:"One of 50 Spaceship Parts for the Omega stranger mission.", imgs:[] },
  { type:"Spaceship Part", cat:"Collectibles", title:"Spaceship Part #50 – Grey Tower",            lat:77.25, lng:-127.67, desc:"One of 50 Spaceship Parts for the Omega stranger mission. Collect all 50 to build the Space Docker.", imgs:[] },

  // ── Hidden Packages ───────────────────────────────────────────────────────────
  { type:"Hidden Package", cat:"Collectibles", title:"Hidden Package #1",  lat:70.13, lng:-130.77, desc:"Sonar Dock area — $25,000 briefcase, respawns every 48 hrs", imgs:[] },
  { type:"Hidden Package", cat:"Collectibles", title:"Hidden Package #2",  lat:79.35, lng:-134.75, desc:"North Pacific Ocean floor", imgs:[] },
  { type:"Hidden Package", cat:"Collectibles", title:"Hidden Package #3",  lat:76.3,  lng:-108.15, desc:"Far north-east seabed", imgs:[] },
  { type:"Hidden Package", cat:"Collectibles", title:"Hidden Package #4",  lat:72.78, lng:-100.7,  desc:"East coast underwater", imgs:[] },
  { type:"Hidden Package", cat:"Collectibles", title:"Hidden Package #5",  lat:69.55, lng:-100.28, desc:"East ocean central", imgs:[] },
  { type:"Hidden Package", cat:"Collectibles", title:"Hidden Package #6",  lat:67.97, lng:-100.35, desc:"South-east ocean floor", imgs:[] },
  { type:"Hidden Package", cat:"Collectibles", title:"Hidden Package #7",  lat:62.27, lng:-103.12, desc:"Southern ocean near the port", imgs:[] },
  { type:"Hidden Package", cat:"Collectibles", title:"Hidden Package #8",  lat:63.09, lng:-117.3,  desc:"South bay underwater", imgs:[] },
  { type:"Hidden Package", cat:"Collectibles", title:"Hidden Package #9",  lat:62.68, lng:-119.15, desc:"South-west coast seabed", imgs:[] },
  { type:"Hidden Package", cat:"Collectibles", title:"Hidden Package #10", lat:77.36, lng:-138.78, desc:"Far north-west ocean", imgs:[] },
  { type:"Hidden Package", cat:"Collectibles", title:"Hidden Package #11", lat:77.9,  lng:-140.16, desc:"Far north-west deep water", imgs:[] },
  { type:"Hidden Package", cat:"Collectibles", title:"Hidden Package #12", lat:78.74, lng:-128.59, desc:"North coast near Paleto Bay", imgs:[] },

  // ── Vehicle Spawns ────────────────────────────────────────────────────────────
  { type:"Vehicle Spawn", cat:"Collectibles", title:"Adder (Bugatti Veyron)",     lat:69.61, lng:-123.93, desc:"Spawns in a parking lot near Rockford Hills. The fastest car in the base game.", imgs:[] },
  { type:"Vehicle Spawn", cat:"Collectibles", title:"Rare Sports Car Spawn",      lat:71.02, lng:-129.06, desc:"Multiple sports cars spawn regularly on the Tongva Hills road.", imgs:[] },
  { type:"Vehicle Spawn", cat:"Collectibles", title:"Unmarked FIB Buffalo",       lat:73.24, lng:-109.41, desc:"Spawns near a government facility in the Grand Senora Desert.", imgs:[] },
  { type:"Vehicle Spawn", cat:"Collectibles", title:"Buzzard Attack Helicopter",  lat:76.18, lng:-133.54, desc:"Rooftop inside Fort Zancudo. Climb ladders on the side of the building.", imgs:[] },
  { type:"Vehicle Spawn", cat:"Collectibles", title:"Rhino Tank",                 lat:76.18, lng:-133.54, desc:"Found inside Fort Zancudo. Immediately triggers a 5-star wanted level.", imgs:[] },
  { type:"Vehicle Spawn", cat:"Collectibles", title:"Sanchez Dirt Bike",          lat:74.93, lng:-110.08, desc:"Commonly found around the Sandy Shores and desert areas.", imgs:[] },

  // ── Epsilon Cars & Tracts ─────────────────────────────────────────────────────
  { type:"Epsilon Car", cat:"Collectibles", title:"Declasse Tornado (Epsilon)",    lat:68.59, lng:-120.0,  desc:"Epsilon Program mission vehicle. Collect during the Seeking the Truth questline with Michael.", imgs:[] },
  { type:"Epsilon Car", cat:"Collectibles", title:"Pegassi Vacca (Epsilon)",       lat:68.02, lng:-121.55, desc:"Epsilon Program mission vehicle.", imgs:[] },
  { type:"Epsilon Car", cat:"Collectibles", title:"Benefactor Surano (Epsilon)",   lat:68.78, lng:-120.93, desc:"Epsilon Program mission vehicle.", imgs:[] },
  { type:"Epsilon Car", cat:"Collectibles", title:"Enus Super Diamond (Epsilon)",  lat:69.61, lng:-123.93, desc:"Epsilon Program mission vehicle.", imgs:[] },
  { type:"Epsilon Car", cat:"Collectibles", title:"Dinka Double-T (Epsilon)",      lat:69.63, lng:-125.04, desc:"Epsilon Program mission vehicle. Collect during the Seeking the Truth questline with Michael.", imgs:[] },
  { type:"Epsilon Tract", cat:"Collectibles", title:"Epsilon Tract 1 – Mount Chiliad Summit", lat:79.49, lng:-120.91, desc:"Near the summit of Mount Chiliad.", imgs:[] },
  { type:"Epsilon Tract", cat:"Collectibles", title:"Epsilon Tract 2 – Shipwreck Island",     lat:67.69, lng:-97.54,  desc:"On a small island south-east of the main map.", imgs:[] },
  { type:"Epsilon Tract", cat:"Collectibles", title:"Epsilon Tract 3 – Northern Cliff",        lat:82.86, lng:-130.1,  desc:"Far north coast cliffside.", imgs:[] },
  { type:"Epsilon Tract", cat:"Collectibles", title:"Epsilon Tract 4 – Chiliad Interior",      lat:79.14, lng:-120.69, desc:"Inside Mount Chiliad hiking trail.", imgs:[] },
  { type:"Epsilon Tract", cat:"Collectibles", title:"Epsilon Tract 5 – Old Ruins",             lat:69.57, lng:-124.48, desc:"Near abandoned ruins in West LS.", imgs:[] },
  { type:"Epsilon Tract", cat:"Collectibles", title:"Epsilon Tract 6 – Northern Forest",        lat:78.49, lng:-132.12, desc:"Deep in the northern Chiliad forest.", imgs:[] },
  { type:"Epsilon Tract", cat:"Collectibles", title:"Epsilon Tract 7 – Tongva Hills House",    lat:71.66, lng:-129.46, desc:"Near a remote house in Tongva Hills.", imgs:[] },
  { type:"Epsilon Tract", cat:"Collectibles", title:"Epsilon Tract 8 – Chiliad Tree",           lat:79.46, lng:-120.83, desc:"Near a distinctive lone tree on Chiliad.", imgs:[] },
  { type:"Epsilon Tract", cat:"Collectibles", title:"Epsilon Tract 9 – Maze Bank Area",         lat:66.25, lng:-115.45, desc:"Near the Maze Bank Tower in downtown LS.", imgs:[] },
  { type:"Epsilon Tract", cat:"Collectibles", title:"Epsilon Tract 10 – Del Perro Beachside",   lat:66.36, lng:-124.85, desc:"Near the Del Perro beachfront.", imgs:[] },
];
