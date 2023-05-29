import React, { useState, useRef, useEffect } from "react";
import MapSectionCard from "../../cards/map-section-card";
import PropertyCard from "../../cards/property-card";
import classes from "./map.module.css";
import drop_down_icon from "../../../public/assets/icons/drop_down.svg";
import Link from "next/link";

import near_me_pin from "../../../public/assets/icons/near_me_pin.svg";
import search_icon from "../../../public/assets/icons/search_icon.svg";

import grey_drop_down from "../../../public/assets/icons/grey_drop_down.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Next from "../../reactSlickButtons/next";
import Prev from "../../reactSlickButtons/prev";

import erase from "../../../public/assets/icons/erase.svg";
import draw from "../../../public/assets/icons/draw.svg";

import pin_red from "../../../public/assets/icons/pin_red.svg";
import pin_blue from "../../../public/assets/icons/pin_blue.svg";

import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import {
  Autocomplete,
  DrawingManager,
  GoogleMap,
  Polygon,
  useJsApiLoader,
} from "@react-google-maps/api";
import MapComponent from "./mapDrawable";

function Map({ refInstance }) {
  const mapApiKey = process.env.NEXT_PUBLIC_MAP_API;
  const libraries = ["places", "drawing"];

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: mapApiKey ? mapApiKey : "",
    libraries,
  });

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 1266,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 945,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
    ],
  };

  const onLoad = (drawingManager) => {
    console.log(drawingManager);
  };

  const onPolygonComplete = (polygon) => {
    console.log(polygon);
  };

  const onLoadDrawingManager = (drawingManager) => {
    drawingManagerRef.current = drawingManager;
  };

  const mapRef = useRef();
  const polygonRefs = useRef([]);
  const activePolygonIndex = useRef();
  const autocompleteRef = useRef();
  const drawingManagerRef = useRef();

  const [polygons, setPolygons] = useState([
    [
      { lat: 28.630818281028954, lng: 79.80954378826904 },
      { lat: 28.62362346815063, lng: 79.80272024853515 },
      { lat: 28.623585797675588, lng: 79.81490820629882 },
      { lat: 28.630818281028954, lng: 79.80954378826904 },
    ],
    [
      { lat: 28.63130796240949, lng: 79.8170110581665 },
      { lat: 28.623623468150655, lng: 79.81705397351074 },
      { lat: 28.623623468150655, lng: 79.82619494183349 },
      { lat: 28.6313832978037, lng: 79.82619494183349 },
      { lat: 28.63130796240949, lng: 79.8170110581665 },
    ],
  ]);

  const defaultCenter = {
    lat: 28.626137,
    lng: 79.821603,
  };
  const [center, setCenter] = useState(defaultCenter);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const autocompleteStyle = {
    boxSizing: "border-box",
    border: "1px solid transparent",
    width: "240px",
    height: "38px",
    padding: "0 12px",
    borderRadius: "3px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
    fontSize: "14px",
    outline: "none",
    textOverflow: "ellipses",
    position: "absolute",
    right: "8%",
    top: "11px",
    marginLeft: "-120px",
  };

  const polygonOptions = {
    fillOpacity: 0.3,
    fillColor: "#ff0000",
    strokeColor: "#ff0000",
    strokeWeight: 2,
    draggable: true,
    editable: true,
  };

  const drawingManagerOptions = {
    polygonOptions: polygonOptions,
    drawingControl: true,
  };

  const onLoadMap = (map) => {
    mapRef.current = map;
  };

  const onLoadPolygon = (polygon, index) => {
    polygonRefs.current[index] = polygon;
  };

  const onClickPolygon = (index) => {
    activePolygonIndex.current = index;
  };

  const onLoadAutocomplete = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    const { geometry } = autocompleteRef.current.getPlace();
    const bounds = new window.google.maps.LatLngBounds();
    if (geometry.viewport) {
      bounds.union(geometry.viewport);
    } else {
      bounds.extend(geometry.location);
    }
    mapRef.current.fitBounds(bounds);
  };

  const onOverlayComplete = ($overlayEvent) => {
    drawingManagerRef.current.setDrawingMode(null);
    if ($overlayEvent.type === window.google.maps.drawing.OverlayType.POLYGON) {
      const newPolygon = $overlayEvent.overlay
        .getPath()
        .getArray()
        .map((latLng) => ({ lat: latLng.lat(), lng: latLng.lng() }));

      // start and end point should be same for valid geojson
      const startPoint = newPolygon[0];
      newPolygon.push(startPoint);
      $overlayEvent.overlay?.setMap(null);
      setPolygons([...polygons, newPolygon]);
    }
  };

  const onDeleteDrawing = () => {
    const filtered = polygons.filter(
      (polygon, index) => index !== activePolygonIndex.current
    );
    setPolygons(filtered);
  };

  const onEditPolygon = (index) => {
    const polygonRef = polygonRefs.current[index];
    if (polygonRef) {
      const coordinates = polygonRef
        .getPath()
        .getArray()
        .map((latLng) => ({ lat: latLng.lat(), lng: latLng.lng() }));

      const allPolygons = [...polygons];
      allPolygons[index] = coordinates;
      setPolygons(allPolygons);
    }
  };

  const [showMap, setShowMap] = useState(true);

  // useEffect(() => {
  //   setShowMap(false);
  // }, []);

  return (
    <div className={classes.wrapper}>
      <ReactTooltip
        style={{ zIndex: "1000" }}
        anchorId="near-me"
        place="top"
        content="search near me"
      />
      <div className={classes.main_container}>
        <div ref={refInstance} className={classes.map_container}>
          <div className={classes.filter_bar_container}>
            <div className={classes.filter_bar}>
              <div
                style={{ minWidth: "260px" }}
                className="select_input_container_2_icons"
              >
                <input
                  placeholder="Address, Neighborhood or ZIP"
                  className={classes.input_field}
                />
                <img
                  id="near-me"
                  className="input_icon_1"
                  src={near_me_pin.src}
                />
                <img className="input_icon_2" src={search_icon.src} />
              </div>

              <div
                style={{ minWidth: "75px" }}
                className="select_input_container"
              >
                <select className={classes.input_field}>
                  <option>Buy</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div
                style={{ minWidth: "140px" }}
                className="select_input_container"
              >
                <select className={classes.input_field}>
                  <option>Property Type</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div
                style={{ minWidth: "120px" }}
                className="select_input_container"
              >
                <select className={classes.input_field}>
                  <option>Area (Sqt)</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div
                style={{ minWidth: "90px" }}
                className="select_input_container"
              >
                <select className={classes.input_field}>
                  <option>Price</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div
                style={{ minWidth: "80px" }}
                className="select_input_container"
              >
                <select className={classes.input_field}>
                  <option>Beds</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div
                style={{ minWidth: "90px" }}
                className="select_input_container"
              >
                <select className={classes.input_field}>
                  <option>Baths</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>

              <div
                style={{ minWidth: "145px" }}
                className="select_input_container"
              >
                <select className={classes.input_field}>
                  <option>More Options</option>
                </select>
                <img src={drop_down_icon.src} />
              </div>
            </div>

            <div className="btn">
              <p>SAVE SEARCH</p>
            </div>
          </div>

          <div className={classes.map_property_section}>
            <div className={classes.map_section}>
              <div className={classes.map_btn_container}>
                <div className={classes.btn}>
                  <img src={erase.src} />
                  <p>Erase</p>
                </div>

                <div className={classes.btn}>
                  <img src={draw.src} />
                  <p>Draw</p>
                </div>
              </div>
              <MapComponent />
            </div>
            <div className={classes.properties_section_container}>
              <div className={classes.property_title_bar}>
                <h2>Karachi, Defence DHA Houses for Sale</h2>
                <div className="select_input_container">
                  <select className={classes.sort_by_input}>
                    <option>Popular</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Lowest Price</option>
                    <option>Highest Price</option>
                  </select>
                  <img
                    style={{ opacity: 0.5, width: "14px" }}
                    src={grey_drop_down.src}
                  />
                </div>
              </div>

              <div className={classes.properties_section}>
                <MapSectionCard />
                <MapSectionCard />
                <MapSectionCard />
                <MapSectionCard />
                <MapSectionCard />
                <MapSectionCard />
                <MapSectionCard />
                <MapSectionCard />
                <MapSectionCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.recently_viewed_container}>
        <div className={classes.recently_viewed_content}>
          <div className="heading_container">
            <h2 className="landing_page_heading">Recently Viewed</h2>
            <div className="btn">
              <p>DISCOVER MORE</p>
            </div>
          </div>
          <div className={classes.recently_viewed_card_container}>
            <Slider arrows={true} {...settings}>
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
