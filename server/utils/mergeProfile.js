const mergeProfile = (existingProfile, extractedProfile) => {
  const updatedProfile = { ...existingProfile }

  const keys = Object.keys(extractedProfile)

  for (const key of keys) {
    const newValue = extractedProfile[key]
    if (newValue !== null) {
      updatedProfile[key] = newValue
    }
  }

  return updatedProfile
}

export default mergeProfile
