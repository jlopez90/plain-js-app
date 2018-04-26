/**
 * Get the closest element 
 * @param {*} elem - event target start from it
 * @param {*} topElement - where to stop looking for
 * @param {*} targetId - id of the target element
 * @param {*} targetMatch - Targetting conditions length
 * @return {object} - DOM Element
 */
const getClosestById = (elem, topElement, targetId, targetMatch) => {
  for ( ; elem && elem !== topElement && elem !== document; elem = elem.parentNode ) {
    if (elem.id.substring(0, targetMatch) === targetId) return elem;
  }

  return null;
}

export default getClosestById;