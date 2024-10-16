import React  from 'react';

const AfficherCarton = ({ carton }) => {  
  return (
    <table border="1" style={{ borderCollapse: "collapse", textAlign: "center" }}>
      <tbody>
        {carton.map((ligne, indexLigne) => (
          <tr key={indexLigne}>
            {ligne.map((cellule, indexCellule) => (
              <td key={indexCellule} style={{ padding: "10px" }}>
                {cellule}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const GenererNb = (min, max) => {
  const tab = [];
  
  // Inclure min et max
  for (let i = min; i <= max; i++) {
    tab.push(i);
  }
  
  const indexAl = Math.floor(Math.random() * tab.length);
  return tab[indexAl];
};


// Permet de choisir un élement aléatoirement dans un set
const elemAlSet = (set) => {
  const arrayFromSet = Array.from(set);
  if (arrayFromSet.length === 0) {
      return null; 
  }
  const randomIndex = Math.floor(Math.random() * arrayFromSet.length);
  const randomElement = arrayFromSet[randomIndex];
  return randomElement;
};

const GenererCarton = () => {
  const carton = Array.from({ length: 3 }, () => Array(9).fill(null));
  const nbElemCol = Array(9).fill(0); // Nombre d'éléments dans chaque colonne
  const elemCol = Array.from({ length: 9 }, () => new Set()); // On stocke les éléments par colonne
  const caseRempli = Array.from({ length: 3 }, () => new Set());
  const coloneSansEl = new Set([0,1, 2, 3, 4, 5,6,7,8]); // les colonnes sans élements
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      let index;
      const randomIndex = elemAlSet(coloneSansEl)

      // On choisit la colonne parmit les colonnes vide
      if (randomIndex != null) {
        index = randomIndex
        coloneSansEl.delete(randomIndex)
      }
      //Sinon on cherche un index valide ou une colonne qui a moins de 2 éléments
      else {
        do {
          index = Math.floor(Math.random() * 9);
       } while (caseRempli[i].has(index) || nbElemCol[index] >=2 );
      }
      

      caseRempli[i].add(index);
      const min = index === 0 ? 1 : index * 10;
      const max = index === 8 ? 90 : (index + 1) * 10 - 1;
      let nombreAleatoire;
      do{
        nombreAleatoire = GenererNb(min,max)
      }while(elemCol[index].has(nombreAleatoire))

      nbElemCol[index]++;
      elemCol[index].add(nombreAleatoire);
      carton[i][index] = nombreAleatoire;
    }
  }

  return carton;
};


 

export default function Carton() {
  const carton = GenererCarton();
  return <AfficherCarton carton={carton} />;
}



