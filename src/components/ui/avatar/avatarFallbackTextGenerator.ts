/**
 * Generates the fallback text for an avatar based on the provided avatar fallback text and username.
 *
 * @param {string | undefined} avatarFallbackText - The fallback text for the avatar. If not provided, it will be generated based on the user name.
 * @param {string | undefined} userName - The user name used to generate the fallback text if the avatar fallback text is not provided.
 * @return {string | undefined} The generated fallback text for the avatar. If both the avatar fallback text and username are not provided, an empty string is returned.
 */

export const getAvatarFallbackText = (
  avatarFallbackText: string | undefined,
  userName: string | undefined
): string | undefined => {
  let result = avatarFallbackText

  if (!result && userName) {
    const nameParts = userName.split(' ')

    if (nameParts.length > 1) {
      result = nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase()
    } else {
      result = userName.slice(0, 2).toUpperCase().trim()
    }
  }

  return result
}
