const mapString = {"orderedGeometries":[{"type":"Feature","properties":{"description":"PHA+0JDRgNC60LAg0J/QsNGA0LrQsCDQk9C+0YDRjNC60L7Qs9C+PC9wPg==","strokeColor":"#4db725","strokeWidth":2,"strokeOpacity":1,"fillColor":"#65d639","fillOpacity":0.5,"zIndex":1},"geometry":{"type":"Polygon","coordinates":[[[37.604694,55.73152],[37.604393,55.731563],[37.604071,55.731288],[37.602805,55.731735],[37.603042,55.731955],[37.602865,55.73214],[37.602966,55.732309],[37.603959,55.731961],[37.605,55.731632],[37.604694,55.73152]]]},"id":1152},{"type":"Feature","properties":{"description":"PHA+0JTQuNC30LDQudC9INC30LDQstC+0LQ8L3A+","strokeColor":"#4db725","strokeWidth":2,"strokeOpacity":1,"fillColor":"#65d639","fillOpacity":0.5,"zIndex":2},"geometry":{"type":"Polygon","coordinates":[[[37.584658,55.80404],[37.586358,55.804166],[37.585784,55.806042],[37.584137,55.805885],[37.584658,55.80404]]]},"id":3159},{"type":"Feature","properties":{"description":"PHA+0JDRgNGCINCf0LvQtdC5PC9wPg==","strokeColor":"#4db725","strokeWidth":2,"strokeOpacity":1,"fillColor":"#65d639","fillOpacity":0.5,"zIndex":3},"geometry":{"type":"Polygon","coordinates":[[[37.670209,55.751125],[37.672355,55.752652],[37.666841,55.753498],[37.666218,55.753057],[37.670209,55.751125]]]},"id":4411},{"type":"Feature","properties":{"description":"PHA+0JDRgNC60LAg0JLQlNCd0KU8L3A+","strokeColor":"#4db725","strokeWidth":2,"strokeOpacity":1,"fillColor":"#65d639","fillOpacity":0.5,"zIndex":4},"geometry":{"type":"Polygon","coordinates":[[[37.637744,55.824864],[37.640222,55.826124],[37.638474,55.827034],[37.636156,55.825768],[37.637744,55.824864]]]},"id":6023},{"type":"Feature","properties":{"description":"PHA+0J/QsNCy0LjQu9GM0L7QvSDihJYxINCS0JTQndClPC9wPg==","strokeColor":"#4db725","strokeWidth":2,"strokeOpacity":1,"fillColor":"#65d639","fillOpacity":0.5,"zIndex":5},"geometry":{"type":"Polygon","coordinates":[[[37.633764,55.827853],[37.635169,55.828583],[37.633377,55.829631],[37.632036,55.828944],[37.633764,55.827853]]]},"id":6419},{"type":"Feature","properties":{"description":"PHA+0KTQvtC90YLQsNC9INCU0YDRg9C20LHQsCDQndCw0YDQvtC00L7QsjwvcD4=","strokeColor":"#4db725","strokeWidth":2,"strokeOpacity":1,"fillColor":"#65d639","fillOpacity":0.5,"zIndex":6},"geometry":{"type":"Polygon","coordinates":[[[37.631425,55.82895],[37.631972,55.828974],[37.633388,55.829679],[37.63342,55.830366],[37.632691,55.830722],[37.631242,55.830674],[37.630384,55.830228],[37.630148,55.829824],[37.630148,55.829414],[37.630341,55.829107],[37.630899,55.828986],[37.631425,55.82895]]]},"id":7049},{"type":"Feature","properties":{"description":"PHA+0KXQtNC10LHQvtGF0LDQstC+0LQg4oSWOTwvcD4=","strokeColor":"#4db725","strokeWidth":2,"strokeOpacity":1,"fillColor":"#7f4fe3","fillOpacity":0.5,"zIndex":7},"geometry":{"type":"Polygon","coordinates":[[[37.58411,55.805918],[37.585827,55.806093],[37.585516,55.806485],[37.584894,55.807914],[37.584282,55.807853],[37.584196,55.808197],[37.584003,55.808191],[37.584014,55.807775],[37.583896,55.807582],[37.584068,55.807474],[37.583789,55.80707],[37.583778,55.806925],[37.583617,55.806684],[37.583917,55.806587],[37.58411,55.805918]]]},"id":7902},{"type":"Feature","properties":{"description":"PHA+0JzRg9C30LXQuSDQn9C+0LvQuNGC0LXRhTwvcD4=","strokeColor":"#4db725","strokeWidth":2,"strokeOpacity":1,"fillColor":"#65d639","fillOpacity":0.5,"zIndex":8},"geometry":{"type":"Polygon","coordinates":[[[37.629901,55.756341],[37.631854,55.757181],[37.628152,55.759632],[37.626339,55.758895],[37.629901,55.756341]]]},"id":9205}],"mapPosition":{"lat":55.75795328717685,"lon":37.63167679309846,"zoom":17},"isWheelZoomEnabled":true};

const map = new mapgl.Map("container", {
  key: "042b5b75-f847-4f2a-b695-b5f58adc9dfd",
  style: '76b19b98-4ba1-4f4d-b5ee-3ca1f41bf308',
  center: ["37.6173", "55.7558"],
  zoom: 13,
});

// https://docs.2gis.com/ru/mapgl/examples/geometries

function findBoundaries(points) {
  let northEast = [...points[0]];
  let southWest = [...points[0]];

  for (let point of points) {
    console.log(point);
    if (point[0] > northEast[0]) {
      northEast[0] = point[0];
    }

    if (point[1] > northEast[1]) {
      northEast[1] = point[1];
    }

    if (point[0] < southWest[0]) {
      southWest[0] = point[0];
    }

    if (point[1] < southWest[1]) {
      southWest[1] = point[1];
    }
  }

  return { northEast, southWest };
}


const PADDING = 150;

function focusOnFigure(figure) {
// https://docs.2gis.com/ru/mapgl/examples/fitbounds
  map.fitBounds(findBoundaries(figure), {
    padding: {
      top: PADDING,
      left: PADDING,
      bottom: PADDING,
      right: PADDING,
    },
  });
}

function focusGoat() {
  focusOnFigure(goat.options.coordinates[0]);
}

function focusDavid() {
  focusOnFigure(davidStar.options.coordinates[0]);
}

function focusPolygon() {
  focusOnFigure(polygon.options.coordinates[0]);
}

function focusFiveStar() {
  focusOnFigure(someStar.options.coordinates);
}

function parseGeometriesString(geometries) {
  console.log(geometries);
  return geometries.orderedGeometries.map((geom) => {
    // https://snipp.ru/jquery/base64-js
    const description = decodeURIComponent(
      escape(atob(geom.properties.description))
    );
    console.log(description);

    const coordinates = geom.geometry.coordinates;
    const fillColor = geom.properties.fillColor;
    const fillOpacity = geom.properties.fillOpacity;
    if (geom.geometry.type === "Polygon") {
      const newPolygon = new mapgl.Polygon(map, {
        coordinates,
        fillColor,
        fillOpacity,
      });
      // handgle popup

      newPolygon.on("click", (e) => {
        const popup = new mapgl.HtmlMarker(map, {
          coordinates: e.lngLat,
          html: `<div class="popup">
          <div class="popup-content">
              ${description}
          </div>
          <div class="popup-tip"></div>
      </div>`,
        });

        map.on("click", () => {
          popup.getContent().style.display = "none";
        });
      });
      return {
        description,
        focus: () => {
          focusOnFigure(coordinates[0]);
        },
      };
    }
  });
}

const focusButtons = parseGeometriesString(mapString);

const focusButtonsEl = document.getElementById("focusButtons");

focusButtons.forEach((bt) => {
  const htmlBt = document.createElement("button");
  htmlBt.innerHTML = bt.description;
  htmlBt.onclick = bt.focus;
  focusButtonsEl.appendChild(htmlBt);
});
