This web map shows how the light pollution of the city of Zurich can be assessed with Sensebox data. The map includes a streetlight layer to show a source of the light pollution. Further, this streetlamp dataset can verify the values collected with Sensebox. Further, the webmap includes two different Sensebox datasets: one path follows the street and the other path includes data collected during a walk through a forest near ETHZ Hönggerberg. I aggregated the Sensebox data since displaying all the data points makes no sense. Hence, I aggregated the data in a hexbin raster displaying the average lux value for each cell. All the original data points are also added to the map. However, these layers are turned off when calling the map. The original data points were collected every 3s while walking from ETH Hönggerberg - Zürich Affoltern (or vice versa). The walk through the forest took place between 14:10 and 14:30. The walk along the street took place between 16:30 and 17:00. Hence, completely different values for both walks were measured. The same classification schema is not possible for these two datasets because the values for the walk through the forest start at 235, the values for the walk along the street end at 97. Hence, two completely different colour schemata were chosen in order to prevent wrong interpretations.
However, the Sensebox values might be too high/low because the walks were not necessarily taken when the streetlamps were on.

The webmap contains various widgets to explore the map:
	* Basemap toggle: Allows the user to switch the basemap from "dark" to 		"topographic"
	* Zoom buttons: Zooms the map
	* Home button: when zooming/ panning, the Sensebox data might not be visible 			anymore. This button lets the user go back to the initial map view.
	* HTML Textbox: Includes a description of the map and visualisation, a about me 		section, a legal notice and privacy notice.
	* Layerlist including legend: Allows the user to show/ hide a certain layer and 	also display the layer's legend.
	* Search: Let's the user search some place.
	* Scale: The scale of the current map view.

The webmap was written in JavaScript using the ArcGIS JS API and Codepen.io. You can find the pen at https://codepen.io/ursinak/pen/BvLaVX.