const transcription = (dna) => {
  // code here
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "G":
        rna += "C";
        break;
      case "C":
        rna += "G";
        break;
      case "T":
        rna += "A";
        break;
      case "A":
        rna += "U";
        break;
    }
  }
  return rna;
};
