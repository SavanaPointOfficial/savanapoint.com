"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Toaster } from "@/components/ui/toaster"


export default function WaitlistPage() {
  const [email, setEmail] = useState('')


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email)
    
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              Master English with Englishfixe
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Join our waitlist and be the first to experience a revolutionary way to learn English. Tailored courses, interactive lessons, and expert instructors await you!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="sr-only">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                Join the Waitlist
              </Button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="https://images.pexels.com/photos/5331211/pexels-photo-5331211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Students learning English"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Englishfixe?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Personalized Learning"
              description="Our AI-powered platform adapts to your learning style and pace."
              icon="🎯"
            />
            <FeatureCard
              title="Expert Instructors"
              description="Learn from native speakers and certified English teachers."
              icon="👩‍🏫"
            />
            <FeatureCard
              title="Interactive Lessons"
              description="Engage with fun, interactive content that makes learning enjoyable."
              icon="🖥️"
            />
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  )
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}