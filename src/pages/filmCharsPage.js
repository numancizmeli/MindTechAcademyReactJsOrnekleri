import FilmChar from "../components/filmChar"
import { charData } from "../data/charData"
const FilmCharsPage = () => {

    const showMoreDetails = () => {
        alert('daha fazla detay')
    }


    return <>
        {charData.map((item, index) => {
            return <FilmChar dataSource={item}
                imageSource={"https://starwars-visualguide.com/assets/img/characters/" + (index + 1) + ".jpg"}
                
            />
        })
        }


    </>
}


export default FilmCharsPage