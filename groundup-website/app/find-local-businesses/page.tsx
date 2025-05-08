"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Phone, Star, Filter, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import MapComponent from "@/components/map-component"

export default function FindLocalBusinesses() {
  const [location, setLocation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [radius, setRadius] = useState([5])

  // Mock business data
  const businesses = [
    {
      id: 1,
      name: "Green Corner Cafe",
      category: "Restaurant",
      rating: 4.7,
      reviews: 128,
      address: "123 Main St, Anytown",
      phone: "(555) 123-4567",
      distance: 0.3,
      lat: 40.7128,
      lng: -74.006,
      tags: ["Coffee", "Breakfast", "Lunch"],
    },
    {
      id: 2,
      name: "Urban Fitness Center",
      category: "Gym",
      rating: 4.5,
      reviews: 89,
      address: "456 Oak Ave, Anytown",
      phone: "(555) 987-6543",
      distance: 0.7,
      lat: 40.7138,
      lng: -74.009,
      tags: ["Fitness", "Yoga", "Personal Training"],
    },
    {
      id: 3,
      name: "Neighborhood Bookstore",
      category: "Retail",
      rating: 4.9,
      reviews: 210,
      address: "789 Elm St, Anytown",
      phone: "(555) 456-7890",
      distance: 1.2,
      lat: 40.7118,
      lng: -74.003,
      tags: ["Books", "Gifts", "Events"],
    },
    {
      id: 4,
      name: "Fresh Market Grocery",
      category: "Grocery",
      rating: 4.3,
      reviews: 156,
      address: "321 Pine Rd, Anytown",
      phone: "(555) 789-0123",
      distance: 1.5,
      lat: 40.7148,
      lng: -74.008,
      tags: ["Organic", "Local Produce", "Specialty Foods"],
    },
    {
      id: 5,
      name: "Community Hardware",
      category: "Retail",
      rating: 4.6,
      reviews: 78,
      address: "654 Cedar Ln, Anytown",
      phone: "(555) 234-5678",
      distance: 1.8,
      lat: 40.7108,
      lng: -74.002,
      tags: ["Tools", "Home Improvement", "Garden"],
    },
  ]

  // Get user's location on page load
  useEffect(() => {
    if (navigator.geolocation) {
      setIsLoading(true)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
          // In a real app, you would reverse geocode to get the address
          setLocation("Current Location")
          setIsLoading(false)
        },
        (error) => {
          console.error("Error getting location:", error)
          setIsLoading(false)
        },
      )
    }
  }, [])

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter))
    } else {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const clearFilters = () => {
    setActiveFilters([])
    setRadius([5])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-[#E05D35]">Find Local Businesses</h1>
          <p className="text-gray-600">Discover and support businesses in your neighborhood</p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto py-6 px-4">
        {/* Search and filter bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter size={16} />
                    Filters
                    {activeFilters.length > 0 && <Badge className="ml-1 bg-[#E05D35]">{activeFilters.length}</Badge>}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[300px] sm:w-[400px]">
                  <div className="py-4">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold">Filters</h3>
                      <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 text-[#E05D35]">
                        Clear all
                      </Button>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-3">Business Type</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {["Restaurant", "Retail", "Services", "Grocery", "Fitness", "Beauty"].map((category) => (
                            <div key={category} className="flex items-center space-x-2">
                              <Checkbox
                                id={`category-${category}`}
                                checked={activeFilters.includes(category)}
                                onCheckedChange={() => toggleFilter(category)}
                              />
                              <Label htmlFor={`category-${category}`}>{category}</Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Distance (miles)</h4>
                        <div className="px-2">
                          <Slider defaultValue={[5]} max={20} step={1} value={radius} onValueChange={setRadius} />
                          <div className="flex justify-between mt-2 text-sm text-gray-500">
                            <span>0 mi</span>
                            <span>{radius[0]} mi</span>
                            <span>20 mi</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Rating</h4>
                        <Select defaultValue="any">
                          <SelectTrigger>
                            <SelectValue placeholder="Any rating" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any rating</SelectItem>
                            <SelectItem value="4.5">4.5+ stars</SelectItem>
                            <SelectItem value="4">4+ stars</SelectItem>
                            <SelectItem value="3.5">3.5+ stars</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <Button className="bg-[#E05D35] hover:bg-[#c04d2b]">Search</Button>
            </div>
          </div>

          {/* Active filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {activeFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="flex items-center gap-1 px-3 py-1">
                  {filter}
                  <X size={14} className="cursor-pointer" onClick={() => toggleFilter(filter)} />
                </Badge>
              ))}
              {radius[0] !== 5 && (
                <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                  Within {radius[0]} miles
                  <X size={14} className="cursor-pointer" onClick={() => setRadius([5])} />
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Map and list view */}
        <Tabs defaultValue="map" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="map">Map View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden h-[600px]">
                <MapComponent userLocation={userLocation} businesses={businesses} />
              </div>

              <div className="space-y-4 h-[600px] overflow-y-auto pr-2">
                <h3 className="font-semibold text-lg">Nearby Businesses</h3>
                {businesses.map((business) => (
                  <BusinessCard key={business.id} business={business} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="list">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businesses.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function BusinessCard({ business }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{business.name}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Badge variant="outline" className="mr-2">
                  {business.category}
                </Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>{business.rating}</span>
                  <span className="mx-1">•</span>
                  <span>{business.reviews} reviews</span>
                </div>
              </div>
            </div>
            <Badge variant="secondary">{business.distance} mi</Badge>
          </div>

          <div className="mt-3 space-y-1 text-sm">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{business.address}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{business.phone}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mt-3">
            {business.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs bg-gray-50">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 p-3 bg-gray-50 flex justify-between">
          <Button variant="outline" size="sm" className="text-xs h-8">
            Get Directions
          </Button>
          <Button size="sm" className="text-xs h-8 bg-[#E05D35] hover:bg-[#c04d2b]">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
