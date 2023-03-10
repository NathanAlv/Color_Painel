import { Alpha, Blue, Green, Red, ViewPanel} from './styles'

type Props = {
    red: number
    green: number
    blue: number
    alpha: number
  }


const Color = ({ red,green,blue,alpha }: Props) => {
  return (
    <ViewPanel
    

    style={{backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`}}

     

    
    
        

    
      
      
    
    
      
      
    />
  )
}

export default Color