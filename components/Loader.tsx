import { Html } from '@react-three/drei'

const Loader = () => {
  //make a dreie loader component with tailwindcss
  return (
    <Html>
      <div className="absolute w-40 h-40 top-0 left-0 right-0 bottom-0 flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
        <div className="w-40 h-40 border-8 border-blue-100 border-t-blue-500 rounded-full animate-spin" />
      </div>
    </Html>
  )
}

export default Loader
