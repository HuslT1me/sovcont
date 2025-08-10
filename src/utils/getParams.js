import getAttrNameFromSelector from './getAttrNameFromSelector';

const getParams = (element, dataAttrSelector) => {
  if (element.getAttribute(getAttrNameFromSelector(dataAttrSelector))) {
    return JSON.parse(element.getAttribute(getAttrNameFromSelector(dataAttrSelector)));
  } else {
    return null;
  }
};

export default getParams;
