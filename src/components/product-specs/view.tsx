import React from 'react';
import { ICharacteristics } from '@/types/products-types';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

interface IProps {
  specs: ICharacteristics;
}

export const ProductSpecs: React.FC<IProps> = (props) => {
  const {
    connection,
    screen,
    cpu,
    memory,
    camera,
    os,
    dimensions,
    // battery,
    // frame,
    // interfacesAndConnections,
    // wirelessTechnologies,
  } = props.specs;

  const t = useTranslations('Product');

  return (
    <div className={styles.productSpecs}>
      <h3 className={styles.productSpecsTitle}>
        {t('specs')}
      </h3>
      {connection && <table>
        <thead>
          {connection.numOfSimCards && <tr>
            <td className={styles.productSpecsHead}>{t('connection')}</td>
          </tr>}
        </thead>
        <tbody className={styles.productSpecsBody}>
          {connection.numOfSimCards && <tr>
            <td className={styles.productSpecsCell}>
              {t('numOfSims')}
            </td>
            <td className={styles.productSpecsCell}>
              {connection.numOfSimCards}
            </td>
          </tr>}
          {Boolean(connection.simCardsFormat?.length) && <tr>
            <td className={styles.productSpecsCell}>
              {t('simFormat')}
            </td>
            <td className={styles.productSpecsCell}>
              {connection?.simCardsFormat?.map((el: string) => el + ' ')}
            </td>
          </tr>}
          {Boolean(connection.communicationStandards?.length) && <tr>
            <td className={styles.productSpecsCell}>
              {t('standarts')}
            </td>
            <td className={styles.productSpecsCell}>
              {connection?.communicationStandards?.map(
                (el: string) => el + ' '
              )}
            </td>
          </tr>}
        </tbody>
      </table>}

      {screen && <table>
        <thead>
          <tr>
            <td className={styles.productSpecsHead}>{t('screen')}</td>
          </tr>
        </thead>
        <tbody className={styles.productSpecsBody}>
          {screen.diagonal && <tr>
            <td className={styles.productSpecsCell}>
              {t('diagonal')}
            </td>
            <td className={styles.productSpecsCell}>
              {screen.diagonal}
            </td>
          </tr>}
          {screen.resolution && <tr>
            <td className={styles.productSpecsCell}>
              {t('resolution')}
            </td>
            <td className={styles.productSpecsCell}>
              {screen.resolution}
            </td>
          </tr>}
          {screen.refreshRate && <tr>
            <td className={styles.productSpecsCell}>
              {t('refreshRate')}
            </td>
            <td className={styles.productSpecsCell}>
              {screen.refreshRate}
            </td>
          </tr>}
          {screen.pixelDensity && <tr>
            <td className={styles.productSpecsCell}>
              {t('pixelDensity')}
            </td>
            <td className={styles.productSpecsCell}>
              {screen.pixelDensity} ppi
            </td>
          </tr>}
          {screen.type && <tr>
            <td className={styles.productSpecsCell}>
              {t('screenType')}
            </td>
            <td className={styles.productSpecsCell}>
              {screen.type}
            </td>
          </tr>}
        </tbody>
      </table>}

      {cpu && <table>
        <thead>
          <tr>
            <td className={styles.productSpecsHead}>{t('processor')}</td>
          </tr>
        </thead>
        <tbody className={styles.productSpecsBody}>
          {cpu.name && <tr>
            <td className={styles.productSpecsCell}>
              {t('processor')}
            </td>
            <td className={styles.productSpecsCell}>
              {cpu.name}
            </td>
          </tr>}
          {cpu.coresNum && <tr>
            <td className={styles.productSpecsCell}>
              {t('numOfCores')}
            </td>
            <td className={styles.productSpecsCell}>
              {cpu.coresNum}
            </td>
          </tr>}
          {cpu.gpu && <tr>
            <td className={styles.productSpecsCell}>
              {t('gpu')}
            </td>
            <td className={styles.productSpecsCell}>
              {cpu.gpu}
            </td>
          </tr>}
          {cpu.videoMemory && <tr>
            <td className={styles.productSpecsCell}>
              {t('videoMemory')}
            </td>
            <td className={styles.productSpecsCell}>
              {cpu.videoMemory}
            </td>
          </tr>}
        </tbody>
      </table>}

      {memory && <table>
        <thead>
          <tr>
            <td className={styles.productSpecsHead}>{t('memory')}</td>
          </tr>
        </thead>
        <tbody className={styles.productSpecsBody}>
          {memory.internalMemory && <tr>
            <td className={styles.productSpecsCell}>
              {t('internalMemory')}
            </td>
            <td className={styles.productSpecsCell}>
              {memory.internalMemory}
            </td>
          </tr>}
          {memory.ram && <tr>
            <td className={styles.productSpecsCell}>
              {t('ram')}
            </td>
            <td className={styles.productSpecsCell}>
              {memory.ram}
            </td>
          </tr>}
          {memory.type && <tr>
            <td className={styles.productSpecsCell}>
              {t('typeMemory')}
            </td>
            <td className={styles.productSpecsCell}>
              {memory.type}
            </td>
          </tr>}
        </tbody>
      </table>}

      {camera && <table>
        <thead>
          <tr>
            <td className={styles.productSpecsHead}>{t('camera')}</td>
          </tr>
        </thead>
        <tbody className={styles.productSpecsBody}>
          {camera.camera && <tr>
            <td className={styles.productSpecsCell}>
              {t('camera')}
            </td>
            <td className={styles.productSpecsCell}>
              {camera.camera}
            </td>
          </tr>}
          {camera.videoRecording && <tr>
            <td className={styles.productSpecsCell}>
              {t('video')}
            </td>
            <td className={styles.productSpecsCell}>
              {camera.videoRecording}
            </td>
          </tr>}
          {camera.frontCamera && <tr>
            <td className={styles.productSpecsCell}>
              {t('frontCamera')}
            </td>
            <td className={styles.productSpecsCell}>
              {camera.frontCamera}
            </td>
          </tr>}
          {camera.opticalStabilization && <tr>
            <td className={styles.productSpecsCell}>
              {t('opticalStab')}
            </td>
            <td className={styles.productSpecsCell}>
              {t(camera.opticalStabilization)}
            </td>
          </tr>}
        </tbody>
      </table>}

      {os && <table>
        <thead>
          <tr>
            <td className={styles.productSpecsHead}>{t('os')}</td>
          </tr>
        </thead>
        <tbody className={styles.productSpecsBody}>
          <tr>
            <td className={styles.productSpecsCell}>
              {t('os')}
            </td>
            <td className={styles.productSpecsCell}>
              {os}
            </td>
          </tr>
        </tbody>
      </table>}

      {dimensions && <table>
        <thead>
          <tr>
            <td className={styles.productSpecsHead}>{t('dimensions')}</td>
          </tr>
        </thead>
        <tbody className={styles.productSpecsBody}>
          {dimensions.dimensions && <tr>
            <td className={styles.productSpecsCell}>
              {t('dimensions')}
            </td>
            <td className={styles.productSpecsCell}>
              {dimensions.dimensions}
            </td>
          </tr>}
          {dimensions.weight && <tr>
            <td className={styles.productSpecsCell}>
              {t('weight')}
            </td>
            <td className={styles.productSpecsCell}>
              {dimensions.weight}
            </td>
          </tr>}
        </tbody>
      </table>}
    </div>
  );
};
