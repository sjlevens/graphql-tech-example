const getNumericDiscount = discount => {
  try {
    return parseInt(discount.split('%')[0])
  } catch (err) {
    console.error('Bad discount string')
    return 50
  }
}

export default getNumericDiscount
