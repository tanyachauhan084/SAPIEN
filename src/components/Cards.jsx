
import Section from './Section'

const Cards = () => {
  return (
<div>
    <div className='flex justify-evenly'>
<Section data="AI QUIZ GENERATIOR"/>
<Section data="PERSONALISED EXPLINATIONS"/>
<Section data="ADAPTIVE LEARNING PATHS"/>

    </div>

       <div className='flex justify-evenly'>
<Section data="PROGRESS HEAPMAPS"/>
<Section data="BITE-SIZED DAILY REVIEW"/>
<Section data="TEACHER MODE"/>

    </div>

</div>
  )
}

export default Cards