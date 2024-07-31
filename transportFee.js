export default function transportFee(boardingFee) {
    switch(boardingFee) {
      case 'morning':
        return 'R20';
      case 'afternoon':
         return 'R10';
      default:
      return 'free';
    }
  }