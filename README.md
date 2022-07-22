# justin4046.github.io
Little site to show cell towers from OSM data

## Overpass query
```
[out:json][timeout:25];
{{geocodeArea:US-AL}}->.searchArea;
{{geocodeArea:US-FL}}->.searchArea2;
{{geocodeArea:US-GA}}->.searchArea3;
(
  node["communication:mobile_phone"](area.searchArea);
  node["communication:mobile_phone"](area.searchArea2);
  node["communication:mobile_phone"](area.searchArea3);
);
out body;
>;
out skel qt;
```
