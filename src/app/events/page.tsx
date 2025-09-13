import ChurchFooter from '@/components/ChurchFooter'
import ChurchHeader from '@/components/ChurchHeader'
import EventsPage from '@/components/evennement-ui/evennement-ui'
import React from 'react'

export default function page() {
  return (
    <div>

        <ChurchHeader />
        <EventsPage />
        <ChurchFooter />
    </div>
  )
}
