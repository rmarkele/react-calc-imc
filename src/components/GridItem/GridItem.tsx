import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImg from '../../assets/up.png';
import downImg from '../../assets/down.png';

type Props ={
    item: Level
}

export const GridItem = ({item}: Props) => {
    return (
        <div 
        className={styles.main} 
        style={{backgroundColor: item.color}}
        >
            <div className={styles.gridIcon}>
                <img src={item.icon=='up'? upImg: downImg} alt="" width="30"/>
            </div>
            <h1>{item.title}</h1> 
            

            {typeof item.imc !== 'undefined' && <h2>Seu IMC é {item.imc} kg/m²</h2>}

            <h3>IMC entre <strong>{item.imc_range[0]}</strong> e <strong>{item.imc_range[1]} kg/m²</strong></h3>
        </div>
    )
}