import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>My News Feed</h1>
      <Feed>
        <Story 
          title="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming" 
          link="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/" 
          description="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year." 
          creator="Steve Hanley"          
        />
        <Story 
          title="Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60 billones de dólares" 
          link="https://www.milenio.com/negocios/elon-musk-deuda-eu-60-billones-dolares" 
          description="El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la deuda de Estados Unidos en tres veces mayor a su economía. ?La verdadera deuda nacional, incluidos los derechos no financiados, es de al menos 60 billones de dólares, aproximadamente tres veces el tamaño de toda la economía de los Estados Unidos. Algo tiene que ceder.?, señaló el multimillonario a través de su cuenta de Twitter.True national debt, including unfunded entitlements, is at least $60 trillion ? roughly three times the size of the entire US economy. Something has got to give.? Elon Musk (@elonmusk) February 11, 2022 Esto como parte de los comentarios en respuesta a una publicación del medio satírico The Babylon Bee, en donde señaló que supuestamente el presidente estadunidense, Joe Biden, planeaba pagar la deuda pública apostando ?doble o nada? en el equipo de futbol de los Cincinnati Bengals en el Super Bowl. Según el Departamento del Tesoro de Estados Unidos el total de la deuda de dicho país ya supera los 30 billones de dólares, dio a conocer el martes pasado.El endeudamiento del gobierno se aceleró durante la pandemia de covid-19, como parte del gasto del gobierno estadunidense para amortiguar el golpe económico de la crisis. La deuda pública se ha disparado en alrededor 7 billones desde finales de 2019.m{1861862}RM?" 
          creator="Milenio Digital"
          image_url="http://www.milenio.com/uploads/media/2022/02/13/elon-musk-estimo-deuda-unidos.jpeg"
        />
        <Story 
          title="Tesla recall for heater and defroster systems issued by Transport Canada" 
          link="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/" 
          description="Transport Canada issued a recall for the Tesla Model 3, Model Y, and Model S on February 3, 2022, the agency told Teslarati recently. The recall was issued after the agency discovered an issue with the heat system in certain Tesla vehicles.  Transport Canada reported that a little over 2,084 Tesla vehicles were affected by the recall. The recall […] The post Tesla recall for heater and defroster systems issued by Transport Canada appeared first on TESLARATI." 
          creator="Maria Merano"          
        />
        <Story 
          title="China representó la mitad de las ventas globales de coches eléctricos en 2021" 
          link="https://www.infobae.com/america/agencias/2022/02/14/china-represento-la-mitad-de-las-ventas-globales-de-coches-electricos-en-2021-2/" 
          description={"Shanghái (China), 14 feb La mitad de las ventas de vehículos eléctricos registradas en 2021 a nivel mundial se efectuaron en China, según datos publicados hoy por la consultora Canalys. En total, según las estimaciones de Canalys, se vendieron 6,5 millones de este tipo de vehículos -incluyendo los totalmente eléctricos y los híbridos enchufables- en todo el mundo durante el año pasado, un 109 % más que en 2020, alcanzando ya un 9 % de las ventas totales de vehículos a nivel global. De la citada cantidad, más de 3,2 millones fueron en China, donde los eléctricos ya representan un 15 % de las ventas de vehículos, doblando así el porcentaje del año anterior. \"Se lanzan muchos nuevos modelos cada mes en cada uno de los segmentos importantes del mercado, desde pequeños urbanos económicos (...) hasta sedanes 'premium' y SUV\", indicó el analista de Canalys Jason Low, que asegura que \"todavía hay grandes oportunidades de crecimiento en 2022 y más adelante\". En el caso de Europa, la cifra nominal es menor (2,3 millones) pero la porcentual supera a China, con un 19 % de eléctricos sobre el total de coches vendidos en 2021. En Estados Unidos, la tasa de adopción es mucho menor, con 535.000 unidades, que representaron el 4 % de las ventas de automóviles del año. A nivel mundial, Tesla repite como marca líder con un 14 % de la cuota de mercado, seguida del Grupo Volkswagen (12 %) y las chinas SAIC (11 %) y BYD (9 %). En el caso de SAIC, buena parte del éxito se debe atribuir a su modelo 'low-cost' Wuling Hongguang Mini EV, que parte de en torno a unos 3.900 euros (unos 4.500 dólares), lo que lo coronó como modelo más vendido en la China continental en 2021."} 
          creator="Newsroom Infobae"         
        />
      </Feed>
    </div>
  );
}

function Feed(props) {
  return (
    <div className="feed">
      {props.children}
    </div>
  );
}

function Story(props) {
  const img_placeholder = "https://placehold.co/600x400?text=News+Story";
  const desc_words = props.description.split(' ');
  const description = desc_words.length > 50 ? 
                      desc_words.slice(0,50).join(' ') + ' ...' 
                      : props.description;
  return (
    <div className="story">
      <div className="story_header">
        <div className="story_image">
          <img src={props.image_url || img_placeholder} />
        </div>
        <h1>
          <a href={props.link} target="_blank">
            {props.title}
          </a>
          <span className="story_creator">By: {props.creator}</span>
        </h1>
      </div>
      <p className="description">{description}</p>
    </div>
  );
}
