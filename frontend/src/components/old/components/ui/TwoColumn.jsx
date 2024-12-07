import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import SimpleBar from 'simplebar-react';

const TwoColumn = ({ leftContent, rightContent }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSubmit = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-lg-flex d-md-block border position-relative leftRightBox">
      <div className={`leftPart flex-shrink-0 bg-white border-end ${isOpen ? 'showLeftPart' : ''}`}>
        <span className="d-lg-none d-md-block">
          <Button className="openCloseBtn" color="danger" onClick={handleSubmit}>
            <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`} />
          </Button>
        </span>
        <SimpleBar style={{ height: 'calc(100vh - 200px)' }}>{leftContent}</SimpleBar>
      </div>
      <div className="rightPart">
        {rightContent}
        {isOpen ? <div className="contentOverlay" /> : null}
      </div>
    </div>
  );
};

TwoColumn.propTypes = {
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
};

export default TwoColumn;
