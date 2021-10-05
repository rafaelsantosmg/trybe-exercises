const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 450,
  strength: 100,
  damage: undefined,
};

const damageDragon = () => Math.round(Math.random() * (dragon.strength - 15) + 15);

const damageWarrior = () => Math.round(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);

const damageMage = () => {
  return mage.mana >= 15 ? {
    damage: Math.round(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence),
    mana: 15,
  } : 'Não possui mana suficiente';
};

const battleMembers = { mage, warrior, dragon };

const gameActions = {
  // Crie as HOFs neste objeto.
  turnWarrior: (callBack) => {
    if (mage.healthPoints <= 0) return mage.healthPoints = 0;
    if (warrior.healthPoints <= 0) return warrior.healthPoints = 0;
    if (dragon.damage > 0) {
      const damage = callBack();
      dragon.healthPoints -= damage;
      warrior.damage = damage;
    }
  },
  turnMage: (callBack) => {
    if (mage.healthPoints <= 0) return mage.healthPoints = 0;
    if (warrior.healthPoints <= 0) return warrior.healthPoints = 0;
    if (dragon.healthPoints > 0) {
      const damage = callBack();
      dragon.healthPoints -= damage.damage;
      mage.damage = damage;
      mage.mana -= damage.mana;
    }
  },
  turnDragon: (callBack) => {
    if (mage.healthPoints <= 0) return mage.healthPoints = 0;
    if (warrior.healthPoints <= 0) return warrior.healthPoints = 0;
    if (mage.healthPoints || warrior.healthPoints > 0) {
      const damage = callBack();
      mage.healthPoints -= damage;
      warrior.healthPoints -= damage;
      dragon.damage = damage;
    } else {
      console.log('Perdeu!!')
    }
  },
  battleMembers: () => {
    if (dragon.healthPoints <= 0) {
      dragon.healthPoints = 0;
      return (console.table(battleMembers), console.log('Venceu!'));
    }
  },
};

for (let index = 0; index <= 3; index += 1) {
  if (dragon.healthPoints > 0) {
    gameActions.turnWarrior(damageWarrior);
    gameActions.turnMage(damageMage);
    gameActions.turnDragon(damageDragon);
    gameActions.battleMembers();
  };
};
