import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Carpil Ride',
  description: 'testing description',
  twitter: {
    title: 'Carpil Ride',
    description: 'testing description',
    site: 'https://dev.carpil.app'
  },
  openGraph: {
    title: 'Carpil Ride',
    description: 'testing description',
    url: 'https://dev.carpil.app',
    type: 'website'
  }
}

export default function DetailsPage() {
  return (
    <div>
      <span>testing</span>
    </div>
  )
}