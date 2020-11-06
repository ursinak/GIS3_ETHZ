require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/widgets/Search",
      "esri/widgets/BasemapToggle",
      "esri/widgets/Home",
      "esri/widgets/ScaleBar",
      "esri/widgets/Expand",
      "esri/widgets/LayerList"
    ], function(
      WebMap, MapView, Search, BasemapToggle,Home,   ScaleBar, Expand, LayerList
    ) {

      const map = new WebMap({
        portalItem: {
          id: "19a794f5ae034b1191878c8d0110f7c0"
        }
      });

      // Add the map to a MapView
      const view = new MapView({
        container: "viewDiv",
        map: map,

      });
  
        var searchWidget = new Search({
        view: view
      });

      // Add the search widget to the top right corner            of the view
      view.ui.add(searchWidget, {
        position: "top-right"
      });
  
  
      // 1 - Create basemap widget
        var toggle = new BasemapToggle({
          // 2 - Set properties
          view: view, // view that provides access to                         the map's 'topo' basemap
          nextBasemap: "topo" // allows for toggling to                        the 'topographic' basemap
        });
   
      // Add widget to the top right corner of                    the view
        view.ui.add(toggle, "top-right");
  
      //create home widget
        var homeWidget = new Home({
        view: view
       });

      // adds the home widget to the top left corner of           the MapView
        view.ui.add(homeWidget, "top-left");
      
       //create scale bar widget
        var scaleBar = new ScaleBar({
          view: view
       });
       
      //Add widget to the bottom left corner of the view
        view.ui.add(scaleBar, {
          position: "bottom-left"
        });
       
  
       //Create new expand-pane (box) to display some             html text
          var div = document.createElement('div')
          div.className = 'expand-pane'
        
        // create toggle Element "About the Map", which           can be opened and add text to be displayed
          var maptext = document.createElement('div')
          maptext.className = 'item'
          maptext.onclick = function() {
            this.classList.toggle('open')
          }
          maptext.innerHTML = `
        <div class="title">About the Map</div>
        <div class="content">
        The map shows the light pollution of Zurich. Further, it shows, that data collected by citizens can be included to a web map to provide a data source for places with no data or verify their hypothesis. This web app has been created with ArcGIS JS API. It includes a streetlamp layer to visualise a part of the light pollution's source. Further, it includes data collected with SenseBox, a tool every citizen can acquire to collect their own environmental data. The sensebox data was originally a point layer (layer including "raw" in its name), now aggregated to hexagons displaying the average lux value per hexbin.<br>
Two completely different colour schemata are chosen for the sensebox data since one layer was aquired at noon, the other at dawn. Hence, they show completely different value ranges.
        </div>
        `

          div.appendChild(maptext)
  
  // create toggle Element "About the Map", which           can be opened and add text to be displayed
          var vistext = document.createElement('div')
          vistext.className = 'item'
          vistext.onclick = function() {
            this.classList.toggle('open')
          }
          vistext.innerHTML = `
        <div class="title">About the Visualisation</div>
        <div class="content">
Two completely different colour schemata are chosen for the sensebox data since one layer was aquired at noon (Sensebox Forest), the other at dawn (Sensebox Street). Hence, they show completely different value ranges, which does not allow the same classification. To prevent false interpretations, two different colour schematas were chosen, even though the same attribute is displayed.
        </div>
        `

          div.appendChild(vistext)

      // create toggle Element "About us/me", which can         be opened and add text to be displayed
          var abouttext = document.createElement('div')
          abouttext.className = 'item'
          abouttext.onclick = function() {
            this.classList.toggle('open')
           }
          abouttext.innerHTML = `
        <div class="title">About Me</div>
        <div class="content">
        I am a master student at GIUZ* at Univesity of Zurich UZH, specializing in GIScience. In the range of GIS III Module at ETHZ I created this WebApp. The aim of this task was to create a responsive web client with some sensebox data and other (opensource) data layers.
<br><br><br><br>
* Geographical Institute Univesity Zurich

        </div>
        `

        div.appendChild(abouttext)

    // create toggle Element "Legal Notice", which can be opened and add text to be displayed
        var legalnotice = document.createElement('div')
        legalnotice.className = 'item'
        legalnotice.onclick = function() {
          this.classList.toggle('open')
        }
        legalnotice.innerHTML = `
        <div class="title">Legal Notice</div>
        <div class="content">
        ETH Zurich<br>
        Department of Civil, Environmental and Geomatic Engineering<br>
        Stefano-Franscini-Platz 5<br>
        Postfach 193<br>
        CH-8093 Zürich<br>
        Switzerland<br><br>

        Contact<br>
        E-Mail: boosu@student.ethz.ch<br><br>
        
        References<br>
        Kanton Zürich, 2018. Open Government Data, Beleuchtung. Available from: geoportal.zh.ch/opendata [15.12.2018].
  `

        div.appendChild(legalnotice)
  
  // create toggle Element "Privacy Notice", which can be opened and add text to be displayed
        var privacy = document.createElement('div')
        privacy.className = 'item'
        privacy.onclick = function() {
          this.classList.toggle('open')
        }
        privacy.innerHTML = `
        <div class="title">Privacy Notice</div>
        <div class="content">
        This web client does not collect any user data.
        </div>
  `

        div.appendChild(privacy)

      //Create expand widget for text
        var expand = new Expand({
           view: view,
           content: div
        })

        // Add Text-Expand Button to view
        view.ui.add(expand, 'top-left')


//Create layer list widget to turn on/off layer +          show legend
        layerList = new LayerList({
          container: document.createElement("div"),
          view: view,
          listItemCreatedFunction: function(event){
          const item = event.item;
                    if (item.layer.type != "group") { //                      don't show legend twice
                      item.panel = {
                        content: "legend",
                        open: true
                      };
        }}
        });
        
        //Allow users to show/ hide layer list
          layerListExpand = new Expand({
          expandIconClass: "esri-icon-layer-list", 
          view: view,
          content: layerList.domNode
        });
  
        //Add Expand Icon to the top left corner of the           view below the home button 
          view.ui.add(layerListExpand, "top-left");
  
  
          });