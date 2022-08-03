import React, { useState } from 'react';
import type { FC } from 'react';
import EarthGlobe from 'react-globe.gl';
import {
    datasetBuild
} from './helpers/globe-helpers';
import {
    Container,
    CloseButton,
    ModifyButton,
    ModalHeaderGlobe,
} from './styles';

interface Props {
    setIsShowingGlobe?: any;
    listOfCities?: any;
  }

const Globe: FC<Props> = ({
    setIsShowingGlobe,
    listOfCities,
}) => {
    const [markers, setMarkers] = useState<any>([]);

    const handleClickShowCities = () => (
        setMarkers(datasetBuild(listOfCities))
    );

    console.log('markers', markers);
    
        
  const getTooltip = (d: any) => `
  <div style="text-align: center">
    <div><b>${d.title}</b></div>
    <div>${d.content}</div>
  </div>
`;

    return (
    <Container>
        <div>
        <ModalHeaderGlobe>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <CloseButton onClick={() => setIsShowingGlobe(false)} >X</CloseButton>
                <ModifyButton onClick={() => handleClickShowCities()}>Show cities</ModifyButton>
            </div>
                <EarthGlobe
                    globeImageUrl={'https://unpkg.com/three-globe@2.18.5/example/img/earth-blue-marble.jpg'}
                    backgroundImageUrl={'https://cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png'}
                    width={550}
                    height={550}
                    pointsData={markers}
                    pointRadius={0.30}
                    pointLat={(d: any) => d.lat}
                    pointLng={(d: any) => d.lon}
                    pointColor={(d: any) => d.color}
                    pointAltitude={(d: any) => d.value}
                    pointLabel={getTooltip}
                    />
            </ModalHeaderGlobe>
        </div>
    </Container>
    );
}

export default Globe;