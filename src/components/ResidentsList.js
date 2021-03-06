import { generalId } from '../helpers/locationHelpers'
import { Residents } from './Residents'

export const ResidentsList = ({charList}) => {

    return (
        <div className='listResident'>
            {
                charList?.map(el=>(
                    <Residents 
                        url={el}
                        key={generalId(el)}
                        />
                ))
            }
        </div>
    )
}
