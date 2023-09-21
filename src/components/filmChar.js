import './filmChar.css'
const FilmChar = (props) => {

    const showDetails = () => {
        alert('detaylar' + props.dataSource.name + " Doğum Yılı:" + props.dataSource.birth_year)
        if (props.onCalisti !== undefined)
            props.onCalisti()
    }
    return <table  >
        <tbody>
        <tr>
            <td><img src={props.imageSource} style={{width:'250px'}} /> </td>
        </tr>
        <tr>
            <td>
                <center>
                    <input type="button" value={props.dataSource.name} 
                    className={'filmChars'}
                    onClick={showDetails}></input>
                </center>

            </td>
        </tr>
        </tbody>
    </table>
}
export default FilmChar