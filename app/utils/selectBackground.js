export default function selectBackground(coaId) {
  let coa = "";

  switch (coaId) {
    case 45:
      coa = "https://cdn.intra.42.fr/coalition/cover/45/federation_background.jpg";
      break;
    case 46:
      coa = "https://cdn.intra.42.fr/coalition/cover/46/alliance_background.jpg";
      break;
    case 47:
      coa = "https://cdn.intra.42.fr/coalition/cover/47/order_background.jpg";
      break;
    case 48:
      coa = "https://cdn.intra.42.fr/coalition/cover/48/assembly_background.jpg";
      break;
    default:
      coa = "https://42.fr/wp-content/uploads/2021/07/Background-RM-2000x1132.jpg";
      break;
  }
  return coa;
}
