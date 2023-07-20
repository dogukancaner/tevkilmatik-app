import Image from 'next/image'

import { Card, Comment, Hero, Stats } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-10 padding-x padding-y max-width" id="discover">
        <h1 className="text-4xl font-extrabold mb-2">İstatiklerimiz</h1>
        <Stats />
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Bizimle ve Meslektaşlarınızla Tanışma Fırsatı Edinin</h1>
          <p>TevkilMatik ile tecrübe edinin ve iş çevrenizi genişletin.</p>
          <Card/>
        </div>
        <Comment/>
      </div>
    </main>
  )
}
