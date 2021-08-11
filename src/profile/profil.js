import PropTypes from "prop-types";
function Profil(props){
    const handleName=()=>{alert(props.personne.fullName)}
    return (
     <tr>
     
     
    
    <td>{props.personne.fullName}</td>
    <td>{props.personne.bio}</td>
    <td>{props.personne.profession}</td>
    <td><img src = {props.personne.img} onClick={handleName}/></td>
    
      </tr>
        )
        
    }
    Profil.propTypes = {
      personne: { fullName: PropTypes.string,
       bio: PropTypes.string,
       profession: PropTypes.string
      }
     
     };
     Profil.defaultProps = {
       personne: {fullName: 'AMRI',
       bio: 'INF',
       profession: 'INFORMATICIEN'}
     }
    
    export default Profil;