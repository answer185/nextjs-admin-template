"use client"
import ContentSection from '../setting/components/content-section'
import ProfileForm from './profile-form'

export default function SettingsAccount() {
  return (
    <ContentSection
      title='Profile'
      desc='This is how others will see you on the site.'
    >
      <ProfileForm />
    </ContentSection>
  )
}
