# justin4046.github.io
Little site to show cell towers from OSM data

## Overpass query
```
[out:json][timeout:25];
{{geocodeArea:US-AL}}->.searchAlabama;
{{geocodeArea:US-FL}}->.searchFlorida;
{{geocodeArea:US-GA}}->.searchGeorgia;
{{geocodeArea:US-MS}}->.searchMississippi;
{{geocodeArea:US-TN}}->.searchTennessee;
(
  node["communication:mobile_phone"]["communication:mobile_phone"!="no"](area.searchAlabama);
  node["communication:mobile_phone"]["communication:mobile_phone"!="no"](area.searchFlorida);
  node["communication:mobile_phone"]["communication:mobile_phone"!="no"](area.searchGeorgia);
  node["communication:mobile_phone"]["communication:mobile_phone"!="no"](area.searchMississippi);
  node["communication:mobile_phone"]["communication:mobile_phone"!="no"](area.searchTennessee);
);
out body;
>;
out skel qt;
```
