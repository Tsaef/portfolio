import portfolioData from '@/data/portfolio.json'

export default function TileDPage() {

  const { colors } = portfolioData

  const rdmIndex = Math.floor(Math.random() * colors.length);
  const color = colors[rdmIndex];

  return (
    <div style={{ backgroundColor: color.secondary }} className="h-screen flex flex-col items-center justify-center p-8">
      <div style={{ backgroundColor: color.primary }} className="h-5/6 w-5/6 rounded-3xl p-5">
        <div style={{ backgroundColor: color.dark }} className="flex items-center justify-center rounded-3xl h-24">
          {rdmIndex}
        </div>
      </div>
    </div>
  )
}
