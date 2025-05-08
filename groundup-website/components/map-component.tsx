"use client"

import { useEffect, useRef, useState } from "react"
import { Loader } from "@googlemaps/js-api-loader"

interface MapComponentProps {
  userLocation: { lat: number; lng: number } | null
  businesses: any[]
}

export default function MapComponent({ userLocation, businesses }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [markers, setMarkers] = useState<any[]>([])

  useEffect(() => {
    // Load Google Maps API
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
      version: "weekly",
      libraries: ["places"],
    })

    let mapInstance: any
    let mapInfoWindow: any

    loader
      .load()
      .then(() => {
        if (mapRef.current) {
          // Initialize map
          mapInstance = new window.google.maps.Map(mapRef.current, {
            center: userLocation || { lat: 40.7128, lng: -74.006 }, // Default to NYC if no location
            zoom: 14,
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            zoomControl: true,
            zoomControlOptions: {
              position: window.google.maps.ControlPosition.RIGHT_TOP,
            },
          })

          // Create info window
          mapInfoWindow = new window.google.maps.InfoWindow()

          // Add user location marker if available
          if (userLocation) {
            new window.google.maps.Marker({
              position: userLocation,
              map: mapInstance,
              icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: "#4285F4",
                fillOpacity: 1,
                strokeColor: "#ffffff",
                strokeWeight: 2,
              },
              title: "Your Location",
            })
          }

          // Add markers for each business
          const newMarkers: any[] = []
          businesses.forEach((business, index) => {
            const marker = new window.google.maps.Marker({
              position: { lat: business.lat, lng: business.lng },
              map: mapInstance,
              title: business.name,
              label: {
                text: (index + 1).toString(),
                color: "white",
              },
              animation: window.google.maps.Animation.DROP,
            })

            // Create info window content
            const content = `
            <div class="p-2 max-w-[250px]">
              <h3 class="font-semibold text-base">${business.name}</h3>
              <div class="text-sm text-gray-600 mt-1">${business.category} • ${business.rating} ★</div>
              <div class="text-sm mt-1">${business.address}</div>
              <div class="text-sm text-gray-500 mt-1">${business.distance} mi away</div>
            </div>
          `

            // Add click listener to show info window
            marker.addListener("click", () => {
              mapInfoWindow.setContent(content)
              mapInfoWindow.open(mapInstance, marker)
            })

            newMarkers.push(marker)
          })

          setMarkers(newMarkers)

          // Fit bounds to include all markers
          if (newMarkers.length > 0) {
            const bounds = new window.google.maps.LatLngBounds()
            if (userLocation) bounds.extend(userLocation)
            newMarkers.forEach((marker) => bounds.extend(marker.getPosition()))
            mapInstance.fitBounds(bounds)
          }

          setMapLoaded(true)
        }
      })
      .catch((err) => {
        console.error("Error loading Google Maps:", err)
      })

    return () => {
      // Clean up markers when component unmounts
      if (markers.length) {
        markers.forEach((marker) => marker.setMap(null))
      }
    }
  }, [userLocation, businesses])

  return (
    <div ref={mapRef} className="w-full h-full">
      {!mapLoaded && (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E05D35] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  )
}
