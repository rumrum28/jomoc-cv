const renderContent: any = {
  1: <h1>1</h1>,
  2: <h1>2</h1>,
  3: <h1>3</h1>,
  4: <h1>4</h1>,
}

const InfoBox = ({
  text,
  link,
  buttonText,
}: {
  text: string
  link: string
  buttonText: string
}) => {}

function HeroInfo({ currentStage }: { currentStage: number }) {
  return renderContent[currentStage] || null
}

export default HeroInfo
