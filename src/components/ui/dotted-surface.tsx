"use client"

import React, { useRef, useEffect, useMemo } from "react"
import * as THREE from "three"

interface DottedSurfaceProps {
  dotColor?: string
  dotSize?: number
  gridWidth?: number
  gridHeight?: number
  waveAmplitude?: number
  waveFrequency?: number
  speed?: number
  opacityRange?: [number, number]
  className?: string
}

export function DottedSurface({
  dotColor = "#38bdf8",
  dotSize = 2.5,
  gridWidth = 60,
  gridHeight = 30,
  waveAmplitude = 1.2,
  waveFrequency = 0.3,
  speed = 0.8,
  opacityRange = [0.15, 0.6],
  className,
}: DottedSurfaceProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animFrameRef = useRef<number>(0)

  const color = useMemo(() => new THREE.Color(dotColor), [dotColor])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
    camera.position.set(0, 8, 18)
    camera.lookAt(0, 0, 0)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Points
    const count = gridWidth * gridHeight
    const positions = new Float32Array(count * 3)
    const alphas = new Float32Array(count)

    for (let ix = 0; ix < gridWidth; ix++) {
      for (let iy = 0; iy < gridHeight; iy++) {
        const i = ix * gridHeight + iy
        positions[i * 3] = (ix - gridWidth / 2) * 0.5
        positions[i * 3 + 1] = 0
        positions[i * 3 + 2] = (iy - gridHeight / 2) * 0.5
        alphas[i] = opacityRange[0]
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1))

    const vertexShader = `
      attribute float alpha;
      varying float vAlpha;
      void main() {
        vAlpha = alpha;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = ${dotSize.toFixed(1)} * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `

    const fragmentShader = `
      varying float vAlpha;
      uniform vec3 uColor;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        float a = smoothstep(0.5, 0.2, d) * vAlpha;
        gl_FragColor = vec4(uColor, a);
      }
    `

    const material = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: color } },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // Animate
    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime() * speed
      const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute
      const alphaAttr = geometry.getAttribute("alpha") as THREE.BufferAttribute

      for (let ix = 0; ix < gridWidth; ix++) {
        for (let iy = 0; iy < gridHeight; iy++) {
          const i = ix * gridHeight + iy
          const x = posAttr.getX(i)
          const z = posAttr.getZ(i)
          const wave = Math.sin(x * waveFrequency + t) * Math.cos(z * waveFrequency + t * 0.7) * waveAmplitude
          posAttr.setY(i, wave)
          const norm = (wave / waveAmplitude + 1) / 2
          alphaAttr.array[i] = opacityRange[0] + norm * (opacityRange[1] - opacityRange[0])
        }
      }

      posAttr.needsUpdate = true
      alphaAttr.needsUpdate = true
      renderer.render(scene, camera)
      animFrameRef.current = requestAnimationFrame(animate)
    }
    animate()

    // Resize
    const handleResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animFrameRef.current)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [color, dotSize, gridWidth, gridHeight, waveAmplitude, waveFrequency, speed, opacityRange])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  )
}
