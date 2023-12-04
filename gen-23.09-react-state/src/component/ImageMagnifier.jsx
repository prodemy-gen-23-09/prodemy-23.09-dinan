import { useState } from "react"

const ImageMagnifier = ({ imgUrl }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [showMagnifier, setShowMagnifier] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const handleMouseHover = (event) => {
    // the getBoundingClientRect() method digunakan untuk mendapatkan dimensions dan position dari image element yang ditriger
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect()
    const x = ((event.pageX - left) / width) * 100
    const y = ((event.pageY - top) / height) * 100
    setPosition({ x, y })
    setCursorPosition({ x: event.pageX - left, y: event.pageY - top })
    console.log(event.pageX, event.pageY)
  }
  return (
    <div className="relative" onMouseEnter={() => setShowMagnifier(true)} onMouseLeave={() => setShowMagnifier(false)} onMouseMove={handleMouseHover}>
      <img className="w-[370px]" src={imgUrl} alt="gambar product" />
      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            left: `${cursorPosition.x - 100}px`,
            top: `${cursorPosition.y - 100}px`,
            pointerEvents: "none",
          }}
        >
          <div
            className="w-52 h-52 border-2 border-black"
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
            }}
          />
        </div>
      )}
    </div>
  )
}

export default ImageMagnifier
