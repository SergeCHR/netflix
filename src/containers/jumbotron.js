import { Jumbotron } from '../components/jumbotron';
import jumboData from '../fixtures/jumbo.json'

export const JumbotronContainer = () => {
  return (
    <div className="App">
      <Jumbotron.Container>
        {jumboData.map((item)=> <Jumbotron key={item.id} direction = {item.direction} >
          <Jumbotron.Pane>ksjd;fnkajsdjkasdf
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>
          <Jumbotron.Image src={item.image} alt={item.alt}/>
        </Jumbotron>)}
      </Jumbotron.Container>
    </div>
  );
}

