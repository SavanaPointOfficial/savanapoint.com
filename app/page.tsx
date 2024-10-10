'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Link, Zap, Shield, Globe } from "lucide-react"

export default function LinkShortenerIntro() {
  const [url, setUrl] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShortenedUrl(`https://f1y.li/${Math.random().toString(36).substr(2, 6)}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Shorten Your Links, Expand Your Reach
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Create short, powerful links that drive more clicks and boost your online presence.
          </p>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Shorten Your URL</CardTitle>
            <CardDescription>Enter a long URL to get a short, shareable link</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                type="url"
                placeholder="Enter your long URL here"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="flex-grow"
              />
              <Button type="submit">Shorten</Button>
            </form>
          </CardContent>
          {shortenedUrl && (
            <CardFooter>
              <div className="w-full text-center">
                <p className="text-sm text-gray-500 mb-2">Your shortened URL:</p>
                <a
                  href={shortenedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {shortenedUrl}
                </a>
              </div>
            </CardFooter>
          )}
        </Card>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-3 inline-block mb-4">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Create short links in seconds and share them instantly.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-3 inline-block mb-4">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Your links are safe with us, with 99.9% uptime guaranteed.</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-3 inline-block mb-4">
              <Globe className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Analytics Included</h3>
            <p className="text-gray-600">Track clicks and gain insights into your audience.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-6">Join thousands of satisfied users and start shortening your links today.</p>
          <Button size="lg" className="px-8">
            Sign Up Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}