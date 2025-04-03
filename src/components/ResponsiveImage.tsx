interface Props {
  className?: string
  src: string
  alt: string
}

const sizes = [165, 360, 533, 720, 940, 1066]

export function ResponsiveImage({ src, alt, ...props }: Props) {
  const resizes = sizes
    .map((size) => {
      return `${src}&width=${size} ${size}w`
    })
    .concat(`${src} 4096w`)

  return (
    <img
      srcSet={resizes.join(',')}
      src={resizes[0]}
      sizes="(min-width: 1200px) 267px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)"
      alt={alt}
      loading="lazy"
      width="4096"
      height="4096"
      {...props}
    />
  )
}
