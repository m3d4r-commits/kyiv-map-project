# Kyiv Map Data Validation Report

**Date:** March 2026
**Scope:** All 34 locations in `index.html` — restaurants (10), sights (8), hotels (16)

---

## CRITICAL ISSUES (Fix immediately)

### 1. EUR Exchange Rate Is ~20% Off
The guide uses an implied rate of **1 EUR = ~41 UAH**. The actual current rate is **1 EUR = ~50-51 UAH**. Every single EUR price in the guide is overstated by roughly 20%. GBP conversions (1 GBP = ~59 UAH) are accurate.

**Impact:** All EUR prices across all 34 entries need recalculating.

| Place | UAH | Guide EUR | Corrected EUR |
|-------|-----|-----------|---------------|
| KANAPA | 500–900 | €12–22 | ~€10–18 |
| BEEF | 800–1,500 | €20–37 | ~€16–30 |
| Catch | 900–1,800 | €22–44 | ~€18–36 |
| InterContinental | 8,000–15,000 | €190–370 | ~€157–294 |

### 2. Broken / Dangerous URLs
- **St. Sophia's Cathedral** (`st-sophia.org.ua/en/home/`) — **COMPROMISED DOMAIN.** Redirects to `parik-24.vip` (403 Forbidden). Remove this URL immediately.
- **Urban Space 500** (`urbanspace500.com.ua/en/`) — **404 Not Found.**
- **Puzata Hata** (`puzatahata.com.ua/`) — **Connection Refused.** Server unreachable.

### 3. Ulyublenyi Dyadya — Wrong Cuisine Classification
Listed as "Oriental-Ukrainian Fusion." Actual cuisine is **Mediterranean/Middle Eastern** (Moroccan, Israeli, Iraqi, Egyptian, Turkish, Greek). No evidence of Ukrainian fusion focus. No evidence of "borscht with prunes rated best in city" — menu descriptions don't mention borscht.

---

## ERRORS (Factual inaccuracies)

### Restaurant Hours
| Restaurant | Listed Hours | Actual Hours |
|-----------|-------------|-------------|
| KANAPA | 11:00–23:00 | 10:00–00:00 |
| Ulyublenyi Dyadya | 12:00–23:00 | 08:00–22:00 (weekdays), 09:00–22:00 (weekends) |
| BEEF Meat & Wine | 12:00–00:00 | Mon-Fri 09:00–23:00, Sat-Sun 10:00–23:00 |

### Sight Hours
| Sight | Listed Hours | Actual Hours |
|-------|-------------|-------------|
| PinchukArtCentre | 12:00–21:00 (Tue–Sun) | 12:00–21:00 (**Wed–Sun**, closed Mon-Tue) |
| Kyiv Pechersk Lavra | 09:00–17:00 | Varies by season; caves 08:30–16:30, grounds open longer |

### Overstated Claims
- **Catch Seafood** — "Ranked #1 seafood in Ukraine" is not substantiated. TripAdvisor ranks it #207 of 1,562 restaurants in Kyiv with a 4.0/5. Good restaurant, but the claim is inflated.
- **Ostannya Barykada** — "Secret menu unlocked by Ukrainian history quiz" is inaccurate. Entry requires a known password ("Boritesya — poborete"), not a quiz. No sources mention a quiz mechanic.

### Motherland Monument Description
Listed as "102m titanium statue." The statue is **steel clad in titanium**, not solid titanium. The 102m measurement includes the base/pedestal, not the statue alone (statue itself is ~62m).

---

## GPS COORDINATE ISSUES

### Confirmed Off
- **Pyrohiv Open-Air Museum** — Listed longitude 30.5063, should be closer to **30.5122** (~600m west of actual location).

### Borderline / Needs Verification
- **Andriyivskyy Descent** (50.4598, 30.5161) — Coordinates point to the top/north end of the descent. The canonical center is closer to 50.456, 30.510. Acceptable if intentionally marking the top.
- **St. Michael's Golden-Domed Monastery** (50.4558, 30.5230) — ~200m east-southeast of the actual monastery complex center. Close enough for a map pin but not pinpoint accurate.

### Walk Distance Anomalies
Several hotels claim walking distances less than or equal to straight-line distance (physically impossible in a city with streets):
- **Hyatt Regency** — Claims 0.2 km, straight-line is 0.298 km
- **InterContinental** — Claims 0.4 km, straight-line is 0.438 km
- **Fairmont Grand** — Claims 1.1 km, straight-line is 1.106 km
- **Staro Hotel** — Claims 1.8 km, straight-line is 1.835 km

These are minor but technically incorrect. Real walking distances should be ~1.2-1.4x the straight-line.

---

## UNVERIFIABLE / QUESTIONABLE CLAIMS

These couldn't be confirmed or denied through available sources:

- **Pizzeria Napule** — Claims "20 varieties." Search found "more than 30 types." If anything, the guide undersells it.
- **Opera Hotel** — "Seven themed suites (Japanese, Egyptian, Moroccan...)" — Not mentioned in available search results. May be accurate but unconfirmed.
- **Premier Palace Hotel** — "Infinity pool with glass ceiling" — Only generic "pool" mentioned in sources; "infinity" and "glass ceiling" unverified.
- **BURSA Hotel** — "Oldest building from 1818" — Historic Podil area confirmed, but specific 1818 date not found in sources.
- Specific UAH entry fees for sights (Lavra 80-250, Motherland ~100, Pyrohiv 130) — These change frequently and couldn't be pinned to current exact prices.

---

## VERIFIED CORRECT

The following data points checked out:

**Restaurants:** Puzata Hata (all details), Vino e Cucina (core claims), Pizzeria Napule (AVPN certification, Neapolitan provenance), Urban Space 500 (80% profits to social projects, hours), Ostannya Barykada (underground location, password entry)

**Sights:** All GPS coordinates for major sights within acceptable range. UNESCO status for Lavra and St. Sophia's confirmed. St. Michael's demolition in 1937 confirmed. Andriyivskyy Descent "Montmartre of Kyiv" nickname confirmed. Maidan as site of 2014 revolution confirmed. Pyrohiv as largest open-air museum confirmed. PinchukArtCentre free entry and rooftop cafe confirmed.

**Hotels:** InterContinental 272 rooms, Fairmont 133 rooms / 205 sqm Royal Residence, Hyatt 234 rooms / Bar on 8, Premier Palace opened 1912 / ~289 rooms, 11 Mirrors co-founded by Klitschko / World's Best City Hotel 2016, Opera Hotel 140 rooms / 1906 building, BURSA 33 rooms / Balbek Bureau / KINO42, ibis Railway 326 rooms / breakfast from 4 AM — all confirmed.

**GBP conversions** are accurate across the board.

---

## SUMMARY

| Category | Count |
|----------|-------|
| Critical (fix now) | 3 (EUR rates, broken URLs, wrong cuisine) |
| Errors | 7 (hours, overstated claims, description inaccuracies) |
| GPS issues | 2 (Pyrohiv off, walk distances below straight-line) |
| Unverifiable | 5 (can't confirm or deny) |
| Verified correct | Majority of core data |

The map is solid overall. The EUR conversion issue is systemic and affects every entry. The compromised St. Sophia URL is a security concern. Everything else is either minor or localized.
