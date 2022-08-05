import { useEffect, useState } from 'react';
import type { FC } from 'react';
import EarthGlobe from 'react-globe.gl';
import {
    datasetBuild
} from './helpers/helpers';
import {
    Container,
    CloseButton,
    ModalHeaderGlobe,
} from './styles';
interface Props {
    setIsShowingGlobe: React.Dispatch<React.SetStateAction<boolean | null>>;
    listOfCities: [{
        id: number;
        content: string; 
        lat: string;
        long: string;
        title: string;
        image_url: string;
        created_at: string;
        updated_at: string;
      }];
  }

const Globe: FC<Props> = ({
    setIsShowingGlobe,
    listOfCities,
}) => {
    const [markers, setMarkers] = useState<{
        id: string | number;
        content: string;
        color: string;
        lat: string | number;
        lon: string | number;
        title: string;
        value: number;
    }[]>([{
        id: 0,
        content: '',
        color: '',
        lat: 0,
        lon: 0,
        title: '',
        value: 0,
    }]);
    
    useEffect(() => {
        setMarkers(datasetBuild(listOfCities))
    }, [listOfCities]);
 
        
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
            <div style={{display: 'flex', justifyContent: 'end'}}>
                <CloseButton onClick={() => setIsShowingGlobe(false)} >X</CloseButton>
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
