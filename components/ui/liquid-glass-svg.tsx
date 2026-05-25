export function LiquidGlassSVG() {
  return (
    <svg
      style={{ position: "absolute", width: 0, height: 0 }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Card filter: stronger refraction, color shift */}
        <filter id="liquid-glass-card" x="0" y="0" width="100%" height="100%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blurred_source" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.012"
            numOctaves="2"
            seed="3"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="4" result="soft_noise" />
          <feDisplacementMap
            in="blurred_source"
            in2="soft_noise"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
            result="refracted"
          />
          <feColorMatrix in="refracted" type="saturate" values="1.4" result="saturated" />
          <feComposite in="saturated" in2="SourceGraphic" operator="atop" />
        </filter>

        {/* Nav filter: lighter touch */}
        <filter id="liquid-glass-nav" x="0" y="0" width="100%" height="100%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01"
            numOctaves="2"
            seed="5"
            result="n"
          />
          <feGaussianBlur in="n" stdDeviation="3" result="sn" />
          <feDisplacementMap
            in="blur"
            in2="sn"
            scale="10"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
