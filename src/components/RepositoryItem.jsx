export function RepositoryItem(props){
  //name , description and html_url is the names of github objects api
  return (
    <li>
      <strong>{props.repository.name}</strong> 
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>
        Acessar repositório
      </a>
      
    </li>
  );
}