# kyiv-map-project

An interactive, single-file travel guide for Kyiv built with [Leaflet.js](https://leafletjs.com/). Open `Kyiv_Guide_Map.html` directly in any modern browser — no server or build step required.

## What it does

The page presents a two-panel layout: a collapsible sidebar on the left and a live Leaflet map on the right.

### Places

17 curated locations are pinned on the map, colour-coded by type:

| Type | Count | Colour |
|---|---|---|
| Your Hotel (base) | 1 | 🔴 Red |
| Restaurants | 9 | 🟡 Gold |
| Sights & Attractions | 7 | 🔵 Blue |

Each place card and map popup shows the name, category, price range (UAH / EUR / GBP), opening hours, a short description, and walking distance & time from the hotel.

### Sidebar features

- **Search** — live text search that filters the place list and map markers as you type.
- **Filter tabs** — switch between All, 🍽 Dining, and 🏛 Sights.
- **Sort options** — order results by Default, Distance (nearest first), Price (low → high), or A → Z.
- **Itinerary Mode** — tap places to add them to a custom route. The route is drawn on the map and a summary panel shows total distance, estimated walking time, and number of stops.
- **Currency reference** — chip showing hardcoded reference rates (£1 = 59 UAH, €1 = 41 UAH) alongside each price.

### Map features

- **Marker clustering** — nearby markers group together at low zoom levels.
- **Map styles** — cycle through Light, Dark, Streets, and Satellite tile layers with the 🗺 button.
- **Fit All** — re-zooms the map to show every visible marker.
- **Route overlay** — a green polyline connects itinerary stops, with a distance/time/stop-count info box.
- **Sidebar toggle** — hide or reveal the sidebar to maximise the map area.

### Responsive design

On mobile the sidebar slides up from the bottom with a drag handle. Tapping a place on mobile auto-collapses the sidebar so the map is fully visible.

## Files

| File | Description |
|---|---|
| `Kyiv_Guide_Map.html` | The complete self-contained application (HTML + CSS + JS) |

## Usage

```
open Kyiv_Guide_Map.html
```

Or simply drag the file into a browser window.
