import React from 'react';
import PropTypes from 'prop-types';
import iconSVG from '../../../icons/speakerdeck.svg';
import { Icon } from '@plone/volto/components';
import './Style.less';

const SpeakerdeckWrapper = ({ ratio, html, size }) => {
  const style = { aspectRatio: ratio };
  return (
    <div
      className={`speakerdeck-wrapper block-${size}`}
      style={style}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

const SpeakerdeckView = (props) => {
  const { isEditMode, speakerdeckOembed, align, size, className } = props;
  return speakerdeckOembed ? (
    <div className={`block speakerdeck ${className} align-${align}`}>
      {isEditMode && <div className={'overlay'}> </div>}
      <SpeakerdeckWrapper size={size} {...speakerdeckOembed} />
    </div>
  ) : (
    <div className={`block speakerdeck ${className} align-full`}>
      <div className={'block-placeholder'}>
        <Icon
          name={iconSVG}
          className="blockIcon"
          size={'50px'}
          color={'#009287'}
        />
      </div>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
SpeakerdeckView.propTypes = {
  speakerdeckOembed: PropTypes.object,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
SpeakerdeckView.defaultProps = {
  align: 'center',
  size: 'l',
};
export default SpeakerdeckView;
