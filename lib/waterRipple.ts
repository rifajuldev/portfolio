/**
 * Creates a smooth water drop ripple animation on a full-screen canvas
 * originating from (x, y) center of theme switcher and spreading full page in one clean wave.
 */
export interface WaterDropOptions {
  x: number
  y: number
  maxRadius: number
  isDarkToLight: boolean
  duration?: number
}

export function triggerWaterDropWave({ x, y, maxRadius, isDarkToLight, duration = 850 }: WaterDropOptions) {
  if (typeof window === 'undefined') return

  const canvas = document.createElement('canvas')
  canvas.style.position = 'fixed'
  canvas.style.top = '0'
  canvas.style.left = '0'
  canvas.style.width = '100vw'
  canvas.style.height = '100vh'
  canvas.style.pointerEvents = 'none'
  canvas.style.zIndex = '999999'

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const width = window.innerWidth
  const height = window.innerHeight
  canvas.width = width * dpr
  canvas.height = height * dpr

  document.body.appendChild(canvas)
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    canvas.remove()
    return
  }

  ctx.scale(dpr, dpr)
  const startTime = performance.now()

  function cubicEaseOut(t: number): number {
    return 1 - Math.pow(1 - t, 3.2)
  }

  function render(now: number) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = cubicEaseOut(progress)
    const currentRadius = easedProgress * maxRadius

    ctx!.clearRect(0, 0, width, height)

    // 1. Initial Drop Impact Splash Ring at switcher center (0ms to 200ms)
    if (elapsed < 200) {
      const dropProgress = elapsed / 200
      const dropRadius = dropProgress * 28
      const dropAlpha = (1 - dropProgress) * 0.8

      ctx!.save()
      ctx!.beginPath()
      ctx!.arc(x, y, Math.max(0, dropRadius), 0, Math.PI * 2)
      ctx!.strokeStyle = `rgba(255, 255, 255, ${dropAlpha})`
      ctx!.lineWidth = Math.max(1, 3 * (1 - dropProgress))
      ctx!.stroke()
      ctx!.restore()
    }

    // 2. Single Primary Water Drop Wave Front (One clean wave)
    const waveAlpha = (1 - progress * 0.5) * 0.75
    const waveWidth = Math.max(6, 16 * (1 - progress * 0.3))

    ctx!.save()

    // Single clean liquid refraction wave ring
    ctx!.beginPath()
    ctx!.arc(x, y, Math.max(0, currentRadius), 0, Math.PI * 2)
    ctx!.strokeStyle = isDarkToLight ? `rgba(255, 255, 255, ${waveAlpha})` : `rgba(255, 255, 255, ${waveAlpha * 0.8})`
    ctx!.lineWidth = waveWidth
    ctx!.stroke()

    // Outer subtle shadow for liquid edge depth
    ctx!.beginPath()
    ctx!.arc(x, y, Math.max(0, currentRadius + waveWidth / 2 + 1), 0, Math.PI * 2)
    ctx!.strokeStyle = `rgba(0, 0, 0, ${waveAlpha * 0.15})`
    ctx!.lineWidth = 2
    ctx!.stroke()

    ctx!.restore()

    if (progress < 1) {
      requestAnimationFrame(render)
    } else {
      canvas.remove()
    }
  }

  requestAnimationFrame(render)
}
