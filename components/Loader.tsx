import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html
      center
      prepend
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="w-20 h-20 border-4 border-orange-600 border-t-orange-950 rounded-full animate-spin"></div>
    </Html>
  )
}

export default Loader
