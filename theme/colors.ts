
export const colors = {
  companyPurple: '#645484',
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)"
}

export type ColorKeys = keyof typeof colors
