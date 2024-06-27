enum BloodType {
  O,
  A,
  B,
  AB
}

const check_blood_types = (donor: BloodType, recipient: BloodType) => {
  switch (donor) {
    case BloodType.O:
      return true;
    case BloodType.AB:
      return recipient == BloodType.AB;
    case BloodType.A:
      return recipient == BloodType.A || recipient == BloodType.AB;
    case BloodType.B:
    return recipient == BloodType.B || recipient == BloodType.AB; 
  }
}

const classes = [BloodType.O, BloodType.A, BloodType.B, BloodType.AB];

for (var i = 0; i < 4; i++) {
  const john = classes[i];
  for (var j = 0; j < 4; j++) {
    const lauren = classes[j];
    for (var k = 0; k < 4; k++) {
      const katia = classes[k];
      for (var l = 0; l < 4; l++) {
        const max = classes[l];
        if (check_blood_types(john, katia) && !check_blood_types(katia, john) && !check_blood_types(john, lauren)) {
          if (check_blood_types(max, max) && check_blood_types(max, john) && check_blood_types(max, lauren) && check_blood_types(max, katia)) {
            console.log(`John ${BloodType[john]} Lauren ${BloodType[lauren]} Katia ${BloodType[katia]} Max ${BloodType[max]}`);
          }
        }
      }
    }
  }
}

const donors = [BloodType.A, BloodType.B, BloodType.O]
const recipients = [BloodType.A, BloodType.AB, BloodType.B]

let sum = 0;
let total = 0;

for (var i = 0; i < 3; i++) {
  const d1 = donors[i];
  for (var j = 0; j < 3; j++) {
    const r1 = recipients[j];
    for (var k = 0; k < 3; k++) {
      const d2 = donors[k];
      for (var l = 0; l < 3; l++) {
        const r2 = recipients[l];
        for (var m = 0; m < 3; m++) {
          const d3 = donors[m];
          for (var n = 0; n < 3; n++) {
            const r3 = recipients[n];

            if (d1 !== d2 && d2 !== d3 && d1 !== d3 && r1 !== r2 && r2 !== r3 && r1 !== r3) {
              total += 1;
              if (check_blood_types(d1, r1) && check_blood_types(d2, r2) && check_blood_types(d3, r3)) {
                sum += 1;
              }
            }
          }
        }
      }
    }
  }
}

console.log(sum / total);